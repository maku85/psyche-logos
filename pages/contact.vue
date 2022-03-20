<template>
  <section id="contact">
    <v-container>
      <v-row class="d-flex align-center">
        <v-col>
          <p class="sub-heading">Get in touch</p>
          <h2>Have queries before the appointment?</h2>

          <v-list-item three-line class="mt-4">
            <v-list-item-icon>
              <v-icon> mdi-message-text</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Let’s Talk</v-list-item-title>
              <v-list-item-subtitle>
                <span class="font-700">Phone:</span> +1 921-124-9220<br />
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <span class="font-700">Email:</span> hi@psychare.com
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col>
          <div class="contact-box text-center">
            <h4>Write Your Queries</h4>
            <p>Submit your message and I will get in touch within one day.</p>
            <contact-form></contact-form>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
}
</script>

<style lang="scss" scoped>
#contact {
  color: #5f5f5f;

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

  .contact-box {
    border: 1px solid #eee;
    margin-top: 0px !important;
    border-top-width: 1px !important;
    border-right-width: 1px !important;
    border-bottom-width: 1px !important;
    border-left-width: 1px !important;
    padding-bottom: 30px !important;
    background-color: #f7f5f5 !important;
    border-left-color: #ffffff !important;
    border-left-style: solid !important;
    border-right-color: #ffffff !important;
    border-right-style: solid !important;
    border-top-color: #ffffff !important;
    border-top-style: solid !important;
    border-bottom-color: #ffffff !important;
    border-bottom-style: solid !important;
    border-radius: 1px !important;
    padding: 50px;
    display: block;
    position: relative;
    margin: 15px 0;
  }
}
</style>
