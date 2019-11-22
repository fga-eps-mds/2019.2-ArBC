<template>

</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';
  import { Object3D } from 'three';

  @Component
  export default class AEntity extends Vue {
    @Prop(String) public material: string = '';
    @Prop(String) public geometry: string = '';
    @Prop(String) public rotation: string = '';
    @Prop(String) public visible: string = '';

    public object3D = new Object3D();
    public isPlaying: boolean = false;

    public setAttribute = jest.fn().mockImplementation((target: string, value: string) => {
      this.material = value;
    });

    public play = jest.fn().mockImplementation(() => {
      this.isPlaying = true;
    });

    public pause = jest.fn().mockImplementation(() => {
      this.isPlaying = false;
    });
  }
</script>
