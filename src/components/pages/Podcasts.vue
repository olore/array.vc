<template>
  <page page="podcasts">
    <section slot="content" class="module content center">
      <h3>
        Podcast to learn hacks from other Al/ML, data, and enterprise founders
      </h3>
      <div >
        <a href="https://itunes.apple.com/us/podcast/array-podcast/id1215062660?mt=2" 
          style="display:inline-block;overflow:hidden;background:url(//linkmaker.itunes.apple.com/assets/shared/badges/en-us/podcast-lrg.svg) no-repeat;width:133px;height:34px;background-size:contain;"></a>
      </div>

      <div class="row">
        <div class="col-xs-1"></div>
        <div class="col-xs-10">
          <iframe scrolling="no" frameborder="0" style="width:100%;height:600px;border:0;overflow:hidden;" 
            width="100%" height="180" src="https://art19.com/shows/69737c5a-bef1-46cb-9aee-125716ca9b1f/embed?playlist_type=playlist&playlist_size=10"></iframe>
        </div>
        <div class="col-xs-1"></div>
      </div>
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
