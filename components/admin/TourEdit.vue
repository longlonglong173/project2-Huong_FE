<template>
  <div v-if="tour" class="tour-box p-4 border-radius-16 bg-white font-24 w-100">
    <div class="d-flex justify-content-between mb-4">
      <h3 class="font-32 font-weight-bold d-flex">
        Chi tiết tour {{ tour.id }}
        <div
          class="cursor-pointer ml-3"
          @click="isEdit = !isEdit"
          title="Chỉnh sửa tour"
        >
          <i class="fal fa-edit text-error"></i>
        </div>
      </h3>
      <div class="cursor-pointer" @click="$emit('close')">
        <i class="fal fa-times-circle font-24"></i>
      </div>
    </div>
    <div class="tour-content d-flex">
      <div class="col-5 p-0">
        <div
          class="pb-100 bg-center"
          :style="{
            'background-image': `url('${tourDetail.img || errorImage}')`,
          }"
        ></div>
        <div v-if="isEdit">
          <h3>Thêm link hỉnh ảnh vào ô dưới đây</h3>
          <input
            type="text"
            class="w-100 border-gray p-2"
            placeholder="Thêm link hình ảnh"
            v-model="tourDetail.img"
          />
        </div>
      </div>
      <div class="col-7">
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">Tên tour:</div>
          <div class="col-8 pr-0">
            <input
              v-if="isEdit"
              type="text"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="tourDetail.title"
            />
            <h3 v-else class="font-weight-bold mb-0 font-32 mb-0">
              {{ tourDetail.title }}
            </h3>
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">Địa điểm:</div>
          <div class="col-8 pr-0">
            <input
              v-if="isEdit"
              type="text"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="tourDetail.location"
            />
            <h3 v-else class="font-weight-bold mb-0 font-32 mb-0">
              {{ tourDetail.location }}
            </h3>
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">Thời gian:</div>
          <div class="col-8 pr-0">
            <input
              v-if="isEdit"
              type="number"
              min="1"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="tourDetail.time"
            />
            <h3 v-else class="font-weight-bold mb-0 font-32 mb-0">
              {{ tourDetail.time }}
            </h3>
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">Ngày bắt đầu:</div>
          <div class="col-8 pr-0">
            <input
              v-if="isEdit"
              type="date"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="tourDetail.startTime"
            />
            <h3 v-else class="font-weight-bold mb-0 font-32 mb-0">
              {{ timeFormat(tourDetail.startTime) }}
            </h3>
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">Giá hiện tại:</div>
          <div class="col-8 pr-0">
            <input
              v-if="isEdit"
              type="number"
              min="0"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="tourDetail.currentPrice"
            />
            <h3 v-else class="font-weight-bold mb-0 font-32 mb-0">
              {{ formatPriceVnd(tourDetail.currentPrice) }}
            </h3>
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">Giá cũ:</div>
          <div class="col-8 pr-0">
            <input
              v-if="isEdit"
              type="number"
              min="0"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="tourDetail.oldPrice"
            />
            <h3 v-else class="font-weight-bold mb-0 font-32 mb-0">
              {{ formatPriceVnd(tourDetail.oldPrice) }}
            </h3>
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">Nơi khởi hành:</div>
          <div class="col-8 pr-0">
            <input
              v-if="isEdit"
              type="text"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="tourDetail.startLocation"
            />
            <h3 v-else class="font-weight-bold mb-0 font-32 mb-0">
              {{ tourDetail.startLocation }}
            </h3>
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">Phương tiện:</div>
          <div class="col-8 pr-0">
            <input
              v-if="isEdit"
              type="text"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="tourDetail.vehicle"
            />
            <h3 v-else class="font-weight-bold mb-0 font-32 mb-0">
              {{ tourDetail.vehicle }}
            </h3>
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">Số lượng:</div>
          <div class="col-8 pr-0">
            <input
              v-if="isEdit"
              type="number"
              min="0"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="tourDetail.currentSlot"
            />
            <h3 v-else class="font-weight-bold mb-0 font-32 mb-0">
              {{ tourDetail.currentSlot }}
            </h3>
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">Chi tiết:</div>
          <div class="col-8 pr-0">
            <input
              v-if="isEdit"
              type="text"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="tourDetail.info"
            />
            <h3 v-else class="font-weight-bold mb-0 font-32 mb-0">
              {{ tourDetail.info }}
            </h3>
          </div>
        </div>
        <div class="w-100 d-flex justify-content-end">
          <div class="btn w-fit" @click="updateTourHandler()">
            Cập nhật thông tin
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { FORMAT } from '~/plugins/mixin'
export default {
  props: {
    tour: {
      type: Object,
      default: () => null,
    },
  },
  mixins: [FORMAT],
  data() {
    return {
      isEdit: false,
      tourDetail: null,
    }
  },
  computed: {
    ...mapState({
      errorImage: (state) => state.common.errorImage,
    }),
  },
  created() {
    this.tourDetail = { ...this.tour }
  },
  methods: {
    ...mapActions({
      updateTour: 'tour/updateTour',
      setNotiContent: 'common/setNotiContent',
    }),
    async updateTourHandler() {
      const res = await this.updateTour(this.tourDetail)
      if (res.success) {
        this.setNotiContent(
          `Cập nhật thông tin tour ${this.tourDetail.id} thành công`
        )
      } else {
        this.setNotiContent(
          `Cập nhật thông tin tour ${this.tourDetail.id} không thành công`
        )
      }
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.tour-box {
  max-width: 600px;
  max-height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
