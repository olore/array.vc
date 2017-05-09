<template>
    <section class="nav">
      <a v-if="page !== 'home'" href="#">[ HOME ]</a>
      <a v-if="page !== 'investments'" href="#investments">[ INVESTMENTS ]</a>
      <a v-if="page !== 'podcasts'" href="#podcasts">[ PODCAST ]</a>
      <a v-if="page !== 'team'" href="#team">[ TEAM ]</a>
    </section>
</template>

<script>

export default {
  name: 'navigation',
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
  font-family: 'Nixie One', cursive;
}
</style>
