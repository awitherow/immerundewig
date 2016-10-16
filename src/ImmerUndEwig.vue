<template>
  <div id="site-container">

    <Header
      :toggleMenuLinks="toggleMenuLinks"
      :menuLinksActive="menuLinksActive"
      />

    <MenuLinks
      :menuLinksActive="menuLinksActive"
      :toggleMenuLinks="toggleMenuLinks"
      />

    <Introduction />
    <Studio />
    
  </div>
</template>

<script>
import MenuLinks from './components/elements/MenuLinks'
import Header from './components/elements/Header'

import Introduction from './components/views/Introduction'
import Studio from './components/views/Studio'
export default {
  components: {
    MenuLinks,
    Introduction,
    Studio,
    Header
  },
  data: () => ({
    menuLinksActive: false
  }),
  methods: {
    toggleMenuLinks (contentDesired) {
      this.menuLinksActive = !this.menuLinksActive
    }
  }
}
</script>

<style lang="scss">

</style>
