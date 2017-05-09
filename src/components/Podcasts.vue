<template>
  <index page="podcasts">
    <section slot="content" class="module content">
      <div class="itunes-link">
        <a href="https://itunes.apple.com/us/podcast/array-podcast/id1215062660?mt=2" style="display:inline-block;overflow:hidden;background:url(//linkmaker.itunes.apple.com/assets/shared/badges/en-us/podcast-lrg.svg) no-repeat;width:133px;height:34px;background-size:contain;"></a>
      </div>

      <!--
      <section v-for="p in podcasts" class="module content">
        <div class="x-container">
          <span class="member">{{p.title}}</span>
          <iframe width="100%" height="166" scrolling="no" frameborder="no" :src="p.src"></iframe>
        </div>
      </section>
      -->

      <div style="text-align: center;padding-top:20px">
        <iframe width="500" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/292786905&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
      </div>

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
      podcasts: [
        {
          title: 'Making It Against All Odds - Life Story of Director of Engineer at Slack, Leslie Miley',
          src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/318140420&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false',
        },
        {
          title: 'Lukas Biewald, Founder of Crowdflower: Which came first the dataset or the algorithm? See how bigger companies use AI',
          src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317012357&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false',
        },
        {
          title: 'Justin Kan: How To Go From Post-Collegiate Soul-Searching To A $1B Exit To Amazon',
          src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314662006&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false',
        },
        {
          title: 'Unconventional wisdom leads to a $310m exit for contrarian founder Auren Hoffman',
          src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/313355642&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false',
        },
        {
          title: 'Sean Byrnes, Founder of Flurry: $300m+ acquisition happened after Flurry nearly went insolvent 3 times',
          src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/312211141&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false',
        },
        {
          title: 'Esther Dyson: How do you train to live on space and retire on Mars?',
          src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/312218924&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false',
        },
        {
          title: 'Lauran Kelly, OpexEnginer: Fundraising? You should benchmark your SaaS metrics',
          src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/312204756&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .itunes-link {
    text-align: center;
  }
</style>
