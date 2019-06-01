<template>
  <section>
    <section class="module parallax parallax-4">
      <div class="x-container">
        <h1>News</h1>
      </div>
    </section>

    <section class="module content">
      <div class="x-container">

        <div class="col-md-12">
          <h2>Events</h2>
          <div class = "text-center">
            <div class="logo-wrapper" style = "text-align: center">
              <img valign="middle" :src="`../../../../static/img/Mid-Year_Update_Overview.jpg`"/>
              <div class="description" >
                <p>
                  We at Array Ventures are really excited about our enterprise event next week on June 4th. We have some awesome panels and great pitches from some of our companies.
                  <br><br><br>
                </p>
              </div>
            </div>
          </div> 

          <div class = "text-center">
            <div class="logo-wrapper"  style = "text-align: center">
              <img  style = "text-align: center" valign="middle" :src="`../../../../static/img/Mid-Year_Update_Speakers.jpg`"/>
              <div class="description" style = "text-align: center">
                <p>
                  For our panel on the state of enterprise investing, Ajay Chopra, Jai Das, and Joseph Floyd – partners of top VC firms such as Trinity Ventures, Vista Equity Partners, Sapphire Ventures – will tell us what they look for in companies while investing at Series A to Growth Stage companies. Then, for our panel on data driven businesses, Richard Socher, Lukas Biewald, Bala Sahejpal, and moderator Jocelyn Goldfein will tell us how businesses should reinvent themselves using data and AI.
                  <br><br><br>
                </p>
              </div>
            </div>
          </div>  

        <h2>Videos</h2>
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4U0j2oYsFDU?rel=0" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rRb_WBMUtxY?rel=0" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_6F7UlNjdfk?rel=0" frameborder="0" allowfullscreen></iframe>
        </div>

        USA Today: <a href="https://www.usatoday.com/story/tech/2015/09/30/change-agents-live-san-francisco-ron-johnson-shruti-gandhi-tristan-walker-meredith-perry/73061264/">
          Disruption is more than a buzz word: Change Agents Live
        </a>

        <br />

        The Daily HODL: <a href="https://dailyhodl.com/2018/07/23/ethereum-network-boasts-majority-of-new-stablecoins-that-attracted-240-million-in-funding/">
          Ethereum Network Boasts Majority of New Stablecoins That Attracted $240 Million in Funding
        </a>

        <h2>Our communications</h2>
        <ul>
          <li><a href="http://eepurl.com/b9t7c1">Newsletter #4</a> - Welcome Openprise &amp; 6D Bytes!</li>
          <li><a href="http://eepurl.com/bA_otr">Newsletter #3</a> - Welcome Simplicity, Shotput &amp; Take 44!</li>
          <li><a href="http://eepurl.com/bqvbgT">Newsletter #2</a> - Welcome Mobilize!</li>
          <li><a href="http://eepurl.com/besbMf">Newsletter #1</a> - Read about <a href="http://www.forbes.com/sites/valleyvoices/2015/01/26/when-tech-founders-should-talk-to-corpdev/">Founders &amp; Corpdev</a> and <a href="http://venturebeat.com/2014/12/27/zombification-from-notifications-how-to-fix-the-problem-of-too-many-alerts/">Zombification from Notifications</a></li>
        </ul>

        <h2>Around the globe</h2>
        <div class="my-container">


          <a href="http://www.forbes.com/sites/valleyvoices/2015/01/26/when-tech-founders-should-talk-to-corpdev/"><img src="../../../../static/img/press/forbes.png" alt="Forbes" /></a>
          <a href="http://yourstory.com/2015/09/array-ventures-shruti-gandhi/"><img src="../../../../static/img/press/yourstory.jpeg" alt="YourStory" /></a>
          <a href="http://thepitchdeck.com/podcast/shruti-gandhi/"><img src="../../../../static/img/press/the-pitchdeck-logo.png" /></a>
          <a href="http://venturebeat.com/author/shruti-gandhi-true-ventures/"><img src="../../../../static/img/press/vb.png" alt="VentureBeat" /></a>
          <a href="http://www.usatoday.com/story/tech/columnist/2015/05/08/tech-bubble-winter-is-coming/26982203/"><img src="../../../../static/img/press/usatoday.png" alt="USA Today" /></a>
        </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>

export default {
  name: 'press',
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
  }
  img {
    max-width: 90%;
    margin-bottom: 10px;
  }

  @media only screen
  and (max-device-width : 414px)
  and (orientation : portrait) {
    ul {
      padding-left: 0;
    }

  }
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px; height: 0; overflow: hidden;
    margin-bottom: 50px;
  }

  .video-container iframe,
  .video-container object,
  .video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
