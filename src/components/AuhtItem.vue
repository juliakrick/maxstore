<template >
  <div>
    <form>
      <v-text-field
        class="mb-3"
        v-model.trim="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        class="mb-3"
        v-model.trim="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        class="mb-3"
        :counter="8"
        v-model.trim="password"
        :error-messages="passwordErrors"
        label="Password"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>
      <v-checkbox
        class="mb-3"
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>

      <v-btn class="mr-4" @click="submit($event)"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
      <v-row class="my-5 d-flex justify-center">
        <!-- <v-row>нет аккаунта?</v-row> -->
        <!-- <router-link to="/registration"></router-link> -->
        <!-- <v-btn elevation="2" > ЗАРЕГИСТРИРОВАТЬСЯ</v-btn> -->
        <!-- <v-btn class="mt-2">ЗАРЕГИСТРИРОВАТЬСЯ</v-btn> -->
      </v-row>
    </form>
    <!-- <v-divider></v-divider> -->
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