<template>
  <v-container fluid class="pa-0">
    <section id="services">
      <v-container>
        <section class="services-1">
          <v-container>
            <v-row class="py-8">
              <v-col>
                <div class="display-2 text-center">
                  Lorem ipsum dolor sit amet
                </div>
                <div class="title pb-4 text-center">
                  (consectetur adipisci elit)
                </div>

                <p class="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrum exercitationem ullamco
                  laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis
                  aute irure reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat
                  non proident, sunt in culpa qui officia deserunt mollit anim
                  id est laborum.
                </p>

                <h3>Ut enim ad minim veniam</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrum exercitationem ullamco
                  laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis
                  aute irure reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat
                  non proident, sunt in culpa qui officia deserunt mollit anim
                  id est laborum.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </section>

        <section class="services-2">
          <v-container>
            <v-row class="py-8">
              <v-col>
                <div class="display-2 text-center">
                  Lorem ipsum dolor sit amet
                </div>
                <div class="title pb-4 text-center">
                  (consectetur adipisci elit)
                </div>

                <p class="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrum exercitationem ullamco
                  laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis
                  aute irure reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat
                  non proident, sunt in culpa qui officia deserunt mollit anim
                  id est laborum.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </section>
      </v-container>
    </section>

    <contact-section></contact-section>
  </v-container>
</template>

<script>
export default {
  name: 'ServicesPage',
}
</script>

<style lang="scss" scoped>
#services {
  background-color: #f8f7ee;

  .services-1 {
    padding: 20px 30px;
    background-color: #cb997e;
    border-radius: 10px;
    margin-top: 20px;
  }
  .services-2 {
    margin-top: 20px;
    padding: 20px 30px;
    background-color: #b7b7a4;
    border-radius: 10px;
  }
}
</style>
