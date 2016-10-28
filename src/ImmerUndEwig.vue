<template>
  <div id="site-container">

    <SiteHeader
      :toggleMenuLinks="toggleMenuLinks"
      :menuLinksActive="menuLinksActive"
      />

    <MenuLinks
      :menuLinksActive="menuLinksActive"
      :toggleMenuLinks="toggleMenuLinks"
      />

    <Introduction />
    <Studio />
    <Artists />

  </div>
</template>

<script>
import MenuLinks from './components/elements/MenuLinks'
import SiteHeader from './components/elements/SiteHeader'

import Introduction from './components/views/Introduction'
import Studio from './components/views/Studio'
import Artists from './components/views/Artists'
export default {
  components: {
    MenuLinks,
    SiteHeader,
    Introduction,
    Studio,
    Artists
  },
  data: () => ({
    menuLinksActive: false
  }),
  methods: {
    toggleMenuLinks () {
      this.menuLinksActive = !this.menuLinksActive
    }
  }
}
</script>

<style lang="scss">
@import './common/styles/index';

#app {
  background: white;
}

#site-container {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
