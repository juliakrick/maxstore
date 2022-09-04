<template>
  <div>
    <v-app-bar app color="#ffffff">
      <v-navigation-drawer
        class="drawer__content"
        v-model="drawer"
        app
        absolute
        left
        temporary
        mr-100
      >
        <v-list dense nav>
          <v-list-item-group v-model="group" active-class="text--acent-4">
            <v-list-item to="/" link>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item to="/production" link>
              <v-list-item-title>Production</v-list-item-title>
            </v-list-item>
            <!-- <v-list-item to="/List" link>
            <v-list-item-title>Catalog</v-list-item-title>
          </v-list-item> -->
            <v-list-item to="/catalog" link>
              <v-list-item-title>Catalog</v-list-item-title>
            </v-list-item>
            <v-list-item to="/contact" link>
              <v-list-item-title>Contacts</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-col class="d-flex justify-right align-center">
        <v-app-bar-nav-icon
          color="black"
          dense
          v-model="drawer"
          @click.stop="drawer = !drawer"
        >
        </v-app-bar-nav-icon>
        <!-- <v-app-bar-nav-icon> -->
        <v-img
          max-height="200"
          max-width="300"
          src="..\assets\logo.png"
        ></v-img>
        <!-- </v-app-bar-nav-icon> -->
      </v-col>
      <!-- <v-spacer></v-spacer> -->
      <v-col v-show="nikename">Добро пожаловать! {{ nikename }}</v-col>
      <!-- <v-toolbar-items class="d-none d-md-block">
        <v-btn to="/" link>Home</v-btn>
        <v-btn to="/catalog" link>Catalog</v-btn>
        <v-btn to="/contact" link>Contacts</v-btn>
      </v-toolbar-items> -->
      <!-- <v-spacer></v-spacer> -->
      <v-row>
        <v-col>
          <v-row class="d-none d-lg-block" v-for="(item, i) in items" :key="i">
            {{ item.phone }}
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
        <v-btn to="/busket" link>
          <v-icon>mdi-basket</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn @click="dialog = !dialog, changeLog">
          <span>{{ changeButtonText ? "Logout" : "Login" }}</span>
          <!-- <v-icon>mdi-login-variant </v-icon> -->
          <v-icon>{{
            changeButtonText ? "mdi-logout-variant" : "mdi-login-variant"
          }}</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
      </v-row>
      <!-- модальное окно -->

      <modal-window-item
        v-if="dialog"
        :dialog="dialog"
        @hDialog="getDialogStateSpace()"
        @cDialog="getDialogStateButton()"
      >
      </modal-window-item>

      <!-- <AuhtItem @closeDialog="dialog = false"></AuhtItem>  -->

      <!-- модальное окно -->
    </v-app-bar>
  </div>
</template>


<script>
import { bus } from "../main";
import { mapGetters } from "vuex";
// import AuhtItem from "./AuhtItem.vue";
export default {
  name: "HeaderItem",
  components: {
    // AuhtItem,
  },

  data: () => ({
    changeButtonText: false,
    statesText: "Login",
    status: false,
    dialog: false,
    drawer: false,
    group: null,
    nikename: "",
    items: [
      {
        phone: "8800-495-67-38",
      },
      {
        phone: "8800-495-99-38",
      },
    ],
  }),

  computed: {
    ...mapGetters("Auth", ["GET_STATUS"]),
  },

  methods: {
    changeLog(){
      if(this.GET_STATUS() == 'success'){
         console.log('success')
      }

    },
    getDialogStateSpace(state) {
      this.dialog = state;
    },
    getDialogStateButton(state) {
      console.log("statetttttt");
      this.dialog = state;
    },
  },

  created() {
    bus.$on("closemodfromauth", () => {
      console.log("УРА");
      this.dialog = false;
    });
    bus.$on("send_nikename", (sendedName) => {
      this.nikename = sendedName;
    }),
      bus.$on("openFromSendCatalog", (status) => {
        this.dialog = status;
      }),
      bus.$on("changeButtonText", (textstatus) => {
        this.changeButtonText = textstatus;
      });
  },

  beforeDestroy() {
    bus.$off("closemodfromauth", () => {
      this.dialog = false;
    });

    bus.$off("openFromSendCatalog", (status) => {
      this.dialog = status;
    });
  },
};
</script>
<style scoped>
.drawer__content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #5d5d5d;
  box-shadow: inset 0 0 6px #5d5d5d;
  background-color: #5d5d5d;
}
.drawer__content::-webkit-scrollbar {
  width: 0px;
}
.drawer__content::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px #424242;
  box-shadow: inset 0 0 6px #424242;
  background-color: #424242;
}
.h1 {
  color: red;
}
</style>
