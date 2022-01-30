<template>
  <div v-if="isDataFetched" class="pb-5">
    <h3 class="font-64 font-weight-bold text-center py-4">Tất cả các tour</h3>
    <div class="box-container d-flex flex-wrap">
      <div
        v-for="tour in tourList"
        :key="`topTour-${tour.id}`"
        class="col-4 mb-4"
      >
        <TourCard :tour="tour" />
      </div>
    </div>
  </div>
</template>

<script>
import TourCard from '~/components/TourCard.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    TourCard,
  },
  data() {
    return {
      tourList: [],
      isDataFetched: false,
    }
  },
  async created() {
    const res = await this.getTourList({ index: 0, count: 20 })
    if (res.success) {
      this.tourList = res.data
      this.isDataFetched = true
    }
  },
  methods: {
    ...mapActions({
      getTourList: 'tour/getTourList',
    }),
  },
}
</script>

<style></style>
