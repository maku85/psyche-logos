<template>
  <v-container id="approach">
    <v-row>
      <v-col cols="12" xs="6" sm="6">
        <div class="card-1">
          <h3 class="box-title">{{ helpTitle }}</h3>
          <p class="subheading mt-3">{{ helpParagraph }}</p>
          <v-btn color="#a47355" dark text to="#areas">{{
            helpBtnLabel
          }}</v-btn>
        </div>
      </v-col>

      <v-col cols="12" xs="12" sm="6">
        <div class="card-2">
          <h3 class="box-title">{{ contactTitle }}</h3>
          <div class="d-flex align-center mt-4">
            <div class="mr-5">
              <v-btn class="btn-call" large fab dark>
                <v-icon>mdi-phone</v-icon>
              </v-btn>
            </div>
            <div>
              <div class="text-dimmer">{{ contactText }}</div>
              <div class="text-phone">{{ phone }}</div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeDetails',
  data: () => ({
    helpTitle: process.env.CARD_HELP_TITLE || 'How can I help you?',
    helpParagraph:
      process.env.CARD_HELP_PARAGRAPH ||
      'If you’re experiencing any kind of mental illness or problem in relations.',
    helpBtnLabel: process.env.CARD_HELP_BTN_LABEL || 'Explore services',
    contactTitle: process.env.CARD_CONTACT_TITLE || 'Call for Consultation',
    contactText: process.env.CARD_CONTACT_TEXT || 'Dial now',
    phone: process.env.PHONE_VALUE || '123-456-7890',
  }),
}
</script>

<style lang="scss" scoped>
#approach {
  margin-top: -120px;
  color: #5f5f5f;

  .card-1,
  .card-2 {
    border-radius: 8px;
    padding-top: 40px !important;
    padding-right: 35px !important;
    padding-bottom: 40px !important;
    padding-left: 35px !important;
    box-shadow: 0px 6px 60px 0px rgb(51 51 51 / 10%);
  }

  .card-1 {
    background: #ffffff;
  }

  .card-2 {
    color: #fff;
    background: #6f4839;
    opacity: 0.9;

    p {
      opacity: 0.7;
    }

    i {
      font-size: 50px;
    }

    .btn-call {
      background-color: #a47355;
    }

    .text-dimmer {
      color: #fff;
      font-weight: bold;
      font-size: 15px;
      letter-spacing: 1px;
      margin-bottom: 0;
      margin-top: 5px;
      opacity: 0.7;
      text-transform: uppercase;
    }

    .text-phone {
      font-size: 23px;
      line-height: 30px;
      font-weight: 800;
      color: #fff;
    }
  }

  .box-title {
    font-size: 23px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
}
</style>
