<template>
  <div>
    <HeaderDefault />
    <NotiRight />
    <div style="min-height: 100vh">
      <nuxt :style="{ 'margin-top': '8rem' }" />
    </div>
    <FooterDefault />
  </div>
</template>

<script>
import HeaderDefault from '~/components/common/HeaderDefault.vue'
import FooterDefault from '~/components/common/FooterDefault.vue'
import NotiRight from '~/components/NotiRight.vue'

export default {
  components: {
    HeaderDefault,
    FooterDefault,
    NotiRight,
  },
}
</script>

<style></style>
