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
    <SiteFooter />

  </div>
</template>

<script>
import MenuLinks from './components/elements/MenuLinks'
import SiteHeader from './components/elements/SiteHeader'

import Introduction from './components/views/Introduction'
import Studio from './components/views/Studio'
import Artists from './components/views/Artists'
import SiteFooter from './components/views/SiteFooter'

export default {
  components: {
    MenuLinks,
    SiteHeader,
    Introduction,
    Studio,
    Artists,
    SiteFooter
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
