<template>
  <div>
    <v-row class="awards">
      <v-row class="mb-5">
        <h1 class="awards__title warning--text mt-10">
          Сертификаты, дипломы, патенты
        </h1></v-row>
    </v-row>

    <v-row>
      <h4 class="mb-4 awards__subtitle anchor-text">
        Держим уровень 29 лет
      </h4>
    </v-row>

    <v-row class="my-10">
      <v-col v-for="(item, i) in images" :key="i">
        <v-img :src="item.src"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AwardsItems",

  data: () => ({
    images: [
      {
        text: "foto №1",
        src: require("../assets/avards/foto1.jpg"),
      },
      {
        text: "foto №2",
        src: require("../assets/avards/foto6.jpg"),
      },
      {
        text: "foto №3",
        src: require("../assets/avards/foto2.jpg"),
      },
      {
        text: "foto №4",
        src: require("../assets/avards/foto3.jpg"),
      },
      {
        text: "foto №5",
        src: require("../assets/avards/foto4.jpg"),
      },
      {
        text: "foto №6",
        src: require("../assets/avards/foto5.jpg"),
      },
    ],
  }),
};
</script>

<style scoped>
.awards__title {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 48px;
}
.awards__subtitle {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 22px;
}

@media screen and (max-width: 960px) {
  .awards__title {
    font-size: 36px;
    
  }
  .awards__subtitle {
  font-size: 16px;
}
}
</style>