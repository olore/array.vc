<template>
  <div>
    <div class="person">
      <img
        :src="`./static/img/people/${person.id}-circle-280.png`"
        :alt="`${person.id} photo`"
      >
      <h4>{{ person.name }}</h4>
      <h5>{{ person.title }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Person',
  props: ['person'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    width: 150px;
    text-align: center;
  }

  h5, h4 {
    margin: 0;
    text-align: center;
  }

  a, a:hover, a:visited {
    color: #34282C;
    text-decoration: none;
  }

  h5 {
    font-weight: 400;
  }

  .person {
    position: relative;
    margin-bottom: 10px;
    text-align: center;
  }


  @media only screen
  and (max-device-width : 375px)
  and (orientation : portrait) {
    img {
      width: 180px;
    }
  }

</style>
