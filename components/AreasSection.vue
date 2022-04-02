<template>
  <v-container id="approach">
    <v-row>
      <v-col cols="12" xs="6" sm="6">
        <div class="card-1">
          <h3 class="box-title">How can I help you?</h3>
          <p class="subheading mt-3">
            If you’re experiencing any kind of mental illness or problem in
            relations.
          </p>
          <v-btn color="#a47355" dark text to="/services"
            >explore services</v-btn
          >
        </div>
      </v-col>

      <v-col cols="12" xs="12" sm="6">
        <div class="card-2">
          <h3 class="box-title">Call for Consultation</h3>
          <div class="d-flex align-center mt-8">
            <div class="mr-5">
              <v-icon>mdi-phone</v-icon>
            </div>
            <div>
              <div class="text-dimmer">Dial now</div>
              <div class="text-phone">921-124-9220</div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeDetails',
}
</script>

<style lang="scss" scoped>
#approach {
  margin-top: -120px;
  color: #5f5f5f;

  .card-1,
  .card-2 {
    border-radius: 8px;
    padding-top: 50px !important;
    padding-right: 35px !important;
    padding-bottom: 50px !important;
    padding-left: 35px !important;
    box-shadow: 0px 6px 60px 0px rgb(51 51 51 / 10%);
  }

  .card-1 {
    background: #ffffff;
  }

  .card-2 {
    color: #fff;
    background: #6f4839;
    opacity: 0.9;

    p {
      opacity: 0.7;
    }

    i {
      font-size: 50px;
    }

    .text-dimmer {
      color: #fff;
      font-weight: bold;
      font-size: 15px;
      letter-spacing: 1px;
      margin-bottom: 0;
      margin-top: 5px;
      opacity: 0.7;
      text-transform: uppercase;
    }

    .text-phone {
      font-size: 23px;
      line-height: 30px;
      font-weight: 800;
      color: #fff;
    }
  }

  .box-title {
    font-size: 23px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
}
</style>
