<template>
  <transition name="fade">
    <div class="overlay"
         id="menu-links-overlay"
         v-show="menuLinksActive">

      <ul>
        <li v-for="link in menuLinks">
          <a @click="toggleMenuLinks"
             v-bind:href="link.href">
                    {{ link.text }}
                  </a>
        </li>
      </ul>

      <button @click="toggleMenuLinks"
              v-show="menuLinksActive"
              class="close" />

    </div>
  </transition>
</template>

<script>
export default {
  name: 'MenuLinks',
  props: [
    'menuLinksActive',
    'toggleMenuLinks',
    'menuLinks'
  ],
  data: () => ({})
}
</script>

<style lang="scss">
@import '../../common/styles/index.scss';

#menu-links-overlay {
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
