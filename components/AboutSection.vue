<template>
  <v-container id="about" fluid grid-list-lg>
    <v-container>
      <v-layout row wrap>
        <v-flex sm12 md6 class="about-details">
          <div class="px-5 py-15">
            <p class="sub-heading">Let me introduce</p>
            <h3>
              I’m Dr. Susan Lopez - Expert <em>Psychologist</em> from New York.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Diam nascetur ad varius curabitur ante donec
              de proin auctor felis hendrerit.
            </p>
            <v-btn color="#a47355" text to="/about">about me ></v-btn>
          </div>
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
