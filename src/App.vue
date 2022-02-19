<template>

 <v-app>
     <HeaderItem> </HeaderItem>
     
    <v-main>
     
      <v-container class="pt-5">
       <MainPart></MainPart>
        <!-- <router-view class="view"></router-view> -->
      </v-container>
    </v-main>

  </v-app>

  
</template>

<script>
import MainPart from './components/MainPart.vue';
import HeaderItem from './components/HeaderItem.vue';


export default {
  name: 'App',
    components: {
    MainPart,
    HeaderItem,
    
  },
  data: () => ({
   
    //
  }),
};
</script>
