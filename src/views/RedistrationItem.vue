<template >
  <v-form>
    <div>
      <form>
        <v-text-field
          v-model.trim="name"
          :error-messages="nameErrors"
          :counter="10"
          label="Name"
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
          v-model.trim="password"
          :counter="9"
          :error-messages="passwordErrors"
          label="Password"
          required
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
        <v-text-field
          v-model.trim="repeatPassword"
          :counter="9"
          :error-messages="repeatpasswordErrors"
          label="Repeat password"
          required
          @input="$v.repeatPassword.$touch()"
          @blur="$v.repeatPassword.$touch()"
        ></v-text-field>
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Do you agree?"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>

        <v-btn class="mr-4" @click="submit"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
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
      email: "",
      password: "",
      repeatPassword: "",
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
      this.password = "";
      this.repeatPassword = "";
      this.checkbox = false;
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
      !this.$v.name.maxLength && errors.push("Must be valid name");
      !this.$v.name.required && errors.push("Name is required");
      return errors;
    },
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength && errors.push("Must be more than 8 letters");
      !this.$v.password.required && errors.push("Password is required");
      !this.$v.password.containsUppercase &&
        errors.push("Must contain uppercase");
      !this.$v.password.containsLowercase &&
        errors.push("Must contain lowercase");
      !this.$v.password.containsNumber && errors.push("Must contain number");
      !this.$v.password.containsSpecial &&
        errors.push("Must contain one of simbol #?!@$%^&*-");

      return errors;
    },

    repeatpasswordErrors() {
      const errors = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      

      !this.$v.repeatPassword.sameAsPassword &&
        errors.push("Passwords must be same");
        !this.$v.password.required && errors.push("Password is required");
      return errors;
    },

    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid E-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },
};
</script>

<style>
</style>