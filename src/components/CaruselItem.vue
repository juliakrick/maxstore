<template>
  <v-container class="mb-7">
    <v-sheet class="mx-auto" max-width="700">
      <v-slide-group multiple show-arrows>
        <v-slide-item v-for="(n, i) in images" :key="i">
          <v-img :src="n.src" width="200" class="ma-2" />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "CaruselItem",
  data: () => ({
    images: [
      {
        text: "foto №4",
        src: require("../assets/five.jpg"),
      },
      {
        text: "foto №6",
        src: require("../assets/five.jpg"),
      },
      {
        text: "foto №7",
        src: require("../assets/five.jpg"),
      },
    ],
  }),
  methods: {},
};
</script>
<style scoped>
img {
  max-width: 100%;
}

/* .carusel_item {
  position: relative;
}
.title {
  position: absolute !important;
  bottom: 50 !important;
  background: rgba(238, 235, 235, 0.5) !important;
} */
</style>
