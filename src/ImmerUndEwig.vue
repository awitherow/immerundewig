<template>
  <div id="site-container">

    <div id="header">
      <button
        v-on:click="toggleOverlay('link-menu')"
        v-show="!overlay"
        data-action="header-menu"
        class="menu-button"
        >MENÜ</button>
      <div class="social-icons">
      </div>
    </div>

    <transition name="fade">
      <div id="overlay" v-show="overlay">
        <MenuLinks
          v-bind:onClickLink="toggleOverlay"
          />
        <button
          v-on:click="toggleOverlay"
          v-show="overlay"
          class="close"
          />
      </div>
    </transition>

    <Introduction />
    <Studio />
  </div>
</template>

<script>
import MenuLinks from './components/MenuLinks'

import Introduction from './components/Introduction'
import Studio from './components/Studio'
export default {
  components: {
    MenuLinks,
    Introduction,
    Studio
  },
  data: () => ({
    overlay: false
  }),
  methods: {
    toggleOverlay (contentDesired) {
      this.overlay = !this.overlay
    }
  }
}
</script>

<style lang="scss">
  @import './common/styles/index.scss';

  #header {
    position: absolute;
    left: 15px;
    top: 35px;

    .menu-button {
      font-size: 16px;
      padding: 0;
      padding-bottom: 2px;
      border: none;
      border-bottom: 2px solid $gold;
    }

    .social-icons {
      display: flex;
      position: absolute;
      right: 0;
    }
  }

  #overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: black;

    display: flex;
    align-items: center;
    justify-content: center;

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
