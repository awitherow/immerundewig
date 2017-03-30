<template>
  <transition name="fade">
    <div class="overlay white"
         v-if="overlayActive">

      <div class="inner">
        <div class="information">
          <button @click="toggleOverlay"
                  v-show="overlayActive"
                  class="close">
            <img src="/static/icons/close.png" />
          </button>

          <h1 v-if="activeArtist">{{ activeArtist.name }}</h1>
          <h1 v-else>Contact Immer und Ewig</h1>
          <p v-if="activeArtist">
            {{ activeArtist.introParagraphs[0] }}
          </p>
          <p v-else>
            Please fill out the form below with information about your ideal tattoo!
          </p>

        </div>
        <div v-if="activeArtist">
          <div class="images"
               v-for="img in activeArtist.popupImages">
            <img :src="img" />
          </div>
        </div>
        <smart-form :subject="subject"
                    :artist="activeArtist" />
      </div>

    </div>
  </transition>
</template>

<script>
import SmartForm from './SmartForm'

export default {
  name: 'Overlay',
  components: {
    'smart-form': SmartForm
  },
  props: [
    'toggleOverlay',
    'activeArtist',
    'overlayActive',
    'subject'
  ],
  updated() {
    console.log({
      artist: this.activeArtist,
      email: this.subject
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/styles/index.scss';

.overlay {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @media(min-width: 768px) {
    padding: 25px 25px 0 25px;
    background: rgba(0, 0, 0, 0.5);

    .inner {
      background: white;
      padding: 25px;
      overflow-y: scroll;

      .information {
        position: relative;
        .close {
          position: absolute;
          right: 10px;
          top: 10px;
        }
      }
    }
  }

  @media(min-width: 1024px) {
    padding: 50px 50px 0 50px;
  }

  .inner {
    display: flex;
    align-items: center;
    flex-direction: column;

    .information {
      text-align: center;
      padding: 35px;

      .close {
        img {
          height: 32px;
          width: 32px;
        }
      }

      h1 {
        text-transform: uppercase;
        font-size: 15px;
        letter-spacing: 2px;
        padding-top: 15px;
      }

      p {
        font-family: 'Roboto';
        font-size: 12px;
        line-height: 24px;
        letter-spacing: 2px;
        font-weight: 300;
        color: black;
      }
    }
  }

  button {
    border: none;
  }
}

.direkt-container {
  margin: 50px 0 25px 0;

  .button {
    font-size: 12px;
    letter-spacing: 1.5px;
  }
}

.smart-form {
  width: 100%;
  max-width: 768px;
  margin-top: 25px;
}
</style>
