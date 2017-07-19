<template>
  <page page="news">
    <div slot="content">
      <press></press>
    </div>
  </page>
</template>

<script>
import Page from '../Page';
import Press from './news/Press';

export default {
  name: 'news',
  components: {
    page: Page,
    press: Press,
  },
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
