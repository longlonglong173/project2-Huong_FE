<template>
  <div class="admin-container">
    <NotiRight />
    <div class="nav-left position-fixed text-white py-5">
      <nuxt-link
        to="/"
        class="nav-item font-32 text-white border-bottom-gray w-100 mb-4 d-block"
      >
        <i class="fal fa-home"></i> Home
      </nuxt-link>
      <div
        :class="[
          'nav-item font-32 text-white border-bottom-gray w-100 mb-4 cursor-pointer',
          navLeftSelected == 0 ? 'nav-selected' : '',
        ]"
        @click="setNavLeftSelected(0)"
      >
        <i class="fal fa-plane-departure"></i> Tours
      </div>
      <div
        :class="[
          'nav-item font-32 text-white border-bottom-gray w-100 mb-4 cursor-pointer',
          navLeftSelected == 1 ? 'nav-selected' : '',
        ]"
        @click="setNavLeftSelected(1)"
      >
        <i class="fal fa-users"></i> Clients
      </div>
    </div>
    <nuxt class="content-box" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import NotiRight from '~/components/NotiRight.vue'

export default {
  components: {
    NotiRight,
  },
  computed: {
    ...mapState({
      navLeftSelected: (state) => state.admin.navLeftSelected,
    }),
  },
  methods: {
    ...mapMutations({
      setNavLeftSelected: 'admin/setNavLeftSelected',
    }),
  },
}
</script>

<style lang="scss" scoped>
.admin-container {
  --navLeftWidth: 100px;
  margin-left: var(--navLeftWidth);
  .nav-left {
    left: 0;
    top: 0;
    bottom: 0;
    width: var(--navLeftWidth);
    background-color: rgb(71, 71, 71);
  }
  .nav-item {
    padding: 0 1rem;
  }
  .content-box {
    width: 100%;
    min-height: 100vh;
  }
  .nav-selected {
    color: orange !important;
    background-color: rgb(136, 133, 133);
  }
}
</style>
