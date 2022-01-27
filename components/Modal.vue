<template>
  <div
    v-if="value"
    :class="['position-fixed position-0 modal-box', modalClass]"
    @click.self="$emit('close')"
  >
    <slot :class="[bodyClass]" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    modalClass: {
      type: String,
      default: '',
    },
    bodyClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-box {
  background-color: rgba(204, 204, 204, 0.8);
}
</style>
