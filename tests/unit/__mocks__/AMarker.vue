<template>

</template>

<script lang="ts">
  import Vue from 'vue';
  import 'jest';
  import Component from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';
  import { Object3D } from 'three';

  @Component
  export default class AMarker extends Vue {
    @Prop(String) public type: string = '';
    @Prop(String) public url: string = '';

    public object3D = new Object3D();
  }
</script>
