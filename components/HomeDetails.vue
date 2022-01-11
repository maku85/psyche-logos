<template>
  <v-container id="approach" fluid>
    <v-container class="text-center">
      <h3>My approach</h3>
      <p class="subheading mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar
        risus quis mauris interdum, in euismod nibh pretium. Etiam pulvinar
        tincidunt dapibus. Quisque sollicitudin, mauris a consequat consectetur,
        turpis nisl sollicitudin enim, id consectetur neque neque nec metus.
        Pellentesque dolor nisi, vulputate quis lobortis ac, tincidunt et quam.
        Mauris pulvinar blandit nisi nec mattis. Aliquam accumsan ut sem eget
        efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel
        dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero.
      </p>
      <v-btn text to="/approach">leggi altro </v-btn>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'HomeDetails',
}
</script>

<style lang="scss" scoped>
#approach {
  background-color: #d9ed92;
  padding: 100px 0;

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
}
</style>
