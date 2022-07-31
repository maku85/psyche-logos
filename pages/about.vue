<template>
  <v-container fluid class="pa-0">
    <section id="about" class="pa-10">
      <v-container>
        <v-row class="py-8">
          <v-col cols="12" sm="12" md="6">
            <v-img
              width="350"
              src="https://static.wixstatic.com/media/45d10e_b36296a05b06453dbc07e3dfb0c9c023~mv2_d_2556_2572_s_4_2.jpg/v1/fill/w_750,h_752,al_c,q_85,usm_0.66_1.00_0.01/45d10e_b36296a05b06453dbc07e3dfb0c9c023~mv2_d_2556_2572_s_4_2.webp"
            />
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <p class="sub-heading">{{ subHeading1 }}</p>
            <div class="display-1 pb-4">{{ title1 }}</div>
            <p v-html="paragraph1"></p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p class="sub-heading">{{ subHeading2 }}</p>
            <div class="display-1 pb-4">{{ title2 }}</div>
            <p v-html="paragraph2"></p>

            <div class="timeline single">
              <div class="timeline-item">
                <h5 class="timeline-heading">{{ experienceTitle1 }}</h5>
                <p class="timeline-text">{{ experienceDescription1 }}</p>
              </div>
              <div class="timeline-item">
                <h5 class="timeline-heading">{{ experienceTitle2 }}</h5>
                <p class="timeline-text">{{ experienceDescription2 }}</p>
              </div>
              <div class="timeline-item">
                <h5 class="timeline-heading">{{ experienceTitle3 }}</h5>
                <p class="timeline-text">{{ experienceDescription3 }}</p>
              </div>
              <div class="timeline-item">
                <h5 class="timeline-heading">{{ experienceTitle4 }}</h5>
                <p class="timeline-text">{{ experienceDescription4 }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <separator></separator>

    <contact-section></contact-section>
  </v-container>
</template>

<script>
export default {
  name: 'AboutPage',
  data: () => ({
    subHeading1: process.env.ABOUT_PAGE_SUB_HEADING_1 || 'Story of my life',
    title1: process.env.ABOUT_PAGE_TITLE_1 || 'Hi there!',
    paragraph1:
      process.env.ABOUT_PAGE_PARAGRAPH_1 ||
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies, nisi ac porta sollicitudin, felis leo dapibus diam, at ultricies sem justo eget leo. Aliquam finibus hendrerit imperdiet. Donec fermentum orci in sagittis bibendum. Cras augue nisi, tristique eu orci nec, iaculis convallis felis. Mauris elementum justo sit amet magna euismod malesuada. Nullam eu euismod purus. Nullam ac diam purus. Fusce rhoncus cursus efficitur. Phasellus non lacinia odio. Ut erat diam, pharetra sit amet commodo a, elementum sed felis. Donec id pellentesque odio. Sed sed iaculis mauris, tempus elementum turpis.</p><p>Nam dictum tellus id leo molestie, eu consectetur erat sollicitudin. Morbi et dolor lacinia, consectetur urna eget, ullamcorper orci. In eleifend imperdiet molestie. Fusce finibus porta pretium. Nunc porttitor mattis odio vitae dignissim. Duis auctor nec mi eget varius. Integer sollicitudin metus eget nunc porttitor, vitae laoreet tellus placerat.</p><p>Duis in aliquet tortor. Pellentesque pellentesque pretium ex. Donec ultrices velit efficitur sapien accumsan, ut suscipit elit rhoncus. Pellentesque eget arcu diam. Fusce et turpis placerat, sodales nisl a, interdum purus. Duis venenatis magna maximus ipsum rhoncus tempus. Sed cursus, elit sed rutrum luctus, dolor sapien convallis sapien, quis elementum libero elit at mauris.</p>',
    subHeading2: process.env.ABOUT_PAGE_SUB_HEADING_2 || 'My career',
    title2: process.env.ABOUT_PAGE_TITLE_2 || 'Experiences',
    paragraph2:
      process.env.ABOUT_PAGE_PARAGRAPH_2 ||
      '<p>Donec fringilla felis ac eros feugiat fermentum. Proin euismod fermentum sem, nec pretium nulla tristique at. Suspendisse eleifend ipsum sed turpis imperdiet, at feugiat orci aliquet. Quisque eget risus libero. Donec eu urna tincidunt, vestibulum quam eget, tristique magna. Suspendisse non elit odio. Duis ornare ac eros et facilisis. Praesent lobortis quam tellus. Aenean vitae orci quis lorem rhoncus tincidunt non quis nibh. Nulla tempus, arcu id commodo viverra, odio mauris posuere velit, id placerat nisi libero vitae leo. Nunc placerat justo vel nibh mollis volutpat. In quis nulla quis nunc mollis imperdiet laoreet sed ex. Donec fermentum scelerisque elit, ac dignissim urna dapibus eget. Suspendisse magna mauris, volutpat id purus sed, vehicula congue neque.</p><p>Vivamus malesuada iaculis ligula, ac bibendum nisi sodales ac. Ut sit amet blandit sem, a accumsan purus. Etiam nisi ante, porta mollis ornare quis, placerat a lorem. Morbi vitae tortor nec turpis feugiat tincidunt. In ut ipsum at ipsum lacinia volutpat. Nunc consequat sit amet lectus vel ornare. Pellentesque ante orci, iaculis a gravida ut, pharetra eget est. Phasellus odio velit, sagittis sit amet nulla porttitor, iaculis porta leo. Nullam quis vehicula ante, non vehicula erat. Cras arcu turpis, tristique et purus in, tempus elementum odio. In hac habitasse platea dictumst. Sed quam metus, malesuada ut tempus a, tincidunt sit amet sem. Aliquam eu suscipit magna. Fusce ligula ipsum, vestibulum et sagittis quis, venenatis id urna. Donec finibus mauris at ipsum sodales rhoncus.</p>',
    experienceTitle1:
      process.env.ABOUT_PAGE_EXPERIENCE_TITLE_1 || 'Experience 1',
    experienceDescription1:
      process.env.ABOUT_PAGE_EXPERIENCE_DESCRIPTION_1 ||
      'Experience description',
    experienceTitle2:
      process.env.ABOUT_PAGE_EXPERIENCE_TITLE_2 || 'Experience 2',
    experienceDescription2:
      process.env.ABOUT_PAGE_EXPERIENCE_DESCRIPTION_2 ||
      'Experience description',
    experienceTitle3:
      process.env.ABOUT_PAGE_EXPERIENCE_TITLE_3 || 'Experience 3',
    experienceDescription3:
      process.env.ABOUT_PAGE_EXPERIENCE_DESCRIPTION_3 ||
      'Experience description',
    experienceTitle4:
      process.env.ABOUT_PAGE_EXPERIENCE_TITLE_4 || 'Experience 4',
    experienceDescription4:
      process.env.ABOUT_PAGE_EXPERIENCE_DESCRIPTION_4 ||
      'Experience description',
  }),
}
</script>

<style lang="scss" scoped>
#about {
  background: url(http://www.slashcreative.co/themes/psychare/wp-content/uploads/2020/11/form-bg-pattern.png?id=432);

  .v-image {
    margin: auto;
    border-radius: 10px;
  }

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

  .timeline {
    position: relative;

    &:before {
      content: '';
      display: block;
      height: 1px;
      width: 25px;
      top: 0;
      left: 0;
      background: #a47355;
      position: absolute;
    }

    &:after {
      left: 13px;
      content: '';
      display: block;
      width: 1px;
      height: 100%;
      top: 0;
      background: #a47355;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      position: absolute;
    }

    .timeline-item {
      position: relative;
      margin: 20px 0;
      top: 20px;
      padding-left: 50px;

      &:before {
        content: '';
        height: 25px;
        width: 25px;
        border-radius: 50px;
        background: #a47355;
        position: absolute;
        left: 0;
        top: 0;
      }

      .timeline-heading {
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 1.2px;
        text-transform: uppercase;
        color: #a47355;
      }
    }
  }
}
</style>
