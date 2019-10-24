<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <span class="md-title">ArBC</span>
        <md-button class="md-icon-button md-primary">
          <md-icon >home</md-icon>
        </md-button>
        <md-button class="md-icon-button md-primary">
          <md-icon :md-src="require('@/assets/i.svg')"></md-icon>
        </md-button>
      </md-app-toolbar>
    </md-app>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class App extends Vue {}
</script>

<script>
export default {
  name: 'Reveal',
  data: () => ({
    menuVisible: false,
  }),
};
</script>

<style lang="scss" scoped>
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}
</style>
