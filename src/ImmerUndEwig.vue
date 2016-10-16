<template>
  <div id="site-container">

    <div id="header">
      <div class="container">
        <button
          v-on:click="toggleOverlay('link-menu')"
          v-show="!overlay"
          data-action="header-menu"
          class="menu-button"
          >MENÜ</button>
        <div class="social-icons">
          <ul>
            <li v-for="social in socialIcons">
              <a v-bind:href="social.href">
                <img class="social-icons__icon" v-bind:src="social.img" />
              </a>
            </li>
          </ul>
        </div>
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
import MenuLinks from './components/elements/MenuLinks'

import Introduction from './components/views/Introduction'
import Studio from './components/views/Studio'
export default {
  components: {
    MenuLinks,
    Introduction,
    Studio
  },
  data: () => ({
    overlay: false,
    socialIcons: [
      {
        href: 'https://www.instagram.com/immerundewigtattooing/?hl=en',
        img: '/static/icons/instagram.svg'
      },
      {
        href: 'https://www.facebook.com/immerundewigtattooing',
        img: '/static/icons/facebook.svg'
      }
    ]
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
    width: 100%;
    position: absolute;

    .container {
      display: flex;
      max-width: 750px;
      margin: 0 auto;
      padding: 15px 35px;
    }

    .menu-button {
      font-size: 16px;
      padding: 0;
      padding-bottom: 2px;
      border: none;
      border-bottom: 2px solid $gold;
    }

    .social-icons {
      margin-left: auto;

      &__icon {
        &:hover {
          color: white;
        }
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          display: inline-block;
          padding: 0 5px;
        }
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
