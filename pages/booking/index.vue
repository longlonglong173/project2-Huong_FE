<template>
  <AddTicket
    boxStyle="max-height: unset; overflow: unset; margin: 3rem auto 0; border: 1px solid #ddd;"
    :toHome="true"
  />
</template>

<script>
import AddTicket from '@/components/admin/AddTicket.vue'
export default {
  components: {
    AddTicket,
  },
}
</script>

<style></style>
