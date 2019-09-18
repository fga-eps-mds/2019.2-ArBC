<template>
  <div>
    <button
      v-if="!cameraOpened"
      @click="openCamera()"
      class="camera-btn">
      ABRIR CÂMERA
    </button>

    <button
      v-else
      @click="closeCamera()"
      class="camera-btn">
      FECHAR CÂMERA
    </button>

    <h4 v-if="message!=''">{{ message }}</h4>

    <video ref="video" class="video" />
  </div>
</template>

<style>
  .video {
    margin: 0 auto;
    width: 100%;
  }
  .camera-btn {
    width: 160px;
    height: 40px;
    margin-top: 20px;
    margin-bottom: 30px;
    border-radius: 10px;
  }
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Camera extends Vue {
  public $refs!: {
    video: HTMLFormElement,
  };
  private message: string  = '';
  private mediaStream: any;
  private cameraOpened: boolean = false;
  private mediaConstraints: object = {
    video: {
      facingMode: 'environment',
    },
  };
  public destroyed() {
    this.message = '';
  }
  public handleMediaDevicesUndefined() {
    const getUserMedia = navigator.mediaDevices.getUserMedia || navigator.getUserMedia;

    if (!getUserMedia) {
      this.message = 'Não é possível acesar a câmera através desse navegador...';
    }

    getUserMedia(this.mediaConstraints)
      .then(this.handleSucessOnUserMedia)
      .catch(this.handleErrorOnUserMedia);
  }
  public handleSucessOnUserMedia(mediaStream: any) {
    this.mediaStream = mediaStream;

    const video = this.$refs.video;

    if ('srcObject' in video) {
      video.srcObject = mediaStream;
    } else {
      video.src = window.URL.createObjectURL(mediaStream);
    }

    video.onloadedmetadata = () => {
      video.play();
    };

    this.cameraOpened = true;
  }
  public handleErrorOnUserMedia(error: any) {
    switch (error.name) {
      case 'NotAllowedError':
        this.message = 'A permissão para uso da câmera não foi concebida.';

        break;
      case 'NotReadableError':
        this.message = 'Houve algum erro no aparelho...';

        break;
      default:
        this.message = 'Ocorreu algum erro desconhecido... Tente novamente.';
    }
  }
  public openCamera() {
    if ('mediaDevices' in navigator) {
      navigator.mediaDevices.getUserMedia(this.mediaConstraints)
        .then((mediaStream) => this.handleSucessOnUserMedia(mediaStream))
        .catch((error) => this.handleErrorOnUserMedia(error));
    } else {
      this.handleMediaDevicesUndefined();
    }
  }
  public closeCamera() {
    this.mediaStream.getTracks().forEach((track: any) => track.stop());

    this.$router.go(0);
  }
}
</script>
