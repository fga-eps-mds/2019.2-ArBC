<template>
    <md-toolbar class="md-primary">   
      <div class="md-toolbar-section-start">
        <span class="md-title" style="color: rgb(255, 255, 255)">
          ArBC
        </span>

        <md-button 
          class="md-icon-button" 
        >
          <md-icon>home</md-icon>
        </md-button>

        <md-button 
          class="md-icon-button" 
          href="./camera"
        >
          <md-icon >camera_alt</md-icon>
        </md-button>  
      </div>
    </md-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import 'vue-material/dist/vue-material.min.css';
import {
  MdIcon,
  MdButton,
  MdToolbar,
} from 'vue-material/dist/components';

Vue.use(MdIcon);
Vue.use(MdButton);
Vue.use(MdToolbar);

@Component({})
export default class ToolBar extends Vue {}
</script>

<style lang="scss" scoped>
  .md-toolbar {
    background-color: #448aff;
  }
  .md-icon {
    color: white;
  }
</style>
