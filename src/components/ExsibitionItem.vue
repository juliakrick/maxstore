<template>
  <v-row class="mt-7">
    <v-row color="anchor">
      <h1 class="text--red">Участвуем в ежегодных выставках</h1>
    </v-row>
    <v-row>
      <v-col v-for="(item, i) in ExibitionData" :key="i" class="d-flex justify-space-between">
        <v-img :src="item.src" width="350" height="250" alt="exibition" class="image"></v-img>
      </v-col>
    </v-row>
    <v-row >
      <v-col v-for="(item, i) in ExibitionData2" :key="i" class="d-flex justify-space-between">
        <v-img :src="item.href" width="150" height="150" alt="exibition" class="image"></v-img>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: "ExibitionItem",
  data: () => ({
    ExibitionData: [
      {
        text: "foto №1",
        src: require("../assets/exibition1.jpg"),
      },
      {
        text: "foto №2",
        src: require("../assets/exibition2.jpg"),
      },
      {
        text: "foto №3",
        src: require("../assets/exibition3.jpg"),
      },
    ],
    ExibitionData2: [
      {
        text: "foto №1",
        href: require("../assets/exibitionl2.jpg"),
      },
      {
        text: "foto №2",
        href: require("../assets/exibitionl1.jpg"),
      },
      {
        text: "foto №3",
        href: require("../assets/exibitionl3.jpg"),
      },
      {
        text: "foto №4",
        href: require("../assets/exibitionl4.jpg"),
      },
      {
        text: "foto №5",
        href: require("../assets/exibitionl5.jpg"),
      },
    ],
  }),
};
</script>

<style scoped>
h1 {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 22px;
}

.image:hover {
  -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22) !important;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22) !important;
  -webkit-transform: scale(1.02) !important;
          transform: scale(1.02) !important;
}


</style>