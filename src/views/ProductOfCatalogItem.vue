<template>
  <div>
    <v-row class="product">
      <v-col md="5">
        <v-card>
          <v-img height="350" :src="productItem.src" d-flex align-end>
            <v-card-title>
              <h2 class="text-h2 white--text">
                {{ productItem.title }}
              </h2></v-card-title
            ></v-img
          >
        </v-card>
      </v-col>
      <v-col md="7">
        <v-card class="h-100">
          <v-card-text>
            <h4 class="text-h5 mb-4">{{ productItem.description }}</h4>
            <v-divider></v-divider>
            <h6 class="text-h6 mb-4">Артикул:{{ productItem.id }}</h6>
            <v-divider></v-divider>
            <p class="text-body-1 mr-5 mt-3">
              {{ productItem.text }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { bus } from "../main";

export default {
  name: "ProductOfCatalogItem",
  data: () => ({
    
    productItem: {},
  }),

  methods: {
    ...mapMutations("Catalog", ["SET_CATALOG_TO_STATE"]),

    // returnVuewProduct() {
    //   return this.productItem;
    // },
  },

  computed: {
    ...mapGetters("Catalog", ["GET_PRODUCTS_ID"]),
  },

  created() {
    bus.$on("getproductid", (data) => {
      console.log("data", data);
      this.productItem = data;
    });
  },
};
</script>

<style scoped>
.product {
  margin-top: 65px;
}
</style>