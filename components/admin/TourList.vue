<template>
  <div v-show="isDataFetched">
    <div class="font-64 text-center">Danh sách tour</div>
    <div class="d-flex justify-content-between mb-3">
      <div class="position-relative ml-4 d-flex align-items-center">
        <input
          type="text"
          style="
            border: 1px solid #333;
            padding: 0.5rem 0.5rem 0.5rem 1.5rem;
            font-size: 1rem;
            border-radius: 0.5rem;
          "
          placeholder="Nhập tên tour"
          v-model="keySearch"
        />
        <i
          class="fas fa-search position-absolute"
          style="top: 50%; left: 0.5rem; transform: translateY(-50%)"
        />
      </div>
      <div class="btn p-1 flex-center m-0" @click="isOpenModalAddTour = true">
        <i class="fal fa-map-marker-plus mr-1 font-32"></i> Thêm tour mới
      </div>
    </div>
    <div class="d-flex flex-wrap">
      <div
        v-for="tour in tourListComputed"
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
    <Modal
      :value="isOpenModalTourDetail"
      modalClass="flex-center"
      bodyClass=""
      @close="closeDetailHandler(false)"
    >
      <EditTour
        :tour="tourDetail"
        @close="closeDetailHandler(false)"
        @update="getTourListData(0, tourList.length)"
        @delete="getTourListData(0, tourList.length - 1)"
      />
    </Modal>
    <Modal
      :value="isOpenModalAddTour"
      modalClass="flex-center"
      @close="closeDetailHandler(false)"
    >
      <AddTour
        @close="closeDetailHandler(false)"
        @addSuccess="getTourListData(0, tourList.length + 1)"
      />
    </Modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TourCard from '~/components/TourCard.vue'
import Modal from '~/components/Modal.vue'
import EditTour from '~/components/admin/EditTour.vue'
import AddTour from '~/components/admin/AddTour.vue'
export default {
  components: {
    TourCard,
    Modal,
    EditTour,
    AddTour,
  },
  data() {
    return {
      isDataFetched: false,
      tourList: [],
      tourDetail: null,
      isOpenModalTourDetail: false,
      isOpenModalAddTour: false,
      keySearch: '',
    }
  },
  computed: {
    tourListComputed() {
      if (this.keySearch == '') {
        return this.tourList
      }
      return this.tourList.filter((item) => {
        const title = item.title.trim().toLowerCase()
        return title.includes(this.keySearch.trim().toLowerCase())
      })
    },
  },
  methods: {
    ...mapActions({
      getTourList: 'tour/getTourList',
    }),
    showTourDetailHandler(tour) {
      this.tourDetail = tour
      this.isOpenModalTourDetail = true
    },
    closeDetailHandler(value) {
      this.tourDetail = null
      this.isOpenModalTourDetail = value
      this.isOpenModalAddTour = value
    },
    async getTourListData(index, count) {
      const res = await this.getTourList({
        index: index,
        count: count + 1,
      })
      if (res.success) {
        this.tourList = res.data
      }
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
