<template>
  <div id="header">
    <div class="container">
      <button v-on:click="toggleMenuLinks('link-menu')"
              v-show="!menuLinks"
              class="menu-button">MENÜ</button>
      <div class="menu-links">
        <div v-for="link in menuLinks">
          <a data-scroll
             :href="link.href">
            {{ link.text }}
          </a>
        </div>
      </div>
      <div class="social-icons">
        <ul>
          <li v-for="social in socialIcons">
            <a target="_blank"
               v-bind:href="social.href">
              <img class="social-icons__icon"
                   v-bind:src="social.img" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader',
  props: [
    'toggleMenuLinks',
    'menuLinks'
  ],
  data: () => ({
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
    scrollToLink(link) {
      this.menuLinksActive = !this.menuLinksActive
    }
  }
}
</script>

<style lang="scss">
@import '../../common/styles/index.scss';

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

  .menu-links {
    display: none;
  }

  @media(min-width: 768px) {
    .menu-button {
      display: none;
    }

    .menu-links {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 80%;
    }

    .menu-links a {
      display: flex;
      color: white;
      text-transform: uppercase;
      text-decoration: none;
    }
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
</style>
