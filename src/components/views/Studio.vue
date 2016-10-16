<template>
  <div name="studio" class="studio">
    <p class="studio__about"> {{ aboutText }} </p>
  </div>
</template>

<script>
export default {
  name: 'MenuLinks',
  data: () => ({
    aboutText: 'immer und ewig tattooing seit mehr als 6 jahren für höchste qualität und kreativität. 5 feste tatoowierer stehen euch zur verfügung. von oldschool tattoos bis modern zeugs.'
  })
}
</script>

<style lang="scss">
.studio {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;

  background: #ffffff;
  background: -moz-linear-gradient(left, #ffffff 0%, #ffffff 50%, #F7F7F7 50%, #F7F7F7 50%, #F7F7F7 100%);
  background: -webkit-linear-gradient(left, #ffffff 0%,#ffffff 50%,#F7F7F7 50%,#F7F7F7 50%,#F7F7F7 100%);
  background: linear-gradient(to right, #ffffff 0%,#ffffff 50%,#F7F7F7 50%,#F7F7F7 50%,#F7F7F7 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#F7F7F7',GradientType=1 );

  &__about {
    text-transform: uppercase;
    color: black;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 12px;
    text-align: center;
    max-width: 500px;
    line-height: 24px;
  }
}

</style>
