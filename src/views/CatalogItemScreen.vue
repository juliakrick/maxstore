<template>
  <v-container>
    <v-row class="product">
      <v-col md="5">
        <v-card>
          <v-img height="350" :src="testImg" d-flex align-end>
            <!-- itemInfo.src -->
            <v-card-title>
              <h2 class="text-h2 white--text">
                {{ itemInfo.title }}
              </h2></v-card-title
            ></v-img
          >
        </v-card>
      </v-col>
      <v-col md="7">
        <v-row>
          <v-card class="h-100">
            <v-card-text>
              <h4 class="text-h5 mb-4">{{ itemInfo.description }}</h4>
              <v-divider></v-divider>
              <h6 class="text-h6 mb-4"> Артикул: {{ itemInfo.article }} </h6>
              <v-divider></v-divider>
              <p class="text-body-1 mr-5 mt-3">
                {{ itemInfo.decription }}
              </p>
              <v-divider></v-divider>
              <h6 class="text-h6 mb-4"> Цена: {{ itemInfo.price }} </h6>
            </v-card-text>
          </v-card>
        </v-row>
        <v-row>
          <v-text-field 
              class="card-count"
              flat solo
              type="number"
              hide-spin-buttons
             
              v-model.number="catalogItemCount"
              >
           </v-text-field> 
           <!-- v-if="catalogItemCount" -->
          <v-btn-toggle                       
            borderless
          >
            <v-btn                
              color="white"
              @click="changeCart(false)"
              icon
              >
              <v-icon center large>mdi-minus-circle-outline</v-icon>
            </v-btn>
            <v-btn 
              color="white"
              @click="changeCart(true)"
              icon
              >
              <v-icon center large>mdi-plus-circle-outline</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions} from "vuex";

export default {
  name: "CatalogItemScreen",
  data: () => ({
    catalogItemCount: 0,
    //this.GET_PRODUCTS_ID(this.$route.params.id),
    testImg: require("../assets/equirement/stal.jpg"),
  }),

  methods: {
    ...mapActions("Catalog", ["setCartData", "getCatalogItemDetails"]),

    changeCart(operation){
      if(this.itemInfo?.id){
        let propertyValue = 0
        if(this.catalogItemCount){
          propertyValue = operation ? this.catalogItemCount + 1 : this.catalogItemCount - 1
        } 
        else {
          propertyValue = operation ? 1 : 0
        }
        let castedValue = parseInt(propertyValue)
        this.catalogItemCount = castedValue
        this.setCartData({"catalogID": this.itemInfo.id, "value": castedValue})
      }
    },
  },

  computed: {
    ...mapGetters("Catalog", ["GET_CATALOG_DETAIL_ITEM_INFO", "GET_ITEM_COUNT"]),
    // catalogItemCount: (state) => this.GET_ITEM_COUNT(this.$route.params.id),
    itemInfo: (state) => state.Catalog?.currentCatalogItem 
                        || {id: '', article: '', title: '', decription: '', price: '', params: {}, fotos: [], category: {}, productType: []},
                       
  },

  mounted() {
      this.getCatalogItemDetails(this.$route.params.id);
  },

};
</script>

<style scoped>
.product {
  margin-top: 65px;
}
</style>