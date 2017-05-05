<template>
  <index page="podcasts">
    <section slot="content" class="module content">

      <a href="https://itunes.apple.com/us/podcast/array-ventures-podcast/id1215062660">SUBSCRIBE ON ITUNES</a>

      <section class="module content">
        <div class="x-container">
          <span class="member">Making It Against All Odds - Life Story of Director of Engineer at Slack, Leslie Miley</span>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/318140420&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
        </div>
      </section>


      <section class="module content">
        <div class="x-container">
          <span class="member">Lukas Biewald, Founder of Crowdflower: Which came first the dataset or the algorithm? See how bigger companies use AI</span>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317012357&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
        </div>
      </section>


      <section class="module content">
        <div class="x-container">
          <span class="member">Justin Kan: How To Go From Post-Collegiate Soul-Searching To A $1B Exit To Amazon</span>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314662006&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false">
          </iframe>
        </div>
      </section>

      <section class="module content">
        <div class="x-container">
          <span class="member">Unconventional wisdom leads to a $310m exit for contrarian founder Auren Hoffman</span>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313355642&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
        </div>
      </section>


      <section class="module content">
        <div class="x-container">
          <span class="member">Sean Byrnes, Founder of Flurry: $300m+ acquisition happened after Flurry nearly went insolvent 3 times</span>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/312211141&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
        </div>
      </section>


      <section class="module content">
        <div class="x-container">
          <span class="member">Esther Dyson: How do you train to live on space and retire on Mars?</span>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/312218924&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
        </div>
      </section>

      <section class="module content">
        <div class="x-container">
          <span class="member">Lauran Kelly, OpexEnginer: Fundraising? You should benchmark your SaaS metrics</span>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/312204756&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
        </div>
      </section>


    </section>
  </index>
</template>

<script>
import Index from './Index';

export default {
  name: 'podcasts',
  components: {
    index: Index,
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
  .row img {
    max-width: 100%;
    max-height: 100px;
  }
  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .col-md-3 {
    border: 1px solid darkgray;
    height: 120px;
    max-height: 160px;
    margin: 25px 25px 0 25px !important;
  }

  .logo-wrapper {
    height: 100%;
    text-align: center;
  }

  .center {
    padding-top: 50px;
    text-align: center;
  }

  @media only screen
  and (min-device-width : 320px)
  and (max-device-width : 568px)
  and (orientation : portrait) {

    .x-container {
      padding: 0 20px;
    }

    .{
      height: 80px;
      max-height: 80px;
      margin: 0 !important;
    }

    .row img {
      max-height: 60px;
    }

    .center {
      padding-top: 30px;
      text-align: center;
      font-size: 10px;
    }

  }
</style>
