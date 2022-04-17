<template>
  <div class="dialog" v-if="dialog">
    <div class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-window-item",
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.dialog {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.7);
}
.dialog__content {
  margin: auto;
  min-width: 200px;
  min-height: 50px;
  background-color: white;
  border-radius: 12px;
  padding: 25px;
}
</style>