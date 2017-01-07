<template>
  <transition name="fade">
    <div
      class="overlay white"
      id="artist-info-overlay"
      v-if="artistOverlayActive">

      <div class="inner">
        <div class="information">
          <button
            @click="toggleArtistOverlay"
            v-show="artistOverlayActive"
            class="close"
            >
            <img src="/static/icons/close.png" />
          </button>

          <h1>{{ activeArtist.name }}</h1>
          <p>
            {{ activeArtist.introParagraphs[0] }}
          </p>

        </div>
        <div class="images" v-for="img in activeArtist.popupImages">
          <img :src="img" />
        </div>
      </div>

    </div>
  </transition>
</template>

<script>
export default {
  name: 'ArtistOverlay',
  props: [
    'toggleArtistOverlay',
    'activeArtist',
    'artistOverlayActive'
  ],
  updated () {
    console.log(this.activeArtist)
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/styles/index.scss';

#artist-info-overlay {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @media(min-width: 1024px) {
    padding: 50px;
  }

  @media(min-width: 768px) {
    padding: 25px;

    .inner .information {
      position: relative;
      .close {
        position: absolute;
        right: 10px;
        top: 10px;
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
</style>
