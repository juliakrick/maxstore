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
      <v-spacer></v-spacer>
      <!-- <v-toolbar-items class="d-none d-md-block">
        <v-btn to="/" link>Home</v-btn>
        <v-btn to="/catalog" link>Catalog</v-btn>
        <v-btn to="/contact" link>Contacts</v-btn>
      </v-toolbar-items> -->
      <v-spacer></v-spacer>
      <v-row>
        <v-col>
          <v-row class="d-none d-lg-block" v-for="(item, i) in items" :key="i">
            {{ item.phone }}
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
        <v-icon>mdi-basket</v-icon>
        <v-spacer></v-spacer>

        <v-btn @click="dialog = !dialog">
          <v-icon>mdi-login-variant </v-icon>
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
        <AuhtItem
          @closeDialog="dialog=false"
        ></AuhtItem>
      </modal-window-item>

      <!-- модальное окно -->
    </v-app-bar>
  </div>
</template>

<script>
import AuhtItem from "./AuhtItem.vue";
export default {
  name: "HeaderItem",
  components: {
    AuhtItem,
  },
  data: () => ({
    dialog: false,
    drawer: false,
    group: null,
    items: [
      {
        phone: "8800-495-67-38",
      },
      {
        phone: "8800-495-99-38",
      },
    ],
  }),
  methods: {
    getDialogStateSpace(state) {
      
      this.dialog = state;
    },
    getDialogStateButton(state) {
      console.log("statetttttt");
      this.dialog = state;
    },
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
