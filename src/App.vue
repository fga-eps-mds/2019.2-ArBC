<template>
  <div v-if="iscreated">
    <a-scene embedded arjs='debugUIEnabled: false; trackingMethod: best;'>
      <a-marker
        v-for="letter in alphabet"
        :key="letter"
        type='pattern'
        :url="patternUrl(letter)"
      >
        <a-entity
          geometry="primitive: plane;"
          position="0 0 0"
          rotation="-90 0 0"
          :material="gifURL(letter)"
        >
        </a-entity>
      </a-marker>
      <a-marker
        type='pattern'
        url="https://raw.githubusercontent.com/fga-eps-mds/2019.2-ArBC/easter-eggs/src/assets/patterns/pattern-Joenio.patt"
      >
        <a-entity
          geometry="primitive: plane;"
          position="0 0 0"
          rotation="-90 0 0"
          material="shader:gif; src:url(https://raw.githubusercontent.com/fga-eps-mds/2019.2-ArBC/easter-eggs/src/assets/easter_eggs/Joenio.gif);"
        >
        </a-entity>
      </a-marker>
    <a-marker
        type='pattern'
        url="https://raw.githubusercontent.com/fga-eps-mds/2019.2-ArBC/easter-eggs/src/assets/patterns/pattern-Carla.patt"
      >
        <a-entity
          geometry="primitive: plane;"
          position="0 0 0"
          rotation="-90 0 0"
          material="shader:gif;src:url(https://raw.githubusercontent.com/fga-eps-mds/2019.2-ArBC/easter-eggs/src/assets/easter_eggs/Carla.gif);"
        >
        </a-entity>
      </a-marker>

      <a-entity camera></a-entity>
    </a-scene>
  </div>
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
import {getModule} from 'vuex-module-decorators';

@Component({})
export default class App extends Vue {
  private lettersModule = getModule(LettersModule, this.$store);
  private alphabet: string[] = [];
  private mediaBaseUrl: string = 'https://raw.githubusercontent.com/fga-eps-mds/2019.2-ArBC/develop';
  private iscreated: boolean = false;

  public mounted() {
    this.alphabet = this.alphabetArray();
  }
  public async created() {
    await this.lettersModule.fetchLetters();
    this.iscreated = true;
  }
  public alphabetArray() {
    const a = 'A';
    const z = 'Z';
    const letters = [];
    const j = z.charCodeAt(0);
    let i = a.charCodeAt(0);
    for (; i <= j; ++i) {
      letters.push(String.fromCharCode(i));
    }
    return letters;
  }
  public patternUrl(letter: string) {
    const url = `${this.mediaBaseUrl}/src/assets/patterns/pattern-${letter}.patt`;

    return url;
  }
  public gifURL(letter: string) {
    const url = new URL(this.lettersModule.Letters[letter]);
    
    return `shader:gif; src:url(${url.href});`;
  }
}
</script>
