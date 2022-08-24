<template>
  <div class="modal-backdrop fixed flex justify-center items-center">
    <div class="modal h-56 w-96 rounded-md opacity-85 relative">
      <!-- <span class="font-bold text-2xl text-white opacity-70">X</span> -->
      <slot name="body"> </slot>
      <div class="absolute right-2 top-4">
        <button
          @click="close"
          class="close-img font-bold rounded-full h-6 w-6 text-white text-center"
        >
          <p class="flex justify-center items-center text-sm">X</p>
        </button>
      </div>
      <slot name="footer">
       
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    },
   
  },
};
</script>
<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}
.modal {
  text-align: center;
  background-color: white;
  margin-top: 10%;
  padding: 60px 0;
}
.close-img {
  width: 25px;
  background-color: #ac003e;
}
</style>