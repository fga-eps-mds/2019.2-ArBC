<template>
  <div class="home">

    <md-card>
      <md-card-header>
        <div class="md-title"><strong style="color: rgb(252, 80, 76)">Bem vindo ao ArBC</strong></div>
      </md-card-header>

      <md-card-content>
          <img alt="Arara" src="../assets/arara.svg"/>
      </md-card-content>

      <md-button
        class="md-raised md-accent button-size"
        href="./camera"
      >
        Abrir Câmera
      </md-button>
    </md-card>

  </div>
</template>

<style lang="scss" scoped>
  small {
    display: block;
  }
  .button-size {
      width: 70%!important;
      min-width: unset!important;
  }
  .md-card {
    width: 90%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Home extends Vue {}
</script>
