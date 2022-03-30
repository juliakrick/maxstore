<template>
  <div>
    <v-row class="awards">
      <v-row class="mb-5">
        <h1 class="awards__title warning--text mt-10">
          Клиенты завода
        </h1></v-row>
    </v-row>

    <v-row>
      <h4 class="mb-4 awards__subtitle anchor-text">
        Работаем с ведущими компаниями
      </h4>
    </v-row>

   <v-row>
     <h4>Промышленность</h4>
   </v-row>
    <v-row class="my-10">
      
      <v-col v-for="(item, i) in imagesIndustry" :key="i">
        <v-img :src="item.src"></v-img>
      </v-col>
    </v-row>

     <v-row>
     <h4>Логистика</h4>
   </v-row>
    <v-row class="my-10">
      
      <v-col v-for="(item, i) in imageslogistics" :key="i">
        <v-img :src="item.src"></v-img>
      </v-col>
    </v-row>

     <v-row>
     <h4>Торговля</h4>
   </v-row>
    <v-row class="my-10">
      
      <v-col v-for="(item, i) in imagesTrade" :key="i">
        <v-img :src="item.src"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ClientsItems',

  data: () => ({
    imagesIndustry: [
      {
        text: "foto №1",
        src: require("../assets/clients/industry/foto1.jpg"),
      },
      {
        text: "foto №2",
        src: require("../assets/clients/industry/foto2.jpg"),
      },
      {
        text: "foto №3",
        src: require("../assets/clients/industry/foto3.jpg"),
      },
      {
        text: "foto №4",
        src: require("../assets/clients/industry/foto4.jpg"),
      },
      {
        text: "foto №5",
        src: require("../assets/clients/industry/foto5.jpg"),
      },
      {
        text: "foto №6",
        src: require("../assets/clients/industry/foto6.jpg"),
      },
    ],

      imageslogistics: [
      {
        text: "foto №1",
        src: require("../assets/clients/logistics/foto1.jpg"),
      },
      {
        text: "foto №2",
        src: require("../assets/clients/logistics/foto2.jpg"),
      },
      {
        text: "foto №3",
        src: require("../assets/clients/logistics/foto3.jpg"),
      },
      {
        text: "foto №4",
        src: require("../assets/clients/logistics/foto4.jpg"),
      },
      {
        text: "foto №5",
        src: require("../assets/clients/logistics/foto5.jpg"),
      },
    ],

      imagesTrade: [
      {
        text: "foto №1",
        src: require("../assets/clients/traders/foto1.jpg"),
      },
      {
        text: "foto №2",
        src: require("../assets/clients/traders/foto2.jpg"),
      },
      {
        text: "foto №3",
        src: require("../assets/clients/traders/foto3.jpg"),
      },
      {
        text: "foto №4",
        src: require("../assets/clients/traders/foto4.jpg"),
      },
    ],
  }),

}
</script>

<style>

</style>