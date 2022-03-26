<template>
  <section id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h3>Contact me</h3>
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
              <<<<<<< HEAD
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
              =======
              <div class="contact-box text-center">
                <contact-form></contact-form>
              </div>
              >>>>>>> 6a2bf7501fbf8aed0cf64da07ae22c33346f6a9e
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
  beforeDestroy() {
    this.$recaptcha.destroy()
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    async submit() {
      try {
        const token = await this.$recaptcha.execute('login')
        console.log('ReCaptcha token:', token)

        // send token to server alongside your form data
      } catch (error) {
        console.log('Login error:', error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#contact {
  background: url(http://www.slashcreative.co/themes/psychare/wp-content/uploads/2020/11/form-bg-pattern.png?id=432);
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

  .contact-box {
    border-top-width: 1px !important;
    border-right-width: 1px !important;
    border-bottom-width: 1px !important;
    border-left-width: 1px !important;
    padding-top: 50px !important;
    padding-right: 50px !important;
    padding-bottom: 20px !important;
    padding-left: 50px !important;
    border-left-color: #eeeeee !important;
    border-left-style: solid !important;
    border-right-color: #eeeeee !important;
    border-right-style: solid !important;
    border-top-color: #eeeeee !important;
    border-top-style: solid !important;
    border-bottom-color: #eeeeee !important;
    border-bottom-style: solid !important;
    background-color: #f7f5f5;
  }
}
</style>
