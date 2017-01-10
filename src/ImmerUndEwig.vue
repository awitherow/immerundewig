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

    <ArtistOverlay
      :activeArtist="activeArtist"
      :artistOverlayActive="artistOverlayActive"
      :toggleArtistOverlay="toggleArtistOverlay"
      />


    <Introduction />

    <div class="site-inner">
      <Studio />
      <Artists
        :toggleArtistOverlay="toggleArtistOverlay"
        :artistOverlayActive="artistOverlayActive"
        />
    </div>
    <SiteFooter />

  </div>
</template>

<script>
import MenuLinks from './components/elements/MenuLinks'
import SiteHeader from './components/elements/SiteHeader'
import ArtistOverlay from './components/elements/ArtistOverlay'

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
    ArtistOverlay,
    SiteFooter
  },
  data: () => ({
    menuLinksActive: false,
    artistOverlayActive: false,
    activeArtist: undefined
  }),
  methods: {
    toggleMenuLinks () {
      this.menuLinksActive = !this.menuLinksActive
    },
    toggleArtistOverlay (artist) {
      this.activeArtist = artist
      this.artistOverlayActive = !this.artistOverlayActive
      if (this.artistOverlayActive) {
        document.body.className += 'noScroll'
      } else {
        document.body.className =
            document.body.className.replace(/\bnoScroll\b/, '')
      }
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
  margin: 0 auto;
}

.site-inner {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
