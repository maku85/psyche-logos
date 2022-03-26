<template>
  <v-content id="services">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <div class="px-5 py-15">
            <p class="sub-heading">My practice</p>
            <h2>Personal & Individual therapy sessions.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
              eget velit eu dui tristique lobortis sit amet vel tellus.
            </p>
            <v-btn to="/services" text>leggi altro</v-btn>
          </div>
        </v-col>

        <v-col cols="12" sm="12" md="6">
          <v-layout row wrap class="px-5 py-15 mt-4">
            <v-flex sm12 md6 class="service-block">
              <h4><v-icon color="#a57355">mdi-star</v-icon> Adults</h4>
              <p>
                Life-changing sessions for adults, no matter what age group they
                belong to.
              </p>
            </v-flex>
            <v-flex sm12 md6 class="service-block">
              <h4><v-icon color="#a57355">mdi-star</v-icon> Children</h4>
              <p>
                A special session for your kids regarding personal problems and
                study.
              </p>
            </v-flex>
            <v-flex sm12 md6 class="service-block">
              <h4><v-icon color="#a57355">mdi-star</v-icon> Families</h4>
              <p>
                Join me with your family and we’ll dicuss your issues to make
                your bonds better.
              </p>
            </v-flex>
            <v-flex sm12 md6 class="service-block">
              <h4><v-icon color="#a57355">mdi-star</v-icon> Business</h4>
              <p>
                Arrange a business session for your organization to boost the
                outcome.
              </p>
            </v-flex>
          </v-layout>
        </v-col>
      </v-row>
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
  background-color: #151110;
  border-top: 5px solid #a47355;
  color: #fff;

  .sub-heading {
    font-size: 14px;
    color: #fff;
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
      background: #fff;
      left: 0;
      top: 6px;
    }
    &:after {
      content: '';
      position: absolute;
      background: #fff;
      top: 8px;
      left: 14px;
      height: 2px;
      opacity: 1;
      width: 50px;
      opacity: 0.5;
    }
  }

  h2 {
    font-size: 36px;
    font-weight: 400;
    line-height: 1.3em;
    margin-bottom: 33px;
  }

  p {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.75);
  }

  .service-block {
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 22px;

    h4 {
      font-size: 19px;
      color: #fff;
      font-weight: 600;
      margin-top: 0;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    p {
      font-size: 15px;
      color: #fff;
      font-weight: 600;
      opacity: 0.7;
    }
  }
}
</style>
