<template>
  <a-scene embedded arjs='debugUIEnabled: false; trackingMethod: best;'>
    <a-marker
      v-for="letter in alphabet"
      :key="letter"
      type='pattern'
      :url="patternUrl(letter)"
      @markerFound="markerFound($event,letter)"
      @markerLost="markerLost($event, letter)"
    >
      <a-entity
        v-if="iscreated"
        geometry="primitive: plane;"
        position="0 0 0"
        rotation="-90 0 0"
        :material="gifURL(letter)">
      </a-entity>
    </a-marker>

    <a-marker
      type='pattern'
      :url="patternUrl('R1')"
      @markerFound="markerFound($event, 'R')"
      @markerLost="markerLost($event, 'R')"
    >
      <a-entity
        v-if="iscreated"
        geometry="primitive: plane;"
        position="0 0 0"
        rotation="-90 0 0"
        :material="gifURL('R')">
      </a-entity>
    </a-marker>

    <a-entity camera></a-entity>
  </a-scene>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import LettersModule from '@/store/modules/letters';
  import { getModule } from 'vuex-module-decorators';

  import MarkerStatsClass from '../services/markersStats';

  @Component({})
  export default class App extends Vue {
    private markers = new Set();
    private processHandler: any;
    private alphabet: string[] = [];
    private isReading: boolean = false;
    private iscreated: boolean = false;
    private lettersModule = getModule(LettersModule, this.$store);
    private markersStats: MarkerStatsClass = new MarkerStatsClass();
    private mediaBaseUrl: string = 'https://raw.githubusercontent.com/fga-eps-mds/2019.2-ArBC/test_patterns';

    public async created() {
      await this.lettersModule.getLetters();

      this.alphabet = Object.keys(this.lettersModule.Letters);

      this.iscreated = true;
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
        this.processHandler = setInterval(this.processLetters, 16);
      }
    }

    public markerLost(event: any, letter: string) {
      event.target.key = letter;

      this.markers.delete(event.target);

      if (this.markers.size === 1) {
        clearInterval(this.processHandler);
        this.isReading = false;
      }
    }

    private orderLettersHorizontally(processedLetters: object[]) {
      processedLetters.sort((a: any, b: any) => {
        return (a.position.x >= b.position.x) ? 1 : -1;
      });
    }

    private createMarkerFromItem(item: any) {
      return {
        key: item.key,
        position: item.object3D.position,
        quaternion: item.object3D.quaternion,
        scale: item.object3D.scale,
      };
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

    private setWord(processedLetters: object[]) {
      if (processedLetters.length > 0) {
        let word = '';

        this.orderLettersHorizontally(processedLetters);

        processedLetters.forEach((letter: any) => {
          word = word + `${letter.key}`;
        });
      }
    }

    private addProcessedLetters(params: any) {
      let item: any;
      const { deviation, processedLetters } = params;
      const correctionFactor = 0.06 * this.markers.size;

      for (item of this.markers.values()) {
        if (Math.abs(deviation) <= correctionFactor) {
          processedLetters.push(this.createMarkerFromItem(item));
        }
      }
    }

    private processLetters() {
      let deviation: number;
      const processedLetters: object[] = [];

      this.markersStats.clearValues();

      this.addPositions();

      deviation = this.markersStats.deviation;

      this.addProcessedLetters({ deviation, processedLetters });

      this.setWord(processedLetters);
    }
  }
</script>
