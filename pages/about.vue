<template>
  <v-container fluid class="pa-0">
    <section id="about" class="pa-10">
      <v-container>
        <v-row class="py-8">
          <v-col cols="12" sm="12" md="6">
            <v-img
              width="350"
              src="https://static.wixstatic.com/media/45d10e_b36296a05b06453dbc07e3dfb0c9c023~mv2_d_2556_2572_s_4_2.jpg/v1/fill/w_750,h_752,al_c,q_85,usm_0.66_1.00_0.01/45d10e_b36296a05b06453dbc07e3dfb0c9c023~mv2_d_2556_2572_s_4_2.webp"
            />
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <p class="sub-heading">Story of my life</p>
            <div class="display-1 pb-4">About me</div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrum exercitationem ullamco laboriosam,
              nisi ut aliquid ex ea commodi consequatur. Duis aute irure
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrum exercitationem ullamco laboriosam,
              nisi ut aliquid ex ea commodi consequatur. Duis aute irure
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <separator></separator>

    <contact-section></contact-section>
  </v-container>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style lang="scss" scoped>
#about {
  background: url(http://www.slashcreative.co/themes/psychare/wp-content/uploads/2020/11/form-bg-pattern.png?id=432);

  .v-image {
    margin: auto;
    border-radius: 10px;
  }

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
}
</style>
