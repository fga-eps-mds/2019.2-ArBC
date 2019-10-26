<template>
  <div style="margin-bottom: 30px">
    <tool-bar />

    <img
      alt="Arara"
      width="640" height="410"
      src="../assets/ArBC_logo.png"
    />

    <div>
      <home-card :data="githubCardInfo" :localIcon="true" />
      <home-card :data="cameraCardInfo" />
      <home-card :data="wikiCardInfo" />
      <home-card :data="driveCardInfo" />
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
    icon: 'github',
    target: '_blank',
    link: 'https://github.com/fga-eps-mds/2019.2-ArBC',
    content: 'Para ter acesso ao github, que contém todo o código do produto de forma fácil,\
     além de muitas outras informações úteis clique no botão azul abaixo.',
  };
  private cameraCardInfo: object = {
    icon: 'camera_alt',
    target: '',
    link: '/camera',
    content: 'Para ter acesso a câmera do projeto, sendo ela a ferramenta que tem como\
     função o auxílio na alfabetização de crinças.Clique no botão azul abaixo.',
  };
  private wikiCardInfo: object = {
    icon: 'help',
    target: '_blank',
    link: 'https://jlucassr.github.io/ArBC-Pages/',
    content: 'Para ter acesso a wiki do projeto, que contém diversas informações úteis sobre os \
    participantes e o software, clique no botão azul abaixo.',
  };
  private driveCardInfo: object = {
    icon: 'backup',
    target: '_blank',
    link: 'https://drive.google.com/open?id=1Aa5jXFIh4385wKT36mFFP82zho7BmfBP',
    content: 'Para utilizar a aplicação é necessário os marcadores. Desse modo, \
    disponibilizamos o download por meio do drive. Para baixar basta clicar no botão azul abaixo.',
  };
}
</script>
