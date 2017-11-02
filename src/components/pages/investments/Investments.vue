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

            <investment v-for="i in investments"
                        :inv="i"
                        :key="i.name"
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
          description: `Zendar is the bomb. They make widgets faster than anyone. Led by George Jetson, the team is ready
            to take on Spacely's Sprockets and win in the long term.`,
        },
        {
          name: 'Rupertbot',
          link: 'http://rupertbot.com',
          image: 'rupert.png',
          description: `Rupertbot is the bomb. They make widgets faster than anyone. Led by George Jetson, the team is ready
            to take on Spacely's Sprockets and win in the long term.`,
        },
        {
          name: 'Openprise',
          link: 'https://www.openprisetech.com',
          image: 'openprise.png',
        },
        {
          name: 'Simility',
          link: 'https://simility.com',
          image: 'simility.png',
        },
        {
          name: 'Mobilize',
          link: 'https://mobilize.io',
          image: 'mobilize.png',
        },
        {
          name: 'Wootric',
          link: 'http://wootric.com',
          image: 'wootric.png',
        },
        {
          name: '6dbytes',
          link: 'http://6dbytes.com',
          image: '6d.png',
        },
        {
          name: 'Take 44',
          link: 'http://take44.com',
          image: 'take44.png',
        },
        {
          name: 'Lennd',
          link: 'http://lennd.com',
          image: 'lennd.png',
        },
        {
          name: 'Nomiku',
          link: 'http://nomiku.com',
          image: 'nomiku.png',
        },
        {
          name: 'Shotput',
          link: 'http://shotput.com',
          image: 'shotput.svg',
        },
        {
          name: 'Leapfin',
          link: 'http://leapfin.com',
          image: 'leapfin.png',
        },
        {
          name: 'Placer',
          link: 'http://placer.io',
          image: 'placer.png',
        },
        {
          name: 'Tax Joy',
          link: 'http://taxjoy.com',
          image: 'taxjoy.png',
        },
        {
          name: 'Mad Street Den',
          link: 'http://vue.ai',
          image: 'madstreetden.png',
        },
        {
          name: 'Safe Graph',
          link: 'http://www.safegraph.com',
          image: 'safegraph.jpg',
        },
        {
          name: 'Solugen',
          link: 'http://www.solugen.co',
          image: 'solugen.png',
        },
        {
          name: 'Hivy',
          link: 'http://www.hivyapp.co',
          image: 'hivy.png',
        },
        {
          name: 'Pulse',
          link: 'http://www.pulse.qa',
          image: 'pulse.png',
        },
        {
          name: 'Drive Motors',
          link: 'http://drivemotors.com',
          image: 'drive-motors.png',
        },
        {
          name: 'Catch and Release',
          link: 'http://catchandrelease.tv',
          image: 'catch-and-release.png',
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
