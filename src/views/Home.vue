<template>
  <home/>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import Home from '@/components/Home.vue';

@Component({
  components: {Home},
})
export default class App extends Vue {}
</script>