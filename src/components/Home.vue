<template>
  <div>
    <tool-bar/>
    <img alt="Arara" src="../assets/ArBC_logo.png" width="640" height="410"/>
    <div><br><br><br></div>
    
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <md-icon class="md-size-4x" :md-src="require('@/assets/github_icon.svg')"/>
        </md-card-header>

        <md-card-content>
          Para ter acesso ao github do projeto clique no botâo verde abaixo.
          <br><br><br>
        </md-card-content>

        <md-card-actions>
          <md-button 
            class="md-icon-button md-primary md-fab" 
            target="_blank"
            href="https://github.com/fga-eps-mds/2019.2-ArBC"
          >
            <md-icon :md-src="require('@/assets/github_icon.svg')"/>
          </md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>

    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <md-icon class="md-size-4x" :md-src="require('@/assets/camera.svg')"/>
        </md-card-header>

        <md-card-content>
          Para ter acesso a nossa ferramenta de auxilio à alfabetização de crianças clique no botão verde abaixo.
          <br><br>
        </md-card-content>

        <md-card-actions>
          <md-button 
            class="md-icon-button md-primary md-fab" 
            target="_blank"
            href="https://github.com/fga-eps-mds/2019.2-ArBC"
          >
            <md-icon :md-src="require('@/assets/camera.svg')"/>
          </md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>

    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <md-icon class="md-size-4x" :md-src="require('@/assets/about.svg')"/>
        </md-card-header>

        <md-card-content>
          Para ter acesso a wiki do projeto que contém diversas informações úteis sobre os participantes e o software clique no botão verde abaixo.
        </md-card-content>

        <md-card-actions>
          <md-button 
            class="md-icon-button md-primary md-fab" 
            target="_blank"
            href="https://jlucassr.github.io/ArBC-Pages/"
          >
            <md-icon :md-src="require('@/assets/about.svg')"/>
          </md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>

  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
export default {
  components: {
    ToolBar,
  },
};
</script>

<style lang="scss" scoped>
  small {
    display: block;
  }
  .button-size {
      width: 70%!important;
      height: 100px!important;
      min-width: unset!important;
  }
  .md-card {
    width: 320px;
    margin: 4px;
    height: 300px;
    display: inline-block;
    vertical-align: top;
  }
</style>

