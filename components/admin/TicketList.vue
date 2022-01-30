<template>
  <div v-if="ticketList" class="tickert-list">
    <div class="font-64 text-center">Danh sách vé đặt tour</div>
    <div class="d-flex justify-content-end mb-3">
      <div class="btn p-1 flex-center" @click="isOpenModalAddTicket = true">
        <i class="fal fa-map-marker-plus mr-1 font-32"></i> Thêm vé đặt tour mới
      </div>
    </div>
    <table class="w-100">
      <tr class="border-gray border-bottom-black font-weight-bold bg-gray">
        <th class="col-1 p-1">Mã vé</th>
        <th class="col-1 p-1">Mã tour</th>
        <th class="col-2 p-1">Ngày đặt</th>
        <th class="col-2 p-1">Tên người đặt</th>
        <th class="col-3 p-1">Địa chỉ</th>
        <th class="col-3 p-1">Ghi chú</th>
      </tr>
      <tr
        v-for="ticket in ticketList"
        :key="`ticket-${ticket.ma}`"
        :title="`Click để xem chi tiết thông tin vé ${ticket.ma}`"
        class="border-bottom-gray cursor-pointer info-row"
        @click="
          ticketDetail = ticket
          isOpenModalEditTicket = true
        "
      >
        <td class="py-2 px-1">{{ ticket.ma }}</td>
        <td class="py-2 px-1">
          {{ ticket.tour.error ? 'null' : ticket.tour.ma }}
        </td>
        <td class="py-2 px-1">
          {{ ticket.thoiGianDat ? timeFormat(ticket.thoiGianDat) : 'null' }}
        </td>
        <td class="py-2 px-1">{{ ticket.thongTin.ten || 'null' }}</td>
        <td class="py-2 px-1">{{ ticket.thongTin.diaChi || 'null' }}</td>
        <td class="py-2 px-1">{{ ticket.ghiChu || 'null' }}</td>
      </tr>
    </table>

    <Modal
      :value="isOpenModalEditTicket"
      modalClass="flex-center"
      bodyClass=""
      @close="closeDetailHandler()"
    >
      <EditTicket
        :ticket="ticketDetail"
        @close="closeDetailHandler()"
        @update="getData()"
        @delete="getData()"
      />
    </Modal>

    <!-- add ticket -->
    <Modal
      :value="isOpenModalAddTicket"
      modalClass="flex-center"
      bodyClass=""
      @close="closeDetailHandler()"
    >
      <AddTicket
        :ticket="ticketDetail"
        @close="closeDetailHandler()"
        @update="getData()"
        @delete="getData()"
      />
    </Modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { FORMAT } from '~/plugins/mixin'
import EditTicket from '~/components/admin/EditTicket.vue'
import AddTicket from '~/components/admin/AddTicket.vue'

export default {
  components: {
    EditTicket,
    AddTicket,
  },
  data() {
    return {
      ticketList: null,
      isOpenModalEditTicket: false,
      isOpenModalAddTicket: false,
      ticketDetail: null,
    }
  },
  mixins: [FORMAT],
  async created() {
    const res = await this.getTicketList()
    if (res.success) {
      this.ticketList = res.data
    }
  },
  methods: {
    ...mapActions({
      getTicketList: 'ticket/getTicketList',
    }),
    closeDetailHandler() {
      this.isOpenModalEditTicket = false
      this.isOpenModalAddTicket = false
      this.ticketDetail = null
    },
    async getData() {
      const res = await this.getTicketList()
      if (res.success) {
        this.ticketList = res.data
      }
    },
  },
}
</script>

<style></style>
