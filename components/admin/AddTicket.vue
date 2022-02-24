<template>
  <div
    class="tour-box p-4 border-radius-16 bg-white font-24 w-100"
    :style="boxStyle"
  >
    <div class="d-flex justify-content-between mb-4">
      <h3 class="font-32 font-weight-bold d-flex">Thêm vé đặt tour mới</h3>
      <div class="cursor-pointer" @click="$emit('close')">
        <i class="fal fa-times-circle font-24"></i>
      </div>
    </div>
    <div class="tour-content">
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">
          Chọn tour <span class="text-error">*</span>:
        </div>
        <div class="col-9 pr-0">
          <div
            class="p-2 br-8 border-gray position-relative bg-white d-flex align-items-center justify-content-between"
            @click="isOpenMenuTour = !isOpenMenuTour"
          >
            {{ selectedMessage }} <i class="far fa-chevron-down"></i>
            <div
              v-show="isOpenMenuTour"
              class="position-absolute top-100 left-0 right-0 bg-white border-gray shadow pr-2 br-4"
              style="
                z-index: 2;
                max-height: 32rem;
                overflow-x: hidden;
                overflow-y: scroll;
              "
            >
              <div
                v-for="tour in tourList"
                :key="`tour-select-${tour.id}`"
                class="d-flex align-items-center p-1 border-bottom-gray pl-2 mb-1 cursor-pointer hover-gray"
                style="height: 4rem"
                @click="
                  newTicket.id = tour.id
                  selectedMessage = tour.title
                "
              >
                <div style="max-width: 3.5rem; min-width: 3.5rem">
                  <div
                    class="pb-100 bg-center"
                    :style="{ 'background-image': `url('${tour.img || ''}')` }"
                  ></div>
                </div>
                <div class="ml-1 line-clamp-1">
                  (ID:{{ tour.id }})-{{ tour.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">Tên <span class="text-error">*</span>:</div>
        <div class="col-9 pr-0">
          <input
            type="text"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            placeholder="Nhập tên "
            v-model="newTicket.name"
          />
        </div>
      </div>
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">Email <span class="text-error">*</span>:</div>
        <div class="col-9 pr-0">
          <input
            type="email"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            placeholder="Nhập email"
            v-model="newTicket.email"
          />
        </div>
      </div>
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">
          Số điện thoại <span class="text-error">*</span>:
        </div>
        <div class="col-9 pr-0">
          <input
            type="text"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            placeholder="Nhập số điện thoại"
            v-model="newTicket.phonenumber"
          />
        </div>
      </div>
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">Địa chỉ <span class="text-error">*</span>:</div>
        <div class="col-9 pr-0">
          <input
            type="text"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            placeholder="Nhập địa chỉ"
            v-model="newTicket.address"
          />
        </div>
      </div>
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">
          Căn cước công dân <span class="text-error">*</span>:
        </div>
        <div class="col-9 pr-0">
          <input
            type="number"
            min="0"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            placeholder="Nhập số căn cước công dân"
            v-model="newTicket.cccd"
          />
        </div>
      </div>

      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">
          Giới tính <span class="text-error">*</span>:
        </div>
        <div class="col-9 pr-0">
          <input
            type="text"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            placeholder="Nhập giới tính"
            v-model="newTicket.gender"
          />
        </div>
      </div>

      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">Ghi chú:</div>
        <div class="col-9 pr-0">
          <textarea
            cols="20"
            rows="10"
            placeholder="Ghi chú"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            v-model="newTicket.note"
          ></textarea>
        </div>
      </div>
      <div class="w-100 d-flex justify-content-end">
        <div class="btn w-fit" @click="datVeHandler()">Thêm vé</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { FORMAT } from '~/plugins/mixin'
export default {
  mixins: [FORMAT],
  props: {
    boxStyle: {
      type: String,
      default: '',
    },
    toHome: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedMessage: 'Click để chọn tour',
      tourList: null,
      isOpenMenuTour: false,
      newTicket: {
        uuid: '',
        id: null,
        name: '',
        email: '',
        phonenumber: '',
        cccd: '',
        note: '',
        address: '',
        gender: 'nam',
      },
      newTicketCompare: {
        uuid: '',
        id: '',
        name: '',
        email: '',
        phonenumber: '',
        cccd: '',
        note: '',
        address: '',
      },
    }
  },
  async created() {
    const res = await this.getTourList({ index: 0, count: 20 })
    if (res.success) {
      this.tourList = res.data
    } else {
      this.$router.push('/admin')
    }
  },
  methods: {
    ...mapActions({
      addUser: 'admin/addUser',
      getTourList: 'tour/getTourList',
      setNotiContent: 'common/setNotiContent',
      datVe: 'user/datVe',
    }),
    async datVeHandler() {
      if (
        this.newTicket.name == '' ||
        this.newTicket.email == '' ||
        this.newTicket.address == '' ||
        this.newTicket.phonenumber == '' ||
        this.newTicket.cccd == '' ||
        this.newTicket.id == null
      ) {
        this.setNotiContent('Hãy nhập đủ thông tin')
      } else {
        const formData = {
          ...this.newTicket,
        }
        const res = await this.datVe(formData)
        if (res.success) {
          this.setNotiContent('Đặt vé thành công')
          // this.$emit('close')
          this.$emit('success')
          if (this.toHome) {
            const timeout = setTimeout(() => {
              this.$router.push('/')
              clearTimeout(timeout)
            }, 1000)
          }
        } else {
          if ((res.message = 'No Slot')) {
            this.setNotiContent('Xin lỗi, tour đã hết vé')
          } else {
            this.setNotiContent('Đặt vé không thành công')
          }
        }
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
    &::placeholder {
      font-weight: normal;
    }
  }
}
</style>
