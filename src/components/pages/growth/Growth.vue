<template>
  <page page="bootcamps">
    <section
      slot="content"
      class="container"
    >
      <div class="row" style="margin-bottom:50px">
        <div v-for="video in videos" :key="video.id" class="col-sm-12 col-md-6">
          <iframe :src="`https://player.vimeo.com/video/${video.id}`" width="415" height="230" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
          <p><a :href="`https://vimeo.com/${video.id}`">{{ video.title }}</a> from <a href="https://vimeo.com/user134809922">Shruti Gandhi</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div
            class="logo-wrapper"
            style="margin-top:-60px;"
          >
            <h1>Array Academy 10x Growth</h1>
            <div class="description">
              <div class="buttonAlign">
                <p>Array runs an academy for founders to grow rapidly from 1-10m ARR. We know the journey to $1m ARR is hard and then to $10m ARR is even harder and murkier. </p>

                <p>So we have gathered the best C-level execs from successful enterprise companies to help you create your best path forward. We have put together a curriculum that can help your company grow 10x.</p>

                <button
                  class="button"
                  onclick="window.location.href = 'https://arrayventures.typeform.com/to/nRIVdL';"
                >
                  Apply here
                </button>
              </div>
            </div>
            <br>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12">
          <h2>Recent Academies</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="logo-wrapper">
            <span class="helper" /><img
              valign="middle"
              src="../../../../static/img/bootcamps/Academy.jpg"
            >
            <div class="description">
              <p>During this full-day event we will go deep into SaaS fundamentals &ndash; giving you a strong foundation in SaaS business models, go-to-market strategies, and how to scale your business. Each session will include detailed frameworks and examples you can leverage immediately. </p>

              <p>Some of the topics that we will cover in this 10x Growth Array Academy are: SaaS Business Model(s) Fundamentals, Evolving CEO Priorities from $1M to $100M, Developing Your Go-to-Market Positioning, Product Strategy, Planning and Operations, Partnership Strategies</p>

              <p>The sessions will be taught by:</p>

              <div class="container">
                <div class="row">
                  <div class="col-md-2" />
                  <div
                    class="col-md-4"
                    style="padding-bottom:20px;"
                  >
                    <img
                      height="300"
                      width="300"
                      valign="middle"
                      class="speakerimg"
                      src="../../../../static/img/people/JudyLoehr.jpg"
                    >
                    <p class="names">Judy Loehr - Enterprise SaaS Executive, Original Salesforce PM, Zuora, ServiceMax</p>
                  </div>
                  <div
                    class="col-md-4"
                    style="padding-bottom:20px;"
                  >
                    <img
                      height="300"
                      width="300"
                      valign="middle"
                      class="speakerimg"
                      src="../../../../static/img/people/MonikaSaha.png"
                    >
                    <p class="names">Monica Saha - Delphix CMO, Employee #11 at Zuora thru IPO</p>
                  </div>
                  <div class="col-md-2" />
                </div>
                <div class="row">
                  <div class="col-md-2" />
                  <div
                    class="col-md-4"
                    style="padding-bottom:20px;"
                  >
                    <img
                      height="300"
                      width="300"
                      valign="middle"
                      class="speakerimg"
                      src="../../../../static/img/people/AnthaniKrishna.jpg"
                    >
                    <p class="names">Anthani Krishna - Servicemax CPO and co-founder thru $1B acquisition by GE Digital </p>
                  </div>
                  <div
                    class="col-md-4"
                    style="padding-bottom:20px;"
                  >
                    <img
                      height="300"
                      width="300"
                      valign="middle"
                      class="speakerimg"
                      src="../../../../static/img/people/shruti-new.jpg"
                    >
                    <p class="names">Shruti Gandhi - Engineer and Investor at Array Ventures</p>
                  </div>
                  <div class="col-md-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr>
      <br>

      <div class="row">
        <div class="col-md-12">
          <div class="logo-wrapper">
            <span class="helper" /><img
              valign="middle"
              src="../../../../static/img/bootcamps/Array Ventures & Atrium Workshop.png"
            >
            <div class="description">
              <br>

              <p>Array Ventures and Atrium has invited successful B2B founders and investors to share with you best practices in the enterprise space. Our expert speakers will teach you how to navigate fundraising, recruiting, growth, positioning and pricing as an enterprise SaaS company in the Valley. Join us for our exclusive B2B SaaS conference.</p>

              <p>Our speakers will cover topics like:</p>

              <p>1. How do I successfully position and price my product as we scale?</p>

              <p>2. What are the critical steps for a successful fundraise and who do we raise from?</p>

              <p>3. How do we recruit for top c-suite execs?</p>

              <p>4. How do we grow, from early revenue, and how do we get to 50-100 million ARR?</p>

              <p>After the conference, join us for happy hour to debrief, discuss and connect with attendees.</p>

              <p>OUR SPEAKERS</p>

              <p>Justin Kan - Justin Kan is the CEO of Atrium. Justin founded Kiko, the first AJAX web calendar; Justin.tv, a live video streaming platform; Socialcam, a mobile video sharing app (acquired for $60mm by Autodesk in 2012); Twitch, a video game streaming platform (acquired by for $970mm by Amazon in 2014); and Exec, an on demand home cleaning service (acquired by Handybook in 2014).</p>

              <p>Shruti Gandhi - Shruti is a founder and managing partner at Array Ventureswhich is a deeptech, enterprise, early stage fund with exits to companies like Apple, McGraw Hill, and Samsung under her belt. Shruti brings a strong mix of operating and investing experience. Previously, Shruti was an early stage venture capital investor at True Ventures, Samsung Electronics, Lightbank, HighBAR Partners, and the Chicago Ventures.</p>

              <p>Peter Reinhardt - Peter Reinhardt is CEO and co-founder of Segment. He studied Aerospace Engineering at MIT and fell into the world of customer data and analysis when he started the company with three college friends. Segment was part of Y Combinator in the summer of 2011 and has raised a Series B from Thrive and Accel. Segment&rsquo;s core product is a clean API for collecting customer data and a platform for partners to build on top of that data.</p>

              <p>Peter Fishman - Peter Fishman is the Chief Strategy Officer at Eaze, a leading technology platform in the cannabis space. Before that he headedAnalytics at Opendoor, a leading home buyer/seller. Previously he was VP of Growth at Zenefits, the all-in-one HR solution, and Director of Analytics at Yammer, the enterprise social network acquired by Microsoft. Prior to joining Yammer he worked at Playdom/Disney and as a statistician for the Philadelphia Eagles. He holds a Ph.D. in economics from UC Berkeley. </p>
              <br>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <br>
      <div class="row">
        <div class="col-md-12">
          <div class="logo-wrapper">
            <span class="helper" /><img
              valign="middle"
              :src="`../../../../static/img/bootcamps/Secrets.jpg`"
            >
            <div class="description">
              <br>
              <p>This is a workshop about scaling the sales function early on at startups.</p>

              <p>If you're a founder or a CEO looking for practical advice on effectively designing and scaling your startup's sales organization, this is an event for you.</p>

              <p>&quot;Sales engineering&quot; guru Mitch Morando, deep tech investor Shruti Gandhi, and strategic CFO Jeff Burkland will provide their persectives on scaling sales early on from their completely different and complementary vantage points.</p>

              <p>Here are their bios:</p>

              <p>Mitch Morando is an engineer who has built many b2b sales teams over the years helping teams (Segment, Amplitude, Remix, Keen, CitusData, ScaleAPI and numerous others - just ask around.) The &quot;Morando Method&quot; is a sales approach he is constantly developing to help technical founders learn how to &quot;Ship Revenue&quot;. He posts his learnings on Linkedin and Medium. He has helped companies such as Segment, Amplitude, Rainforest, Citusdata, ScaleAPI, Truly.co, Remix, KeepTruckin, Switchboard, Fliptop (acq by Linkedin), Librato (acq by Solarwinds), Keen.io (acq), bloc.io (acq), SensorTower and many more on their sales growth strategy.</p>

              <p>Shruti Gandhi is a partner at Array Ventures, a venture capital firm focused on solving impactful problems using revolutionary technology. Shruti has also been an early stage venture capital investor at True Ventures and Samsung Electronics. She has helped startups scale and exit to companies like Paypal, Apple, McGrawHill, and Samsung. When not investing, she is hacking on some app or thinking about ways she can be in many places at one time. Shruti also has an MBA from the University of Chicago, where she polished her finance skills before making the switch from engineer/founder to investor.</p>

              <p>Jeff Burkland, several VCs rely on Jeff and his firm, Burkland Associates, to equip their portfolio companies with the strategic finance they need to grow with confidence. As the CFO of many growing startups, Jeff has a unique pulse on the financial decisions companies need to take to reach their milestones and make it to their next round of funding. His team of on-demand CFOs give financial advice and direction to more than 120 startups. An expert at scaling SaaS models, Jeff shares his expertise with founders and CEOs regularly, and writes often in his smarter finance blog.</p>

              <p>Homework before the workshop:</p>

              <p />

              <p>How many FTEs? How much funding have you raised to date?</p>

              <p>Where is MRR today? Where do you want it? And by when?</p>

              <p>Are contracts to day mo2mo or annual committed contracts?</p>

              <p>Can you send me your master services agreement / license agreement you send to customers</p>

              <p>Who is responsible for revenue today?</p>

              <p>If there is a quota carrying sales person(s) what is their specific comp? Ie how are they paid, when (be as specific as possible or just send me their commission plan for ref)</p>

              <p>Who is the VP in the prospect&rsquo;s org that is likely to pay for your soln? (pick one)</p>

              <p>What % of sales are inbound vs outbound?</p>

              <p>Who are the top 3 other solns you see in deals the most? (you can&rsquo;t say none or it&rsquo;s internal)</p>

              <p>What are the top 3 questions you&rsquo;re hoping I can help with?</p>
              <br> <br>
            </div>
          </div>
        </div>
      </div>
    </section>
  </page>
