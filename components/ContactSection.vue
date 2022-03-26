<template>
  <section id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h3>Contat me</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                explicabo commodi quisquam asperiores dolore ad enim provident
                veniam perferendis voluptate, perspiciatis.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Telefone: +xx (xx) xxxxx-xxxx</p>
              <p>Email: email@email.com</p>
            </v-col>

            <v-col cols="12" sm="7">
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Name"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  required
                ></v-text-field>

                <v-textarea
                  v-model="textArea"
                  :rules="textAreaRules"
                  label="Write your message..."
                  required
                />

                <v-btn
                  :disabled="!valid"
                  color="primary"
                  :dark="valid"
                  rounded
                  block
                  class="mt-3"
                  @click="submit"
                >
                  Submit
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg" />
    </div>
    <v-snackbar
      v-model="snackbar.enabled"
      timeout="3000"
      right
      top
      :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template #action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.enabled = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<script>
export default {
  data: () => ({
    icons: ['fa-facebook', 'fa-twitter', 'fa-linkedin', 'fa-instagram'],
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
    lazy: false,
    snackbar: {
      enabled: false,
      text: '',
      color: '',
    },
  }),
  methods: {
    submit() {},
  },
}
</script>

<style lang="scss" scoped>
#contact {
  background-color: #f8f7ee;
  padding: 100px 0;

  h3 {
    font-size: 36px;
    font-weight: 400;
    line-height: 1.3em;
    margin-bottom: 33px;
  }

  p {
    font-size: 15px;
    color: #666;
  }

  .svg-border-waves .v-image {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3rem;
    width: 100%;
    overflow: hidden;
  }

  .v-btn {
    background-color: #a37b73 !important;
    border-color: #a37b73 !important;
  }
}
</style>
