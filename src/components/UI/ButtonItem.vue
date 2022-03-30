<template>
  <v-hover v-slot:default="{ hover }">
    <v-btn
    :color="hover ? 'warning' : 'secondary'"
    class="py-7 px-5 rounded-pill white--text"
    >
      <slot></slot>
    </v-btn>
  </v-hover>
</template>

<script>
export default {
  name: "button-item",
};
</script>

<style>
.on-hover {
  background-color: red;
}

/* .on-hover:not(.on-hover) {
  background-color: green;
  border-radius: 4px;
  padding: 5px 10px;
} */
</style>