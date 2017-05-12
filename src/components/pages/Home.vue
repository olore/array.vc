<template>
  <page page="home">
    <div slot="content">
      <mission></mission>
      <disruption></disruption>
      <press></press>
    </div>
  </page>
</template>

<script>
import Page from '../Page';
import Press from './home/Press';
import Disruption from './home/Disruption';
import Mission from './home/Mission';

export default {
  name: 'home',
  components: {
    page: Page,
    press: Press,
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
