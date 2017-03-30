<template>
  <div id="site-container"
       name="home">

    <site-header :toggleMenuLinks="toggleMenuLinks"
                 :menuLinksActive="menuLinksActive"
                 :menuLinks="menuLinks" />

    <menu-links :menuLinksActive="menuLinksActive"
                :toggleMenuLinks="toggleMenuLinks"
                :menuLinks="menuLinks" />

    <overlay :activeArtist="activeArtist"
             :subject="subject"
             :overlayActive="overlayActive"
             :toggleOverlay="toggleOverlay" />

    <introduction :toggleOverlay="toggleOverlay" />

    <div class="site-inner">
      <studio />
      <artists :toggleOverlay="toggleOverlay"
               :overlayActive="overlayActive" />
    </div>

    <site-footer />

  </div>
</template>

<script>
import MenuLinks from './components/elements/MenuLinks'
import SiteHeader from './components/elements/SiteHeader'
import Overlay from './components/elements/Overlay'
import SmartForm from './components/elements/SmartForm'

import Introduction from './components/views/Introduction'
import Studio from './components/views/Studio'
import Artists from './components/views/Artists'
import SiteFooter from './components/views/SiteFooter'

export default {
  components: {
    'menu-links': MenuLinks,
    'site-header': SiteHeader,
    'introduction': Introduction,
    'studio': Studio,
    'artists': Artists,
    'overlay': Overlay,
    'smart-form': SmartForm,
    'site-footer': SiteFooter
  },
  data: () => ({
    menuLinksActive: false,
    overlayActive: false,
    smartFormActive: false,
    activeArtist: undefined,
    subject: undefined,
    menuLinks: [
      {
        text: 'Home',
        href: '#home'
      },
      {
        text: 'Studio',
        href: '#studio'
      },
      {
        text: 'Artists',
        href: '#artists'
      }
    ]
  }),
  methods: {
    toggleMenuLinks() {
      this.menuLinksActive = !this.menuLinksActive
    },
    toggleNoScroll(bool) {
      if (bool) {
        document.body.className += 'noScroll'
      } else {
        document.body.className =
          document.body.className.replace(/\bnoScroll\b/, '')
      }
    },
    toggleOverlay({
      artist = undefined,
      email = undefined
    }) {
      this.activeArtist = artist
      this.subject = email
      this.overlayActive = !this.overlayActive
      this.toggleNoScroll(this.overlayActive)
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
