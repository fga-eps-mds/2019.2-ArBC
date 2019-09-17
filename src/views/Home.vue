<template>
  <div>
    <h1>ArBC</h1>
    <camera />
  </div>
</template>

<script lang="ts">
import Camera from '../components/Camera.vue';

export default {
  name: 'Home',
  components: {
    Camera,
  },
};
</script>