<template>
  <div @click="route">
    <md-card md-with-hover class="card">
      <md-ripple>
        <div
          :style="{
            width: '100%',
            height: '5px',
            borderRadius: '5px',
            backgroundColor: $data.iconColor
          }"
        />

        <md-card-header>
          <md-icon
            class="md-size-4x"
            :style="{ color: $data.iconColor }"
          >
            {{ $data.icon }}
          </md-icon>
        </md-card-header>

        <md-card-content>
          {{ $data.content }}
        </md-card-content>
      </md-ripple>
    </md-card>

    <how-to-use-modal ref="howToUseModal" @onConfirmed="openCameraConfirmed = true" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import '@/vue_material/components';

import HowToUseModal from '@/components/HowToUseModal.vue';

Vue.component('home-card', HowToUseModal);

@Component({
  components: {
    HowToUseModal,
  },
  props: {
    $data: {
      type: Object,
      required: true,
    },
  },
})

export default class HomeCard extends Vue {
  public $refs!: {
    howToUseModal: any,
  };

  private openCameraConfirmed: boolean = false;

  private openModal(data: any) {
    this.$refs.howToUseModal.open(data);
  }

  private canRoute(path: string) {
    return new Promise((resolve: any, reject: any) => {
      const showHowToUseDialog = localStorage.getItem('showHowToUseDialog');

      if (path !== '/camera' || showHowToUseDialog === 'false') {
        resolve();
      } else {
        this.$refs.howToUseModal.open();

        this.openCameraConfirmed ? (resolve()) : (reject());
      }
    });
  }

  @Watch('openCameraConfirmed')
  private route() {
    const { path, targetBlank } = this.$data;

    this.canRoute(path).then(() => {
      if (targetBlank) {
        window.open(path, '_blank');
      } else {
        window.history.pushState({}, path, window.location.pathname);

        window.location.replace(path);
      }
    });
  }
}
</script>

<style lang="scss" scoped>
  @media (min-width: 425px) {
    .card {
      width: 320px;
    }
  }
  @media (max-width: 424px) {
    .card {
      width: 80%;
    }
  }
  .card {
    margin: 4px;
    height: 230px;
    border-radius: 5px;
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
