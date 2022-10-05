<template>
  <v-content id="areas">
    <v-container class="px-10 py-15">
      <v-row>
        <v-col cols="12" sm="12" md="5" class="mr-10">
          <div>
            <p class="sub-heading">{{ subHeading }}</p>
            <h2>{{ heading }}</h2>
            <p>{{ paragraph }}</p>
            <v-btn to="/services" text>{{ btnLabel }}</v-btn>
          </div>
        </v-col>

        <v-col cols="12" sm="12" md="6">
          <v-layout row wrap>
            <v-flex
              v-for="(approach, i) in approaches"
              :key="i"
              sm12
              md6
              class="service-block"
            >
              <h4>
                <v-icon color="#a57355">mdi-circle-small</v-icon> {{ approach }}
              </h4>
            </v-flex>
          </v-layout>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'ApproachSection',
  data: () => ({
    subHeading: process.env.APPROACH_SUB_HEADING || 'MY PRACTICE',
    heading:
      process.env.APPROACH_HEADING || 'Personal & Individual therapy sessions.',
    paragraph:
      process.env.APPROACH_PARAGRAPH ||
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.',
    btnLabel: process.env.APPROACH_BTN_LABEL || 'read more',
    approaches: (
      process.env.APPROACHES || 'Adults, Family, Children, Business'
    ).split(';'),
  }),
}
</script>

<style lang="scss" scoped>
#areas {
  background-color: #151110;
  border-top: 5px solid #a47355;
  color: #fff;

  .sub-heading {
    font-size: 14px;
    color: #fff;
    line-height: 1.2;
    text-align: left;
    font-weight: 800;
    padding-left: 88px;
    letter-spacing: 1.2px;
    position: relative;
    text-transform: uppercase;
    margin-top: 0;
    &:before {
      content: '';
      position: absolute;
      height: 6px;
      width: 6px;
      border-radius: 50%;
      background: #fff;
      left: 0;
      top: 6px;
    }
    &:after {
      content: '';
      position: absolute;
      background: #fff;
      top: 8px;
      left: 14px;
      height: 2px;
      opacity: 1;
      width: 50px;
      opacity: 0.5;
    }
  }

  h2 {
    font-size: 36px;
    font-weight: 400;
    line-height: 1.3em;
    margin-bottom: 33px;
  }

  p {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.75);
  }

  .service-block {
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 22px;

    h4 {
      font-size: 19px;
      color: #fff;
      font-weight: 500;
      margin-top: 0;
    }

    p {
      font-size: 15px;
      color: #fff;
      font-weight: 600;
      opacity: 0.7;
    }
  }
}
</style>
