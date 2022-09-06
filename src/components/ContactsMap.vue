
<template>
  <div id="map" ></div>
</template>

<script>

/* eslint-disable */
import "../plugins/yandex-maps";

function init() {
 var myMap = new ymaps.Map("map", {
                center: [55.442988, 37.574887],
                zoom: 16,
                
            });
  // myMap.getCenter()
  let myPlacemark = new ymaps.Placemark([55.439390, 37.574687], {
    hintContent: 'Мы здесь',
    balloonContent: 'Вот прямо тут'
    }, 
    // {
    //     // Опции.
    //     // Необходимо указать данный тип макета.
    //     iconLayout: 'default#image',
    //     // Своё изображение иконки метки.
    //     iconImageHref: 'images/myIcon.gif',
    //     // Размеры метки.
    //     iconImageSize: [30, 42],
    //     // Смещение левого верхнего угла иконки относительно
    //     // её "ножки" (точки привязки).
    //     iconImageOffset: [-5, -38]
    // }
    );
  myMap.geoObjects.add(myPlacemark)
  
}

export default {
  data() {
    return {};
  },
  mounted() {
    ymaps.ready(init);
  },
};
</script>

<style scoped>
</style>