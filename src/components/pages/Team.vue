<template>
  <page page="team">

    <section slot="content" class="container svg">

      <div class="row">
        <div class="col-xs-12">
          <h2>Our Team</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 subnav">
          <h2>Team | <a href="#/advisors">Advisors</a></h2>
        </div>
      </div>
      <div class="row vertical-align bio">
        <div class="col-xs-12 col-sm-6 col-sm-push-6">
          <img class="center-block img-responsive" src="../../../static/img/people/shruti-new.jpg" alt="shruti photo" />
          <br />
          <div style="text-align: center">
            <a class="webicon linkedin large" href="https://www.linkedin.com/in/shrutigandhi">LinkedIn</a>
            <a class="webicon twitter large" href="https://twitter.com/atShruti">Twitter</a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-sm-pull-6">
          <h1>Shruti Gandhi</h1>
          <p class="text">
            Shruti is a managing partner at Array Ventures. Shruti brings a strong mix of operating and investing experience. Previously, Shruti was an early stage venture capital investor at True Ventures, Samsung Electronics, Lightbank, HighBAR Partners, and the i2A Fund.
            <br /> <br />
            Shruti started working with Machine Learning algorithms while working on her master's thesis in computer science from Columbia University on understanding user behavior on instant messaging platforms. While at IBM she worked on self learning algorithms that detected user location based on IP addresses, which she later incorporated into the Lotus Sametime product. Later, her company Penseev helped users make better connections with their friends based on social data.
            <br /> <br />
            When not investing, she is hacking on some app or thinking about ways she can be in many places at one time. Shruti also has an MBA from the University of Chicago, where she polished her finance skills before making the switch from engineer/founder to investor.
          </p>
        </div>
      </div>

      <div class="row vertical-align bio">
        <div class="col-xs-12 col-sm-6">
          <img class="center-block img-responsive" src="../../../static/img/people/joseph.png" alt="joseph photo" />
        </div>
        <div class="col-xs-12 col-sm-6">
          <h1>Joseph Davidson</h1>
          <p class="text">
            Joseph joined Array Ventures in 2017. Prior to Array Ventures, Joseph was a Senior Analyst at Barah Capital Partners and The Riverside Company working on investment due diligence.
            <br />
            <br />
            Joseph holds a BA in History from University of California, San Diego and Masters in Finance from Santa Clara University.
          </p>
        </div>
      </div>

    </section>
  </page>
</template>

<script>
import Page from '../Page';

export default {
  name: 'team',
  components: {
    page: Page,
  },

  data() {
    return {
      selected: {},
      people: [
        {
          name: 'Shruti Gandhi',
          title: 'Managing Partner',
          id: 'shruti',
        },
        {
          name: 'Joseph Davidson',
          title: 'Analyst',
          id: 'joseph',
        },
      ],
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .subnav {
    text-align: center;

    h2 {
      margin-top: 0;
    }
  }

  .bio {
    margin-bottom: 20px;

    img {
      width: 400px;
    }

    .text {
      font-size: 14px;
    }
  }
 .vertical-align {
   display: flex;
   align-items: center;
 }

  @media (min-width: 768px) { }

  @media (min-width: 992px) {
    .bio {
      .text {
        font-size: 18px;
      }
    }
  }

  @media (min-width: 1200px) { }
</style>

