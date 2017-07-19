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
          <h2><a href="#/team">Team</a> | Advisors</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 subnav">
          <h2>
            <a href="#/advisors">All</a> |
            <a href="#/advisors/tech">Tech</a> |
            <a href="#/advisors/health">Health</a>
          </h2>
        </div>
      </div>

      <div class="row">
          <person class="col-xs-12 col-sm-3 col-md-2"
                  v-for="person in filteredByField(people, field)"
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

  beforeRouteUpdate(to, from, next) {
    this.field = to.params.field || 'all';
    next();
  },

  data() {
    return {
      selected: {},
      field: this.$route.params.field || 'all',

      selectPerson: (person) => {
        this.selected = person;
      },

      filteredByField: (peeps, field) => {
        if (field === 'all') {
          return peeps;
        }
        return peeps.filter(person => person.field === field);
      },

      people: [
        {
          name: 'Lucas Baker',
          title: 'Google Deepmind',
          id: 'lucas',
          field: 'tech',
        },
        {
          name: 'Anthony Wu',
          title: 'Apple',
          id: 'anthony',
          field: 'tech',
        },
        {
          name: 'Eric Sigler',
          title: 'PagerDuty',
          id: 'eric',
          field: 'tech',
        },
        {
          name: 'Dan Janney',
          title: 'Alta Partners',
          id: 'dan',
          field: 'health',
        },
        {
          name: 'Kimberly Ha',
          title: 'FTI Consulting',
          id: 'kimberly',
          field: 'health',
        },
        {
          name: 'Ellen Rudnick',
          title: 'Liberty Mutual Board of Director and Booth',
          id: 'ellen',
          field: 'health',
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
</style>

