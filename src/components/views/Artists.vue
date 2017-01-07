<template>
  <div id="artists">
    <div class="artist" v-for="artist in artists">
      <img :src="artist.mainImage" />
      <div class="artist__info">
        <h2>{{ artist.name }}</h2>
        <p v-for="p in artist.introParagraphs">
            {{ p }}
        </p>
        <div class="button-group">
            <button
              @click="toggleArtistOverlay(artist)"
              class="filled">{{ arbeit }}</button>
            <button>{{ kontakt }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import artists from '../../common/config/artists'
export default {
  name: 'Artists',
  props: [
    'toggleArtistOverlay'
  ],
  data: () => ({
    artists,
    arbeit: 'Arbeit ansehen',
    kontakt: 'Nimm kontakt auf'
  })
}
</script>

<style lang="scss" scoped>
@import '../../common/styles/index';
    #artists {
        margin: 75px auto;

        .artist {
            margin-bottom: 35px;
            background: $grey;

            h2,
            p {
                font-size: 14px;
                letter-spacing: 1px;
            }

            h2 {
                text-transform: uppercase;
                font-weight: bold;
                margin-bottom: 40px;
            }

            p {
                color: black;
                font-family: 'Roboto', sans-serif;
                line-height: 24px;

                &:last-of-type {
                    margin-bottom: 40px;
                }
            }

            &__info {
                padding: 20px;
            }

            @media(min-width: 768px) {
                display: flex;

                h2 {
                  margin-bottom: 20px;
                  /* TODO: how to add line to the other side of the name? */
                }

                &:nth-child(even) {
                    flex-direction: row-reverse;
                }

                img {
                    max-height: 330px;
                }

                &__info {
                    max-width: 412px;
                    padding: 20px 20px 0 20px;
                }
            }

            @media(min-width: 1024px) {
              img {
                  max-width: 547px;
                  max-height: 642px;
              }

              &__info {
                padding: 20px;
                margin: 50px auto auto auto;
              }
            }
        }
    }
</style>
