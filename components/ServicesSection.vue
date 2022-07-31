<template>
  <v-content id="services">
    <v-container class="px-10 py-15" fluid>
      <v-row>
        <v-col class="d-flex flex-column align-center">
          <div>
            <p class="sub-heading">{{ subHeading }}</p>
            <h2>{{ title }}</h2>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="4">
          <div class="service-item">
            <h4>{{ serviceTitle1 }}</h4>
            <p>{{ serviceDescription1 }}</p>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <div class="service-item">
            <h4>{{ serviceTitle2 }}</h4>
            <p>{{ serviceDescription2 }}</p>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <div class="service-item">
            <h4>{{ serviceTitle3 }}</h4>
            <p>{{ serviceDescription3 }}</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="services-link">
          <v-btn color="#a57355" to="/services" dark flat>{{ btnLabel }}</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'ServicesSection',
  data: () => ({
    subHeading: process.env.SERVICES_SUB_HEADING || 'Program offerings',
    title:
      process.env.SERVICES_TITLE || 'Personal & Individual therapy sessions.',
    serviceTitle1: process.env.SERVICES_TITLE_1 || 'Dating & Relationshio',
    serviceDescription1:
      process.env.SERVICES_DESCRIPTION_1 ||
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere sit amet mi consectetur condimentum. Quisque scelerisque tristique aliquam. Aenean tristique tellus ac ligula bibendum, ut facilisis elit mollis. Fusce vel ligula at magna venenatis venenatis. Phasellus gravida felis sit amet est commodo, porta posuere urna porta.',
    serviceTitle2: process.env.SERVICES_TITLE_2 || 'Grief & Loss Consueling',
    serviceDescription2:
      process.env.SERVICES_DESCRIPTION_2 ||
      'Etiam tincidunt massa non arcu consectetur aliquet a at nisl. Proin at volutpat lorem. Integer at nunc venenatis odio dapibus mattis et ut turpis.',
    serviceTitle3: process.env.SERVICES_TITLE_3 || 'Self Esteem Therapy',
    serviceDescription3:
      process.env.SERVICES_DESCRIPTION_3 ||
      'ivamus porta, felis bibendum suscipit viverra, felis eros malesuada ex, id dignissim lorem risus eget nunc. Fusce dapibus leo semper nisl tincidunt suscipit in a nunc. In tristique vehicula sapien non faucibus. Aliquam erat volutpat.',
    btnLabel: process.env.SERVICES_BTN_LABEL || 'Read more',
  }),
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
