<template>
  <v-container fluid class="pa-0">
    <section id="services">
      <section class="services-1">
        <v-container>
          <v-row class="py-8">
            <v-col class="text-center">
              <div class="display-1 pb-4">Psicoterapia individuale</div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrum exercitationem ullamco
                laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute
                irure reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section class="services-2">
        <v-container>
          <v-row class="py-8">
            <v-col class="text-center">
              <div class="display-1 pb-4">Sostegno piscologico</div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrum exercitationem ullamco
                laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute
                irure reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section class="services-3">
        <v-container>
          <v-row class="py-8">
            <v-col class="text-center">
              <div class="display-1 pb-4">Supporto specialistico BES/DSA</div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrum exercitationem ullamco
                laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute
                irure reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </section>
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
  .services-1 {
    background-color: #b5e48c;
  }
  .services-2 {
    background-color: #99d98c;
  }
  .services-3 {
    background-color: #76c893;
  }
  .services-4 {
    background-color: #52b69a;
  }
}
</style>
