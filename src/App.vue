<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
require('../static/css/parallax-new.css');
require('../static/css/webicons.css');
require('../static/css/bootstrap.min.css');
// require('../static/css/bootstrap-theme.min.css');

export default {
  name: 'app',
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;
}
</style>
