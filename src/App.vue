<template>
  <div id="site-container">
    <div id="header">
      <button
        v-on:click="menuOpen = !menuOpen"
        v-show="!menuOpen"
        class="reset"
        >MENÜ</button>
    </div>
    <Introduction />
  </div>
</template>

<script>
import Introduction from './components/Introduction'
export default {
  components: {
    Introduction
  },
  data: () => ({
    menuOpen: false
  })
}
</script>

<style lang="scss">
  @import './common/styles/index.scss';

  #header {
    position: absolute;
  }
</style>
