<template>
  <v-content id="services">
    <v-container class="px-15 py-15" fluid>
      <v-row>
        <v-col class="d-flex flex-column align-center">
          <div>
            <p class="sub-heading">Service offerings</p>
            <h2>Personal & Individual therapy sessions</h2>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="4">
          <div class="service-item">
            <h4>Dating & Relationship</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
              eget velit eu dui tristique lobortis sit amet vel tellus.
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <div class="service-item">
            <h4>Grief & Loss Consueling</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
              eget velit eu dui tristique lobortis sit amet vel tellus.
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <div class="service-item">
            <h4>Self Esteem Therapy</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
              eget velit eu dui tristique lobortis sit amet vel tellus.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="services-link">
          <v-btn color="#a57355" to="/services" dark flat>read more</v-btn>
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

  h2 {
    font-size: 33px;
    line-height: 43px;
  }

  .service-item {
    border-radius: 8px;
    border: 1px solid #eee;
    box-shadow: 0px 6px 60px 0px rgb(31 31 31 / 5%);
    padding: 20px 40px;

    h4 {
      font-size: 19px;
      font-weight: 700;
      color: #1f1f1f;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      color: #5f5f5f;
    }
  }

  .services-link {
    text-align: center;
  }
}
</style>
