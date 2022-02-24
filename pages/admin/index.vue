<template>
  <div class="p-4">
    <div v-show="navLeftSelected == 0">
      <TourList />
    </div>
    <div v-show="navLeftSelected == 1">
      <UserList />
    </div>
    <div v-show="navLeftSelected == 2">
      <TicketList />
    </div>
    <div v-show="navLeftSelected == 3">
      <Statistic />
    </div>
  </div>
</template>

<script>
import TourList from '~/components/admin/TourList.vue'
import UserList from '~/components/admin/UserList.vue'
import TicketList from '~/components/admin/TicketList.vue'
import Statistic from '~/components/admin/Statistic.vue'

import { mapState } from 'vuex'
export default {
  layout: 'admin',
  components: {
    TourList,
    UserList,
    TicketList,
    Statistic,
  },
  computed: {
    ...mapState({
      navLeftSelected: (state) => state.admin.navLeftSelected,
    }),
  },
}
</script>

<style></style>
