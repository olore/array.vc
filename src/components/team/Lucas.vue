<template>
  <index>
    <div slot="content" class="container svg">

      <h2>Lucas Baker</h2>

      <div class="row">
        <div class="col-xs-12 col-sm-4 photo">
          <img height="200" src="../../assets/img/lucas.jpg" alt="Lucas Baker"/>
        </div>

        <div class="col-xs-12 col-sm-8 content">
          Lucas is on the Deepmind team at Google, solving complex machine learning problems.
          As an engineer, entrepreneur, and YC founder, Lucas has extensive experience in both the
          technical and the business aspects of the industry. He has worked at a number of Silicon Valley's
          top companies, including Square, Pinterest, and Google. He also co-founded the developer recruiting
          site Hackermeter (YC S13), which was acquired by Pinterest.
          <br/> <br/>
          Lucas's principal specialties include artificial intelligence, machine learning, big data analysis,
          and data visualization. He holds a B.S. degree in Computer Science from Stanford, where he was also a
          recipient of the prestigious Terman award.
          <br/> <br/>
          When not thinking about tech, startups, and the future, he is almost certainly playing Go.

          <br> <br/>

          <a class="webicon linkedin large" href="https://www.linkedin.com/pub/tesuji">LinkedIn</a>

        </div>
      </div>
    </div>

  </index>
</template>

<script>
import Index from '../Index';

export default {
  name: 'lucas',
  components: {
    index: Index,
  },
};
</script>

<style scoped>
  .photo {
    text-align: center;
  }

  .content {
    margin-top: 10px;
  }
</style>
