<template>
  <v-container fluid grid-list-lg id="about">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 class="about-details text-center">
          <div class="px-5 py-15">
            <h3>About me</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrum exercitationem ullamco laboriosam,
              nisi ut aliquid ex ea commodi consequatur. Duis aute irure
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <v-btn text to="/about">leggi altro </v-btn>
          </div>
        </v-flex>

        <v-flex xs12 sm6 class="about-image">
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

<style lang="scss" scoped>
#about {
  background-color: #ccc6c6;
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

  .v-image {
    margin: auto;
  }
}
</style>