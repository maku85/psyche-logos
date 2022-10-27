<template>
  <v-container id="about" class="section">
    <v-container class="section-content">
      <v-layout row wrap>
        <v-flex sm12 md6 class="about-details">
          <p class="sub-heading">{{ subHeading }}</p>
          <h2 class="font-weight-bold" v-html="heading"></h2>
          <p v-html="paragraph"></p>
          <v-btn
            class="font-weight-bold"
            color="accent"
            to="/about"
            dark
            text
            >{{ btnLabel }}</v-btn
          >
        </v-flex>

        <v-flex sm12 md6 class="about-image hidden-sm-and-down">
          <v-img
            height="450px"
            width="300px"
            src="https://static.wixstatic.com/media/45d10e_b36296a05b06453dbc07e3dfb0c9c023~mv2_d_2556_2572_s_4_2.jpg/v1/fill/w_488,h_918,al_c,q_85,usm_0.66_1.00_0.01/45d10e_b36296a05b06453dbc07e3dfb0c9c023~mv2_d_2556_2572_s_4_2.webp"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    subHeading: process.env.ABOUT_SUB_HEADING || 'Let me introduce',
    heading:
      process.env.ABOUT_HEADING ||
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.',
    paragraph:
      process.env.ABOUT_PARAGRAPH ||
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.',
    btnLabel: process.env.ABOUT_BTN_LABEL || 'about me',
  }),
}
</script>

<style lang="scss" scoped>
#about {
  background: url('/brush-effect-1-1.png');
  background-size: 100%;
  padding: 100px 0;

  .v-image {
    margin: auto;
  }
}
</style>
