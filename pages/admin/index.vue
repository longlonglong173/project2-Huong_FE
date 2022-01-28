<template>
  <div class="p-4">
    <div v-show="navLeftSelected == 0">
      <TourList />
    </div>
    <div v-show="navLeftSelected == 1">
      <UserList />
    </div>
    <div v-show="navLeftSelected == 2">
      <div class="font-64 text-center">Danh sách đặt vé</div>
    </div>
  </div>
</template>

<script>
import TourList from '~/components/admin/TourList.vue'
import UserList from '~/components/admin/UserList.vue'

import { mapState } from 'vuex'
export default {
  layout: 'admin',
  components: {
    TourList,
    UserList,
  },
  computed: {
    ...mapState({
      navLeftSelected: (state) => state.admin.navLeftSelected,
    }),
  },
}
</script>

<style></style>
