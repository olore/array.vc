<template>
  <page>
    <div slot="content" class="container svg">

      <h2>Joseph Davidson</h2>

      <div class="row">

        <div class="col-xs-12 col-sm-4 photo">
          <img height="200" src="../../../static/img/people/joseph-circle-280.png" alt="Joseph Davidson"/>
        </div>

        <div class="col-xs-12 col-sm-8 content">
          Joseph joined Array Ventures in 2017. Prior to Array Ventures, Joseph was a Senior Analyst at
          Barah Capital Partners and The Riverside Company working on investment due diligence.
          <br/> <br/>
          Joseph holds a BA in History from University of California, San Diego and Masters in Finance
          from Santa Clara University.
        </div>
      </div>
    </div>
  </page>
</template>

<script>
import Page from '../Page';

export default {
  name: 'joseph',
  components: {
    page: Page,
  },
};
</script>

<style scoped>
.photo {
  text-align: center;
}
.content {
  margin-top: 10px;
}
</style>
