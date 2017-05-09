<template>
  <index>
    <div slot="content" class="container svg">

      <h2>Joseph Davidson</h2>

      <div class="row">

        <div class="col-xs-12 col-sm-4 photo">
          <img height="200" src="../../assets/img/joe.jpg" alt="Joseph Davidson"/>
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
  </index>
</template>

<script>
import Index from '../Index';

export default {
  name: 'joseph',
  components: {
    index: Index,
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
