<template>
  <index page="team">

    <section slot="content" class="module container">

      <div class="row">
          <person class="col-xs-12 col-sm-3"
                  v-for="person in people"
                  :person="person"
                  :selected="selectPerson"
                  :key="person.name"></person>
      </div>

    </section>
  </index>
</template>

<script>
import Person from './Person';
import Index from './Index';

export default {
  name: 'team',
  components: {
    person: Person,
    index: Index,
  },

  data() {
    return {
      selected: {},
      selectPerson: (person) => {
        this.selected = person;
      },
      people: [
        {
          name: 'Shruti Gandhi',
          title: 'Managing Partner',
          href: '/#/team/shruti',
          // eslint-disable-next-line
          getImage: () => require(`../assets/img/shruti.jpg`),
        },
        {
          name: 'Lucas Baker',
          title: 'Technology Partner',
          href: '/#/team/lucas',
          // eslint-disable-next-line
          getImage: () => require(`../assets/img/lucas.jpg`),
        },
        {
          name: 'Joseph Davidson',
          title: 'Analyst',
          href: '#/team/joseph',
          // eslint-disable-next-line
          getImage: () => require(`../assets/img/joe.jpg`),
        },
      ],
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

