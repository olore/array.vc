<template>
  <page page="podcasts">
    <section
      slot="content"
      class="content"
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>[Array] Podcast</h1>
          </div>
        </div>
        <h3 class="center">
          Hacks on AI/ML and data from successful founders and investors
        </h3>
        <div
          class="row"
          style="padding-bottom: 10px"
        >
          <div class="col-xs-12 col-sm-2 col-sm-offset-3">
            <a
              href="https://itunes.apple.com/us/podcast/array-podcast/id1215062660?mt=2"
              style="display:inline-block;overflow:hidden;background:url(//linkmaker.itunes.apple.com/assets/shared/badges/en-us/podcast-lrg.svg) no-repeat;width:133px;height:34px;background-size:contain;"
            />
          </div>
          <div class="col-xs-12 col-sm-2">
            <a
              href="http://www.stitcher.com/s?fid=179223&refid=stpr"
              class="stitcher"
            />
          </div>
          <div class="col-xs-12 col-sm-2">
            <a
              href="https://www.breaker.audio/array-podcast"
              class="breaker"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-xs-1" />
          <div class="col-xs-10">
            <iframe
              scrolling="no"
              frameborder="0"
              style="width:100%;height:600px;border:0;overflow:hidden;"
              width="100%"
              height="180"
              src="https://art19.com/shows/69737c5a-bef1-46cb-9aee-125716ca9b1f/embed?playlist_type=playlist&playlist_size=10"
            />
          </div>
          <div class="col-xs-1" />
        </div>
      </div>
    </section>
  </page>
</template>

<script>
import Page from '../Page';

export default {
  name: 'Podcasts',
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
  .stitcher {
    display:inline-block;
    overflow:hidden;
    background:url(/static/img/stitcher.jpg)
    no-repeat;
    width:133px;
    height:34px;
    background-size:contain;
  }
  .breaker {
    display:inline-block;
    overflow:hidden;
    background:url(/static/img/breaker-blue.svg)
    no-repeat;
    width:133px;
    height:34px;
    background-size:contain;
  }
</style>
