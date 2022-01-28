<template>
  <div v-if="user" class="tour-box p-4 br-16 bg-white font-24 w-100">
    <div class="d-flex justify-content-between mb-4">
      <h3 class="font-32 font-weight-bold d-flex">
        Chi tiết người dùng {{ user.id }}
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

        <div
          class="cursor-pointer ml-3"
          @click="isOpenModalSetRole = !isOpenModalSetRole"
          :title="`Thay đổi vai của người này từ ${
            userDetail.role == 'CLIENT' ? '(Khách hàng)' : '(Nhân viên)'
          } sang ${
            userDetail.role != 'CLIENT' ? '(Khách hàng)' : '(Nhân viên)'
          }`"
        >
          <i class="fal fa-user-tag"></i>
        </div>
      </h3>
      <div class="cursor-pointer" @click="$emit('close')">
        <i class="fal fa-times-circle font-24"></i>
      </div>
    </div>
    <div class="tour-content">
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">
          {{ user.role == 'CLIENT' ? 'Tên khách hàng' : 'Tên nhân viên' }}:
        </div>
        <div class="col-9 pr-0">
          <input
            v-if="isEdit"
            type="text"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            v-model="userDetail.name"
          />
          <h3 v-else class="font-weight-bold mb-0 font-32 mb-0">
            {{ userDetail.name }}
          </h3>
        </div>
      </div>
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">Giới tính:</div>
        <div class="col-9 pr-0">
          <input
            v-if="isEdit"
            type="text"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            v-model="userDetail.gender"
          />
          <h3 v-else class="font-weight-bold mb-0 font-32 mb-0">
            {{ userDetail.gender }}
          </h3>
        </div>
      </div>
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">Email:</div>
        <div class="col-9 pr-0">
          <input
            v-if="isEdit"
            type="email"
            min="1"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            v-model="userDetail.email"
          />
          <h3 v-else class="font-weight-bold mb-0 font-32 mb-0">
            {{ userDetail.email }}
          </h3>
        </div>
      </div>
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">Số điện thoại:</div>
        <div class="col-9 pr-0">
          <input
            v-if="isEdit"
            type="text"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            v-model="userDetail.phonenumber"
          />
          <h3 v-else class="font-weight-bold mb-0 font-32 mb-0">
            {{ userDetail.phonenumber }}
          </h3>
        </div>
      </div>
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">Căn cước công dân:</div>
        <div class="col-9 pr-0">
          <input
            v-if="isEdit"
            type="text"
            min="0"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            v-model="userDetail.cccd"
          />
          <h3 v-else class="font-weight-bold mb-0 font-32 mb-0">
            {{ userDetail.cccd }}
          </h3>
        </div>
      </div>
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">Địa chỉ:</div>
        <div class="col-9 pr-0">
          <input
            v-if="isEdit"
            type="text"
            min="0"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            v-model="userDetail.address"
          />
          <h3 v-else class="font-weight-bold mb-0 font-32 mb-0">
            {{ userDetail.address }}
          </h3>
        </div>
      </div>
      <div v-show="isEdit" class="w-100 d-flex justify-content-end">
        <div
          v-show="!isSameData"
          class="btn w-fit"
          @click="updateUserHandler()"
        >
          Cập nhật thông tin
        </div>
      </div>
    </div>
    <ConfirmBox
      :value="isOpenModal"
      message="Bạn có đồng ý xóa người này không?"
      @close="colseModalHandler()"
      @success="deleteUserHandler()"
    />
    <!-- set role -->
    <ConfirmBox
      :value="isOpenModalSetRole"
      message="Thay đổi vai người dùng này ?"
      @close="colseModalHandler()"
      @success="setRoleHandler()"
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
    user: {
      type: Object,
      default: () => null,
    },
  },
  mixins: [FORMAT],
  data() {
    return {
      isEdit: false,
      isOpenModal: false,
      isOpenModalSetRole: false,
      userDetail: null,
      userDetailCompare: null,
    }
  },
  computed: {
    ...mapState({
      errorImage: (state) => state.common.errorImage,
    }),
    isSameData() {
      return (
        Object.entries(this.userDetail).toString() ===
        Object.entries(this.userDetailCompare).toString()
      )
    },
  },
  created() {
    this.userDetail = { ...this.user }
    this.userDetailCompare = { ...this.user }
  },
  methods: {
    ...mapActions({
      updateUser: 'admin/updateUser',
      deleteUser: 'admin/deleteUser',
      setRole: 'admin/setRole',
      setNotiContent: 'common/setNotiContent',
    }),
    async updateUserHandler() {
      const res = await this.updateUser(this.userDetail)
      if (res.success) {
        this.setNotiContent(
          `Cập nhật thông tin người dùng ${this.userDetail.id} thành công`
        )
        this.$emit('update')
      } else {
        this.setNotiContent(
          `Cập nhật thông tin người dùng ${this.userDetail.id} không thành công`
        )
      }
      this.$emit('close')
    },
    colseModalHandler() {
      this.isOpenModal = false
      this.isOpenModalSetRole = false
    },
    async deleteUserHandler() {
      const res = await this.deleteUser({ id: this.userDetail.id })
      if (res.success) {
        this.setNotiContent(`Xóa người dùng ${this.userDetail.id} thành công`)
        this.$emit('delete')
      } else {
        this.setNotiContent(
          `Xóa người dùng ${this.userDetail.id} không thành công`
        )
      }
      this.$emit('close')
    },
    async setRoleHandler() {
      const res = await this.setRole({
        id: this.userDetail.id,
        role: this.userDetail.role == 'CLIENT' ? 'MANAGER' : 'CLIENT',
      })
      if (res.success) {
        this.setNotiContent(
          `Cập nhật vai người dùng ${this.userDetail.id} thành công`
        )
        this.$emit('update')
      } else {
        this.setNotiContent(
          `Cập nhật vai người dùng ${this.userDetail.id} không thành công`
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
  & > * {
    transition: all 200ms;
  }
  input {
    text-transform: none;
  }
}
</style>
