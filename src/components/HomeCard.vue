<template>
  <md-card :id="data.name" md-with-hover class="box">
    <md-ripple>
      <div class="upper-bar" />

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
    </md-ripple>
  </md-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import '@/vue_material/components';

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
export default class HomeCard extends Vue {
  public mounted() {
    const card: any = document.getElementById(this.data.name);

    card.addEventListener('click', this.route);
  }
  private route() {
    const { link, target } = this.data;

    if (target === '_blank') {
      window.open(link, target);
    } else {
      window.location.replace(link);
    }
  }
}
</script>

<style lang="scss" scoped>
  .box {
    width: 320px;
    margin: 4px;
    height: 250px;
    border-radius: 5px;
    display: inline-block;
    vertical-align: top;
  }
  .upper-bar {
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background-color: #448aff;
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
