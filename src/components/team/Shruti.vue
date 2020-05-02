<template>
  <page>
    <div
      slot="content"
      class="container svg"
    >
      <h2>Shruti Gandhi</h2>
      <div>
        <div class="row">
          <div class="col-xs-12 col-sm-4 photo">
            <img
              height="200"
              src="../../../static/img/people/shruti-circle-280.png"
              alt="Shruti"
            >
          </div>

          <div class="col-xs-12 col-sm-8 content">
            Shruti is a Managing Partner at Array Ventures.
            Shruti brings a strong mix of operating and investing experience with 5 large exits to
            companies such as Apple, Samsung, Brocade, McGraw Hill, GoDaddy, and Rubrick.
            Previously, Shruti was an early stage venture capital investor at True Ventures and Samsung Electronics.
            <br> <br>
            Shruti started working with Machine Learning algorithms while working on her master's thesis in computer science
            from Columbia University on understanding user behavior on instant messaging platforms. While at IBM she worked
            on self learning algorithms that detected user location based on IP addresses, which she later incorporated
            into the Lotus Sametime product. Later, her company Penseev helped users make better connections with their
            friends based on social data.
            <br> <br>
            When not investing, she is hacking on some app or thinking about ways she can be in many places at one time.
            Shruti also has an MBA from the University of Chicago, where she polished her finance skills before making
            the switch from engineer/founder to investor.

            <br> <br>

            <a
              class="webicon linkedin large"
              href="https://www.linkedin.com/in/shrutigandhi"
            >LinkedIn</a>
            <a
              class="webicon twitter large"
              href="https://twitter.com/atShruti"
            >Twitter</a>
          </div>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
import Page from '../Page';

export default {
  name: 'Shruti',
  components: {
    page: Page,
  },
};
</script>

<style scoped>
  .photo {
    text-align: center;
  }

  .content {
    margin-top: 10px;
  }
</style>
