<template>
  <v-row class="catalog">
    <v-row
      ><h1 class="warning--text catalog__title mt-10">
        Стеллажи и металлоконструкции
      </h1></v-row
    >
    <v-row>
      <h4 class="mb-4 catalog__subtitle anchor-text">
        Изготавливаем металлические стеллажи с 1998 года
      </h4>
    </v-row>

    <v-row class="d-flex flex-wrap justify-space-around ma-5">
      <!-- <v-col> -->
      <!-- <v-col md="4" xl="4" ma="10" class="d-flex flex-wrap ma-5 pa-5">  -->
      <v-card v-for="(item, i) in GET_CATALOG_TO_STATE" :key="i"  class="mb-5">
        <v-img :src="item.src"></v-img>
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-text>
          <p>{{ item.description }}</p>
          <b>{{ item.parametrs.width }}</b>
          <b>{{ item.parametrs.width }}</b>
          <b>{{ item.parametrs.width }}</b>
          <b>{{ item.parametrs.width }}</b>
          <b>{{ item.parametrs.width }}</b>
          <p>{{ item.price }}</p>
        </v-card-text>
      </v-card>
      <!-- </v-col> -->
    </v-row>
    <!-- </v-col> -->
  </v-row>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "CatalogContentItem",

  data: () => ({
    catalogData: [
      {
        src: require("../assets/catalog/one.jpg"),
        title: "Фронтальные стеллажи",
        description: '"Сталь", "СуперЦинк" и "НовыйЦинк"',
        parametrs: [
          { width: "Ширина, мм : до 5 000" },
          { height: ":Высота, мм:до 13 500" },
          { depth: "Глубина, мм:до 2 500" },
          { tier: "Ярус, кг:до 4 500" },
          { section: "Секция, кг:до 25 000" },
        ],
        price: "Стоимость по запросу",
      },
      {
        src: require("../assets/catalog/two.jpg"),
        title: "Фронтальные стеллажи",
        description: '"Сталь", "СуперЦинк" и "НовыйЦинк"',
        parametrs: [
          { "Ширина, мм": "до 5 000" },
          { "Высота, мм": "до 13 500" },
          { "Глубина, мм": "до 2 500" },
          { "Ярус, кг": "до 4 500" },
          { "Секция, кг": "до 25 000" },
        ],
        price: "Стоимость по запросу",
      },
      {
        src: require("../assets/catalog/three.jpg"),
        title: "Фронтальные стеллажи",
        description: '"Сталь", "СуперЦинк" и "НовыйЦинк"',
        parametrs: [
          { "Ширина, мм": "до 5 000" },
          { "Высота, мм": "до 13 500" },
          { "Глубина, мм": "до 2 500" },
          { "Ярус, кг": "до 4 500" },
          { "Секция, кг": "до 25 000" },
        ],
        price: "Стоимость по запросу",
      },
      {
        src: require("../assets/catalog/four.jpg"),
        title: "Фронтальные стеллажи",
        description: '"Сталь", "СуперЦинк" и "НовыйЦинк"',
        parametrs: [
          { "Ширина, мм": "до 5 000" },
          { "Высота, мм": "до 13 500" },
          { "Глубина, мм": "до 2 500" },
          { "Ярус, кг": "до 4 500" },
          { "Секция, кг": "до 25 000" },
        ],
        price: "Стоимость по запросу",
      },
      {
        src: require("../assets/catalog/five.jpg"),
        title: "Фронтальные стеллажи",
        description: '"Сталь", "СуперЦинк" и "НовыйЦинк"',
        parametrs: [
          { "Ширина, мм": "до 5 000" },
          { "Высота, мм": "до 13 500" },
          { "Глубина, мм": "до 2 500" },
          { "Ярус, кг": "до 4 500" },
          { "Секция, кг": "до 25 000" },
        ],
        price: "Стоимость по запросу",
      },
      {
        src: require("../assets/catalog/sixe.jpg"),
        title: "Фронтальные стеллажи",
        description: '"Сталь", "СуперЦинк" и "НовыйЦинк"',
        parametrs: [
          { "Ширина, мм": "до 5 000" },
          { "Высота, мм": "до 13 500" },
          { "Глубина, мм": "до 2 500" },
          { "Ярус, кг": "до 4 500" },
          { "Секция, кг": "до 25 000" },
        ],
        price: "Стоимость по запросу",
      },

      {
        src: require("../assets/catalog/seven.jpg"),
        title: "Фронтальные стеллажи",
        description: '"Сталь", "СуперЦинк" и "НовыйЦинк"',
        parametrs: [
          { "Ширина, мм": "до 5 000" },
          { "Высота, мм": "до 13 500" },
          { "Глубина, мм": "до 2 500" },
          { "Ярус, кг": "до 4 500" },
          { "Секция, кг": "до 25 000" },
        ],
        price: "Стоимость по запросу",
      },
      {
        src: require("../assets/catalog/eight.jpg"),
        title: "Фронтальные стеллажи",
        description: '"Сталь", "СуперЦинк" и "НовыйЦинк"',
        parametrs: [
          { "Ширина, мм": "до 5 000" },
          { "Высота, мм": "до 13 500" },
          { "Глубина, мм": "до 2 500" },
          { "Ярус, кг": "до 4 500" },
          { "Секция, кг": "до 25 000" },
        ],
        price: "Стоимость по запросу",
      },
      {
        src: require("../assets/catalog/nine.jpg"),
        title: "Фронтальные стеллажи",
        description: '"Сталь", "СуперЦинк" и "НовыйЦинк"',
        parametrs: [
          { "Ширина, мм": "до 5 000" },
          { "Высота, мм": "до 13 500" },
          { "Глубина, мм": "до 2 500" },
          { "Ярус, кг": "до 4 500" },
          { "Секция, кг": "до 25 000" },
        ],
        price: "Стоимость по запросу",
      },
    ],
  }),
  computed:{
    ...mapGetters(["GET_CATALOG_TO_STATE"])

  },

  methods:{
    ...mapActions(["GET_PRODUCTS_FROM_API"])
      
  },
  mounted(){
    this.GET_PRODUCTS_FROM_API()
    .then((response)=>{
      if(response){
        console.log('data arrived!')
      }
    }
    )
  }



};
</script>

<style scoped>
.catalog__title {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 48px;
}
.catalog__subtitle {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 22px;
}
</style>