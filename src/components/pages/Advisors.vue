<template>
  <page page="advisors">
    <section
      slot="content"
      class="container"
    >
      <div class="row">
        <div class="col-xs-12">
          <h2>Our Team</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 subnav">
          <h2><router-link to="team">Team</router-link> | Advisors</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 subnav">
          <h2>
            <router-link to="/advisors">All</router-link> |
            <router-link to="/advisors/tech">Tech</router-link> |
            <router-link to="/advisors/health">Health</router-link> |
            <router-link to="/advisors/finance">Finance</router-link>
          </h2>
        </div>
      </div>

      <div class="row">
        <person
          v-for="person in filteredByField(people, field)"
          :key="person.name"
          class="col-xs-12 col-sm-3"
          :person="person"
          :selected="selectPerson"
        />
      </div>
    </section>
  </page>
</template>

<script>
import Person from '../Person';
import Page from '../Page';

export default {
  name: 'Advisors',
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
        {
          name: 'Henning Schulzrinne',
          title: 'Former FCC CTO',
          id: 'henning',
          field: 'tech',
        },
        {
          name: 'Christine Schmid',
          title: 'Lecturer Executive Master of European and International Business Law',
          id: 'schmid',
          field: 'finance',
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

