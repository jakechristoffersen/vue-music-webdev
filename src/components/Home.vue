<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="container">
      <itunes class="itunes"></itunes>
    </div>
    <div class="container-fluid">
      <my-tunes class="my-tunes"></my-tunes>
    </div>
  </div>
</template>

<script>
  import MyTunes from './MyTunes.vue'
  import Itunes from './Itunes.vue'
  export default {
    name: 'home',
    data() {
      return {

      }
    },
    components: {
      Itunes,
      MyTunes
    }
  }
</script>


<style>
  .my-tunes {
 
    background: rgb(216, 216, 216);
  }

  .itunes {
  
    background: rgb(255, 255, 255);

  }
</style>