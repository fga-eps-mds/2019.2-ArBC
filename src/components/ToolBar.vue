<template>
  <md-app md-mode="reveal">
    <md-app-toolbar class="md-primary">   
      <div class="md-toolbar-section-start">
        <span class="md-title" style="color: rgb(255, 255, 255)">
          ArBC
        </span>

        <md-button 
          class="md-icon-button" 
          @click="$router.push('/')"
        >
          <md-icon>home</md-icon>
        </md-button>

        <md-button 
          class="md-icon-button" 
          @click="$router.push('/camera')"
        >
          <md-icon >camera_alt</md-icon>
        </md-button>  
      </div>
    </md-app-toolbar>
  </md-app>
</template>

<script>
export default {
  name: 'Toolbar',
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
