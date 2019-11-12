<template>
  <div align="center">
    <tool-bar />

    <img
      alt="Arara"
      width="640" height="410"
      style="margin-top: 10px"
      src="../assets/ArBC-logo.png"
    />

    <div class="cards-container">
      <home-card :$data="cameraCardInfo" class="space-card" />
      <home-card :$data="driveCardInfo" class="space-card" />
      <home-card :$data="wikiCardInfo" class="space-card" />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import ToolBar from '@/components/ToolBar.vue';
  import HomeCard from '@/components/HomeCard.vue';

  Vue.component('tool-bar', ToolBar);
  Vue.component('home-card', HomeCard);

  @Component({
    components: {
      ToolBar,
      HomeCard,
    },
  })
  export default class Home extends Vue {
    private cameraCardInfo: object = {
      icon: 'camera_alt',
      iconColor: '#5fad46',
      targetBlank: false,
      path: '/camera',
      content: 'Para abrir a câmera do projeto, sendo ela a ferramenta para\
        o uso da aplicação na alfabetização de crianças.',
    };
    private driveCardInfo: object = {
      icon: 'cloud_download',
      iconColor: '#448aff',
      targetBlank: true,
      path: 'https://drive.google.com/open?id=1Aa5jXFIh4385wKT36mFFP82zho7BmfBP',
      content: 'Para utilizar a aplicação é necessário os marcadores. Desse modo, \
        disponibilizamos o download por meio do drive. Para baixar basta clicar aqui.',
    };
    private wikiCardInfo: object = {
      icon: 'help',
      iconColor: '#f15a22',
      targetBlank: true,
      path: 'https://jlucassr.github.io/ArBC-Pages/',
      content: 'Para ter acesso a wiki do projeto, que contém diversas \
        informações úteis sobre os participantes e o software, clique aqui.',
    };
  }
</script>

<style lang="scss" scoped>
  .cards-container {
    display: flex;
    flex-wrap: wrap; 
    flex-direction: colunm; 
    justify-content: space-around;
    margin-top: 15px;
  }
  .space-card {
    margin-bottom: 20px;
  }
</style>
