<template>
  <a-scene embedded arjs='debugUIEnabled: false; trackingMethod: best;'>
    <a-marker
      v-for="letter in alphabet"
      :key="letter"
      type='pattern'
      :url="patternUrl(letter)"
      @markerFound="markerFound($event)"
      @markerLost="markerLost($event)"
    >
      <a-entity
        v-if="iscreated"
        geometry="primitive: plane;"
        position="0 0 0"
        rotation="-90 0 0"
        :material="gifURL(letter)"
      >
      </a-entity>
    </a-marker>

    <a-entity camera></a-entity>
  </a-scene>
</template>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import LettersModule from '@/store/modules/letters';
  import { getModule } from 'vuex-module-decorators';

  @Component({})
  export default class App extends Vue {
    private lettersModule = getModule(LettersModule, this.$store);
    private alphabet: string[] = [];
    private markers = new Set();
    private isReading: boolean = false;
    private mediaBaseUrl: string = 'https://raw.githubusercontent.com/fga-eps-mds/2019.2-ArBC/develop';
    private iscreated: boolean = false;

    public async created() {
      await this.lettersModule.getLetters();

      this.alphabet = Object.keys(this.lettersModule.Letters);

      this.iscreated = true;
    }

    public patternUrl(letter: string) {
      return `${this.mediaBaseUrl}/src/assets/patterns/pattern-${letter}.patt`;
    }

    public gifURL(letter: string) {
      const url = new URL(this.lettersModule.Letters[letter]);

      return `shader:gif; src:url(${url.href});`;
    }

    public markerFound(event: any){
      this.isReading = true;
      this.markers.add(event.target);
    }

    public markerLost(event: any){
      if(this.markers.size == 0){
        this.isReading = false;
      }
      this.markers.delete(event.target);
    }
  }
</script>
