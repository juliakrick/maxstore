<template>
  <v-app>
    <HeaderItem> </HeaderItem>
    <!-- <modal-window-item v-if="dialog" @dialogstate="setDialogState">
      <AuhtItem></AuhtItem>
    </modal-window-item> -->
    <v-main>
      <v-container>
        <router-view class="view"></router-view>
      </v-container>
    </v-main>
    <FooterItem></FooterItem>
  </v-app>
</template>

<script>
// import AuhtItem from "./components/AuhtItem.vue";
import FooterItem from "./components/FooterItem.vue";
import HeaderItem from "./components/HeaderItem.vue";

export default {
  name: "App",
  components: {
    // AuhtItem,
    FooterItem,
    HeaderItem,
  },
  data: () => ({
    dialog: true,
    PictureData: [
      {
        text: "foto №1",
        href: "../assets/1.jpg",
      },
      {
        text: "foto №2",
        href: "../assets/2.jpg",
      },
      {
        text: "foto №3",
        href: "../assets/3.jpg",
      },
      {
        text: "foto №4",
        href: "../assets/4.jpg",
      },
      {
        text: "foto №5",
        href: "../assets/5.jpg",
      },
      {
        text: "foto №6",
        href: "../assets/6.jpg",
      },
      {
        text: "foto №7",
        href: "../assets/7.jpg",
      },
    ],
  }),
  methods: {
    setDialogState(data) {
      console.log("dialog");
      this.dialog = data;
    },
  },
};
</script>

<style scoped>
.v-main {
  padding: 0px !important;
}
</style>