<template>
  <v-content id="services" grid-list-lg class="text-center">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 class="service-box-1 text-center">
          <div class="px-5 py-15">
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
              eget velit eu dui tristique lobortis sit amet vel tellus.
            </p>
            <v-btn to="/services" text>read more ></v-btn>
          </div>
        </v-flex>

        <v-flex xs12 sm6 class="service-box-2 text-center">
          <div class="px-5 py-15">
            <h3>Nullam mauris felis</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
              eget velit eu dui tristique lobortis sit amet vel tellus.
            </p>
            <v-btn to="/services" text>leggi altro ></v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'ServicesSection',
}
</script>

<style lang="scss" scoped>
#services {
  background-color: #f8f7ee;

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
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #cb997e;
    padding: 10px;
  }
  .service-box-2 {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #b7b7a4;
    padding: 10px;
  }
}
</style>
