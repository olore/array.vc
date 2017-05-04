<template>

  <div>
    <main>

      <h1 class="logo">
        <img align="center" src="../../static/img/arrayvcsimplelogo.png" alt="Array Ventures" />
      </h1>

      <slot name="nav">
        <navigation :page="page"></navigation>
      </slot>
      <slot name="content"></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
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
</style>
