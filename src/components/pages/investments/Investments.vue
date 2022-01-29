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
                      :key="inv.name"
                      :investment="inv"
          />
        </div>

        <div class="row">
          <div class="col-xs-12">
            <h1>Our investments</h1>
          </div>
        </div>

        <div class="row">
          <investment v-for="inv in investments"
                      :key="inv.name"
                      :investment="inv"
          />
        </div>
      </div>
    </section>
  </page>
</template>

<script>
import Page from '../../Page';
import Investment from './Investment';

export default {
  name: 'Investments',
  components: {
    page: Page,
    investment: Investment,
  },
  props: ['page'],
  data() {
    return {
      investments: [
        {
          name: 'Cast',
          link: 'https://cast.app',
          image: 'cast-app.svg',
          description: 'Digital Customer Success',
        },
        {
          name: 'Tumble',
          link: 'https://www.tumble.to/',
          image: 'tumble.png',
          description: 'Smart Commercial Laundry',
        },
        {
          name: 'Shipyard',
          link: 'https://shipyard.build/',
          image: 'shipyard.png',
          description: 'Environment management and release automation',
        },
        {
          name: 'Intentomatic',
          link: 'https://www.intentomatic.com/',
          image: 'intentomatic.png',
          description: 'SDR dashboard',
        },
        {
          name: 'Blumira',
          link: 'https://www.blumira.com/',
          image: 'bluemira.svg',
          description: 'Automated threat detection & response',
        },
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
          name: 'GoodTime',
          link: 'https://www.goodtime.io/',
          image: 'goodtime.png',
          description: 'Automated Interview Scheduling',
        },
        {
          name: 'Productiv',
          link: 'http://productiv.com/',
          image: 'productiv.png',
          description: 'SaaS Management Platform',
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
          name: 'Blendid',
          link: 'http://bendid.com',
          image: 'blendid.png',
          description: 'Robotic food tech',
        },
        {
          name: 'Take 44',
          link: 'http://take44.com',
          image: 'take44.png',
          description: 'Zenefits for brokers',
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
          name: 'Vue AI',
          link: 'http://vue.ai',
          image: 'vue.ai.png',
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
          link: 'https://www.solugentech.com/',
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
          name: 'Zecops',
          link: 'https://zecops.com/',
          image: 'zecops.png',
          description: 'Zecops - Threat Intelligence Platform',
        },
        {
          name: 'Chisel Labs',
          link: 'https://chisellabs.com',
          image: 'chisel.png',
          description: 'Product Management Software',
        },
        {
          name: 'Runway',
          link: 'https://runway.team',
          image: 'runway.png',
          description: 'Release Management',
        },
        {
          name: 'Hermis',
          link: 'https://herm.is',
          image: 'hermis.png',
          description: 'Employee Engagement',
        },
        {
          name: 'Byte Wax',
          link: 'https://bytewax.io',
          image: 'bytewax.png',
          description: 'Log Management API',
        },
        {
          name: 'Opsverse',
          link: 'https://opsverse.io',
          image: 'coming-soon.png',
          description: 'DevOps Platform',
        },
        {
          name: 'Mozart Data',
          link: 'https://mozartdata.com',
          image: 'mozart.png',
          description: 'Data Pipeline',
        },
        {
          name: 'Slice up',
          link: 'https://sliceup.co',
          image: 'sliceup.png',
          description: 'Log Management API',
        },
      ],
      exits: [
        {
          name: 'Simility',
          link: 'https://www.reuters.com/article/us-simility-m-a-paypal-hldg/paypal-to-acquire-fraud-prevention-company-simility-for-120-million-idUSKBN1JH35Y',
          image: 'simility.png',
          description: 'AI/ML fraud management',
          exit: '(acq by Paypal)',
        },
        {
          name: 'Passage AI',
          link: 'https://www.servicenow.com/company/media/press-room/servicenow-to-acquire-passage-ai.html',
          image: 'passage-ai.png',
          description: 'Passage AI - Conversational AI platform)',
          exit: '(acq by ServiceNow)',
        },
        {
          name: 'art19',
          link: 'https://variety.com/2021/digital/news/amazon-art19-acquisition-1235005337/',
          image: 'art19.png',
          description: 'Enterprise Podcast Platform)',
          exit: '(acq by Amazon)',
        },
        {
          name: 'Hivy',
          link: 'http://www.hivyapp.com',
          image: 'hivy.png',
          description: 'Automation for Office Managers)',
          exit: '(acq by Managed By Q)',
        },
        {
          name: 'Lennd',
          link: 'https://www.socaltech.com/classy_acquires_events_platform_fondi/s-0081832.html',
          image: 'lennd.png',
          description: 'OS for event planning',
          exit: '(acq by Classy)',
        },
        {
          name: 'Tankutility',
          link: 'http://investors.generac.com/news-releases/news-release-details/generac-acquire-tank-utility-inc',
          image: 'tankutility.png',
          description: 'Smart Monitors for Propane Tank',
          exit: '(acq by Generac)',
        },
        {
          name: 'Wootric',
          link: 'https://inmoment.com/news/inmoment-acquires-digital-feedback-leader-wootric-to-accelerate-pursuit-of-experience-improvement-for-worlds-leading-brands/',
          image: 'wootric.png',
          description: 'Data-driven customer UX platform',
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
