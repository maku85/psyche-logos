<template>
  <v-content grid-list-lg id="services" class="text-center">
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 class="service-box-1 text-center">
        <div class="px-5 py-15">
          <h3>Individual Psychotherapy</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget
            velit eu dui tristique lobortis sit amet vel tellus.
          </p>
          <v-btn to="/services" text>leggi altro</v-btn>
        </div>
      </v-flex>

      <v-flex xs12 sm6 md3 class="service-box-2 text-center">
        <div class="px-5 py-15">
          <h3>Couples Therapy</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget
            velit eu dui tristique lobortis sit amet vel tellus.
          </p>
          <v-btn to="/services" text>leggi altro</v-btn>
        </div>
      </v-flex>

      <v-flex xs12 sm6 md3 class="service-box-3 text-center">
        <div class="px-5 py-15">
          <h3>Sex Therapy</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget
            velit eu dui tristique lobortis sit amet vel tellus.
          </p>
          <v-btn to="/services" text>leggi altro</v-btn>
        </div>
      </v-flex>

      <v-flex xs12 sm6 md3 class="service-box-4 text-center">
        <div class="px-5 py-15">
          <h3>Family Therapy</h3>
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
    background-color: #ccc6c6;
  }
  .service-box-2 {
    background-color: #f0eded;
  }
  .service-box-3 {
    background-color: #fadcd6;
  }
  .service-box-4 {
    background-color: #e5c7b5;
  }
}
</style>