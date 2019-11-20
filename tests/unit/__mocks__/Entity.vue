<template>

</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Object3D } from "three";

  @Component({
    name: 'a-entity',
    props: {
      geometry: String,
      rotation: String,
      visible: String,
      material: String,
    }
  })
  export default class AEntity extends Vue {
    private enMaterial: string = this.material;
    public object3D = new Object3D();
    public isPlaying: boolean = false;
    public setAttribute = jest.fn().mockImplementation((target: string, value: string) => {
      this.enMaterial = value;
    });
    public play = jest.fn().mockImplementation(() => {
      this.isPlaying = true;
    });
    public pause = jest.fn().mockImplementation(() => {
      this.isPlaying = false;
    });
  }
</script>
