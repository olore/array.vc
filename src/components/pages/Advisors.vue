<template>
  <page page="advisors">

    <section slot="content" class="container">

      <div class="row">
        <div class="col-xs-12">
          <h2>Our Team</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 subnav">
          <h2><a href="#/team">Tech</a> | Advisors</h2>
        </div>
      </div>

      <div class="row">
          <person class="col-xs-12 col-sm-3"
                  v-for="person in people"
                  :person="person"
                  :selected="selectPerson"
                  :key="person.name"></person>
      </div>

    </section>
  </page>
</template>

<script>
import Person from '../Person';
import Page from '../Page';

export default {
  name: 'advisors',
  components: {
    person: Person,
    page: Page,
  },

  data() {
    return {
      selected: {},
      selectPerson: (person) => {
        this.selected = person;
      },
      people: [
        {
          name: 'Lucas Baker',
          title: 'Technology Partner',
          href: '#/team/lucas',
          img: './static/img/people/lucas-circle-280.png',
        },
      ],
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .subnav {
    text-align: center;
  }
  .subnav h2 {
    margin-top: 0;
  }
</style>

