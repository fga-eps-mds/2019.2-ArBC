<template>
  <div class="home">
    <h1>ArBC</h1>

    <md-button
      class="md-raised md-primary"
      target="_blank"
      href="https://jlucassr.github.io/ArBC-Pages/"
    >
      Sobre
    </md-button>

    <md-button
      class="md-raised md-accent"
      @click="$router.push('/camera')"
      label="asdasd"
    >
      Camera
    </md-button>

    <img alt="Arara" src="../assets/arara.svg"/>
  </div>
</template>

<style lang="scss" scoped>
  small {
    display: block;
  }
</style>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Home extends Vue {}
</script>
