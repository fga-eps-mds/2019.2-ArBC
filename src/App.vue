<template>
  <div class="page-container" align="center">
    <toolbar/>
    <router-view/>
  </div>
</template>

<script>
import Toolbar from '@/components/ToolBar.vue';
export default {
  components: {
    Toolbar,
  },
};
</script>
