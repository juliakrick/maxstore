<template >
  <div>
    <form>
      <v-text-field
        class="mb-3"
        v-model.trim="email"
        :error-messages="emailErrors"
        label="E-mail или телефон"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        class="mb-3"
        v-model.trim="password"
        :error-messages="passwordErrors"
        label="Пароль"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>

      <v-row class="my-5 d-flex justify-left">
        <v-btn class="mr-4" @click="submit($event)">Войти</v-btn>
        <v-btn @click="closeModal">Отмена</v-btn>
      </v-row>
      <v-row class="my-5 d-flex justify-center">
        <v-btn text depressed top @click="clear">Забыли пароль?</v-btn>
      </v-row>
     </form>

  </div>
</template>


<script>
import {
  required,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
import { bus } from "../main";
import { mapMutations, mapActions } from "vuex";

export default {
  name: "AuhtItem",
  components: {},

  close: null,

  data() {
    return {
      name: "",
      email: "",
      password: "",
      checkbox: false,
      
    };
  },
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
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
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  methods: {
    ...mapMutations('Auth', ["SET_AUTH"]),
     ...mapActions('Auth', ["postLoginUser"]),
    submit($event) {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      console.log("$event", $event);
      let user = {
        name :this.name,
       email : this.email,
       password :this.password
      }
      
    
      this.postLoginUser(user)
      .then(()=>
      bus.$$emit('changeButtonText', false)

      )
      .catch(err => 
      console.log(err)
      )

     
      bus.$emit("closemodfromauth", false);
      bus.$emit('send_nikename', this.name)
    
    },

    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.password = "";
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