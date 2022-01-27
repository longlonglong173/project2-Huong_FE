<template>
  <div v-if="isDataFetched" class="p-4">
    <div v-show="navLeftSelected == 0">
      <div class="font-64 text-center">Danh sách tour</div>
      <div class="d-flex flex-wrap">
        <div
          v-for="tour in tourList"
          :key="`tour-${tour.id}`"
          class="col-3 mb-4"
        >
          <TourCard
            :tour="tour"
            :isAdmin="true"
            @showDetail="showTourDetailHandler(tour)"
          />
        </div>
      </div>
    </div>
    <div v-show="navLeftSelected == 1">
      <div class="font-64 text-center">Danh sách khách hàng</div>
    </div>
    <Modal
      :value="isOpenModal"
      modalClass="flex-center"
      bodyClass=""
      @close="closeDetailHandler(false)"
    >
      <TourEdit :tour="tourDetail" @close="closeDetailHandler(false)" />
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TourCard from '~/components/TourCard.vue'
import Modal from '~/components/Modal.vue'
import TourEdit from '~/components/admin/TourEdit.vue'

export default {
  layout: 'admin',
  components: {
    TourCard,
    Modal,
    TourEdit,
  },
  data() {
    return {
      isDataFetched: false,
      tourList: [],
      tourDetail: null,
      isOpenModal: false,
    }
  },
  computed: {
    ...mapState({
      navLeftSelected: (state) => state.admin.navLeftSelected,
    }),
  },
  methods: {
    ...mapActions({
      getTourList: 'tour/getTourList',
    }),
    showTourDetailHandler(tour) {
      this.tourDetail = tour
      this.isOpenModal = true
    },
    closeDetailHandler(value) {
      this.tourDetail = null
      this.isOpenModal = value
    },
  },
  async created() {
    const res = await this.getTourList({
      index: 0,
      count: 20,
    })
    if (res.success) {
      this.tourList = res.data
      this.isDataFetched = true
    }
  },
}
</script>

<style></style>
