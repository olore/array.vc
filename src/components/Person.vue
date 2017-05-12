<template>
  <div>
    <div class="person">
      <a :href="person.href">
        <img :src="person.img" alt="photo" />
        <h4>{{ person.name }}</h4>
        <h5>{{ person.title }}</h5>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'person',
  props: ['person', 'selected'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .overlay {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 0;
    color: white;
    font-size: 20px;
    font-weight: 400;
  }

  img {
    width: 90%;
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
    .overlay {
      font-size: 20px;
      left: 10px;
      font-weight: 400;
    }
  }

</style>
