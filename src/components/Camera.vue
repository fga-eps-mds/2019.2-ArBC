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
      />
    </a-marker>

    <a-entity camera></a-entity>
  </a-scene>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import LettersModule from '@/store/modules/letters';
  import { getModule } from 'vuex-module-decorators';

  @Component({})
  export default class App extends Vue {
    private lettersModule = getModule(LettersModule, this.$store);
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
