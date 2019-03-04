<template>
    <div class="col-md-12">
      <div class="logo-wrapper">
        <span class="helper"></span><img valign="middle" :src="`../../../../static/img/bootcamps/${bootcamp.image}`"/>
        <div><h2> {{ bootcamp.name }} </h2></div>
        <div class="description">
          {{ bootcamp.description }} <a :href="`${bootcamp.readMore} ../../../../static/img/bootcamps/${bootcamp.readMore}`" download> Read More </a>
          <br> <br>
          <button class = "button"><a :href="`${bootcamp.link}`"> Apply here </a></button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'bootcamp',
    props: ['bootcamp'],
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
    max-width: 90%;
    max-height: 400px;
  }
  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .outline {
    border: 1px solid darkgray;
    height: 400px;
    margin: 50px 25px !important;
  }

  .logo-wrapper {
    height: 100%;
    text-align: center;
    margin: 20px
  }

  .description {
    color: #666;
    margin-top: 3px;
  }

  .button {
    background-color: #FFFFFF;
    color: black;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }

  @media only screen
  and (min-width : 320px)
  and (max-width : 765px) {

    .outline {
      margin-bottom: 45px !important;
    }

  }
</style>
