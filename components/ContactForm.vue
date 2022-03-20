<template>
  <v-form ref="form" v-model="valid" :lazy-validation="lazy">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name*"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail*"
      required
    ></v-text-field>

    <v-textarea
      v-model="textArea"
      :rules="textAreaRules"
      label="Message*"
      required
    />

    <v-btn
      :disabled="!valid"
      color="#a57355"
      :dark="valid"
      rounded
      block
      class="mt-3"
      @click="submit"
    >
      Submit
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'O campo nome é obrigatório',
      (v) => (v && v.length >= 6) || 'O nome precisa ter mais de 6 caracteres',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'O campo email é obrigatório',
      (v) => /.+@.+\..+/.test(v) || 'O E-mail precisa ser válido',
    ],
    textArea: '',
    textAreaRules: [
      (v) => !!v || 'O campo de texto é obrigatório',
      (v) => (v && v.length >= 10) || 'Mínimo de 10 caracteres',
    ],
  }),
}
</script>
