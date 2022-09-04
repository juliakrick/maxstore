<template>
  <div class="dialog" v-if="dialog" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <div class="dialog__close">
        <WindowClose @click="hideDialog" />
      </div>
      <h1 class="dialog__content__title">{{ dates["title"] }}</h1>
      
      <keep-alive>
        <component :is="dates['component']"></component>
      </keep-alive>

      <div class="navtool">
        <span class="navtool__text">{{ dates["text"] }}</span>
        <button class="navtool__but" @click="changcurrent()">
          {{ dates["buttontext"] }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import AuhtItem from "../AuhtItem.vue";
// import RedistrationItem from "../../views/RedistrationItem.vue";
// import { bus } from "../main";
import WindowClose from "vue-material-design-icons/WindowClose.vue";
export default {
  name: "modal-window-item",
  components: {
    "auth-item": () => import("../AuhtItem.vue"),
    "redistration-item": () => import("../../views/RedistrationItem.vue"),
    WindowClose,
  },
  data() {
    return {
      // current: "auth-item",
      dates: {
        component: "auth-item",
        title: "LOGIN",
        text: "нет аккаунта?",
        buttontext: "REGISTRATION",
      },
    };
  },
  props: {
    dialog: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("hDialog", false);
    },
    closeDialog() {
      this.$emit("cDialog", false);
    },
    changcurrent() {
      this.dates["component"] === "auth-item"
        ? ((this.dates["component"] = "redistration-item"),
          (this.dates["title"] = "registration"),
          (this.dates["text"] = "есть аккаунт?"),
          (this.dates["buttontext"] = "войти"))
        : ((this.dates["component"] = "auth-item"),
          (this.dates["title"] = "login"),
          (this.dates["text"] = "нет аккаунта?"),
          (this.dates["buttontext"] = "зарегистрироваться"));
    },
    // changeButtonText() {
    //   this.current === "auth-item"
    //     ? (this.text = "LOGIN")
    //     : (this.text = "registration");
    // },
  },

// created(){
//    bus.$on("openFromSendCatalog", () => {
      
     
//     });
// }


};
</script>

<style>
.dialog {
  width: 100%;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.7);
}
.dialog__content {
  margin: auto;
  width: 450px;
  max-width: 100%;
  min-height: 50px;
  background-color: white;
  border-radius: 12px;
  padding: 25px;
}

.dialog__content__title {
  text-transform: uppercase;
  color: #00bfa5;
  text-align: center;
}

.dialog__close {
  display: flex;
  justify-content: end;
}

.navtool {
  display: flex;
  justify-content: space-around;
}
</style>