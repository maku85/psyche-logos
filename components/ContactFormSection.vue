<template>
  <section id="contact">
    <v-container class="section-content">
      <section id="contact">
        <v-container>
          <v-row class="contact-card">
            <v-col cols="12" xs="12" sm="5" class="pa-10 mt-8">
              <p class="sub-heading">{{ title }}</p>
              <h2 class="pb-8">{{ paragraph }}</h2>

              <v-list-item three-line class="mt-4 contact-box-1">
                <v-list-item-icon>
                  <v-icon> mdi-at</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="mb-3 title">{{
                    contactTitle1
                  }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <strong>{{ phoneLabel }}:</strong> {{ phone }}<br />
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <strong>Email:</strong> {{ email }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item three-line class="mt-4">
                <v-list-item-icon>
                  <v-icon> mdi-earth</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="mb-3 title">{{
                    contactTitle2
                  }}</v-list-item-title>
                  <v-list-item-subtitle v-html="address"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>

            <v-col cols="12" xs="12" sm="7" class="pa-0">
              <div class="contact-box text-center">
                <h4>{{ formTitle }}</h4>
                <p>{{ formSubtitle }}</p>
                <contact-form></contact-form>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-container>

    <div class="svg-border-waves text-white">
      <!-- <v-img src="~@/assets/img/borderWavesBlue.svg" /> -->
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
    contactTitle1: process.env.CONTACT_TITLE_1 || 'Let’s Talk',
    contactTitle2: process.env.CONTACT_TITLE_2 || 'Visiting here?',
    formTitle: process.env.CONTACT_FORM_TITLE || 'Write Your Queries',
    formSubtitle:
      process.env.CONTACT_FORM_SUB_TITLE ||
      'Submit your message and I will get in touch within one day.',
    phoneLabel: process.env.PHONE_LABEL || 'Phone',
    phone: process.env.PHONE_VALUE || '123-456-7890',
    email: process.env.EMAIL_VALUE || 'hi@restedminds.com',
    address:
      process.env.ADDRESS_VALUE ||
      '1870 Alpaca Way Irvine, New York, 92614. US',
    icons: ['fa-facebook', 'fa-twitter', 'fa-linkedin', 'fa-instagram'],
    snackbar: {
      enabled: false,
      text: '',
      color: '',
    },
  }),
  // beforeDestroy() {
  //   this.$recaptcha.destroy()
  // },
  // async mounted() {
  //   try {
  //     await this.$recaptcha.init()
  //   } catch (e) {
  //     console.error(e)
  //   }
  // },
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

  i {
    color: var(--accent);
    font-size: 42px;
  }

  .contact-box-1 {
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 15px !important;
  }

  .contact-box {
    border: 1px solid #eee;
    margin-top: 0px !important;
    background-color: #f7f5f5 !important;
    border-left-color: #ffffff !important;
    border-left-style: solid !important;
    border-right-color: #ffffff !important;
    border-right-style: solid !important;
    border-top-color: #ffffff !important;
    border-top-style: solid !important;
    border-bottom-color: #ffffff !important;
    border-bottom-style: solid !important;
    border-radius: 1px !important;
    padding: 50px;
    display: block;
    position: relative;
  }

  h4 {
    font-size: 24px;
    margin-bottom: 5px;
    color: #1f1f1f;
  }

  p {
    font-style: italic;
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
}
</style>
