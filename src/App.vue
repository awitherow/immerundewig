<template>
  <div id="site-container">
    <div id="header">
      <button
        v-on:click="overlay = !overlay"
        v-show="!overlay"
        class="menu"
        >MENÜ</button>
    </div>
    <div id="overlay" v-show="overlay">
      <button
        v-on:click="overlay = !overlay"
        v-show="overlay"
        class="close"
        />
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
    overlay: false
  })
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
