<template>

  <div>
    <main>

      <header>
        <img align="center" src="../../static/img/arrayvcsimplelogo.png" alt="Array Ventures" />
        <navigation :page="page"></navigation>
      </header>

      <slot name="content"></slot>
    </main>

    <footer class="x-container">
      <div class="asides clearfix"> </div>
    </footer>

  </div>
</template>

<script>
import Navigation from './Navigation';

export default {
  name: 'hello',
  components: {
    navigation: Navigation,
  },
  props: ['page'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    text-align: center;
  }
</style>
