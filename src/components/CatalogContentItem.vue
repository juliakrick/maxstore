
<template>
  <v-row class="catalog">
    <v-row>
      <v-row>
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
      </v-row>

      <v-row>
        <v-col>
          <!-- v-for="(item, i) in getFiltersObjects('searchString')" :key="i" -->
          <v-text-field 
            @change="changeType()"
            label="Строка поиска"
            hide-details="auto"
            v-model="сurrentSearchString"
            outlined
          ></v-text-field>
        </v-col> 

        <v-col>
          <v-select
            
            @change="changeType"
            @input="setCurrentCategory"
            :items="getFiltersObjects('categories')"
            label="Категория"
            outlined
            v-model="currentCategory"
          ></v-select>

          <!-- <v-spacer></v-spacer> -->
        </v-col>
        <v-col>
          <v-select
            
            @change="changeType"
            @input="setCurrentProductTypes"
            :items="getFiltersObjects('productTypes')"
            label="Тип продукции"
            outlined 
            
            return-object
            multiple
            v-model="currentProductTypes"
          ></v-select>

          <!-- <v-spacer></v-spacer> -->
        </v-col>
        <v-col>
          <v-switch v-for="(item, i) in getFiltersObjects('check')" :key="i"
            
            @change="changeType"
            :label="item.title"
            :value="item.value"
            v-model="сurrentInStock"
            outlined
          ></v-switch>
        </v-col>
      </v-row> 

      <v-row>
        <v-col v-for="(item, i) in getFiltersObjects('params')" :key="i">
          <v-text-field 
          
          @change="changeType"
          :label="item.title"
          hide-details="auto"
          v-model="сurrentParams[item.ID]"
          outlined
          ></v-text-field>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>

    </v-row>

    <v-row
      id="infinite-list"
      class="d-flex flex-wrap justify-space-around ma-5"
    >
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
    </v-row>
  </v-row>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import { bus } from "../main";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "CatalogContentItem",
  components: {
    InfiniteLoading,
  },

  data: () => {
    return {
    prodVuewItem: {},
    id: null,

    newsType: "",
    currentCategory: undefined,
    currentProductTypes: undefined, 
    сurrentInStock: undefined,
    сurrentParams: {},
    сurrentSearchString: undefined,
  }
  },

  computed: {
    ...mapGetters("Catalog", ["GET_CATALOG_TO_STATE", "GET_PRODUCTS_ID", "GET_CATALOG_FILTERS_TO_STATE"]),
    ...mapState({
      catalog: (state) => state.Catalog.catalog,
      filters: (state) => state.Catalog.filterItems,
    }),
  },

  methods: {
    ...mapActions("Catalog", ["getActions", "getCatalogFilters"]),

    searchMore($state) {
      this.getActions()
        .then((loadState) => {
          if (loadState) {
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((error) => {
          if (error) {
            $state.error();
          } else {
            $state.error();
          }
        });
    },
    changeType() {
      this.getActions(this.newsType)
    },
    getVuewItem(item, event) {
      event.preventDefault();
      this.id = item.id;
      this.prodVuewItem = this.GET_PRODUCTS_ID(this.id);
      bus.$emit("getproductid", this.prodVuewItem);
    },
    getFiltersObjects(filterType) {
      if (filterType == 'searchString') {
        return this.filters?.searchString
      }
      else if (filterType == 'categories') {
        return this.filters?.categories.map(item => ({'text': item.title, 'value': item.ID}))
      }
      else if (filterType == 'params') {
        return this.filters?.params
      }
      else if (filterType == 'productTypes') {
        let typeArray = this.filters?.productTypes.filter(f => f?.ID == this.currentCategory)
        if (typeArray.length) {
          return typeArray[0]?.items.map(item => ({'text': item.title, 'value': item.ID}))
        }
        else {
          return []
        }
      }
      else if (filterType == 'check') {
        return [this.filters?.inStock]
      }
      else {
        return []
      }
    },
    setCurrentCategory(currentCategory) {
      this.currentProductTypes = undefined;
      this.currentCategory = currentCategory; 
    },
    setCurrentProductTypes(currentProductTypes) {
      this.currentProductTypes = currentProductTypes; 
    },
    setParams(сurrentParams) {
      this.сurrentParams = сurrentParams; 
    }, 
  },
  mounted() {
      this.getCatalogFilters()
        .then((loadState) => {
          if (loadState) {
            this.$state.loaded();
          } else {
            this.$state.complete();
          }
        })
        .catch((error) => {
          if (error) {
            this.$state.error();
          } else {
            this.$state.error();
          }
        });
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