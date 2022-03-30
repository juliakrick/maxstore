<template>
  <div>
     <v-row class="content pb-10">
      <v-row class="content__top  my-10">
        <v-col cols="12" md="8" class="pl-3 pl-sm-10  d-flex flex-column align-center align-sm-start">

          <v-row class="my-6"> 
                     <h1 class="font-weight-bold text-h4 text-md-h2 text-no-wrap white--text">
                      Cкладские стеллажи</h1>
            </v-row>
          <v-row class="d-flex justify-center warning px-2 rounded-xl py-1 mb-8">
                 <h1 class="font-weight-bolb text-subtitle-2 text-md-h6 text-no-wrap white--text">
                      Спрашивай новый каталог! Узнай о зимней скидке!
                 </h1>
         </v-row>
          <v-row class="pb-5">
                 <p class="text-justufy text-center text-sm-left text-subtitle-1 text-md-h6 font-weight-regular white--text">
                      Произведем паллетные, полочные и мезонинные системы и отдельные
                      элементы из металла с модификациями под потребности Вашего бизнеса!
                 </p>
         </v-row>
         <v-row class="pb-5">
        <p class="text-center text-sm-left text-subtitle-1 text-md-h6 font-weight-light white--text">
          Быстросборные металлические складские конструкции для организации
          хранения в логистических, складских, торговых, производственных,
          офисных, архивных&nbsp;и бытовых помещениях.
        </p>
        </v-row >
       <button-item>Получить каталог</button-item>

        </v-col>
            
    </v-row>
          
    </v-row>







  <!-- <v-row class="content pa-5">
    <v-col class="content_text white--text" cols="7">
      <v-row class="mb-6"
        ><h1 class="font-weight-bold text-h4 text-md-h2 text-no-wrap">
          Cкладские стеллажи
        </h1></v-row
      >
      <v-row class="d-flex justify-center warning px-14 rounded-xl py-1 mb-6"
        ><h1 class="font-weight-bolb text-subtitle-1 text-md-h6 text-no-wrap">
          Спрашивай новый каталог! Узнай о зимней скидке!
        </h1></v-row
      >
      <v-row
        ><p class="text-left text-subtitle-1 text-md-h6 font-weight-regular">
          Произведем паллетные, полочные и мезонинные системы и отдельные
          элементы из металла с модификациями под потребности Вашего бизнеса!
        </p></v-row
      >
      <v-row
        ><p class="text-left text-subtitle-1 text-md-h6 font-weight-regular">
          Быстросборные металлические складские конструкции для организации
          хранения в логистических, складских, торговых, производственных,
          офисных, архивных&nbsp;и бытовых помещениях.
        </p></v-row
      >
      <v-row class="justify-space-around text-subtitle-1 text-md2subtitle-2">
        <button-item>Получить каталог</button-item> -->
        <!-- <v-hover v-slot:default="{ hover }">
          <v-btn
            :class="
              hover
                ? 'secondary white--text py-7 px-5 rounded-pill text-subtitle-1 text-md-h6'
                : 'white secondary--text py-7 px-5 rounded-pill text-subtitle-1 text-md-h6'
            "
          >
            Отправить информацию
          </v-btn>
        </v-hover> -->
      <!-- </v-row>
    </v-col>
  </v-row> -->




  </div>
</template>

<script>
export default {
  name: "HeaderContent",
  data: () => ({}),
};
</script>

<style scoped>

.content {
    position: relative;
    top: 0;
    left: 0;
    background: url('../assets/headerBack.jpg');
    background-size: cover;
}
.content:before {
  content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.8;
}
.content__top{
  position: relative;
    width: 100%;
    margin: 0 auto;
  padding: 25px 10px;
}
.v-row {
  font-family: "Rubik", sans-serif;
}
</style>

