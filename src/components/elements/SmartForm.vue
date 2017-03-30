<template>
  <form class="smart-form">
    <div class="form-object"
         v-for="field in fields">
      <label>{{ field.label }}</label>
      <div v-if="field.type === 'multi-number'"
           class="multi-input">
        <input type="number"
               v-model="field.height" /> x
        <input type="number"
               v-model="field.width" />
      </div>
      <textarea v-else-if="field.type === 'textarea'"
                v-model="field.input" />
      <input type="text"
             v-else
             v-model="field.input" />
    </div>
    <button class="stretch filled">
      ABSCHICKEN
    </button>
  </form>
</template>

<script>
export default {
  name: 'SmartForm',
  props: [
    'subject',
    'artist'
  ],
  data: () => ({
    fields: [
      {
        label: 'dein name',
        input: '',
        type: 'input'
      },
      {
        label: 'deine email addresse',
        input: '',
        type: 'email'
      },
      {
        label: 'körperstelle',
        input: '',
        type: 'input'
      },
      {
        label: 'ungefähre grösse in cm (breite x höhe)',
        height: '',
        width: '',
        type: 'multi-number'
      },
      {
        label: 'beschreibung des tattos',
        input: '',
        type: 'textarea'
      }
    ]
  }),
  methods: {
    prepareFormInput() {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/styles/index.scss';

.smart-form {
  .form-object {
    border: 1px solid $gold;
    padding: 15px;
    margin-bottom: 10px;

    label {
      text-transform: uppercase;
      display: block;
      margin-bottom: 5px;
    }

    input,
    textarea {
      font-family: Roboto;
      font-weight: 300;
      border: none;
      border-bottom: 1px solid $gold;
      padding: 10px 0 5px 0;
      outline: none;
      font-size: 18px;
      width: 100%;
    }

    .multi-input {
      input {
        width: 45px;
        text-align: center;
      }

      input:nth-of-type(2) {
        margin-left: 5px;
      }
    }
  }
}

.stretch {
  width: 100%;
  padding: 20px;
  font-size: 16px;
  letter-spacing: 2px;
}
</style>
