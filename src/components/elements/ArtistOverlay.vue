<template>
  <transition name="fade">
    <div
      class="overlay"
      id="menu-links-overlay"
      v-show="artistOverlayActive">

      <button
        @click="toggleArtistOverlay"
        v-show="artistOverlayActive"
        class="close"
        />

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
  ]
}
</script>

<style lang="scss">
@import '../../common/styles/index.scss';

#menu-links-overlay {
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
