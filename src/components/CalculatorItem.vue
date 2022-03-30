<template>
  <div>
      <v-row class="calculator pb-10">
          <v-row class="calculator__top d-flex justify-center flex-column align-center">
              <h1 class="calculator__title font-weight-bold text-h4 text-md-h2 text-center pb-5">Подбор стеллажного оборудования</h1>
              <h3 class="calculator__subtitle font-weight-bold text-h6 text-md-h5 pb-10 text-center">Получите до 3-ех вариантов оснащения Вашего склада!</h3>
              <button-item>Калькулятор стеллажeй</button-item>
              </v-row>
          
      </v-row>
  </div>
</template>

<script>
import ButtonItem from './UI/ButtonItem.vue'
export default {
  components: { ButtonItem },
    name: 'CalculatorItem'

}
</script>

<style>
.calculator{
    position: relative;
    top: 0;
    left: 0;
    background: url('../assets/calculator/f.jpg');
    background-size: cover;
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