<template>
  <div>
    <v-row class="advantages mt-10">
      <v-row class="justify-md-center justify-space-between">
        <v-col cols="12" md="3"  class="d-flex flex-md-column justify-start">
          <v-col
            class="text-center"
            v-for="(item, i) in filteredItemsHalfOne"
            :key="i"
          >
            <v-img :src="item.src" class="text-center"></v-img>
            <h5 class="advantages__text py-2 text-black text-center">
              {{ item.title }}
            </h5>
            <p class="advantages__p text-left pl-3">{{ item.text1 }}</p>
            <p
              class="
                advantages__p advantages__p-oblique
                text-left
                pl-3
                red--text
              "
            >
              {{ item.text2 }}
            </p>
            <v-divider></v-divider>
          </v-col>
        </v-col>

        <v-col
          class="advantages__block d-flex justify-center align-center"
          cols="12" md="5"
          v-for="(item, i) in MainImg"
          :key="i"
        >
          <v-col class="advantages__subblock">
            <h5 class="pt-10 text-center">{{ item.title }}</h5>
            <v-img :src="item.src" class="advantages__img text-center"></v-img>
          </v-col>
        </v-col>

        <v-col cols="12" md="3" class="d-flex flex-md-column justify-end">
          <v-col
            class="text-center"
            v-for="(item, i) in filteredItemsHalfTwo"
            :key="i"
          >
            <v-img :src="item.src"></v-img>
            <h5 class="advantages__text py-2 text-black text-center">
              {{ item.title }}
            </h5>
            <p class="advantages__p text-left pl-3">{{ item.text1 }}</p>
            <p
              class="
                advantages__p advantages__p-oblique
                text-left
                pl-3
                red--text
              "
            >
              {{ item.text2 }}
            </p>
            <v-divider></v-divider>
          </v-col>
        </v-col>
      </v-row>
    </v-row>
    
  </div>
</template>

<script>
export default {
  name: "AdvantagesOfShelving",
  data: () => ({
    images: [
      {
        title: "Быстросборность",
        src: require("../assets/advantages/foto1.jpg"),
        text1:
          "Подбор конструктивов складского оборудования под реальную потребность.",
        text2:
          "Множество моделей 'ячеек' позволяет организовать оптимальный процесс хранения.",
      },
      {
        title: "Универсальность",
        src: require("../assets/advantages/foto2.jpg"),
        text1:
          "Подбор конструктивов складского оборудования под реальную потребность.",
        text2:
          "Множество моделей 'ячеек' позволяет организовать оптимальный процесс хранения.",
      },
      {
        title: "Автономность",
        src: require("../assets/advantages/foto3.jpg"),
        text1:
          "Подбор конструктивов складского оборудования под реальную потребность.",
        text2:
          "Множество моделей 'ячеек' позволяет организовать оптимальный процесс хранения.",
      },
      {
        title: "Модульность",
        src: require("../assets/advantages/foto4.jpg"),
        text1:
          "Подбор конструктивов складского оборудования под реальную потребность.",
        text2:
          "Множество моделей 'ячеек' позволяет организовать оптимальный процесс хранения.",
      },
      {
        title: "Адресность",
        src: require("../assets/advantages/foto5.jpg"),
        text1:
          "Подбор конструктивов складского оборудования под реальную потребность.",
        text2:
          "Множество моделей 'ячеек' позволяет организовать оптимальный процесс хранения.",
      },
      {
        title: "Эстетичность",
        src: require("../assets/advantages/foto6.jpg"),
        text1:
          "Подбор конструктивов складского оборудования под реальную потребность.",
        text2:
          "Множество моделей 'ячеек' позволяет организовать оптимальный процесс хранения.",
      },
    ],

    MainImg: [
      {
        title: "Храни добро на стеллажах Максстор BestZink!",
        src: require("../assets/advantages/mainfoto.jpg"),
      },
    ],
  }),

  computed: {
    filteredItemsHalfOne() {
      return this.images.slice(0, 3);
    },

    filteredItemsHalfTwo() {
      return this.images.slice(3, 6);
    },
  },
};
</script>

<style scoped>
.advantages__text {
  font-family: rubik;
  font-size: 16px;
}
.advantages__p {
  font-family: rubik;
  font-weight: 300;
  font-size: 12px;
}

.advantages__p-oblique {
  font-style: oblique;
}
.advantages__block {
  position: relative;
}
/* .advantages__subblock{ */
  /* position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%); */
/* } */
.advantages__img {
  object-fit: cover;
  
}
@media screen and (min-width: 960px) {
  .advantages__subblock {
    position: block;
    transform: none;
    color: blue;
  }
}
</style>