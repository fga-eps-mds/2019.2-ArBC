<template>
  <not-found />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import NotFound from '@/components/NotFound.vue';

Vue.component('not-found', NotFound);

@Component({
  components: {
    NotFound,
  },
})
export default class CameraView extends Vue {}
</script>