<template>
  <div class="box">
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <md-icon v-if="!localIcon" class="md-size-4x">{{ data.icon }}</md-icon>
          <md-icon v-else class="md-size-4x" :md-src="require(`@/assets/${data.icon}.svg`)"/>
        </md-card-header>

        <md-card-content>
          {{ data.content }}
        </md-card-content>

        <md-card-actions>
          <md-button 
            class="md-icon-button md-fab" 
            :target="data.target"
            :href="data.link"
          >
            <md-icon v-if="!localIcon">{{ data.icon }}</md-icon>
            <md-icon v-else :md-src="require('@/assets/github.svg')"/>
          </md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    data: {
      type: Object,
      required: true,
    },
    localIcon: {
      type: Boolean,
      default: false,
    },
  },
})
export default class HomeCard extends Vue {}
</script>

<style lang="scss" scoped>
.box {
width: 320px;
margin: 4px;
height: 300px;
display: inline-block;
vertical-align: top;
}
</style>
