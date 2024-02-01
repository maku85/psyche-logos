<template>
  <section id="areas" class="section">
    <v-container class="section-content">
      <v-row>
        <v-col cols="12" sm="12" md="5" class="mr-10">
          <div>
            <p class="white-sub-heading">{{ subHeading }}</p>
            <h2 class="heading">{{ heading }}</h2>
            <p class="white--text">{{ paragraph }}</p>
            <v-btn color="accent" to="/services" variant="flat">{{
              btnLabel
            }}</v-btn>
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
              <h4 class="section-title">
                <v-icon color="accent">mdi-circle-small</v-icon> {{ approach }}
              </h4>
            </v-flex>
          </v-layout>
        </v-col>
      </v-row>
    </v-container>
  </section>
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
  border-top: 5px solid var(--accent);

  .heading {
    font-size: 33px;
    color: #fff;
    line-height: 43px;
  }

  p {
    margin-bottom: 16px !important;
    font-weight: 600 !important;
    color: rgba(255, 255, 255, 0.75);
  }

  .section-title {
    color: #fff;
  }

  .service-block {
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 22px;
  }
}
</style>
