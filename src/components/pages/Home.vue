<template>
  <page page="home">
    <div slot="content">
      <mission />
      <disruption />
    </div>
  </page>
</template>

<script>
import Page from '../Page';
import Disruption from './home/Disruption';
import Mission from './home/Mission';

export default {
  name: 'Home',
  components: {
    page: Page,
    mission: Mission,
    disruption: Disruption,
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
