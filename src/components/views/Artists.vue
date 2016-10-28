<template>
  <div id="artists">
    <div class="artist-list" v-for="artist in artists">
      <img :src="artist.mainImage" />
      <div class="artist-list__info">
        <h2>{{ artist.name }}</h2>
        <p v-for="p in artist.introParagraphs">
            {{ p }}
        </p>
        <div class="button-group">
            <button class="filled">{{ arbeit }}</button>
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
  data: () => ({
    artists,
    arbeit: 'Arbeit ansehen',
    kontakt: 'Nimm kontakt auf'
  })
}
</script>

<style lang="scss" scoped>
    #artists {
        margin: 75px auto;

        .artist-list {
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
        }
    }
</style>