</template>

<script>
import Page from '../../Page';

export default {
  name: 'Bootcamps',
  components: {
    page: Page,
  },
  props: ['page'],
  data() {
    return {
      videos: [
        { id: 518465060, title: 'VC Outlook in Enterprise Panel' },
        { id: 518474061, title: 'SPACs, IPOs, and more with Eric Ries and Katie Roof' },
        { id: 518705858, title: 'Catch&Release' },
        { id: 518729613, title: 'Array Ventures Founder Pitches' },
        { id: 518706024, title: 'Blumira - Data' },
        { id: 518706083, title: 'Placer' },
        { id: 518705950, title: 'Capsule' },
        { id: 518706198, title: 'Intentomatic' },
        { id: 519638964, title: 'Jon Oberheide Duo Security acquired by Cisco' },
        { id: 519608773, title: 'Role of Data in Enterprise' },
      ],
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    margin-bottom: 20px;
  }

  .exits {
    margin-top: 20px;
  }

  .row img {
    max-width: 100%;
    max-height: 400px;
  }

  .helper {
    display: inline-block;
    height: auto;
    vertical-align: middle;
  }
  .outline {
    border: 1px solid darkgray;
    height: 400px;
    margin: 50px 25px !important;
  }

  .logo-wrapper {
    height: auto;
    text-align: center;
    margin: 20px
  }

  .names {
    text-align: center;
    font-weight: normal;
    margin: 4px 10px !important;
  }

  .speakerimg {
    margin: 4px 15px !important;
  }

  .description {
    text-align: left;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 17px;
    line-height: 1.42857143;
    color: #333;
  }

  .button {
    background-color: #000000;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }

  .button:hover {
    background-color: #696969;
    color: #ffffff;
  }

  .buttonAlign {
    text-align: center;
  }

</style>
