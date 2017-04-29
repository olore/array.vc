<template>
  <div class="person">
    <a :href="person.href">
      <div class="overlay">
        <h4>{{ person.name }}</h4>
        <h5>{{ person.title }}</h5>
      </div>
      <img height="200" width="200" :src="person.getImage()" alt="photo" />
    </a>
  </div>

</template>

<script>
export default {
  name: 'person',
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
  .overlay {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    color: white;
    font-size: 20px;
    font-weight: 400;
    width: 180px;
  }

  h5, h4 {
    margin: 0;
    text-shadow: 1px 1px 2px black;
    text-align: center;
  }

  h5 {
    font-weight: 400;
  }

  .person {
    position: relative;
    margin-bottom: 10px;
  }


  @media only screen
  and (max-device-width : 375px)
  and (orientation : portrait) {
    .grid img {
      height: 280px;
      width: 280px; /* FIXME - make sure all images match this size */
      text-align: center;
    }
    .overlay {
      font-size: 30px;
      font-weight: 400;
      width: 280px;
    }
  }

</style>
