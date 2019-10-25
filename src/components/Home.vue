<template>
  <div>
    <tool-bar/>
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

<script>
import ToolBar from '@/components/ToolBar.vue';
export default {
  components: {
    ToolBar,
  },
};
</script>

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
