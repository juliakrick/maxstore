<template>
  <div class="production">
    <v-row>
      <v-row
        ><h1 class="warning--text font-weigth-bolb  production__title mt-10">
          Завод складских металлоконструкций
        </h1></v-row
      >
      <v-row> </v-row>
      <v-row>
        <v-col md="5">
          <!-- <v-card> -->
          <video
            autoplay="autoplay"
            controls
            width="100%"
            height="100%"
            loop
            muted
          >
            <source src="https://youtu.be/EgnNsNeLY9w" />
          </video>
          <!-- </v-card> -->
        </v-col>
        <v-col md="7">
          <v-card class="h-100 text--red">
            <v-card-text>
              <h4 class="mb-4 production__subtitle anchor-text">
                Изготавливаем металлические стеллажи с 1998 года
              </h4>
              <v-divider></v-divider>
              <p class="text-body-1 mr-5 mt-3 production__text black--text">
                «Максстор» — это современный завод с 4 цехами, площадью более 7
                тысяч квадратных метров расположенный в Новой Москве. Наше
                производство роботизированно и делает ставку на качество
                продукции. Сборно-разборные металлические конструкции
                изготавливаются в соответствии с ГОСТ и ТУ, имеют паспорта
                изделий. Профилирование, пробивка, сварка и покраска происходят
                на скоростных линиях европейского и российского производства
                согласно мировым стандартам. Моделирование проектов ведется с
                помощью современного ПО. Сотрудники являются постоянными
                участниками профильных мероприятий
              </p>
              <v-divider></v-divider>
              <v-row class="d-flex flex-column my-3 pb-4">
                <h4 class="my-5 production__subtitle black--text text-center">
                  Видели производство изнутри?
                </h4>
                <button-item>Записаться на посещение</button-item>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
    <v-row>
      <CaruselItem></CaruselItem>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <ExibitionItem> </ExibitionItem>
    </v-row>

    <v-divider></v-divider>
    <!-- <v-row> -->
      <ExpertsAbout> </ExpertsAbout>
    <!-- </v-row> -->
    
  </div>
</template>
<script>
import ExibitionItem from "../components/ExsibitionItem.vue";
import ExpertsAbout from "../components/ExpertsAbout.vue";
import CaruselItem from "../components/CaruselItem.vue";
export default {
  name: "ProductionItem",
  components: {
    ExibitionItem,
    ExpertsAbout,
    CaruselItem,
  },
  data: () => ({}),
};
</script>

<style scoped>
.production__title {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 48px;
}
.production__subtitle {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 22px;
}

.production__text {
  font-size: 16px !important;
}
</style>
