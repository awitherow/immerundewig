<template>
  <ul>
    <li v-for="link in linkList">
      <a
        v-bind:href="link.href"
        v-on:click="onClickLink"
        >
        {{ link.text }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MenuLinks',
  props: ['onClickLink'],
  data: () => ({
    linkList: [
      {
        text: 'Artists',
        href: '#artists'
      },
      {
        text: 'Studio',
        href: '#studio'
      },
      {
        text: 'Kontakt',
        href: '#kontakt'
      },
      {
        text: 'Shop',
        href: '#shop'
      }
    ]
  })
}
</script>

<style lang="scss">

</style>
