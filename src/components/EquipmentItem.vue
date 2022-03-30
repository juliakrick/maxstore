<template>
  <div class="equipment mb-15">
    <v-row
      ><h2 class="equipment__title anchor--text">
        Выпускаем 4 серии оборудования "Сталь", "СуперЦинк", "УниЦинк" и
        "НовыйЦинк"
      </h2></v-row
    >
    <v-row>
      <v-col v-for="(item, i) in EquipmentData" :key="i" class="d-flex">
        <v-card>
          <v-card-title>{{ item.title }}</v-card-title>
          <video
            autoplay="autoplay"
            controls
            width="100%"
            height="50%"
            loop
            muted
          >
            <source src="https://youtu.be/EgnNsNeLY9w" />
          </video>
          <v-card-text>{{ item.text }}</v-card-text>
          <v-img height="250" :src="item.src"></v-img>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row class="py-5 ma-5"> -->
      <!-- <v-row>
        <h2>Затрудняетесь с выбором?</h2>
      </v-row>
      <v-row>
        <button-item>Получить консультацию</button-item>
      </v-row>
    </v-row> -->
  </div>
</template>

<script>
export default {
  name: "EquipmentItem",

  data: () => ({
    EquipmentData: [
      {
        title: "Серия 'Сталь'",
        src: require("../assets/equirement/stal.jpg"),
        text: "Максстор «Сталь» - серия предназначенная для возведения всех типов складских конструкций. Изготавливаются только из качественного металла с нанесением цветного защитного покрытия.",
        videosrc: "",
      },
      {
        title: "Серия 'СуперЦинк'",
        src: require("../assets/equirement/supercink.jpg"),
        text: "Максстор «СуперЦинк» - грузовая серия. Изготавливаются из оцинкованного металла, имеют устойчивость к коррозии и увеличенный срок службы, уникальный конструктив и повышенные потребительские свойства. Могут быть окрашены.",
        videosrc: "",
      },
      {
        title: "Серии 'Уни - , Т - , Б - Цинк'",
        src: require("../assets/equirement/unizink.jpg"),
        text: "Максстор «УниЦинк» - легкая серия. Изготавливаются из оцинкованного металла, имеют устойчивость к коррозии и увеличенный срок службы, уникальный конструктив и повышенные потребительские свойства. Могут быть окрашены.",
        videosrc: "",
      },
    ],
  }),
};
</script>

<style scoped>
.equipment__title {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 22px;
}
</style>