'<template>
  <a-scene embedded arjs='debugUIEnabled: false; trackingMethod: best;'>
    <a-marker
      v-for="letter in alphabet"
      :key="letter"
      type='pattern'
      :url="patternUrl(letter)">
        <a-entity
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
import { Getter } from 'vuex-class';

@Component({})
export default class App extends Vue {
  private alphabet: string[] = [];
  private mediaBaseUrl: string = 'https://raw.githubusercontent.com/fga-eps-mds/2019.2-ArBC/develop';
  @Getter('letters', { namespace: 'letter' }) letters: any;

  public mounted() {
    this.alphabet = this.alphabetArray();
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
  public imageUrl(letter: string) {
    const url = `${this.mediaBaseUrl}/AR_markers/marker_images/marker-${letter}.png`;

    return url;
  }
  public gifURL(letter: string) {
    const url = new URL(this.letters[letter].toString());

    return `shader:gif; src:url(${url.href});`
  }
}
</script>
