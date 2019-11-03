<template>
  <div align="center">
    <tool-bar />

    <img
      alt="Arara"
      width="640" height="410"
      src="../assets/ArBC_logo.png"
    />

    <div class="cards-container">
      <home-card :$data="githubCardInfo" :localIcon="true" class="space-card" />
      <home-card :$data="cameraCardInfo" class="space-card" />
      <home-card :$data="wikiCardInfo" class="space-card" />
      <home-card :$data="driveCardInfo" class="space-card" />
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
  private githubCardInfo: object = {
    name: 'githubCard',
    icon: 'github',
    target: '_blank',
    link: 'https://github.com/fga-eps-mds/2019.2-ArBC',
    content: 'Para ter acesso ao github, que contém todo o código do produto de forma fácil,\
     além de muitas outras informações úteis clique aqui.',
  };
  private cameraCardInfo: object = {
    name: 'cameraCard',
    icon: 'camera_alt',
    target: '',
    link: '/camera',
    content: 'Para ter acesso a câmera do projeto, sendo ela a ferramenta que tem como\
     função o auxílio na alfabetização de crinças. Clique aqui.',
  };
  private wikiCardInfo: object = {
    name: 'wikiCard',
    icon: 'help',
    target: '_blank',
    link: 'https://jlucassr.github.io/ArBC-Pages/',
    content: 'Para ter acesso a wiki do projeto, que contém diversas informações úteis sobre os \
    participantes e o software, clique aqui.',
  };
  private driveCardInfo: object = {
    name: 'driveCard',
    icon: 'cloud_download',
    target: '_blank',
    link: 'https://drive.google.com/open?id=1Aa5jXFIh4385wKT36mFFP82zho7BmfBP',
    content: 'Para utilizar a aplicação é necessário os marcadores. Desse modo, \
    disponibilizamos o download por meio do drive. Para baixar basta clicar aqui.',
  };
}
</script>

<style lang="scss" scoped>
  .space-card {
    margin-bottom: 20px;
  }
@media (max-width: 1560px) {
  .cards-container {
    display: flex;
    max-width: 100%; 
    flex-wrap: wrap; 
    flex-direction: colunm; 
    justify-content: space-around; 
  }
}
@media (min-width: 1561px) {
  .cards-container {
    display: flex;
    max-width: 90%; 
    flex-wrap: wrap; 
    flex-direction: colunm; 
    justify-content: space-around; 
  }
}
</style>
