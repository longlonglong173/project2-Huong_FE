<template>
  <div
    v-if="ticket"
    class="ticket-box p-4 br-16 bg-white font-24 w-100 position-relative"
  >
    <div class="header-box d-flex justify-content-between p-3 bg-white shadow">
      <h3 class="font-32 font-weight-bold d-flex">
        Chi tiết vé {{ ticket.ma }}
        <div
          class="cursor-pointer ml-3"
          @click="isEdit = !isEdit"
          title="Chỉnh sửa người dùng này"
        >
          <i class="fal fa-edit text-success"></i>
        </div>
        <div
          class="cursor-pointer ml-3"
          @click="isOpenModal = !isOpenModal"
          title="Xóa người dùng này ???"
        >
          <i class="fal fa-trash-alt text-error"></i>
        </div>
      </h3>
      <div class="cursor-pointer" @click="$emit('close')">
        <i class="fal fa-times-circle font-24"></i>
      </div>
    </div>

    <div class="w-100">
      <div
        v-if="ticketDetail.tour.error"
        class="w-100 mb-3 text-center text-error font-weight-bold font-24"
      >
        Tour hiện tại không có dữ liệu
      </div>
      <div v-else class="br-16 py-3 shadow">
        <nuxt-link
          :to="`/tour/${ticketDetail.tour.ma}`"
          class="d-block w-100 mb-3 text-center text-black-50 font-weight-bold font-24"
          >Thông tin tour {{ ticketDetail.tour.ma }}</nuxt-link
        >
        <div class="tour-info d-flex">
          <div class="col-4">
            <div
              class="pb-100 bg-center"
              :style="{
                'background-image': `url('${ticketDetail.tour.hinhAnh}')`,
              }"
            ></div>
          </div>
          <div class="col-8">
            <div class="d-flex border-bottom-gray">
              <div class="col-4 pl-0 py-1">Tên:</div>
              <div class="col-8 pl-0 py-1">
                {{ ticketDetail.tour.ten || '' }}
              </div>
            </div>
            <div class="d-flex border-bottom-gray">
              <div class="col-4 pl-0 py-1">Địa điểm:</div>
              <div class="col-8 pl-0 py-1">
                {{ ticketDetail.tour.diaDiem || '' }}
              </div>
            </div>
            <div class="d-flex border-bottom-gray">
              <div class="col-4 pl-0 py-1">Ngày khởi hành:</div>
              <div class="col-8 pl-0 py-1">
                {{ timeFormat(ticketDetail.tour.ngayKhoiHanh) || '' }}
              </div>
            </div>
            <div class="d-flex border-bottom-gray">
              <div class="col-4 pl-0 py-1">Thời gian:</div>
              <div class="col-8 pl-0 py-1">
                {{ ticketDetail.tour.thoiGian || '' }}
              </div>
            </div>
            <div class="d-flex border-bottom-gray">
              <div class="col-4 pl-0 py-1">Phương tiện:</div>
              <div class="col-8 pl-0 py-1">
                {{ ticketDetail.tour.phuongTien || '' }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5 p-4 br-16 shadow">
        <h3 class="mb-3 text-center text-black-50 font-weight-bold font-24">
          Thông tin khách hàng
        </h3>
        <div class="w-100 py-2 d-flex border-bottom-gray">
          <div class="col-4 pl-0">Thời gian đặt vé:</div>
          <div class="col-8 pl-0">
            {{
              ticketDetail.thoiGianDat
                ? timeFormat(ticketDetail.thoiGianDat)
                : 'null'
            }}
          </div>
        </div>
        <div class="w-100 py-2 d-flex border-bottom-gray">
          <div class="col-4 pl-0">
            Tên <span v-if="isEdit" class="text-error">*</span>:
          </div>
          <div class="col-8 pl-0">
            <div v-if="!isEdit">
              {{ ticketDetail.thongTin.ten }}
            </div>
            <input
              v-else
              type="text"
              v-model="ticketDetail.thongTin.ten"
              class="w-100 br-8 border-gray p-2"
            />
          </div>
        </div>
        <div class="w-100 py-2 d-flex border-bottom-gray">
          <div class="col-4 pl-0">
            Căn cước ông dân <span v-if="isEdit" class="text-error">*</span>:
          </div>
          <div class="col-8 pl-0">
            <div v-if="!isEdit">
              {{ ticketDetail.thongTin.cccd }}
            </div>
            <input
              v-else
              type="number"
              v-model="ticketDetail.thongTin.cccd"
              class="w-100 br-8 border-gray p-2"
            />
          </div>
        </div>
        <div class="w-100 py-2 d-flex border-bottom-gray">
          <div class="col-4 pl-0">
            Giới tính <span v-if="isEdit" class="text-error">*</span>:
          </div>
          <div class="col-8 pl-0">
            <div v-if="!isEdit">
              {{ ticketDetail.thongTin.gioiTinh }}
            </div>
            <input
              v-else
              type="text"
              v-model="ticketDetail.thongTin.gioiTinh"
              class="w-100 br-8 border-gray p-2"
            />
          </div>
        </div>
        <div class="w-100 py-2 d-flex border-bottom-gray">
          <div class="col-4 pl-0">
            Số điện thoại <span v-if="isEdit" class="text-error">*</span>:
          </div>
          <div class="col-8 pl-0">
            <div v-if="!isEdit">
              {{ ticketDetail.thongTin.soDT }}
            </div>
            <input
              v-else
              type="text"
              v-model="ticketDetail.thongTin.soDT"
              class="w-100 br-8 border-gray p-2"
            />
          </div>
        </div>
        <div class="w-100 py-2 d-flex border-bottom-gray">
          <div class="col-4 pl-0">
            Email <span v-if="isEdit" class="text-error">*</span>:
          </div>
          <div class="col-8 pl-0">
            <div v-if="!isEdit">
              {{ ticketDetail.thongTin.email }}
            </div>
            <input
              v-else
              type="email"
              v-model="ticketDetail.thongTin.email"
              class="w-100 br-8 border-gray p-2"
            />
          </div>
        </div>
        <div class="w-100 py-2 d-flex border-bottom-gray">
          <div class="col-4 pl-0">
            Địa chỉ <span v-if="isEdit" class="text-error">*</span>:
          </div>
          <div class="col-8 pl-0">
            <div v-if="!isEdit">
              {{ ticketDetail.thongTin.diaChi }}
            </div>
            <input
              v-else
              type="text"
              v-model="ticketDetail.thongTin.diaChi"
              class="w-100 br-8 border-gray p-2"
            />
          </div>
        </div>

        <div class="w-100 py-2 d-flex border-bottom-gray">
          <div class="col-4 pl-0">Ghi chú:</div>
          <div class="col-8 pl-0">
            <div v-if="!isEdit">
              {{ ticketDetail.ghiChu }}
            </div>
            <input
              v-else
              type="text"
              v-model="ticketDetail.ghiChu"
              class="w-100 br-8 border-gray p-2"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="isEdit" class="d-flex justify-content-end">
      <div class="btn" @click="updateTicketHandler()">
        Cập nhật thông tin vé
      </div>
    </div>

    <ConfirmBox
      :value="isOpenModal"
      message="Bạn có đồng ý xóa người này không?"
      @close="colseModalHandler()"
      @success="deleteTicketHandler()"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { FORMAT } from '~/plugins/mixin'
import Modal from '~/components/Modal.vue'
import ConfirmBox from '~/components/ConfirmBox.vue'

export default {
  components: { Modal, ConfirmBox },
  props: {
    ticket: {
      type: Object,
      default: () => null,
    },
  },
  mixins: [FORMAT],
  data() {
    return {
      isEdit: false,
      isOpenModal: false,
      ticketDetail: null,
      ticketDetailCompare: null,
    }
  },
  computed: {
    isSameData() {
      return (
        Object.entries(this.ticketDetail).toString() ===
        Object.entries(this.ticketDetailCompare).toString()
      )
    },
  },
  created() {
    this.ticketDetail = { ...this.ticket }
    this.ticketDetailCompare = { ...this.ticket }
  },
  methods: {
    ...mapActions({
      updateTicket: 'ticket/updateTicket',
      deletTicket: 'ticket/deleteTicket',
      setNotiContent: 'common/setNotiContent',
    }),
    async updateTicketHandler() {
      const res = await this.updateTicket({
        ma: this.ticketDetail.ma,
        ten: this.ticketDetail.thongTin.ten || null,
        cccd: this.ticketDetail.thongTin.cccd || null,
        soDT: this.ticketDetail.thongTin.soDT || null,
        email: this.ticketDetail.thongTin.soDT || null,
        diaChi: this.ticketDetail.thongTin.diaChi || null,
        gioiTinh: this.ticketDetail.thongTin.gioiTinh || null,
        ghiChu: this.ticketDetail.ghiChu || null,
      })
      if (res.success) {
        this.setNotiContent(
          `Cập nhật thông tin vé ${this.ticketDetail.ma} thành công`
        )
        this.$emit('update')
      } else {
        this.setNotiContent(
          `Cập nhật thông tin vé ${this.ticketDetail.ma} không thành công`
        )
      }
      this.$emit('close')
    },
    colseModalHandler() {
      this.isOpenModal = false
      this.isOpenModalSetRole = false
    },
    async deleteTicketHandler() {
      const res = await this.deletTicket({ ma: this.ticketDetail.ma })
      if (res.success) {
        this.setNotiContent(`Xóa vé ${this.ticketDetail.ma} thành công`)
        this.$emit('delete')
      } else {
        this.setNotiContent(`Xóa vé ${this.ticketDetail.ma} không thành công`)
      }
      this.$emit('close')
    },
    // async setRoleHandler() {
    //   const res = await this.setRole({
    //     id: this.ticketDetail.id,
    //     role: this.ticketDetail.role == 'CLIENT' ? 'MANAGER' : 'CLIENT',
    //   })
    //   if (res.success) {
    //     this.setNotiContent(
    //       `Cập nhật vai người dùng ${this.ticketDetail.id} thành công`
    //     )
    //     this.$emit('update')
    //   } else {
    //     this.setNotiContent(
    //       `Cập nhật vai người dùng ${this.ticketDetail.id} không thành công`
    //     )
    //   }
    //   this.$emit('close')
    // },
  },
}
</script>

<style lang="scss" scoped>
.ticket-box {
  max-width: 600px;
  max-height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  .tour-info {
  }
}
.header-box {
  position: sticky;
  z-index: 2;
  width: calc(100% + 3rem);
  top: 0;
  transform: translate(-1.5rem, -1.5rem);
}

input {
  text-transform: none;
}
</style>
