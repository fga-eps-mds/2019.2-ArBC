<template>
  <a-scene embedded arjs='debugUIEnabled: false; trackingMethod: best;'>
    <a-marker
      v-for="letter in alphabet"
      :key="letter"
      type='pattern'
      :url="patternUrl(letter)"
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
    <a-marker
      type='pattern'
      url="https://raw.githubusercontent.com/fga-eps-mds/2019.2-ArBC/develop/src/assets/patterns/pattern-Joenio.patt"
    >
      <a-entity
        geometry="primitive: plane;"
        position="0 0 0"
        rotation="-90 0 0"
        material="shader:gif; src:url(https://raw.githubusercontent.com/fga-eps-mds/2019.2-ArBC/develop/src/assets/easter_eggs/Joenio.gif);"
      >
      </a-entity>
    </a-marker>
    <a-marker
      type='pattern'
      url="https://raw.githubusercontent.com/fga-eps-mds/2019.2-ArBC/develop/src/assets/patterns/pattern-Carla.patt"
    >
      <a-entity
        geometry="primitive: plane;"
        position="0 0 0"
        rotation="-90 0 0"
        material="shader:gif;src:url(https://raw.githubusercontent.com/fga-eps-mds/2019.2-ArBC/develop/src/assets/easter_eggs/Carla.gif);"
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
  import WordsModule from '@/store/modules/words';
  import { getModule } from 'vuex-module-decorators';

  @Component({})
  export default class App extends Vue {
    private lettersModule = getModule(LettersModule, this.$store);
    private wordsModule = getModule(WordsModule, this.$store);
    private alphabet: string[] = [];
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
  }
</script>
