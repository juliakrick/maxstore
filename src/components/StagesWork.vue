<template>
  <div>
    <v-row class="stages">
      <v-row class="mb-2"
        ><h1 class="warning--text stages__title mt-10">
          Завод складских металлоконструкций
        </h1></v-row>

      <v-row>
        <h4 class="mb-4 stages__subtitle anchor-text">
          Изготавливаем металлические стеллажи с 1998 года
        </h4>
      </v-row>

      <v-row class="flex-wrap">
        <v-col class="text-center" cols="6" sm="3"  v-for="(item, i) in StagesItems" :key="i">
          <v-img  :src="item.src" max-width="100"></v-img>
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
          <p>{{ item.timing }}</p>
        </v-col>
      </v-row>

      <!-- <v-row>
        <v-col></v-col>
      </v-row> -->
    </v-row>
  </div>
</template>

<script>
export default {
  name: "StagesWork",
  data: () => ({
    StagesItems: [
      {
        title: "Консультация",
        description:
          "Менеджер 'Максстор' расскажет Вам о преимуществах того или иного оборудования.",
        timing: "От 15 минут",
        src: require("../assets/stages/foto1.jpg"),
      },
      {
        title: "Замер",
        description:
          "Специалист выезжает к Вам для замера помещения. На основе собранных данных производится проектирование.",
        timing: "От 1 дня",
        src: require("../assets/stages/foto2.jpg"),
      },
      {
        title: "Проектирование",
        description:
          "Конструкторский отдел компании воплотит в чертежах практичное и экономичное решение.",
        timing: "От 1 дня",
        src: require("../assets/stages/foto3.jpg"),
      },
      {
        title: "Изготовление",
        description:
          "Производство изготовит заказ в соответствии с международными нормами и стандартами.",
        timing: "От 1 недели",
        src: require("../assets/stages/foto4.jpg"),
      },
      {
        title: "Покраска",
        description:
          "Нанесем на металлические и оцинкованные профили длинной до 14 метров любой из цветов RAL.",
        timing: "От 3 дней",
        src: require("../assets/stages/foto5.jpg"),
      },
      {
        title: "Доставка",
        description:
          "«Максстор» доставит в любую точку России, Белоруссии и Казахстана таким образом, чтобы избежать деформации при транспортировке",
        timing: "От 3 дней",
        src: require("../assets/stages/foto6.jpg"),
      },

      {
        title: "Монтаж",
        description:
          "Монтаж осуществится согласно планировочному решению и спецификации, которые утверждаются при заключении договора.",
        timing: "От 1 дня",
        src: require("../assets/stages/foto7.jpg"),
      },
      {
        title: "Сервис",
        description:
          "Проверим износ стеллажных конструкций. Заменим поврежденные балки и стойки, реорганизуем ячейки полочных, фронтальных, набивных стеллажей. Доработаем и переоснастим площади",
        //   timing: "От 1 дня",
        src: require("../assets/stages/foto8.jpg"),
      },
    ],
  }),
};
</script>

<style scoped>
.stages__title {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 48px;
}
.stages__subtitle {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 22px;
}

@media screen and (max-width: 960px) {
  .stages__title {
    font-size: 36px;
    color: blue;
  }
  .stages__subtitle {
  font-size: 16px;
}
}
</style>