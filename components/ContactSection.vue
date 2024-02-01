<template>
  <section id="contact">
    <v-container class="section-content">
      <v-row>
        <v-col>
          <div class="d-flex flex-column align-center">
            <p class="sub-heading">{{ subHeading }}</p>
            <h2>{{ title }}</h2>
          </div>
        </v-col>
      </v-row>

      <v-row class="contact-card">
        <v-col cols="12" sm="4" class="pa-10 mt-6">
          <v-row>
            <v-col cols="2">
              <v-icon> mdi-at</v-icon>
            </v-col>
            <v-col cols="10">
              <v-list-item>
                <v-list-item-content class="contact-box-1">
                  <v-list-item-title>
                    {{ contactTitle1 }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <strong>{{ phoneLabel }}:</strong> {{ phone }}<br />
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <strong>Email:</strong> {{ email }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="4" class="pa-10 mt-6">
          <v-row>
            <v-col cols="2">
              <v-icon> mdi-earth</v-icon>
            </v-col>
            <v-col cols="10">
              <v-list-item>
                <v-list-item-content class="contact-box-1">
                  <v-list-item-title>
                    {{ contactTitle2 }}
                  </v-list-item-title>
                  <v-list-item-subtitle v-html="address"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="4" class="pa-10 mt-6">
          <v-row>
            <v-col cols="2">
              <v-icon> mdi-at</v-icon>
            </v-col>
            <v-col cols="10">
              <v-list-item>
                <v-list-item-content class="contact-box-1">
                  <v-list-item-title>
                    {{ contactTitle3 }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <strong>{{ timingRowLabel1 }}</strong
                    >&nbsp;{{ timingRowValue1 }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <strong>{{ timingRowLabel2 }}</strong
                    >&nbsp;{{ timingRowValue2 }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <strong>{{ timingRowLabel3 }}</strong
                    >&nbsp;{{ timingRowValue3 }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    subHeading: process.env.CONTACT_PARAGRAPH || 'Get in touch',
    title: process.env.CONTACT_TITLE || 'Here where you can find me',
    contactTitle1: process.env.CONTACT_TITLE_1 || 'Let’s Talk',
    contactTitle2: process.env.CONTACT_TITLE_2 || 'Visiting here?',
    contactTitle3: process.env.CONTACT_TITLE_3 || 'My Timings',
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
    timingRowLabel1: process.env.TIMING_ROW_LABEL_1 || 'Mon - Fri:',
    timingRowValue1: process.env.TIMING_ROW_VALUE_1 || '(9 am to 6 pm)',
    timingRowLabel2: process.env.TIMING_ROW_LABEL_2 || 'Sat:',
    timingRowValue2: process.env.TIMING_ROW_VALUE_2 || '(10 am to 5 pm)',
    timingRowLabel3: process.env.TIMING_ROW_LABEL_3 || 'Sunday:',
    timingRowValue3: process.env.TIMING_ROW_VALUE_3 || '(Closed)',
    icons: ['fa-facebook', 'fa-twitter', 'fa-linkedin', 'fa-instagram'],
    snackbar: {
      enabled: false,
      text: '',
      color: '',
    },
  }),
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
    &:before {
      content: '';
      position: absolute;
      right: -4px;
      top: -10px;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background: var(--accent);
    }
    &:after {
      content: '';
      position: absolute;
      right: 0;
      height: 100%;
      top: 6px;
      border-right: 2px dashed rgb(165 115 85/15%);
    }
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
