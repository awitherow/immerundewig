<template>
  <section id="introduction">

    <div class="spotlight">
      <img class="logo"
           src="/static/icons/logo.svg"
           alt="immerundewig logo" />
      <p>{{ title }}</p>
      <p>{{ address }}</p>
      <button @click="toggleOverlay({
        email: 'general'
      })">{{ contact }}</button>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Introduction',
  props: [
    'toggleOverlay'
  ],
  data: () => ({
    title: 'immer und ewig tattooing',
    address: 'kleiner schäferkamp 33 / 20357 hamburg',
    contact: 'nimm kontakt auf',
    emailAddress: 'info@immerundewig-tattooing.de',
    emailSubject: 'Generale Frage für Immerundewig',
    emailBody: 'Danke für Ihre E-Mail! Bitte geben Sie Ihre Name, Ideen oder Wüsche unten an.'
  }),
  methods: {
    activateMailApplication() {
      window.location.href = `mailto:${this.emailAddress}?subject=${this.emailSubject}&body=${this.emailBody}`
    }
  }
}
</script>

<style lang="scss">
$break-tablet: 768px;

#introduction {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black url('/static/img/intro_bg.png') no-repeat center center fixed;
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

  @media(min-width: $break-tablet) {
    letter-spacing: 15px;
  }

  p {
    margin: 0;
  }

  button {
    margin-top: 15px;
  }
}
</style>
