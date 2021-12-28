<template>
  <div id="app">
    <Header/>
    <Ikon/>
    <Grid/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Ikon from './components/Ikon.vue'
import Grid from './components/Grid.vue'
import Footer from './components/Footer.vue'
export default {
  name:'app',
  components:{
    Header,
    Ikon,
    Grid,
    Footer,
  }
}
</script>





<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100&display=swap');

body{
      background-color: #f5e1da;
#app {
    font-family: 'Work Sans', sans-serif;
}
}

</style>
