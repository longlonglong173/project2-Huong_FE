<template>
  <div class="tour-box p-4 border-radius-16 bg-white font-24 w-100">
    <div class="d-flex justify-content-between mb-4">
      <h3 class="font-32 font-weight-bold d-flex">Thêm người dùng mới</h3>
      <div class="cursor-pointer" @click="$emit('close')">
        <i class="fal fa-times-circle font-24"></i>
      </div>
    </div>
    <div class="tour-content">
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">
          Tên đăng nhập <span class="text-error">*</span>:
        </div>
        <div class="col-9 pr-0">
          <input
            type="text"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            placeholder="Nhập tên đăng nhập"
            v-model="newUser.username"
          />
        </div>
      </div>
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">Mật khẩu <span class="text-error">*</span>:</div>
        <div class="col-9 pr-0">
          <input
            type="text"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            placeholder="Nhập tên mật khẩu"
            v-model="newUser.password"
          />
        </div>
      </div>
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">Mật khẩu <span class="text-error">*</span>:</div>
        <div class="col-9 pr-0">
          <input
            type="text"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            placeholder="Nhập lại mật khẩu"
            v-model="newUser.passwordConfirm"
          />
        </div>
      </div>
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">Tên <span class="text-error">*</span>:</div>
        <div class="col-9 pr-0">
          <input
            type="text"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            placeholder="Nhập tên người dùng"
            v-model="newUser.name"
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
            v-model="newUser.gender"
          />
        </div>
      </div>
      <div class="w-100 d-flex py-2 border-bottom-gray">
        <div class="col-3 p-0">
          Căn cước công dân <span class="text-error">*</span>:
        </div>
        <div class="col-9 pr-0">
          <input
            type="text"
            class="font-weight-bold font-32 border-gray w-100 px-2 br-8"
            placeholder="Nhập số căn cước công dân"
            v-model="newUser.cccd"
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
            v-model="newUser.phonenumber"
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
            v-model="newUser.email"
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
            v-model="newUser.address"
          />
        </div>
      </div>
      <div v-show="isEdit" class="w-100 d-flex justify-content-end">
        <div class="btn w-fit" @click="addTourHandler()">Thêm người dùng</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { FORMAT } from '~/plugins/mixin'
export default {
  mixins: [FORMAT],
  data() {
    return {
      isEdit: false,
      newUser: {
        username: '',
        password: '',
        passwordConfirm: '',
        name: '',
        cccd: '',
        gender: '',
        phonenumber: '',
        email: '',
        address: '',
      },
      isShowPassword: false,
      newUserCompare: {
        username: '',
        password: '',
        passwordConfirm: '',
        name: '',
        cccd: '',
        gender: '',
        phonenumber: '',
        email: '',
        address: '',
      },
    }
  },
  computed: {
    isSameData() {
      return (
        Object.entries(this.newUser).toString() ===
        Object.entries(this.newUserCompare).toString()
      )
    },
  },
  created() {},
  methods: {
    ...mapActions({
      addUser: 'admin/addUser',
      setNotiContent: 'common/setNotiContent',
    }),
    async addTourHandler() {
      if (this.newUser.username == '') {
        this.setNotiContent('Hãy nhập tên đăng nhập')
        return
      }
      if (this.newUser.password == '') {
        this.setNotiContent('Hãy nhập mật khẩu')
        return
      }
      if (this.newUser.passwordConfirm == '') {
        this.setNotiContent('Hãy nhập mật khẩu xác nhận')
        return
      }
      if (this.newUser.password != this.newUser.passwordConfirm) {
        this.setNotiContent('Mật khẩu nhập lại đang không khớp')
        return
      }
      if (this.newUser.name == '') {
        this.setNotiContent('Hãy nhập tên người dùng')
        return
      }
      if (this.newUser.cccd == '') {
        this.setNotiContent('Hãy nhập số căn cước công dân')
        return
      }
      if (this.newUser.gender == '') {
        this.setNotiContent('Hãy nhập giới tính')
        return
      }
      if (this.newUser.phonenumber == '') {
        this.setNotiContent('Hãy nhập số điện thoại')
        return
      }
      if (this.newUser.email == '') {
        this.setNotiContent('Hãy nhập email')
        return
      }
      if (this.newUser.address == '') {
        this.setNotiContent('Hãy nhập địa chỉ')
        return
      }

      const res = await this.addUser(this.newUser)
      if (res.success) {
        this.setNotiContent(`Thêm người dùng mới thành công`)
        this.$emit('close')
        this.$emit('addSuccess')
      } else {
        this.setNotiContent(`Thêm người dùng mới không thành công`)
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
