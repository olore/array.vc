<template>
  <section class="nav">
    <div class="text-center">
      <router-link to="/">[ HOME ]</router-link>
      <router-link to="/investments">[ INVESTMENTS ]</router-link>
      <router-link to="/news">[ NEWS ]</router-link>
      <router-link to="/growth">[ 10x GROWTH ]</router-link>
      <router-link to="/podcasts">[ PODCAST ]</router-link>
      <router-link to="/team">[ TEAM ]</router-link>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Navigation',
  props: ['page'],
  data() {
    return {
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nav {
  font-family: 'Nixie One', "Helvetica Neue";
  margin-bottom: 10px;
  justify-content: center;
  margin-top: 20px;
}

 @media only screen
  and (min-device-width : 320px)
  and (max-device-width : 568px)
  and (orientation : portrait) {

    .nav {
      height: 60px; /* handle 2 lines of nav on mobile*/
    }
}

a, a:hover {
  white-space: nowrap;
  text-decoration: none;
}

a:hover {
  color: darkblue;
}
</style>
