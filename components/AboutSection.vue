<template>
  <v-container id="about" fluid grid-list-lg>
    <v-container class="px-10 py-15">
      <v-layout row wrap>
        <v-flex sm12 md6 class="about-details">
          <p class="sub-heading">{{ subHeading }}</p>
          <h3 v-html="heading"></h3>
          <p>{{ paragraph1 }}</p>
          <p>{{ paragraph2 }}</p>
          <v-btn color="#a57355" to="/about" dark flat>{{ btnLabel }}</v-btn>
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
    paragraph1:
      process.env.ABOUT_PARAGRAPH_1 ||
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.',
    paragraph2:
      process.env.ABOUT_PARAGRAPH_2 ||
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
  color: #5f5f5f;

  .sub-heading {
    font-size: 14px;
    color: #a47355;
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
      background: #a47355;
      left: 0;
      top: 6px;
    }
    &:after {
      content: '';
      position: absolute;
      background: #a47355;
      top: 8px;
      left: 14px;
      height: 2px;
      opacity: 1;
      width: 50px;
      opacity: 0.5;
    }
  }

  h3 {
    font-size: 36px;
    font-weight: 400;
    line-height: 1.3em;
    margin-bottom: 33px;
    color: #1f1f1f;
  }

  p {
    font-size: 15px;
    color: #5f5f5f;
  }

  .v-image {
    margin: auto;
  }
}
</style>
