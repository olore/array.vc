<template>
  <page page="investments">
    <section slot="content" class="content">
      <div class="container">

        <div class="row">
          <div class="col-xs-12">
            <h2>Our investments</h2>
          </div>
        </div>

          <div class="row">

            <investment v-for="inv in investments"
                        :investment="inv"
                        :key="inv.name"
            ></investment>

          </div>

        </div>
    </section>
  </page>
</template>

<script>
import Page from '../../Page';
import Investment from './Investment';

export default {
  name: 'investments',
  components: {
    page: Page,
    investment: Investment,
  },
  props: ['page'],
  data() {
    return {
      investments: [
        {
          name: 'Zendar',
          link: 'https://www.linkedin.com/company-beta/18089693/',
          image: 'zendar.png',
          description: 'Self-driving Radar/ML company',
        },
        {
          name: 'Rupertbot',
          link: 'http://rupertbot.com',
          image: 'rupert.png',
          description: 'Conversational AI platform',
        },
        {
          name: 'Openprise',
          link: 'https://www.openprisetech.com',
          image: 'openprise.png',
          description: 'Data orchestration',
        },
        {
          name: 'Simility',
          link: 'https://simility.com',
          image: 'simility.png',
          description: 'AI/ML fraud management',
        },
        {
          name: 'Mobilize',
          link: 'https://mobilize.io',
          image: 'mobilize.png',
          description: 'Community Management Platform',
        },
        {
          name: 'Wootric',
          link: 'http://wootric.com',
          image: 'wootric.png',
          description: 'Data-driven customer UX platform',
        },
        {
          name: '6dbytes',
          link: 'http://6dbytes.com',
          image: '6d.png',
          description: 'Robotic food tech',
        },
        {
          name: 'Take 44',
          link: 'http://take44.com',
          image: 'take44.png',
          description: 'Zenefits for brokers',
        },
        {
          name: 'Lennd',
          link: 'http://lennd.com',
          image: 'lennd.png',
          description: 'OS for event planning',
        },
        {
          name: 'Nomiku',
          link: 'http://nomiku.com',
          image: 'nomiku.png',
          description: 'Home Sous vide',
        },
        {
          name: 'Shotput',
          link: 'http://shotput.com',
          image: 'shotput.svg',
          description: 'Robotic arm for grocery stores',
        },
        {
          name: 'Leapfin',
          link: 'http://leapfin.com',
          image: 'leapfin.png',
          description: 'Revenue operations Automation',
        },
        {
          name: 'Placer',
          link: 'http://placer.io',
          image: 'placer.png',
          description: 'Insights on foot traffic',
        },
        {
          name: 'Tax Joy',
          link: 'http://taxjoy.com',
          image: 'taxjoy.png',
          description: 'CRM for accountants',
        },
        {
          name: 'Mad Street Den',
          link: 'http://vue.ai',
          image: 'madstreetden.png',
          description: 'Enabling brands with deep tech',
        },
        {
          name: 'Safe Graph',
          link: 'http://www.safegraph.com',
          image: 'safegraph.jpg',
          description: 'Predicting the past',
        },
        {
          name: 'Solugen',
          link: 'http://www.solugen.co',
          image: 'solugen.png',
          description: 'Plant based hydrogen peroxide',
        },
        {
          name: 'Hivy',
          link: 'http://www.hivyapp.co',
          image: 'hivy.png',
          description: 'Automation for Office Managers',
        },
        {
          name: 'Pulse',
          link: 'http://www.pulse.qa',
          image: 'pulse.png',
          description: 'Crowdsourced research for C-level execs',
        },
        {
          name: 'Drive Motors',
          link: 'http://drivemotors.com',
          image: 'drive-motors.png',
          description: 'Stripe for auto dealers',
        },
        {
          name: 'Catch and Release',
          link: 'http://catchandrelease.tv',
          image: 'catch-and-release.png',
          description: 'Media Discovery & Licensing',
        },
      ],
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
  .outline {
    border: 1px solid darkgray;
    height: 120px;
    max-height: 160px;
    margin: 25px 25px 0 25px !important;
  }

  .logo-wrapper {
    height: 100%;
    text-align: center;
  }

  @media only screen
  and (min-device-width : 320px)
  and (max-device-width : 568px)
  and (orientation : portrait) {

    .row img {
      max-height: 60px;
    }

  }
</style>
