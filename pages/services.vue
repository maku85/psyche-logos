<template>
  <v-content id="services" class="section">
    <v-container class="section-content">
      <v-row v-for="(service, i) in services" :key="i" class="page-section">
        <v-col>
          <p class="sub-heading">{{ service.subHeading }}</p>
          <h2>{{ service.title }}</h2>
          <p v-html="service.paragraph"></p>
        </v-col>
      </v-row>
    </v-container>

    <separator></separator>

    <contact-section></contact-section>
  </v-content>
</template>

<script>
export default {
  name: 'ServicesPage',
  data: () => ({
    services: [
      {
        subHeading: process.env.SERVICES_PAGE_SUB_HEADING_1 || 'Service',
        title: process.env.SERVICES_PAGE_TITLE_1 || 'Dating & Relationship',
        paragraph:
          process.env.SERVICES_PAGE_PARAGRAPH_1 ||
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies, nisi ac porta sollicitudin, felis leo dapibus diam, at ultricies sem justo eget leo. Aliquam finibus hendrerit imperdiet. Donec fermentum orci in sagittis bibendum. Cras augue nisi, tristique eu orci nec, iaculis convallis felis. Mauris elementum justo sit amet magna euismod malesuada. Nullam eu euismod purus. Nullam ac diam purus. Fusce rhoncus cursus efficitur. Phasellus non lacinia odio. Ut erat diam, pharetra sit amet commodo a, elementum sed felis. Donec id pellentesque odio. Sed sed iaculis mauris, tempus elementum turpis.',
      },
      {
        subHeading: process.env.SERVICES_PAGE_SUB_HEADING_1 || 'Service',
        title: process.env.SERVICES_PAGE_TITLE_2 || 'Grief & Loss Consueling',
        paragraph:
          process.env.SERVICES_PAGE_PARAGRAPH_2 ||
          'Nam dictum tellus id leo molestie, eu consectetur erat sollicitudin. Morbi et dolor lacinia, consectetur urna eget, ullamcorper orci. In eleifend imperdiet molestie. Fusce finibus porta pretium. Nunc porttitor mattis odio vitae dignissim. Duis auctor nec mi eget varius. Integer sollicitudin metus eget nunc porttitor, vitae laoreet tellus placerat. Duis in aliquet tortor. Pellentesque pellentesque pretium ex. Donec ultrices velit efficitur sapien accumsan, ut suscipit elit rhoncus. Pellentesque eget arcu diam. Fusce et turpis placerat, sodales nisl a, interdum purus. Duis venenatis magna maximus ipsum rhoncus tempus. Sed cursus, elit sed rutrum luctus, dolor sapien convallis sapien, quis elementum libero elit at mauris.',
      },
      {
        subHeading: process.env.SERVICES_PAGE_SUB_HEADING_1 || 'Service',
        title: process.env.SERVICES_PAGE_TITLE_3 || 'Self Esteem Therapy',
        paragraph:
          process.env.SERVICES_PAGE_PARAGRAPH_3 ||
          'Donec fringilla felis ac eros feugiat fermentum. Proin euismod fermentum sem, nec pretium nulla tristique at. Suspendisse eleifend ipsum sed turpis imperdiet, at feugiat orci aliquet. Quisque eget risus libero. Donec eu urna tincidunt, vestibulum quam eget, tristique magna. Suspendisse non elit odio. Duis ornare ac eros et facilisis. Praesent lobortis quam tellus. Aenean vitae orci quis lorem rhoncus tincidunt non quis nibh. Nulla tempus, arcu id commodo viverra, odio mauris posuere velit, id placerat nisi libero vitae leo. Nunc placerat justo vel nibh mollis volutpat. In quis nulla quis nunc mollis imperdiet laoreet sed ex. Donec fermentum scelerisque elit, ac dignissim urna dapibus eget. Suspendisse magna mauris, volutpat id purus sed, vehicula congue neque.',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
#services {
}
</style>