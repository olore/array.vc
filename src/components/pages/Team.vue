<template>
  <page page="team">

    <section slot="content" class="container">

      <div class="row">
        <div class="col-xs-12">
          <h2>Our Team</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 subnav">
          <h2>Team | <a href="#/advisors">Advisors</a></h2>
        </div>
      </div>

      <div class="row bio">
        <div class="col-xs-12 col-sm-6 col-sm-push-6">
          <img class="center-block img-responsive" src="../../../static/img/people/shruti.jpg" alt="shruti photo" />
        </div>
        <div class="col-xs-12 col-sm-6 col-sm-pull-6">
          <h1>Shruti Gandhi</h1>
          <p class="text">
            Bacon ipsum dolor amet fatback alcatra cupim porchetta bacon swine sausage pastrami. Chicken ball tip cow, chuck tongue ground round porchetta frankfurter pig filet mignon. Boudin cow bresaola sirloin corned beef, landjaeger kevin pork belly beef ribs tri-tip pork bacon ribeye cupim andouille. Leberkas chicken alcatra shank, hamburger brisket venison short loin ham hock ball tip. Pancetta pork belly pastrami cupim shoulder pork chop jowl. Fatback jerky pancetta cupim boudin, flank tenderloin sausage strip steak pork loin pastrami bresaola.
          </p>
        </div>
      </div>

      <div class="row bio">
        <div class="col-xs-12 col-sm-6">
          <img class="center-block img-responsive" src="../../../static/img/people/joseph.png" alt="joseph photo" />
        </div>
        <div class="col-xs-12 col-sm-6">
          <h1>Joseph Davidson</h1>
          <p class="text">
            Pork cupim bacon filet mignon pancetta turkey fatback kielbasa kevin. Cupim filet mignon venison, pork belly ribeye shoulder frankfurter andouille porchetta leberkas flank boudin. Frankfurter prosciutto short loin burgdoggen tongue capicola, biltong tri-tip cupim shankle. Capicola pancetta ground round sausage. Frankfurter cow shoulder andouille shank sausage. Sirloin meatloaf drumstick picanha brisket.
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
        {
          name: 'Joseph Davidson',
          title: 'Analyst',
          id: 'joseph',
        },
      ],
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

