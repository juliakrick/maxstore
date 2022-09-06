<template>
  <div class="contact">
      <v-row class="d-flex flex-column align-center justify-center py-10" >
        <!-- <v-row>
          <h3 class="contact__row text-h4 font-weight-bold white--text">
          Наше местоположение
          </h3>
        </v-row> -->
        <ContactsMap class="map-point" ></ContactsMap>

        <v-row class="contact__row align-left flex-column flex-md-row mt-7">
          <v-col cols="4" class="white pa-5">
            <h4 class="font-weight-bold red--text mb-3">Наши контакты</h4>
            <v-row class="align-center">
              <v-col cols="2">
                <v-img src="../assets/contacts/phone-svgrepo-com.svg"></v-img>
              </v-col>
              <v-col class="black--text subtitle-2">
                <p><a class="contact-ref" href="tel:+79252018847">+7 (925) 201-88-47</a></p>
              </v-col>
            </v-row>
            <v-row class="align-center">
              <v-col cols="2">
                <v-img src="../assets/contacts/letter-svgrepo-com.svg"></v-img>
              </v-col>
              <v-col class="black--text subtitle-2">
                <p><a class="contact-ref" href="mailto:subbotinpu@gmail.com">subbotinpu@gmail.com</a></p>
              </v-col>
            </v-row>
            <v-row class="align-center">
              <v-col cols="2">
                <v-img src="../assets/contacts/location-svgrepo-com.svg"></v-img>
              </v-col>
              <v-col class="black--text subtitle-2">
                <p>
                  142116, МО, г. Подольск, <br />
                  ул. Лобачева, 16
                </p>
              </v-col>
            </v-row>
            <v-row class="align-center">
              <v-col cols="2">
                <v-img src="../assets/contacts/schedule-svgrepo-com.svg"></v-img>
              </v-col>
              <v-col class="black--text subtitle-2">
                <p>
                  142116, МО, г. Подольск, <br />
                  ул. Лобачева, 16
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-row>
  </div>
</template>

<script>

import ContactsMap from './ContactsMap.vue';

export default {
    name: "ContactContent",
    data: () => ({
        valid: true,
        name: "",
        nameRules: [
            (v) => !!v || "Name is required",
            (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
        ],
        email: "",
        emailRules: [
            (v) => !!v || "E-mail is required",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        // select: null,
        // items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        checkbox: false,
    }),
    methods: {
        validate() {
            this.$refs.form.validate();
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
    },
    components: {ContactsMap}
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
.contact {
  margin-top: 100px; 
  background-color: #c0c0c0;
  /* height: 100vh; */
}
.map-point {
  position: absolute;
  /* object-fit: cover; */
  width: 100%;
  height: 100%;
  z-index: 0;
}
.contact__row {
  width: 100%;
  z-index: 1;
}
p,
h4 {
  font-family: rubik;
}
</style>