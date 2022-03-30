<template>
  <div class="contact">
    <!-- <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;"></a><a href="https://yandex.ru/maps/10747/podolsk/house/ulitsa_lobachyova_16/Z04YcwBkT00AQFtvfXhyeH9qZA==/?from=tabbar&ll=37.574686%2C55.439390&source=serp_navig&utm_medium=mapframe&utm_source=maps&z=16.14" style="color:#eee;font-size:12px;position:absolute;top:14px;"></a> -->

   
        <v-row class="contact pb-10">
          <v-row class="contact__top d-flex justify-center flex-column align-center">
              <h1 class="contact__title font-weight-bold text-h4 text-md-h2 text-center pb-5">Подбор стеллажного оборудования</h1>
              <h3 class="contact__subtitle font-weight-bold text-h6 text-md-h5 pb-10 text-center">Получите до 3-ех вариантов оснащения Вашего склада!</h3>
              <button-item>Калькулятор стеллажeй</button-item>
              </v-row>
          
      </v-row>
   
   
   
   
    <!-- <div class="frame" style="position: relative; overflow: hidden">
      <a
        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
        style="color: #eee; font-size: 12px; position: absolute; top: 0px"
        >Москва</a
      ><a
        href="https://yandex.ru/maps/10747/podolsk/house/ulitsa_lobachyova_16/Z04YcwBkT00AQFtvfXhyeH9qZA==/?from=tabbar&ll=37.574686%2C55.439390&source=serp_navig&utm_medium=mapframe&utm_source=maps&z=16.24"
        style="color: #eee; font-size: 12px; position: absolute; top: 14px"
        >Улица Лобачёва</a
      ><iframe
        src="https://yandex.ru/map-widget/v1/-/CCUB5StgLC"
        width="100%"
        height="100%"
        frameborder="1"
        allowfullscreen="true"
        style="position: relative"
      ></iframe>
    </div> -->

    <!-- </div> -->
    <!-- <v-col class="frame__block">
      <v-col>
        <v-row><h1>Доверьте склад профессионалам!</h1></v-row>
        <v-row><h2>Храните грузы вместе с нами. Положи на стеллажи!</h2></v-row>
      </v-col>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title><h3>Rjynfrns</h3></v-card-title>
          </v-card>
        </v-col>

        <v-col> </v-col>
      </v-row>
    </v-col> -->
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld'

export default {
  name: "ContactItem",

  components: {},
};
</script>

<style scoped>
.calculator{
    position: relative;
    top: 0;
    left: 0;
    background: url('https://yandex.ru/map-widget/v1/-/CCUB5StgLC');
    background-size: cover;
    /* width: 100%;
    height: 100%; */
}

.calculator::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.8;
}

.calculator__top{
    position: relative;
    width: 100%;
    margin: 0 auto;
  padding: 25px 10px;
}

.calculator__title{
  font-family: "Rubik", sans-serif;
  /* font-weight: 700;
  font-size: 48px; */
  color: #d3d3d3;
}

.calculator__subtitle{
  font-family: "Rubik", sans-serif;
  /* font-weight: 700;
  font-size: 22px; */
  color: #F3F3F3;
}
</style>
