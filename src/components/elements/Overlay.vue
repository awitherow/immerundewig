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

          <div v-if="activeArtist"
               class="button-container button-container">
            <button @click="toggleView('artist')"
                    v-bind:class="artistBtnClass">GALLERIE</button>
            <button @click="toggleView('mail')"
                    v-bind:class="mailBtnClass">KONTAKT</button>
          </div>

        </div>

        <div v-if="activeArtist && activeView === 'artist'">
          <div class="images"
               v-for="img in activeArtist.popupImages">
            <img :src="img" />
          </div>
        </div>
        <div class="form-container"
             v-else>
          <smart-form id="form"
                      :subject="subject"
                      :artist="activeArtist" />
        </div>
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
  data: () => ({
    activeView: 'artist'
  }),
  methods: {
    toggleView(newView) {
      this.activeView = newView
    }
  },
  computed: {
    mailBtnClass() {
      return this.activeView === 'mail' ? 'filled' : 'inactive'
    },
    artistBtnClass() {
      return this.activeView === 'artist' ? 'filled' : 'inactive'
    }
  },
  updated() {
    if (!this.activeArtist && !this.subject) {
      this.activeView = 'artist'
    }

    if (this.subject === 'contact-request') {
      this.activeView = 'mail'
      this.subject = undefined
    }
    console.log(this.subject)
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
    background: rgba(0, 0, 0, 0.5);

    .inner {
      background: white;
      padding: 25px;
      overflow-y: scroll;

      .information {
        position: relative;
        width: 100%;
        max-width: 768px;

        .close {
          position: absolute;
          right: 10px;
          top: 10px;
        }
      }
    }
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

.button-container {
  margin: 25px 0 0 0;

  button {
    font-size: 12px;
    letter-spacing: 1.5px;
    min-width: 250px;
    outline: none;
    border: 1px solid $gold;
    margin: 5px 0;
  }
}

@media(min-width: 768px) {
  button {
    margin: 0;
  }
  button:first-of-type {
    margin-right: 5px;
  }
}

.form-container {
  padding: 10px;
  width: 96%;
  max-width: 768px;
}

.smart-form {
  width: 100%;
  max-width: 768px;
}
</style>
