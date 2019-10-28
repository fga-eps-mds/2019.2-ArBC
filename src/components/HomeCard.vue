<template>
  <div class="box">
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <md-icon 
            v-if="!localIcon"
            class="md-size-4x"
          >
            {{ data.icon }}
          </md-icon>
          
          <md-icon
            v-else
            class="md-size-4x"
            :md-src="require('@/assets/github_gray.svg')"
          />
        </md-card-header>

        <md-card-content>
          {{ data.content }}
        </md-card-content>

        <md-card-actions>
          <md-button 
            class="md-icon-button md-fab md-primary" 
            :target="data.target"
            :href="data.link"
          >
            <md-icon v-if="!localIcon" class="black">{{ data.icon }}</md-icon>
            <md-icon v-else :md-src="require(`@/assets/${data.icon}.svg`)"/>
          </md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import 'vue-material/dist/vue-material.min.css';
import {
  MdApp,
  MdIcon,
  MdCard,
  MdButton,
  MdRipple,
} from 'vue-material/dist/components';

Vue.use(MdApp);
Vue.use(MdIcon);
Vue.use(MdCard);
Vue.use(MdButton);
Vue.use(MdRipple);

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
  .md-button {
    background-color: #448aff;
  }
  .md-icon {
    color: #757575;
  }
  .black {
    color: black;
  }
</style>
