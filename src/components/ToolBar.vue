<template>
    <md-toolbar class="md-primary" style="position: relative">
      <span class="title">
        ArBC
      </span>

      <div style="position: absolute; right: 10px">
        <md-button class="md-icon-button">
          <md-icon>home</md-icon>
        </md-button>

        <md-button 
          class="md-icon-button"
          href="./camera"
        >
          <md-icon >camera_alt</md-icon>
        </md-button>

        <md-button 
          class="md-icon-button"
          @click="sendBugEmail"
        >
          <md-icon >bug_report</md-icon>
        </md-button>
      </div>
    </md-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import '@/vue_material/components';

@Component({})
export default class ToolBar extends Vue {
  private sendBugEmail(): void {
    window.open('mailto:projetoarbc@gmail.com?subject=Bug');
  }
}
</script>

<style lang="scss" scoped>
  .md-toolbar {
    background-color: #448aff;
  }
  .md-icon {
    color: white;
  }
  .title {
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>
