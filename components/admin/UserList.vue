<template>
  <div v-show="isDataFetched">
    <div class="font-64 text-center">Danh sách người dùng</div>
    <div class="d-flex justify-content-between mb-3">
      <div class="flex-center">
        <select
          v-model="filterRole"
          class="font-24 border-gray"
          style="height: 3rem"
        >
          <option value="" disabled selected hidden>Lọc theo vai</option>
          <option value="CLIENT">Khách hàng</option>
          <option value="MANAGER">Nhân viên</option>
        </select>
        <div
          v-show="filterRole != ''"
          class="font-24 ml-3 cursor-pointer"
          @click="filterRole = ''"
        >
          <i class="fal fa-times-circle mr-1"></i> Bỏ lọc
        </div>
      </div>
      <div class="btn p-1 flex-center" @click="isOpenModalAddUser = true">
        <i class="fal fa-user-plus mr-1 font-32"></i> Thêm người dùng mới
      </div>
    </div>

    <table class="w-100">
      <tr
        class="d-flex border-gray border-bottom-black font-weight-bold bg-gray"
      >
        <th class="col-1 p-1 border-right-gray">Id</th>
        <th class="col-2 p-1 border-right-gray">Tên</th>
        <th class="col-2 p-1 border-right-gray">Email</th>
        <th class="col-1 p-1 border-right-gray">Giới tính</th>
        <th class="col-1 p-1 border-right-gray">CCCD</th>
        <th class="col-1 p-1 border-right-gray">Sđt</th>
        <th class="col-3 p-1 border-right-gray">Địa chỉ</th>
        <th class="col-1 p-1">Vai</th>
      </tr>
      <tr
        v-for="user in userListFilter"
        :key="user.id"
        class="user-info-row d-flex border-gray border-top-0 cursor-pointer"
        :title="`Click để xem chi tiết người dùng ${user.id}`"
        @click="showUserDetailHandler(user)"
      >
        <td class="col-1 p-1 border-right-gray">{{ user.id }}</td>
        <td class="col-2 p-1 border-right-gray">{{ user.name }}</td>
        <td class="col-2 p-1 border-right-gray">{{ user.email }}</td>
        <td class="col-1 p-1 border-right-gray">{{ user.gender }}</td>
        <td class="col-1 p-1 border-right-gray">{{ user.cccd }}</td>
        <td class="col-1 p-1 border-right-gray">{{ user.phonenumber }}</td>
        <td class="col-3 p-1 border-right-gray">{{ user.address }}</td>
        <td class="col-1 p-1">{{ user.role == 'CLIENT' ? 'KH' : 'NV' }}</td>
      </tr>
    </table>

    <Modal
      :value="isOpenModalUerDetail"
      modalClass="flex-center"
      bodyClass=""
      @close="closeDetailHandler(false)"
    >
      <EditUser
        :user="userDetail"
        @close="closeDetailHandler(false)"
        @update="getUserListData(0, userList.length)"
        @delete="getUserListData(0, userList.length - 1)"
      />
    </Modal>
    <Modal
      :value="isOpenModalAddUser"
      modalClass="flex-center"
      @close="closeDetailHandler(false)"
    >
      <AddUser
        @close="closeDetailHandler(false)"
        @addSuccess="getUserListData(0, userList.length + 1)"
      />
    </Modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TourCard from '~/components/TourCard.vue'
import Modal from '~/components/Modal.vue'
import AddUser from '~/components/admin/AddUser.vue'
import EditUser from '~/components/admin/EditUser.vue'

export default {
  components: {
    TourCard,
    Modal,
    AddUser,
    EditUser,
  },
  data() {
    return {
      isDataFetched: false,
      userList: [],
      filterRole: '',
      userDetail: null,
      isOpenModalUerDetail: false,
      isOpenModalAddUser: false,
    }
  },
  computed: {
    userListFilter() {
      if (this.filterRole == '') {
        return this.userList
      }
      return this.userList.filter((user) => user.role == this.filterRole)
    },
  },

  methods: {
    ...mapActions({
      getUserList: 'admin/getUserList',
    }),
    showUserDetailHandler(user) {
      this.userDetail = user
      this.isOpenModalUerDetail = true
    },
    closeDetailHandler(value) {
      this.userDetail = null
      this.isOpenModalUerDetail = value
      this.isOpenModalAddUser = value
    },
    async getUserListData(index, count) {
      const res = await this.getUserList({
        index: index,
        count: count + 1,
      })
      if (res.success) {
        this.userList = res.data
      }
    },
  },
  async created() {
    const res = await this.getUserList({
      index: 0,
      count: 20,
    })
    if (res.success) {
      this.userList = res.data
      this.isDataFetched = true
    }
  },
}
</script>

<style lang="scss" scoped>
.user-info-row {
  //   background-color: red;
  &:hover {
    background-color: #ddd;
  }
  td {
    word-break: break-all;
    text-transform: none;
  }
}
</style>
