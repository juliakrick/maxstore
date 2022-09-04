<template>
  <div class='catalog'>
      <catalog-content-item> </catalog-content-item>
      
      <!-- <label-details-item> </label-details-item>
      <equipment-item> </equipment-item> -->
      <!-- <CatalogFormItem> </CatalogFormItem> -->
  </div>
</template>

<script>
import CatalogContentItem from "../components/CatalogContentItem.vue";

// import EquipmentItem from "../components/EquipmentItem.vue";
// import LabelDetailsItem from "../components/LabelDetailsItem.vue";

export default {
  name: "CatalogItem",
   components: {
   CatalogContentItem,
  
  //  EquipmentItem,
  //  LabelDetailsItem,
  },
};
</script>

<style scoped>

/* .catalog{
  height: 100vh;
} */

</style>