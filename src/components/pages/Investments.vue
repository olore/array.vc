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
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="http://rupertbot.com"> <span class="helper"></span><img valign="middle" src="../../../static/img/portfolio/rupert.png"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="https://www.openprisecloud.com"> <span class="helper"></span><img valign="middle" src="../../../static/img/portfolio/openprise.png"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="https://simility.com"> <span class="helper"></span><img src="../../../static/img/portfolio/simility.png"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="http://mobilize.io"> <span class="helper"></span><img src="../../../static/img/portfolio/mobilize.png"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="http://wootric.com"> <span class="helper"></span><img valign="middle" src="../../../static/img/portfolio/wootric.png"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="https://6dbytes.com"> <span class="helper"></span><img  src="../../../static/img/portfolio/6d.png"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="http://take44.com"> <span class="helper"></span><img  src="../../../static/img/portfolio/take44.png"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="https://www.lennd.com"> <span class="helper"></span><img src="../../../static/img/portfolio/lennd.png"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="http://www.nomiku.com"> <span class="helper"></span><img src="../../../static/img/portfolio/nomiku.png"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="http://shotput.com"> <span class="helper"></span><img src="../../../static/img/portfolio/shotput.svg"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="https://leapfin.com"> <span class="helper"></span><img valign="middle" src="../../../static/img/portfolio/leapfin.png"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="http://placer.io"> <span class="helper"></span><img valign="middle" src="../../../static/img/portfolio/placer.png"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="http://bliss.sh"> <span class="helper"></span><img valign="middle" src="../../../static/img/portfolio/bliss.png"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="http://vue.ai"> <span class="helper"></span><img valign="middle" src="../../../static/img/portfolio/madstreetden.png"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="http://www.safegraph.com"> <span class="helper"></span><img valign="middle" src="../../../static/img/portfolio/safegraph.jpg"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="http://www.solugen.co/"> <span class="helper"></span><img valign="middle" src="../../../static/img/portfolio/solugen.png"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="https://hivyapp.com/"> <span class="helper"></span><img valign="middle" src="../../../static/img/portfolio/hivy.png"/> </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="logo-wrapper">
                <a href="http://www.pulse.qa"> <span class="helper"></span><img valign="middle" src="../../../static/img/portfolio/pulse.png"/> </a>
              </div>
            </div>
          </div>

        </div>
    </section>
  </page>
</template>

<script>
import Page from '../Page';

export default {
  name: 'investments',
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
