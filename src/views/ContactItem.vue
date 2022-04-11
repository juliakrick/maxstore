<template>
  <div>
  <contact-content> </contact-content>
  </div>
</template>

<script>
import ContactContent from '../components/ContactContent.vue'

export default {
  name: "ContactItem",

  components: {
    ContactContent,
  },
};
</script>

<style scoped>


/* .contact::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1820px;
  background-color: black;
  opacity: 0.8;
} */



.calculator__title {
  font-family: "Rubik", sans-serif;
  /* font-weight: 700;
  font-size: 48px; */
  color: #d3d3d3;
}

.calculator__subtitle {
  font-family: "Rubik", sans-serif;
  /* font-weight: 700;
  font-size: 22px; */
  color: #f3f3f3;
}
</style>
