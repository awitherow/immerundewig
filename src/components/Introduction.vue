<template>
  <section id="introduction">

    <div class="spotlight">
      <p>{{ title }}</p>
      <p>{{ address }}</p>
      <button>{{ contact }}</button>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Introduction',
  data: () => ({
    title: 'immer und ewig tattooing',
    address: 'kleiner schäferkamp 33 / 20357 hamburg',
    contact: 'nimm kontakt auf'
  })
}
</script>

<style lang="scss">
  #introduction {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black url(
      https://raw.githubusercontent.com/awitherow/immerundewig/master/src/assets/img/intro_bg.png
      ) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .spotlight {
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 7px;
    line-height: 28px;
    padding: 0 25px;

    p {
      margin: 0;
    }

    button {
      margin-top: 15px;
    }
  }
</style>
