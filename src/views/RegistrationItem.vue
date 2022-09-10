<template >
  <v-form>
    <div>
      <form> 
        <v-text-field
          v-model.trim="name"
          :error-messages="nameErrors"
          label="ФИО"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field> 
        <v-text-field
          v-model.trim="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          v-model.trim="tel"
          :error-messages="telErrors"
          label="Телефон"
          required
          @input="$v.tel.$touch()"
          @blur="$v.tel.$touch()"
        ></v-text-field>
        <v-text-field
          v-model.trim="password"
          :counter="9"
          :error-messages="passwordErrors"
          label="Пароль"
          required
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
        <v-text-field
          v-model.trim="repeatPassword"
          :error-messages="repeatpasswordErrors"
          label="Повторите пароль"
          required
          @input="$v.repeatPassword.$touch()"
          @blur="$v.repeatPassword.$touch()"
        ></v-text-field>
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Вы согласны на обработку персональных данных?"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>
        <v-row class="my-5 d-flex justify-left">
          <v-btn class="mr-4" @click="submit">Войти</v-btn>
          <v-btn @click="closeModal">Отмена</v-btn>
        </v-row>
      </form>
      <!-- <v-divider></v-divider> -->
      <v-row class="my-5 d-flex justify-center">
        <!-- <v-row>есть аккаунта?</v-row> -->
        <!-- <v-btn elevation="2">ВОЙТИ</v-btn> -->
        <!-- <v-btn class="mt-2">ЗАРЕГИСТРИРОВАТЬСЯ</v-btn> -->
      </v-row>
    </div>
  </v-form>
</template>

<script>
import {
  required,
  maxLength,
  minLength,
  email,
  sameAs,
} from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
import { bus } from "../main";
import { mapActions } from "vuex";
export default {
  name: "RedistrationItem",

  data() {
    return {
      name: "",
      tel: "",
      email: "",
      password: "",
      repeatPassword: "",
      checkbox: false,
    };
  },
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    tel: { required, maxLength: maxLength(15) },
    email: { required, email },
    password: {
      required,
      minLength: minLength(8),
      containsUppercase: function (value) {
        return /[A-Z]/.test(value);
      },
      containsLowercase: function (value) {
        return /[a-z]/.test(value);
      },
      containsNumber: function (value) {
        return /[0-9]/.test(value);
      },
      containsSpecial: function (value) {
        return /[#?!@$%^&*-]/.test(value);
      },
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs("password"),
    },

    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  methods: {
     ...mapActions('Auth', ["RegisterUser"]),
    submit($event) {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      console.log("$event", $event);

        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
        }

        this.RegisterUser(data)
      bus.$emit("closemodfromauth", false);
      // this.$router.push("/production");
    },

    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.tel = "";
      this.password = "";
      this.repeatPassword = "";
      this.checkbox = false;
    },

    closeModal(){
      this.clear();
      bus.$emit("closemodfromauth", false);
    },
    // addNewField() {
    //   this.$set(this.formFields, this.additionalField, "");
    // },

    sendstateDialog() {
      this.$emit("closeDialog", false);
    },
  },

  computed: {
     nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength && errors.push("Поле должно быть корректно");
      !this.$v.name.required && errors.push("Поле должно быть заполнено");
      return errors;
    },
    telErrors() {
      const errors = [];
      if (!this.$v.tel.$dirty) return errors;
      !this.$v.tel.maxLength && errors.push("Поле должно быть корректно");
      !this.$v.tel.required && errors.push("Поле должно быть заполнено");
      return errors;
    },
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("Вы должны согласиться перед тем как продолжить");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength && errors.push("Пароль должен содержать минимум N символов");
      !this.$v.password.required && errors.push("Поле должно быть заполнено");
      !this.$v.password.containsUppercase &&
        errors.push("Пароль должен содержать символы верхнего регистра");
      !this.$v.password.containsLowercase &&
        errors.push("Пароль должен содержать символы нижнего регистра");
      !this.$v.password.containsNumber && errors.push("Пароль должен содержать цифры");
      !this.$v.password.containsSpecial &&
        errors.push("Пароль должен содержать один из символов #?!@$%^&*-");

      return errors;
    },

    repeatpasswordErrors() {
      const errors = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      

      !this.$v.repeatPassword.sameAsPassword &&
        errors.push("Введенные пароли не совпадают");
        !this.$v.password.required && errors.push("Поле должно быть заполнено");
      return errors;
    },

    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Введен некорректный E-mail");
      !this.$v.email.required && errors.push("Поле должно быть заполнено");
      return errors;
    },
  },
};
</script>

<style>
</style>