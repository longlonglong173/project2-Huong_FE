<template>
  <div class="tour-box p-4 border-radius-16 bg-white font-24 w-100">
    <div class="d-flex justify-content-between mb-4">
      <h3 class="font-32 font-weight-bold d-flex">Thêm tour mới</h3>
      <div class="cursor-pointer" @click="$emit('close')">
        <i class="fal fa-times-circle font-24"></i>
      </div>
    </div>
    <div class="tour-content d-flex">
      <div class="col-5 p-0">
        <div
          class="pb-100 bg-center"
          :style="{
            'background-image': `url('${newTour.img || errorImage}')`,
          }"
        ></div>
        <div>
          <h3 class="mt-3">
            Thêm link hỉnh ảnh vào ô dưới đây <span class="text-error">*</span>
          </h3>
          <input
            type="text"
            class="w-100 border-gray p-2"
            placeholder="Thêm link hình ảnh"
            v-model="newTour.img"
          />
        </div>
      </div>
      <div class="col-7">
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">
            Tên tour<span class="text-error">*</span>:
          </div>
          <div class="col-8 pr-0">
            <input
              type="text"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="newTour.title"
            />
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">
            Địa điểm<span class="text-error">*</span>:
          </div>
          <div class="col-8 pr-0">
            <input
              type="text"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="newTour.location"
            />
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">
            Thời gian<span class="text-error">*</span>:
          </div>
          <div class="col-8 pr-0">
            <input
              type="number"
              min="1"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="newTour.time"
            />
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">
            Ngày bắt đầu <span class="text-error">*</span>:
          </div>
          <div class="col-8 pr-0">
            <input
              type="date"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="newTour.startTime"
            />
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">Giá hiện tại:</div>
          <div class="col-8 pr-0">
            <input
              type="number"
              min="0"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="newTour.currentPrice"
            />
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">Giá cũ:</div>
          <div class="col-8 pr-0">
            <input
              type="number"
              min="0"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="newTour.oldPrice"
            />
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">
            Nơi khởi hành<span class="text-error">*</span>:
          </div>
          <div class="col-8 pr-0">
            <input
              type="text"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="newTour.startLocation"
            />
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">
            Phương tiện<span class="text-error">*</span>:
          </div>
          <div class="col-8 pr-0">
            <input
              type="text"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="newTour.vehicle"
            />
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">Số lượng:</div>
          <div class="col-8 pr-0">
            <input
              type="number"
              min="0"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="newTour.currentSlot"
            />
          </div>
        </div>
        <div class="w-100 d-flex py-2 border-bottom-gray">
          <div class="col-4 p-0">Chi tiết:</div>
          <div class="col-8 pr-0">
            <input
              type="text"
              class="font-weight-bold font-32 border-gray mw-100"
              v-model="newTour.info"
            />
          </div>
        </div>
        <div v-show="isEdit" class="w-100 d-flex justify-content-end">
          <div class="btn w-fit" @click="addTourHandler()">
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
  mixins: [FORMAT],
  data() {
    return {
      isEdit: false,
      newTour: {
        img: '',
        title: '',
        location: '',
        time: 1,
        startTime: Date.now(),
        currentPrice: 0,
        oldPrice: 0,
        startLocation: '',
        vehicle: '',
        currentSlot: 0,
        info: '',
      },
      newTourCompare: null,
    }
  },
  computed: {
    ...mapState({
      errorImage: (state) => state.common.errorImage,
    }),
    isSameData() {
      return (
        Object.entries(this.newTour).toString() ===
        Object.entries(this.newTourCompare).toString()
      )
    },
  },
  created() {},
  methods: {
    ...mapActions({
      addTour: 'tour/addTour',
      setNotiContent: 'common/setNotiContent',
    }),
    async addTourHandler() {
      if (this.newTour.img == '') {
        this.setNotiContent('Hãy thêm hình ảnh')
        return
      }
      if (this.newTour.title == '') {
        this.setNotiContent('Hãy thêm tên tour')
        return
      }
      if (this.newTour.location == '') {
        this.setNotiContent('Hãy thêm địa điểm')
        return
      }
      if (this.newTour.startLocation == '') {
        this.setNotiContent('Hãy thêm điểm bắt đầu')
        return
      }
      if (this.newTour.vehicle == '') {
        this.setNotiContent('Hãy thêm phương tiện')
        return
      }

      const res = await this.addTour(this.newTour)
      if (res.success) {
        this.setNotiContent(`Thêm tour mới thành công`)
        this.$emit('close')
        this.$emit('addSuccess')
      } else {
        this.setNotiContent(`Thêm tour mói không thành công`)
      }
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
  & > * {
    transition: all 200ms;
  }
  input {
    text-transform: none;
  }
}
</style>
