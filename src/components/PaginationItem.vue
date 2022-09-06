<template>
  <div id="app">
  <v-app id="inspire">
    <div class="text-center">
      <v-pagination
       
        :length="4"
        circle
      ></v-pagination>
    </div>
  </v-app>
</div>
</template>

<script>
export default {
  name: 'PaginationItem',
    
    props:{
      numPage: null,
    }
}
</script>

<style>

</style>