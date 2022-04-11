<template>
  <div class="contact">
    <v-row class="d-flex flex-column align-center justify-center py-10">
      <v-row>
        <h3 class="text-h4 font-weight-bold white--text">
          Доверьте склад профессионалам!
        </h3>
      </v-row>
      <v-row>
        <h5 class="text-h6 font-weight-bold">
          Храните грузы вместе с нами. Положи на стеллажи!
        </h5>
      </v-row>

      <v-row class="contact__row justify-space-around align-center flex-column flex-md-row mt-7">
        <!-- <v-col cols="4">
            <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/maksstor/52477901098/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Максстор</a><a href="https://yandex.ru/maps/10747/podolsk/category/shelving/184106640/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Стеллажи в Подольске</a><a href="https://yandex.ru/maps/10747/podolsk/category/metal_structures/184106658/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;">Металлоконструкции в Подольске</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUBbIBECB" width="100%" height="" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
          </v-col> -->

        <v-col cols="4" class="white pa-5">
          <h4 class="font-weight-bold red--text mb-3">Контакты</h4>
          <v-row class="align-center">
            <v-col cols="2">
              <v-img src="../assets/contacts/phone-svgrepo-com.svg"></v-img>
            </v-col>
            <v-col class="black--text subtitle-2">
              <p>+7 495 150 06 56</p>
              <p>+7 495 150 06 56</p>
            </v-col>
          </v-row>
          <v-row class="align-center">
            <v-col cols="2">
              <v-img src="../assets/contacts/letter-svgrepo-com.svg"></v-img>
            </v-col>
            <v-col class="black--text subtitle-2">
              <p>mail@maxstore.ru</p>
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

          <h4 class="font-weight-bold red--text mb-3">Данные организации</h4>
          <p class="black--text subtitle-2">ООО "ПКП МАКССТОР"</p>
          <p class="black--text subtitle-2">ИНН: 5036116030</p>
          <p class="black--text subtitle-2">КПП: 503601001</p>
          <p class="black--text subtitle-2">БИК: 044525745</p>
          <p class="black--text subtitle-2">ОГРН: 1115074011568</p>
          <p class="black--text subtitle-2">ОКПО: 92685678</p>
          <p class="black--text subtitle-2">ОКАТО: 46460000000</p>
          <p class="black--text subtitle-2">ОКТМО: 46760000</p>
          <p class="black--text subtitle-2">ОКВЭД: 25.1</p>
        </v-col>

        <v-col cols="4" class="red--text white pa-5">
          <v-form class="mb-5" ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <!-- <v-select
              v-model="select"
              :items="items"
              :rules="[(v) => !!v || 'Item is required']"
              label="Item"
              required
            ></v-select> -->

            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox>
            <v-row class="justify-space-around mb-5">
              <v-col class="d-sm-flex justify-sm-center">
                <v-btn :disabled="!valid" color="success" @click="validate">
                  Validate
                </v-btn>
              </v-col>

              <v-col class="d-sm-flex justify-sm-center">
                <v-btn color="error" class="mr-4" @click="reset">
                  Reset Form
                </v-btn>
              </v-col>
            </v-row>

            <v-row class="justify-center mb-5">
              <v-btn color="warning" @click="resetValidation" mt-4>
                Reset Validation
              </v-btn>
            </v-row>
          </v-form>
          <v-row class="mt-5">
            <h4 class="font-weight-bold red--text pl-3">Социальные сети</h4>
          </v-row>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
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
};
</script>

<style scoped>
.contact {
  margin-top: 100px;
  background-color: #c0c0c0;
  /* height: 100vh; */
}
.contact__row {
  width: 100%;
}
p,
h4 {
  font-family: rubik;
}
</style>