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
          <h2>Team | <router-link to="advisors">Advisors</router-link></h2>
        </div>
      </div>

      <div class="row vertical-align bio">
        <div class="col-xs-12">
          <img class="center-block img-responsive" src="../../../static/img/people/shruti-new.jpg" alt="shruti photo" />
          <br />
          <div style="text-align: center">
            <a class="webicon linkedin large" href="https://www.linkedin.com/in/shrutigandhi">LinkedIn</a>
            <a class="webicon twitter large" href="https://twitter.com/atShruti">Twitter</a>
          </div>
        </div>
      </div>

      <div class="row vertical-align bio">
        <div class="col-xs-12">
          <div class="name">
            <h1>Shruti Gandhi</h1>
            <h3>Founder &amp; Managing Partner</h3>
          </div>
          <p class="text">
            Shruti brings a strong mix of operating and investing experience. Previously, Shruti was an early stage
            venture capital investor at True Ventures, Samsung Electronics, Lightbank, HighBAR Partners, and the i2A Fund.
            <br /> <br />
            Shruti started working with Machine Learning algorithms while working on her master's thesis in computer
            science from Columbia University on understanding user behavior on instant messaging platforms. While at IBM
            she worked on self learning algorithms that detected user location based on IP addresses, which she later
            incorporated into the Lotus Sametime product. Later, her company Penseev helped users make better connections
            with their friends based on social data.
            <br /> <br />
            When not investing, she is hacking on some app or thinking about ways she can be in many places at one time.
            Shruti also has an MBA from the University of Chicago, where she polished her finance skills before making
            the switch from engineer/founder to investor.
          </p>
        </div>
      </div>

      <div class="row vertical-align bio">
        <div class="col-xs-12">
          <img class="center-block img-responsive" src="../../../static/img/people/Snehal-Antani.jpg" alt="Snehal photo" />
          <br />
        </div>
      </div>

      <div class="row vertical-align bio">
        <div class="col-xs-12">
          <div class="name">
            <h1>Snehal Antani</h1>
            <h3>Venture Partner</h3>
          </div>
          <p class="text">
            Snehal was a former CTO and Senior Vice President of IoT and Business Analytics of Splunk. 
            He also served as Chief Information Officer for multiple divisions of GE Capital. 
            Snehal was Private Cloud Strategist at IBM among various other roles. 
            He holds a B.S. from Purdue University and an M.S. from Rensselaer Polytechnic Institute.
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
      ],
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .name {
    h1, h3 {
      margin: 0;
    }

  }
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

