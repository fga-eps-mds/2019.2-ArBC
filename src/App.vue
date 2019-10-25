<template>
  <div class="page-container" align="center">

    <md-app md-mode="reveal">
      <md-app-toolbar class="md-accent">
        
        <div class="md-toolbar-section-start">
          <span class="md-title">ArBC</span>
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

        <div class="md-toolbar-section-end">
          <md-button 
            class="md-icon-button" 
            target="_blank"
            href="https://jlucassr.github.io/ArBC-Pages/"
          >
            <md-icon :md-src="require('@/assets/about.svg')"/>
          </md-button>
        </div>

      </md-app-toolbar>
    </md-app>

    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}
</style>
