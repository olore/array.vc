<template>
  <div>
    <div class="col-md-3 outline">
      <div class="logo-wrapper">
        <a @click="toggleDescription()"><span class="helper"></span><img valign="middle" :src="`../../../../static/img/portfolio/${inv.image}`"/></a>
      </div>
    </div>
    <div class="col-md-3" v-bind:class="{ hidden: !displayDescription }">
      <div>
        {{ inv.description }}
        <a :href="`${inv.link}`">Visit their site.</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'investment',
    props: ['inv'],
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
    max-height: 160px;
    margin: 25px 25px 0 25px !important;
  }

  .logo-wrapper {
    height: 100%;
    text-align: center;
  }

  @media only screen
  and (min-device-width : 320px)
  and (max-device-width : 568px)
  and (orientation : portrait) {

    .row img {
      max-height: 60px;
    }

  }
</style>
