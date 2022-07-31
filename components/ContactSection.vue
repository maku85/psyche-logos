<template>
  <section id="contact">
    <v-container class="px-10 py-15">
      <div class="contact-card">
        <v-row class="d-flex" align-items="center">
          <v-col cols="12" sm="5" class="px-10 py-15">
            <h3>{{ title }}</h3>
            <p>{{ paragraph }}</p>
          </v-col>

          <v-col cols="12" sm="7" class="py-0">
            <div class="contact-box text-center">
              <contact-form class="py-5"></contact-form>
            </div>
          </v-col>
        </v-row>
      </div>
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
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<script>
export default {
  data: () => ({
    title: process.env.CONTACT_TITLE || 'Contact me',
    paragraph:
      process.env.CONTACT_PARAGRAPH ||
      'Submit your message and I will get in touch within one day.',
    icons: ['fa-facebook', 'fa-twitter', 'fa-linkedin', 'fa-instagram'],
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

  .contact-card {
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0px 6px 60px 0px rgb(51 51 51 / 10%);
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
