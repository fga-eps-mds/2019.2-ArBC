<template>
  <div>
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        
        <div class="md-toolbar-section-start">
          <span class="md-title" style="color: rgb(0, 0, 0)">ArBC</span>
          <md-button 
            class="md-icon-button" 
            href="./"
          >
            <md-icon>home</md-icon>
          </md-button>
          <md-button 
            class="md-icon-button" 
            href="./camera"
          >
            <md-icon :md-src="require('@/assets/camera.svg')"/>
          </md-button>
        </div>
      </md-app-toolbar>
    </md-app>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class App extends Vue {}
</script>

<script>
export default {
  name: 'PaperContent',
  mounted() {
  this.$material.theming.theme = 'mono';
  },
};
</script>

<style lang="scss" scoped>
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}
</style>
