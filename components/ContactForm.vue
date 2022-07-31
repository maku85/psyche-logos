<template>
  <v-form ref="form" v-model="valid" :lazy-validation="lazy">
    <v-text-field
      v-model="name"
      color="#a57355"
      :rules="nameRules"
      :label="nameLabel + '*'"
      required
      outlined
    ></v-text-field>

    <v-text-field
      v-model="email"
      color="#a57355"
      :rules="emailRules"
      :label="emailLabel + '*'"
      required
      outlined
    ></v-text-field>

    <v-textarea
      v-model="textArea"
      color="#a57355"
      :rules="textAreaRules"
      :label="textLabel + '*'"
      required
      outlined
    />

    <v-btn
      :disabled="!valid"
      color="#a57355"
      :dark="valid"
      block
      flat
      class="mt-3"
      @click="submit"
    >
      {{ btnLabel }}
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    valid: true,
    name: '',
    nameLabel: process.env.NAME_LABEL || 'Name',
    nameRules: [
      (v) =>
        !!v || process.env.ERROR_NAME_REQUIRED || 'The name field is required',
      (v) =>
        (v && v.length >= 3) ||
        process.env.ERROR_NAME_MIN_LENGTH ||
        'The name must be at least 3 characters long',
    ],
    email: '',
    emailLabel: process.env.EMAIL_LABEL || 'Email',
    emailRules: [
      (v) =>
        !!v ||
        process.env.ERROR_EMAIL_REQUIRED ||
        'The email field is required',
      (v) =>
        /.+@.+\..+/.test(v) ||
        process.env.ERROR_EMAIL_VALID ||
        'The email must be a valid address',
    ],
    textArea: '',
    textLabel: process.env.MESSAGE_LABEL || 'Message',
    textAreaRules: [
      (v) =>
        !!v || process.env.ERROR_TEXT_REQUIRED || 'The text field is required',
      (v) =>
        (v && v.length >= 10) ||
        process.env.ERROR_TEXT_MIN_LENGTH ||
        'The text must be at least 10 characters long',
    ],
    btnLabel: process.env.CONTACT_BTN_LABEL || 'Submit',
  }),
}
</script>
