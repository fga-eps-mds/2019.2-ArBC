<template>
  <camera />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Camera from '@/components/Camera.vue';

Vue.component('camera', Camera);

@Component({
  components: {
    Camera,
  },
})
export default class CameraView extends Vue {}
</script>
