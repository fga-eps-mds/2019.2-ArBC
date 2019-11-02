<template>
  <a-scene vr-mode-ui="enabled: false" embedded arjs='debugUIEnabled: false; trackingMethod: best;'>
    <a-entity
      ref="wordGif"
      geometry="primitive: plane;"
      rotation="0 0 0"
      material="shader:gif;"
      visible="false">
    </a-entity>

    <a-marker
      v-for="letter in alphabet"
      :key="letter"
      type='pattern'
      :url="patternUrl(letter)"
      @markerFound="markerFound($event, letter)"
      @markerLost="markerLost($event, letter)"
    >
      <a-entity
        v-if="isCreated"
        ref="letterGif"
        geometry="primitive: plane;"
        position="0 0 0"
        rotation="-90 0 0"
        :material="gifURL(letter)">
      </a-entity>
    </a-marker>

    <a-entity camera></a-entity>
  </a-scene>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import LettersModule from '@/store/modules/letters';
  import WordsModule from '@/store/modules/words';
  import { getModule } from 'vuex-module-decorators';

  import MarkerStatsClass from '@/services/markersStats';
  import WordsStats from '@/services/wordsStats';
  import { Image, Marker } from '@/store/models';

  @Component({})
  export default class App extends Vue {

    public $refs!: {
      wordGif: any,
      letterGif: any,
    };

    private markers = new Set();
    private processHandler: any;
    private alphabet: string[] = [];
    private isReading: boolean = false;
    private isCreated: boolean = false;
    private lettersModule = getModule(LettersModule, this.$store);
    private wordsModule = getModule(WordsModule, this.$store);
    private wordLockFlag: boolean = false;
    private markersStats: MarkerStatsClass = new MarkerStatsClass();
    private mediaBaseUrl: string = 'https://raw.githubusercontent.com/fga-eps-mds/2019.2-ArBC/develop';

    public async created() {
      await this.lettersModule.getLetters();
      this.alphabet = Object.keys(this.lettersModule.Letters);

      this.isCreated = true;
    }

    public destroyed() {
      clearInterval(this.processHandler);
    }

    public patternUrl(letter: string) {
      return `${this.mediaBaseUrl}/src/assets/patterns/pattern-${letter}.patt`;
    }

    public gifURL(letter: string) {
      const url = new URL(this.lettersModule.Letters[letter]);

      return `shader:gif; src:url(${url.href});`;
    }

    public markerFound(event: any, letter: string) {
      event.target.key = letter;

      this.markers.add(event.target);

      if (this.markers.size === 2) {
        this.isReading = true;
        setTimeout(() => {
          this.processHandler = setInterval(this.processLetters, 16);
        }, 1000);
      }
    }

    public markerLost(event: any, letter: string) {
      event.target.key = letter;

      this.markers.delete(event.target);
      this.detachWordGif();

      if (this.markers.size === 1) {
        clearInterval(this.processHandler);
        this.isReading = false;
      }
    }

    private orderLettersHorizontally(processedLetters: Marker[]) {
      processedLetters.sort((a: Marker, b: Marker) => {
        return (a.position.x >= b.position.x) ? 1 : -1;
      });
    }

    private createMarkerFromItem(item: any) {
      const marker: Marker = {
        key: item.key,
        position: item.object3D.position,
        quaternion: item.object3D.quaternion,
        scale: item.object3D.scale,
      };
      return marker;
    }

    private addPositions() {
      let item: any;

      for (item of this.markers.values()) {
        this.markersStats.addPosition(item.object3D.position.y + 10);
        /*
        * This '+10' above is because negative positions of 'y' can give
        * wrong standard deviation in the process
        */
      }
    }

    private detachLettersGifs() {
      this.$refs.letterGif.forEach( (letterGif: any) => {
        letterGif.object3D.visible = false;
      } );
    }

    private atachLettersGifs() {
      this.$refs.letterGif.forEach( (letterGif: any) => {
        letterGif.object3D.visible = true;
      } );
    }

    private showWordGif(processedLetters: Marker[], wordGif: Image) {
      this.detachLettersGifs();
      const markerPositioned: Marker = WordsStats.markersMean(processedLetters);
      this.$refs.wordGif.setAttribute('material', `shader:gif; src:url(${wordGif.url});`);
      this.$refs.wordGif.object3D.position.set(
        markerPositioned.position.x,
        markerPositioned.position.y,
        markerPositioned.position.z,
      );

      this.$refs.wordGif.object3D.scale.set(
        markerPositioned.scale.x * 2.5,
        markerPositioned.scale.y * 2.5,
        markerPositioned.scale.z * 2.5,
      );
      this.$refs.wordGif.object3D.visible = true;
      if (!this.$refs.wordGif.isPlaying) {
        this.$refs.wordGif.play();
      }
    }

    private detachWordGif() {
      this.atachLettersGifs();
      this.$refs.wordGif.object3D.visible = false;
      if (this.$refs.wordGif.isPlaying) {
        this.$refs.wordGif.pause();
      }
    }

    private getGifWord(word: string) {
      this.wordLockFlag = true;

      return this.wordsModule.getWord(word);
    }

    private setWord(processedLetters: Marker[]) {
      let word = '';

      this.orderLettersHorizontally(processedLetters);

      processedLetters.forEach((letter: Marker) => {
        word = word + `${letter.key}`;
      });

      return word;
    }

    private addProcessedLetters(deviation: number, processedLetters: Marker[]) {
      let item: any;
      const correctionFactor = 0.09 * this.markers.size;

      for (item of this.markers.values()) {
        if (Math.abs(deviation) <= correctionFactor) {
          processedLetters.push(this.createMarkerFromItem(item));
        }
      }
    }

    private processLetters() {
      let deviation: number;
      const processedLetters: Marker[] = [];

      this.markersStats.clearValues();

      this.addPositions();

      deviation = this.markersStats.deviation;

      this.addProcessedLetters(deviation, processedLetters);

      if (processedLetters.length > 0 && !this.wordLockFlag) {
        this.getGifWord(this.setWord(processedLetters)).then( (response: Image) => {
          this.wordLockFlag = false;
          if (response.isValid) {
            this.showWordGif(processedLetters, response);
          } else {
            this.detachWordGif();
          }
        });
      }
    }
  }
</script>
