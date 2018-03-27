<template>
  <page page="podcasts">
    <section slot="content" class="module content center">
      <div >
        <a href="https://itunes.apple.com/us/podcast/array-podcast/id1215062660?mt=2" 
          style="display:inline-block;overflow:hidden;background:url(//linkmaker.itunes.apple.com/assets/shared/badges/en-us/podcast-lrg.svg) no-repeat;width:133px;height:34px;background-size:contain;"></a>
      </div>

      <iframe scrolling="no" frameborder="0" style="width:300px;height:180px;border:0;overflow:hidden;" 
        width="300" height="180" src="http://app.stitcher.com/widget/f/179223"></iframe>
        <br />
        <a href="http://www.stitcher.com/s?fid=179223&refid=stpr">Listen on Stitcher</a>

    </section>
  </page>
</template>

<script>
import Page from '../Page';

export default {
  name: 'podcasts',
  components: {
    page: Page,
  },
  props: ['page'],
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .center {
    text-align: center;
  }
</style>
