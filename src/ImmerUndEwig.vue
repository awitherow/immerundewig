<template>
  <div id="site-container">

    <Header
      :toggleMenuLinks="toggleMenuLinks"
      :menuLinks="menuLinks"
      />

    <transition name="fade">
      <div class="overlay" id="menu-links-overlay" v-show="menuLinks">
        <MenuLinks
          v-bind:onClickLink="toggleMenuLinks"
          />
        <button
          v-on:click="toggleMenuLinks"
          v-show="menuLinks"
          class="close"
          />
      </div>
    </transition>

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
    menuLinks: false
  }),
  methods: {
    toggleMenuLinks (contentDesired) {
      this.menuLinks = !this.menuLinks
    }
  }
}
</script>

<style lang="scss">
  @import './common/styles/index.scss';

  #menu-links-overlay {
    ul {
      padding: 0;
      margin: 0;
      text-transform: uppercase;
      text-align: center;

      li {
        list-style: none;
        font-size: 18px;
        padding-bottom: 5px;

        a {
          color: $gold;
          text-decoration: none;
        }
      }
    }

    button {
      border: none;

      &.close {
        position: absolute;
        right: 10px;
        top: 30px;
        width: 32px;
        height: 32px;

        &:before,
        &:after {
          position: absolute;
          left: 15px;
          top: 0;
          content: ' ';
          height: 33px;
          width: 2px;
          background-color: $gold;
        }

        &:before {
          transform: rotate(45deg);
        }

        &:after {
          transform: rotate(-45deg);
        }
      }
    }
  }
</style>
