<template>
  <div class="col-md-3 col-sm-4 outline">
    <a :href="`${investment.link}`">
      <div class="logo-wrapper">
        <span class="helper" />
        <img valign="middle" :src="`../../../../static/img/portfolio/${investment.image}`">
        <div class="description">
          {{ investment.description }}
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Investment',
  props: ['investment'],
  data() {
    return {
      displayDescription: false,
      toggleDescription: () => {
        this.displayDescription = !this.displayDescription;
      },
    };
  },

};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a:hover {
    text-decoration: none;
  }

  .row img {
    max-width: 90%;
    max-height: 100px;
  }
  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .outline {
    border: 1px solid darkgray;
    height: 120px;
    margin: 35px !important;
  }

  .logo-wrapper {
    height: 100%;
    text-align: center;
  }

  .description {
    color: #666;
    margin-top: 3px;
  }

  @media only screen
  and (min-width : 320px)
  and (max-width : 765px) {

    .outline {
      margin-bottom: 45px !important;
    }

  }
</style>
