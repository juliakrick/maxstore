<template>
  <v-app>
    <HeaderItem> </HeaderItem>
    <!-- <transition name="fade">
      <modal-window-item :dialog="dialog"> </modal-window-item>
    </transition> -->
    <v-main>
      <v-container class="mt-10">
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
    // dialog: false,
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
  // methods: {
  //   setDialogState(data) {
  //     console.log("dialog");
  //     this.dialog = data;
  //   },
  // },

  // mounted() {
  //   this.$modal.EventBus.$on("shown", () => {
  //     this.dialog = true;
  //   });
  //   this.$modal.EventBus.$on("hide", () => {
  //     this.dialog = false;
  //   });
  // },

  // beforeDestroy() {
  //   this.$modal.EventBus.$off("shown", () => {
  //     this.dialog = true;
  //   });
  //   this.$modal.EventBus.$off("hide", () => {
  //     this.dialog = false;
  //   });
  // },
};
</script>

<style scoped>
.v-main {
  padding: 0px !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>