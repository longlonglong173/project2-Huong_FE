<template>
  <Modal :value="value" @close="colseModalHandler()" modalClass="flex-center">
    <div class="py-4 px-5 bg-white br-16">
      <div class="d-flex justify-content-end w-100">
        <div class="cursor-pointer" @click="$emit('close')">
          <i class="fal fa-times-circle font-24"></i>
        </div>
      </div>
      <h3 class="text-center">{{ message }}</h3>
      <div class="flex-center">
        <div class="btn cussess mr-4" @click="confirmHandler()">OK</div>
        <div class="btn" @click="$emit('close')">CANCEL</div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '~/components/Modal.vue'
export default {
  components: {
    Modal,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
  },
  methods: {
    colseModalHandler() {
      this.$emit('close')
    },
    confirmHandler() {
      this.$emit('success')
    },
  },
}
</script>

<style lang="scss" scoped>
.cussess {
  --successColor: rgb(25, 221, 25);
  background-color: var(--successColor);
  border-color: var(--successColor);
  &:hover {
    background-color: rgba(25, 221, 25, 0.3);
    color: var(--successColor);
  }
}
</style>
