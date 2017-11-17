<template>
  <a :href="`${investment.link}`">
    <div class="col-md-3 outline">
      <div class="logo-wrapper">
        <span class="helper"></span><img valign="middle" :src="`../../../../static/img/portfolio/${investment.image}`"/>
        <div class="description">
          {{ investment.description }}
        </div>
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'investment',
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
  .row img {
    max-width: 100%;
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
    margin: 25px !important;
  }

  .logo-wrapper {
    height: 100%;
    text-align: center;
  }

  .description {
    color: #666;
  }

  @media only screen
  and (min-device-width : 320px)
  and (max-device-width : 568px)
  and (orientation : portrait) {

    .outline {
      margin-bottom: 45px !important;
    }

  }
</style>
