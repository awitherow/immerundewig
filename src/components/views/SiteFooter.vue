<template>
  <footer class="spotlight">
      <img
        class="logo"
        src="/static/icons/logo.svg"
        alt="immerundewig logo"
        />
      <p>{{ title }}</p>
      <p>{{ address }}</p>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  data: () => ({
    title: 'immer und ewig tattooing',
    address: 'kleiner schäferkamp 33 / 20357 hamburg',
    contact: 'nimm kontakt auf'
  })
}
</script>

<style lang="scss" scoped>
@import '../../common/styles/index';

footer {
  background: $grey;
  color: #000;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    filter: contrast(0%);
    margin: 25px;
  }
}
</style>
