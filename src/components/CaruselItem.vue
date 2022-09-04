<template>

  <div class="d-flex justify-center flex-column py-10 carusel">
   
   <v-row>
     <carousel-3d
      :autoplay="true"
      :autoplay-timeout="2400"
     
      :height="237"
      :count="7"
     :display="7"
    >
      <slide v-for="(foto, i) in images" :index="i" :key="i">
        <figure>
          <v-img :src="foto.src"></v-img>
        </figure>
      </slide>

    </carousel-3d>
   </v-row>
   
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "CaruselItem",
  components: {
    Carousel3d,
    Slide,
  },

  data: () => ({
    images: [
      {
        text: "foto №4",
        src: require("../assets/one.jpg"),
      },
      {
        text: "foto №7",
        src: require("../assets/two.jpg"),
      },
      {
        text: "foto №7",
        src: require("../assets/three.jpg"),
      },
      {
        text: "foto №7",
        src: require("../assets/four.jpg"),
      },
      {
        text: "foto №7",
        src: require("../assets/five.jpg"),
      },
      {
        text: "foto №7",
        src: require("../assets/six.jpg"),
      },
       {
        text: "foto №7",
        src: require("../assets/seven.png"),
      },
    ],
  }),
  methods: {},
};
</script>
<style scoped>
.carusel{
  width: 100%;
}
/* img {
  max-width: 100%;
} */
/* .carousel-3d-slide {
  height: auto !important;
  background-color: rgba(0, 0, 0, 0.25) !important;
} */
/* .carusel_item {
  position: relative;
}
.title {
  position: absolute !important;
  bottom: 50 !important;
  background: rgba(238, 235, 235, 0.5) !important;
} */
</style>
