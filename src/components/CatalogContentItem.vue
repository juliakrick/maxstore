
<template>
  <div>
    <v-container class="catalog">
      <v-row class="justify-content-center">
        <v-col>
          <h1 class="warning--text catalog__title mt-10">
          Стеллажи и металлоконструкции
          </h1>
        </v-col>
      </v-row>

      <v-row class="justify-content-center">
        <v-col>
          <h4 class="mb-4 catalog__subtitle anchor-text">
            Изготавливаем металлические стеллажи с 1998 года
          </h4>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-spacer></v-spacer>
          <v-divider inset></v-divider>
        </v-col> 
      </v-row>

      <v-row>
        
        <v-spacer></v-spacer>

        <v-col cols=4>
          <v-text-field
            @change="getListData"
            hide-details="auto"
            v-model="сurrentSearchString"
            outline
            clearable
            type="text"
            >
            <template v-slot:label>
              <v-icon left>mdi-magnify</v-icon> Введите наименование 
            </template>
          </v-text-field>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols=2>
          <v-hover 
            v-slot="{ hover }" 
            open-delay="100"
            >
            <v-btn
                color="error"
                large
                dark
                icon
                @click="showListParameters=!showListParameters"
              >
              <v-icon rigth>mdi-filter-settings-outline</v-icon>
              {{(hover || showListParameters) ? 'Параметры' : ''}}
              <v-fade-transition>
                <div
                  v-if="hover || showListParameters"

                  color="error"
                  dark
   
                  style="height: 100%;"
                >
                </div>
              </v-fade-transition>
            </v-btn>
          </v-hover>
        </v-col>
      </v-row>

      <v-expand-transition>
        <v-row v-if="showListParameters">
          <v-col>
            <v-row>
              <v-col>
                <v-select 
                  
                  @change="getListData"
                  @input="setCurrentCategory"
                  :items="getFiltersObjects('categories')"
                  label="Категория"
                  outlined
                  no-data-text
                  v-model="currentCategory"
                ></v-select>
              </v-col>

              <v-col>
                <v-select 
                  @change="getListData"
                  @input="setCurrentProductTypes"
                  :items="getFiltersObjects('productTypes')"
                  label="Тип продукции"
                  outlined 
                  no-data-text
                  return-object
                  multiple
                  :disabled="isEmptyProductTypes"
                  v-model="currentProductTypes"
                ></v-select>
              </v-col>

              <v-col>
                <v-switch v-for="(item, i) in getFiltersObjects('check')" :key="i"
                  @change="getListData"
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
                
                @change="getListData"
                :label="item.title"
                hide-details="auto"
                v-model="сurrentParams[item.ID]"
                outlined
                ></v-text-field>
                <v-spacer></v-spacer>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-expand-transition>

      <v-row>
        <v-col>
          <v-spacer></v-spacer>
          <v-divider inset></v-divider>
        </v-col> 
      </v-row>

      <v-row
        id="infinite-list"
        class="justify-start ma-5"
      >
        <v-col 
          v-for="item in catalog" :key="item.id" 
          class="mb-5"  
        >
          <v-card 
            hover
            @click="getVuewItem(item, $event)"
          >
            <v-img :src="testImg" to="/catalog/:id">
              <!-- "item.src" -->
            </v-img>
            
            <v-card-title to="/catalog/:id" >
              {{ item.title }}
            </v-card-title>

            <v-card-text>
              <p>{{ item.description }}</p>
              <b>{{ item.parametrs.width }}</b>
              <b>{{ item.parametrs.width }}</b>
              <b>{{ item.parametrs.width }}</b>
              <b>{{ item.parametrs.width }}</b>
              <b>{{ item.parametrs.width }}</b>
              <p>{{ item.price }}</p>
            
              <template>
                <v-container>
                  <v-row align="center">
                    <v-col>
                      <v-text-field 
                          class="card-count"
                          center
                          type="number"
                          hide-spin-buttons
                          reverse
                          
                          
                          v-if="userCart[item.id]"
                          v-model="userCart[item.id]"
                          >
                        </v-text-field> 
                    </v-col>

                    <v-col>
                      <v-btn-toggle                       
                        borderless
                      >
                        <v-btn                
                          color="white"
                          @click="changeCart(item.id, false)"
                          dark
                          >
                          <v-icon >mdi-minus-circle-outline</v-icon>
                        </v-btn>
                        <v-btn 
                          color="white"
                          @click="changeCart(item.id, true)"
                          dark>
                          <v-icon >mdi-plus-circle-outline</v-icon>
                        </v-btn>
                      </v-btn-toggle>
                    </v-col>
                  </v-row>
                </v-container>  
              </template>
            </v-card-text>
          </v-card>
        </v-col>

        <infinite-loading @infinite="searchMore">
          <div slot="spinner">Загрузка...</div> 
          <!-- todo: Добавить иконку загрузки -->
          <div slot="no-more"></div>
          <div slot="no-results"></div>
          <!-- todo: Добавить плашку для отсутствия результатов -->
        </infinite-loading>
      </v-row>
    </v-container>
  </div>
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
      
      userCart: {},
      showListParameters: false,
      isEmptyProductTypes: false,

      testImg: require("../assets/equirement/stal.jpg"),
      currentCategory: undefined,
      currentProductTypes: undefined, 
      сurrentInStock: undefined,
      сurrentParams: {},
      сurrentSearchString: "",
      queryParameters: {},
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
    ...mapActions("Catalog", ["getCatalogData", "getCatalogFilters", "setCartData"]),

    searchMore($state) {
      if (this.checkLastId()){
        this.getCatalogData(this.getListParams())
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
      }
      else {
        $state.complete();
      }
    },
    getListData() {
      this.getCatalogData(this.getListParams())
    },
    getListParams() {
      let queryParams = {
        "itemsCount": 20,
        "lastID": this.catalog.length ? this.catalog[this.catalog.length-1]?.id : undefined,  
        "searchString": this.сurrentSearchString, 
        "category": this.currentCategory,
        "productTypes": this.currentProductTypes ? this.currentProductTypes?.map(item => item.value).join('+') : undefined, 
        "inStock": this.сurrentInStock,
        "params": Object.keys(this.сurrentParams).length ? this.сurrentParams : undefined
      }

      let needClean = false
      let actualParams = {}  
      for (var key in queryParams) {
        if(queryParams[key]){
          actualParams[key] = queryParams[key]
        }  
        if(this.queryParameters[key]){
          if(key != "lastID" && queryParams[key] != this.queryParameters[key]){
            needClean = true
          }   
        }
      }

      this.queryParameters = actualParams

      return {params: actualParams, needClean: needClean}
    },
    checkLastId(){
      let lastID = this.catalog.length ? this.catalog[this.catalog.length-1]?.id : undefined

      if(lastID && this.queryParameters?.lastID == lastID){
        return false
      }

      return true
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
        return this.filters?.categories?.map(item => ({'text': item.title, 'value': item.ID}))
      }
      else if (filterType == 'params') {
        return this.filters?.params ? this.filters?.params : []
      }
      else if (filterType == 'productTypes') {
        let typeArray = this.filters?.productTypes?.filter(f => f?.ID == this.currentCategory)
        let result = []
        if (typeof typeArray == 'object') {
          if (typeArray.length) {
            result = typeArray[0]?.items?.map(item => ({'text': item.title, 'value': item.ID}))
          }
        }
        if(result && result.length){
          this.isEmptyProductTypes = false
          return result
        }
        else{
          this.isEmptyProductTypes = true
          return []
        }
      }
      else if (filterType == 'check') {
        return [this.filters?.inStock ? this.filters?.inStock : {"ID": "inStock", "title": "В Наличии", "value": false}]
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
    changeCart(id, operation){
      let itemsCount = this.userCart[id]
      let propertyValue = 0
      if(itemsCount){
        propertyValue = operation ? itemsCount + 1 : itemsCount - 1
      } 
      else {
        propertyValue = operation ? 1 : 0
      }
      this.$set(this.userCart, id, propertyValue)
      this.setCartData(this.userCart);
    }, 
  },
  mounted() {
      this.getCatalogFilters();
      this.getListData();
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
.card-count {
  text-align: center !important;

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