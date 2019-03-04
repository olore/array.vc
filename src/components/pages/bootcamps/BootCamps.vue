<template>
  <page page="bootcamps">
    <section slot="content" class="content">
      <div class="container">

        <div class="row">
          <div class="col-xs-12">
            <h1>Upcoming Bootcamps</h1>
          </div>
        </div>

        <div class="row">

          <bootcamp v-for="btc in bootcamps"
                      :bootcamp="btc"
                      :key="btc.name"
          ></bootcamp>

        </div>

        <div class="row exits">
          <div class="col-xs-12">
            <h1>Recent Bootcamps</h1>
          </div>
        </div>

        <div class="row">

          <bootcamp v-for="btc in recents"
                      :bootcamp="btc"
                      :key="btc.name"
          ></bootcamp>

        </div>
      </div>
    </section>
  </page>
</template>

<script>
import Page from '../../Page';
import BootCamp from './BootCamp';

export default {
  name: 'bootcamps',
  components: {
    page: Page,
    bootcamp: BootCamp,
  },
  props: ['page'],
  data() {
    return {
      bootcamps: [
        {
          name: 'SaaS BootCamp',
          link: 'https://arrayventures.typeform.com/to/nRIVdL',
          image: 'blank.png',
          readMore: 'SaaS BootCamp.docx',
          description: 'Array VC invites you to attend this exclusive bootcamp designed specifically for founders and executives of early-stage B2B SaaS companies. During this full-day event we will go deep into SaaS fundamentals – giving you a strong foundation in SaaS business models, go-to-market strategies, and how to scale your business. Each session will include detailed frameworks and examples you can leverage immediately.',
        },
      ],
      recents: [
        {
          name: 'Array Ventures & Atrium Workshop',
          link: 'https://arrayventures.typeform.com/to/nRIVdL',
          image: 'Array Ventures & Atrium Workshop.png',
          readMore: 'https://www.eventbrite.com/e/array-ventures-atrium-workshop-1-10-enterprise-academy-tickets-45812502428?utm_term=eventpage&invite=MTQ0NDgzMDQvbGlzYUBhdHJpdW0uY28vMA%3D%3D&utm_campaign=invitemodernv2&utm_source=eb_email&utm_medium=email&ref=enivte001',
          description: 'Array Ventures and Atrium has invited successful B2B founders and investors to share with you best practices in the enterprise space. Our expert speakers will teach you how to navigate fundraising, recruiting, growth, positioning and pricing as an enterprise SaaS company in the Valley. Join us for our exclusive B2B SaaS conference.',
        },
        {
          name: 'Secrets to scaling your enterprise sales to $10m ARR and higher',
          link: 'https://arrayventures.typeform.com/to/nRIVdL',
          image: 'Secrets to scaling your enterprise sales to $10m ARR and higher.PNG',
          readMore: 'https://www.eventbrite.com/e/secrets-to-scaling-your-enterprise-sales-to-10m-arr-and-higher-tickets-50045942762#',
          description: 'This is a workshop about scaling the sales function early on at startups. If you are a founder or a CEO looking for practical advice on effectively designing and scaling your startup\'s sales organization, this is an event for you. "Sales engineering" guru Mitch Morando, deep tech investor Shruti Gandhi, and strategic CFO Jeff Burkland will provide their persectives on scaling sales early on from their completely different and complementary vantage points.',
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
    margin-top: 20px;
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
