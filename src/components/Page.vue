<template>

  <div>
    <main>

      <header> 
        <img src="../../static/img/arrayvcsimplelogo.png" alt="Array Ventures" />
        <div class="row">
          <div class="col-lg-12" style="content-align: center;">
            <navigation :page="page"></navigation>
          </div>
        </div>
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
