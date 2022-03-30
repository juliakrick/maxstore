<template>
  <v-row class="navbar white--text d-none d-md-flex">
    <v-col
      class="navbar primary d-flex justify-center"
      
      v-for="(item, i) in navbardata"
      :key="i"
    >
      <h4
        class="
          font-weight-regular
          text-subtitle-1 text-md-subtitle-2 text-no-wrap
        "
      >
        {{ item.text }}
      </h4>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({
    navbardata: [
      {
        text: "Полочные стеллажи",
      },
      {
        text: "Паллетные стеллажи",
      },
      {
        text: "Набивные стеллажи",
      },
      {
        text: "Консольные стеллажи",
      },
      {
        text: "Мезонинные стеллажи",
      },
    ],
  }),
};
</script>

<style scoped>
.navbar__title {
  font-family: Rubik, Arial;
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
}
</style>