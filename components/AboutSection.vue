<template>
  <section id="about" class="section">
    <v-container class="section-content">
      <v-row>
        <v-col cols="12" md="6" class="about-details">
          <p class="sub-heading">{{ subHeading }}</p>
          <h2 class="font-weight-bold" v-html="heading"></h2>
          <p v-html="paragraph"></p>

          <v-btn
            class="font-weight-bold mt-5"
            color="accent"
            to="/about"
            variant="flat"
            >{{ btnLabel }}</v-btn
          >
        </v-col>

        <v-col
          cols="12"
          md="6"
          class="about-image hidden-sm-and-down d-flex flex-column align-center"
        >
          <v-img
            height="450px"
            width="400px"
            cover
            position="center"
            src="https://static.wixstatic.com/media/45d10e_b36296a05b06453dbc07e3dfb0c9c023~mv2_d_2556_2572_s_4_2.jpg/v1/fill/w_488,h_918,al_c,q_85,usm_0.66_1.00_0.01/45d10e_b36296a05b06453dbc07e3dfb0c9c023~mv2_d_2556_2572_s_4_2.webp"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
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
}
</style>
