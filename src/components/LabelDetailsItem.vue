<template>
  <div class="label">
    <v-row>
      <h2  class="label__title anchor--text">
        Производим стеллажи "White label" для дилеров с нанесением логотипа или
        без него
      </h2>
    </v-row>
    <v-row class="d-flex justify-space-between">
      <v-col
        md="5"
        v-for="(item, i) in LogoData"
        :key="i"
      >
        <v-img :src="item.src"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "LabelDetailItem",

  data: () => ({
    LogoData: [
      {
        title: "withoutlogo",
        src: require("../assets/catalogdetails/withoutlogo.jpg"),
      },
      {
        title: "withoutlogo",
        src: require("../assets/catalogdetails/withlogo.jpg"),
      },
    ],
  }),
};
</script>

<style scoped>
.label__title {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 22px;
}
</style>