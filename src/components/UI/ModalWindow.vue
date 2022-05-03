<template>
  <div class="dialog" v-if="dialog" @click="hideDialog">
    <div @click.stop class="dialog__content">
       <div class="dialog__close">
        <WindowClose @click="closeDialog"/>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import WindowClose from "vue-material-design-icons/WindowClose.vue";
export default {
  name: "modal-window-item",
  components: {
    WindowClose,
  },
  props: {
    dialog: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("hDialog", false);
    },
    closeDialog(){
      this.$emit("cDialog", false);
    }
  },
};
</script>

<style>
.dialog {
  width: 100%;
  height: 100vh;
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

.dialog__close {
  display: flex;
  justify-content: end;
}
</style>