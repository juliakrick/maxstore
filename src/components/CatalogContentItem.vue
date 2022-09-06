
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
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          v-model="newsType"
          @change="changeType()"
          :items="filters"
          label="search"
          outlined
        ></v-select>
      </v-col>
    </v-row>

    <v-row
      id="infinite-list"
      class="d-flex flex-wrap justify-space-around ma-5"
    >
      <!-- <v-row>
       
      </v-row> -->
      <!-- <v-col> -->
      <!-- <v-col md="4" xl="4" ma="10" class="d-flex flex-wrap ma-5 pa-5">  -->
      <v-card v-for="item in catalog" :key="item.id" class="mb-5">
        <v-img :src="item.src"></v-img>
        <v-card-title @click="getVuewItem(item, $event)">
          <router-link to="/catalog/:id"> {{ item.title }}</router-link>
        </v-card-title>

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
      <infinite-loading @infinite="searchMore"></infinite-loading>
      <!-- </v-col> -->
    </v-row>
    <!-- </v-col> -->
    <!-- <pagination-item ></pagination-item> -->
  </v-row>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import { bus } from "../main";
// import PaginationItem from "../components/PaginationItem.vue";
import { mapActions, mapGetters, mapState } from "vuex";
// let urlCatalog = 'https://03f0ce2f-1a05-4a2d-a628-8fdaef600ef1.mock.pstmn.io/products'
export default {
  name: "CatalogContentItem",
  components: {
    // PaginationItem,
    InfiniteLoading,
  },

  data: () => {
    return {
    prodVuewItem: {},
    id: null,

    newsType: "",
  }
  },

  computed: {
    ...mapGetters("Catalog", ["GET_CATALOG_TO_STATE", "GET_PRODUCTS_ID"]),
    ...mapState({
      catalog: (state) => state.Catalog.catalog,
      filters: (state) => state.Catalog.filterItems,
    }),
  },

  methods: {
    ...mapActions("Catalog", ["getActions", "getFilterCatalog"]),

    searchMore($state) {
      console.log("$state", $state);
      this.getActions()
        .then((loadState) => {
          console.log("loadState", loadState);
          if (loadState) {
            // this.page += 1;
            // console.log("this.page", this.page);
            // this.list.push(...loadState.data);
            // console.log("this.list", this.list);
            console.log("loaded");
            $state.loaded();
          } else {
            console.log("complete");
            $state.complete();
          }
        })
        .catch((error) => {
          if (error) {
            console.log("error", error);
            //todo handling of error
            $state.error();
          } else {
            console.log("error2");
            //todo handling of error
            $state.error();
          }
        });
    },

    getVuewItem(item, event) {
      event.preventDefault();
      this.id = item.id;
      this.prodVuewItem = this.GET_PRODUCTS_ID(this.id);
      bus.$emit("getproductid", this.prodVuewItem);
    },

    changeType() {
      console.log('ньютайп',this.newsType);
      
      this.getActions(this.newsType)
     
    },
  },
  mounted() {
    this.getFilterCatalog();
    
  },

//   beforeDestroy: function() {
//  отключить эвент басс
// }

};
</script>

<style scoped>
.catalog {
  padding-top: 65px;
}
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