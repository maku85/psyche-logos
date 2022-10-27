<template>
  <v-content id="services" class="section">
    <v-container class="px-10 py-15 section-content">
      <v-row>
        <v-col class="d-flex flex-column align-center">
          <div>
            <p class="sub-heading">{{ subHeading }}</p>
            <h2>{{ title }}</h2>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(service, i) in services"
          :key="i"
          cols="12"
          sm="12"
          md="4"
        >
          <div class="service-item">
            <h4>{{ service.title }}</h4>
            <p>{{ service.description }}</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="services-link">
          <v-btn color="accent" to="/services" dark text>{{ btnLabel }}</v-btn>
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
    services: [
      {
        title: process.env.SERVICES_TITLE_1 || 'Dating & Relationshio',
        description:
          process.env.SERVICES_DESCRIPTION_1 ||
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere sit amet mi consectetur condimentum. Quisque scelerisque tristique aliquam. Aenean tristique tellus ac ligula bibendum, ut facilisis elit mollis. Fusce vel ligula at magna venenatis venenatis. Phasellus gravida felis sit amet est commodo, porta posuere urna porta.',
      },
      {
        title: process.env.SERVICES_TITLE_2 || 'Grief & Loss Consueling',
        description:
          process.env.SERVICES_DESCRIPTION_2 ||
          'Etiam tincidunt massa non arcu consectetur aliquet a at nisl. Proin at volutpat lorem. Integer at nunc venenatis odio dapibus mattis et ut turpis.',
      },
      {
        title: process.env.SERVICES_TITLE_3 || 'Self Esteem Therapy',
        description:
          process.env.SERVICES_DESCRIPTION_3 ||
          'ivamus porta, felis bibendum suscipit viverra, felis eros malesuada ex, id dignissim lorem risus eget nunc. Fusce dapibus leo semper nisl tincidunt suscipit in a nunc. In tristique vehicula sapien non faucibus. Aliquam erat volutpat.',
      },
    ],
    btnLabel: process.env.SERVICES_BTN_LABEL || 'Read more',
  }),
}
</script>

<style lang="scss" scoped>
#services {
  h2 {
    font-size: 33px;
    line-height: 43px;
  }

  .service-item {
    border-radius: 8px;
    border: 1px solid #eee;
    box-shadow: 0px 6px 60px 0px rgb(31 31 31 / 5%);
    padding: 20px 40px;
  }

  .services-link {
    text-align: center;
  }
}
</style>
