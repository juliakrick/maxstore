<template>
  <v-hover v-slot:default="{ hover }">
    <v-btn :class="{ 'on-hover': hover }">
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

.on-hover:not(.on-hover) {
  background-color: green;
  border-radius: 4px;
  padding: 5px 10px;
}
</style>