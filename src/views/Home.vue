<template>
  <home />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Home from '@/components/Home.vue';

Vue.component('home', Home);

@Component({
  components: {
    Home,
  },
})
export default class HomeView extends Vue {}
</script>