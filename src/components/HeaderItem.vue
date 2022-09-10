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
            <v-list-item v-for="(item, i) in getMenu()" :key="i"     
              :to="item.url" link>
              <v-list-item-title>
                <v-icon left>{{item.icon}}</v-icon>
                {{item.title}}
              </v-list-item-title>
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

      <v-col v-show="nikename">Добро пожаловать! {{ nikename }}</v-col>

      <!-- <v-toolbar-items class="d-none d-md-block">
        <v-btn to="/" link>Home</v-btn>
        <v-btn to="/catalog" link>Catalog</v-btn>
        <v-btn to="/contact" link>Contacts</v-btn>
      </v-toolbar-items> -->

      <!-- <v-row class="d-none d-lg-block" v-for="(value, id) in items" :key="id">
        <v-col>
          <p><a class="contact-ref" :href="getContact(value) ">{{ value.contactInfo }}</a></p>
        </v-col>
      </v-row> -->

      <v-row> 
        <v-col cols=3>
          <v-row class="d-none d-lg-block" v-for="(value, id) in items" :key="id">
            <p><a class="contact-ref" :href="getContact(value) ">{{ value.contactInfo }}</a></p>
          </v-row>
        </v-col>

        <v-col class="align-self-center"> 
          <v-row class="justify-space-around"> 
            <v-col>
              <v-btn to="/busket" link>
                <v-icon>mdi-cart-variant</v-icon>
              </v-btn>
            </v-col>

            <v-col>
              <v-btn @click="dialog = !dialog, changeLog" >
                <span>{{ changeButtonText ? "Выйти" : "Войти" }}</span>
                <!-- <v-icon>mdi-login-variant </v-icon> -->
                <v-icon>{{
                  changeButtonText ? "mdi-logout-variant" : "mdi-login-variant"
                }}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
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
        {contactType: "tel", contactInfo: "+7 (925) 201-88-47"},
        {contactType: "mailto", contactInfo: "subbotinpu@gmail.com"},
      ],
  }),

  computed: {
    ...mapGetters("Auth", ["GET_STATUS"]),
  },

  methods: {
    getMenu(){
      return [{title: "Главная", icon: "mdi-domain", url: "/"},
              {title: "О нас", icon: "mdi-dolly", url: "/production"},
              {title: "Каталог", icon: "mdi-store-settings-outline ", url: "/catalog"},
              {title: "Контакты", icon: "mdi-map-marker-outline", url: "/contact"}]
    },
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
    getContact(contact) {
      return `${contact.contactType}:${contact.contactInfo}`;
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
.contact-ref{
  color: black;
  text-decoration: none;
}
.contact-ref:hover{
  border-bottom: 1px dashed black;
}
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
