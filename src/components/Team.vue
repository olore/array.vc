<template>
  <section class="module content">

    <div class="grid">

      <person v-for="person in people"
              :person="person"
              :name="person.name"
              :key="person.name"></person>

    </div>

  </section>
</template>

<script>
import Person from './Person';

export default {
  name: 'team',
  components: {
    person: Person,
  },

  data() {
    return {
      people: [
        {
          name: 'Shruti Gandi',
          title: 'Managing Partner',
          href: 'shruti.html',
          // eslint-disable-next-line
          getImage: () => require(`../assets/img/shruti.jpg`),
        },
        {
          name: 'Lucas Baker',
          title: 'Technology Partner',
          href: 'lucas.html',
          // eslint-disable-next-line
          getImage: () => require(`../assets/img/lucas.jpg`),
        },
        {
          name: 'Joseph Davidson',
          title: 'Analyst',
          href: 'joseph.html',
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
