<template>
  <v-container fluid class="pa-0">
    <section id="about" class="pa-10">
      <v-container>
        <v-row class="py-8">
          <v-col class="text-center">
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

        <v-row>
          <v-col>
            <v-layout row>
              <v-flex xs12 sm6>
                <v-img
                  width="350"
                  src="https://static.wixstatic.com/media/45d10e_b36296a05b06453dbc07e3dfb0c9c023~mv2_d_2556_2572_s_4_2.jpg/v1/fill/w_750,h_752,al_c,q_85,usm_0.66_1.00_0.01/45d10e_b36296a05b06453dbc07e3dfb0c9c023~mv2_d_2556_2572_s_4_2.webp"
                />
              </v-flex>
              <v-flex xs12 sm6>
                <ul>
                  <li>Depression</li>
                  <li>Anxiety and Phobias</li>
                  <li>Relationship&nbsp;Difficulties</li>
                  <li>Life Transitions</li>
                  <li>Difficulties with Self-Esteem</li>
                  <li>Eating Issues</li>
                  <li>Obsessive Compulsive Disorder (OCD)</li>
                  <li>Post-Traumatic Stress Disorder</li>
                  <li>Professional/Career Issues</li>
                  <li>College/Graduate School Issues</li>
                  <li>Medical and Health Concerns</li>
                  <li>Pain Management&nbsp;</li>
                  <li>Stress Management</li>
                  <li>Attention Deficit Disorder (ADD)</li>
                </ul>
              </v-flex>
            </v-layout>
          </v-col>
        </v-row>
      </v-container>
    </section>

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
  background-color: #f0eded;

  .v-image {
    margin: auto;
  }
}
</style>
