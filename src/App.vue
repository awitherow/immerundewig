<template>
  <div id="site-container">
    <div id="header">Menu, Icons</div>
    <Introduction />
  </div>
</template>

<script>
import Introduction from './components/Introduction'
export default {
  components: {
    Introduction
  }
}
</script>

<style lang="scss">
  @import './common/styles/index.scss';

  #header {
    position: absolute;
  }
</style>
