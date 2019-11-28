<template>
  <md-dialog v-if="showDialog" :md-active.sync="opened" class="dialog">
    <md-dialog-title class="dialog-title">
      Como usar
    </md-dialog-title>

  <md-dialog-content class="dialog-content">
    <ol class="list">
      <li>Posicione os marcadores de maneira que se forme uma palavra</li>
      <li>Com o aparelho, posicione a câmera de forma que todos os marcadores fiquem visíveis</li>
      <li>Atente-se ao reflexo, ele pode dificultar a leitura</li>
      <li>Divirta-se e aprenda &#128513;</li>
    </ol>

    <div id="checkbox" @click="hideDialog = !hideDialog;">
      <input type="checkbox" :value="hideDialog" class="checkbox" />
      Não desejo mais ver essa mensagem
    </div>
  </md-dialog-content>

    <md-dialog-actions class="dialog-actions">
      <md-button
        @click="opened = false"
        style="background-color: #ff5252; color: white"
      >
        Cancelar
      </md-button>

      <md-button
        @click="openCamera"
        style="background-color: #448aff; color: white"
      >
        Continuar
      </md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

import '@/vue_material/components';

@Component({})
export default class Home extends Vue {
  private opened: boolean = false;
  private hideDialog: boolean = false;

  public open(): void {
    this.opened = true;
  }

  public get showDialog(): boolean {
    const showDialog = localStorage.getItem('showHowToUseDialog');

    return !(showDialog === 'false');
  }

  @Watch('hideDialog')
  private saveHideDialogOption(): void {
    localStorage.setItem('showHowToUseDialog', `${!this.hideDialog}`);
  }

  private openCamera(): void {
    this.$emit('onConfirmed');
  }
}
</script>

<style lang="scss" scoped>
  @media (max-width: 424px) {
    .dialog {
      width: 100%;
      height: 100%;
    }
    .dialog-title {
      margin: 0 auto 30px auto;
    }
    .list {
      margin-bottom: 50px;
    }
  }
  @media (min-width: 425px) {
    .dialog {
      width: 400px;
      height: 550px;
    }
    .dialog-title {
      margin: 0 auto 20px auto;
    }
    .list {
      margin-bottom: 20px;
    }
  }
  .dialog {
    padding: 10px 30px 30px 30px;
    background-color: white;
  }
  .dialog-title {
    font-size: 2.5rem;
    color: #448aff;
  }
  .dialog-content {
    margin: 0 auto;
    font-size: 1.2rem;
  }
  .dialog-actions {
    display: flex;
    padding: 0;
    justify-content: space-between;
  }
  .list {
    line-height: 1.5;
    padding-left: 20px;
  }
  .checkbox {
    float: left;
    width: 20px;
    height: 20px;
    margin: 0 10px 0 0;
  }
</style>
