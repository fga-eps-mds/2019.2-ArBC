<template>
  <div>
    <h1>ArBC</h1>
    <Camera />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Camera from '../components/Camera.vue';

@Component({
  components: {
    Camera,
  },
})

export default class Home extends Vue {
}
</script>