<template>
  <div class="home">
    <img alt="Yoda" src="../assets/yoda.svg"/>
    <HelloWorld msg="Patience you must have my young Padawan."/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
