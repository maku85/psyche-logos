<template>
  <v-content id="services" grid-list-lg class="text-center">
    <v-layout row wrap>
      <v-flex xs12 sm4 class="service-box-1 text-center">
        <div class="px-5 py-15">
          <h3>Psicoterapia individuale</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget
            velit eu dui tristique lobortis sit amet vel tellus.
          </p>
          <v-btn to="/services" text>leggi altro</v-btn>
        </div>
      </v-flex>

      <v-flex xs12 sm4 class="service-box-2 text-center">
        <div class="px-5 py-15">
          <h3>Sostegno piscologico</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget
            velit eu dui tristique lobortis sit amet vel tellus.
          </p>
          <v-btn to="/services" text>leggi altro</v-btn>
        </div>
      </v-flex>

      <v-flex xs12 sm4 class="service-box-3 text-center">
        <div class="px-5 py-15">
          <h3>Supporto specialistico BES/DSA</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget
            velit eu dui tristique lobortis sit amet vel tellus.
          </p>
          <v-btn to="/services" text>leggi altro</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  name: 'ServicesSection',
}
</script>

<style lang="scss" scoped>
#services {
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

  .service-box-1 {
    background-color: #b5e48c;
  }
  .service-box-2 {
    background-color: #99d98c;
  }
  .service-box-3 {
    background-color: #76c893;
  }
  .service-box-4 {
    background-color: #52b69a;
  }
}
</style>
