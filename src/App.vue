<template>
  <div id="site-container">
    <div id="header">
      <button
        v-on:click="deployOverlay('link-menu')"
        v-show="!overlay"
        data-action="header-menu"
        class="menu"
        >MENÜ</button>
    </div>
    <transition name="fade">
      <div id="overlay" v-show="overlay">
        <MenuLinks
          v-bind:onClickLink="revertOverlay"
          />
        <button
          v-on:click="revertOverlay"
          v-show="overlay"
          class="close"
          />
      </div>
    </transition>
    <Introduction />
  </div>
</template>

<script>
import Introduction from './components/Introduction'
import MenuLinks from './components/MenuLinks'
export default {
  components: {
    Introduction,
    MenuLinks
  },
  data: () => ({
    overlay: false
  }),
  methods: {
    deployOverlay (contentDesired) {
      this.overlay = true
    },
    revertOverlay () {
      this.overlay = false
    }
  }
}
</script>

<style lang="scss">
  @import './common/styles/index.scss';

  #header {
    position: fixed;
    left: 15px;
    top: 35px;

    button {
      font-size: 16px;
      padding-bottom: 2px;

      &.menu {
        border: none;
        padding: 0;
        border-bottom: 2px solid $gold;
      }
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
