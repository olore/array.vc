<template>
  <page page="investments">
    <section slot="content" class="content">
      <div class="container">

        <div class="row">
          <div class="col-xs-12">
            <h1>Our Exits</h1>
          </div>
        </div>

        <div class="row exits">
          <investment v-for="inv in exits"
                      :investment="inv"
                      :key="inv.name"
          ></investment>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <h1>Our investments</h1>
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
          name: 'Uniform',
          link: 'https://uniform.dev',
          image: 'uniform.png',
          description: 'Uniform helps connect your existing digital marketing stack',
        },
        {
          name: 'EraDB',
          link: 'http://eradb.com/',
          image: 'eradb.png',
          description: 'A time-series database built for machine learning and anomaly detection',
        },
        {
          name: 'Almanac',
          link: 'https://askalmanac.com/',
          image: 'almanac.png',
          description: 'Automated professional assistant',
        },
        {
          name: 'Liftlab',
          link: 'https://liftlab.com/',
          image: 'liftlab.png',
          description: 'Media experimentation and analytics',
        },
        {
          name: 'Dyneti',
          link: 'https://dyneti.com/',
          image: 'dyneti.png',
          description: 'An authentication platform using deep learning',
        },
        {
          name: 'Overview',
          link: 'https://www.overview.ai/',
          image: 'overview.png',
          description: 'Manufacturing automation using computer vision',
        },
        {
          name: 'Tankutility',
          link: 'https://www.tankutility.com',
          image: 'tankutility.png',
          description: 'Smart Monitors for Propane Tank',
        },
        {
          name: 'GoodTime',
          link: 'https://www.goodtime.io/',
          image: 'goodtime.png',
          description: 'Automated Interview Scheduling',
        },
        {
          name: 'Productiv.ai',
          link: 'http://productiv.ai/',
          image: 'productiv.png',
          description: 'Productiv.ai',
        },
        {
          name: 'casaone.com',
          link: 'https://www.casaone.com/',
          image: 'casaone.svg',
          description: 'Seamless Furniture Rental',
        },
        {
          name: 'PrecisionGx',
          link: 'http://precision-gx.com/',
          image: 'precision-gx.png',
          description: 'AI for Health Insurance',
        },
        {
          name: 'empinfo',
          link: 'https://www.empinfo.com/',
          image: 'empinfo.png',
          description: 'Automated Employment & Income Verification',
        },
        {
          name: 'Xwing',
          link: 'https://www.linkedin.com/company/xwing/',
          image: 'xwing.png',
          description: 'Autonomy for Aviation',
        },
        {
          name: 'RADAI',
          link: 'http://radai.com',
          image: 'radai.png',
          description: 'For radiology groups and companies',
        },
        {
          name: 'Stronghold.co',
          link: 'http://stronghold.co',
          image: 'stronghold.png',
          description: 'Buy and Sell Digital Currencies',
        },
        {
          name: 'Mapistry',
          link: 'http://mapistry.com',
          image: 'mapistry.png',
          description: 'Painless Stormwater compliance',
        },
        {
          name: 'Vertalo',
          link: 'https://www.vertalo.com',
          image: 'vertalo.png',
          description: 'The future of work',
        },
        {
          name: 'Zendar',
          link: 'https://www.linkedin.com/company-beta/18089693/',
          image: 'zendar.png',
          description: 'Self-driving Radar/ML company',
        },
        {
          name: 'Openprise',
          link: 'https://www.openprisetech.com',
          image: 'openprise.png',
          description: 'Data orchestration',
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
          name: 'Pulse',
          link: 'http://www.pulse.qa',
          image: 'pulse.png',
          description: 'Crowdsourced research for C-level execs',
        },
        {
          name: 'Modal',
          link: 'https://modalup.com/',
          image: 'modal.png',
          description: 'Stripe for auto dealers',
        },
        {
          name: 'Catch and Release',
          link: 'http://catchandrelease.tv',
          image: 'catch-and-release.png',
          description: 'Media Discovery & Licensing',
        },
        {
          name: 'art19',
          link: 'https://art19.com/',
          image: 'art19.png',
          description: 'Enterprise Podcast Platform',
        },
        {
          name: 'Zecops',
          link: 'https://zecops.com/',
          image: 'zecops.png',
          description: 'Zecops - Stealth Security Startup',
        },
      ],
      exits: [
        {
          name: 'Passage AI',
          link: 'http://www.passageai.com',
          image: 'passage-ai.png',
          description: 'Passage AI - Conversational AI platform',
        },
        {
          name: 'Hivy',
          link: 'http://www.hivyapp.com',
          image: 'hivy.png',
          description: 'Automation for Office Managers',
        },
        {
          name: 'Simility',
          link: 'https://simility.com',
          image: 'simility.png',
          description: 'AI/ML fraud management',
        },
      ],
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    margin-bottom: 200px;
  }

  .exits {
    padding-bottom: 40px;
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
