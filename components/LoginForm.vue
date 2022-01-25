<template>
  <div :class="['login-form-container', { active: isOpenLoginForm }]">
    <i class="fas fa-times" id="form-close" @click="$emit('close')"></i>
    <form v-if="isFormLogin" action="">
      <h3>Đăng nhập</h3>
      <input
        v-model="login.username"
        type="text"
        class="box"
        placeholder="Nhập tên đăng nhập"
      />
      <div class="position-relative">
        <input
          v-model="login.password"
          :type="login.isSeePassword ? 'text' : 'password'"
          class="box"
          placeholder="Nhập mật khẩu"
        />
        <div
          class="see-password position-absolute cursor-pointer"
          @click="login.isSeePassword = !login.isSeePassword"
        >
          <i v-if="!login.isSeePassword" class="fal fa-eye"></i>
          <i v-else class="fal fa-eye-slash"></i>
        </div>
      </div>
      <p v-if="errorMessage != ''" class="text-error">{{ errorMessage }}</p>
      <div class="btn" @click="loginSubmit()">Đăng nhập</div>
      <p class="mt-3">
        Bạn chưa có tài khoản?
        <span class="cursor-pointer color-orange" @click="isFormLogin = false"
          >Đăng kí ngay</span
        >
      </p>
    </form>

    <!-- signup -->

    <form v-else action="">
      <h3>Đăng kí</h3>
      <input
        v-model="signup.username"
        type="text"
        class="box"
        placeholder="Nhập tên đăng nhập"
      />
      <div class="position-relative">
        <input
          v-model="signup.password"
          :type="signup.isSeePassword ? 'text' : 'password'"
          class="box"
          placeholder="Nhập mật khẩu"
        />
        <div
          class="see-password position-absolute cursor-pointer"
          @click="signup.isSeePassword = !signup.isSeePassword"
        >
          <i v-if="!signup.isSeePassword" class="fal fa-eye"></i>
          <i v-else class="fal fa-eye-slash"></i>
        </div>
      </div>
      <div class="position-relative">
        <input
          v-model="signup.passwordConfirm"
          :type="signup.isSeePassword ? 'text' : 'password'"
          class="box"
          placeholder="Nhập lại mật khẩu"
        />
        <div
          class="see-password position-absolute cursor-pointer"
          @click="signup.isSeePassword = !signup.isSeePassword"
        >
          <i v-if="!signup.isSeePassword" class="fal fa-eye"></i>
          <i v-else class="fal fa-eye-slash"></i>
        </div>
      </div>
      <p v-if="errorMessage != ''" class="text-error">{{ errorMessage }}</p>
      <div class="btn" @click="signupSubmit()">Đăng kí</div>
      <p class="mt-3">
        Bạn đã có tài khoản?
        <span class="cursor-pointer color-orange" @click="isFormLogin = true"
          >Đăng nhập ngay</span
        >
      </p>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    isOpenLoginForm: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isFormLogin: true,
      login: {
        username: '',
        password: '',
        isSeePassword: false,
      },
      signup: {
        username: '',
        password: '',
        passwordConfirm: '',
        isSeePassword: false,
      },
      errorMessage: '',
    }
  },
  methods: {
    ...mapActions({
      loginHandler: 'user/login',
      signupHandler: 'user/signup',
    }),
    async loginSubmit() {
      if (this.login.username != '' && this.login.password != '') {
        const res = await this.loginHandler(this.login)
        if (res.success) {
          this.errorMessage = ''
          this.$router.push('/')
          setTimeout(() => {
            window.location.reload(true)
          }, 200)
        } else {
          this.errorMessage = 'Đăng nhập thất bại'
        }
      } else {
        this.errorMessage = 'Nhập đủ thông tin cần thiết'
      }
    },
    async signupSubmit() {
      if (
        this.signup.username != '' &&
        this.signup.password != '' &&
        this.signup.password != ''
      ) {
        if (this.signup.password != this.signup.passwordConfirm) {
          this.errorMessage = 'Mật khẩu xác nhận không đúng !!!'
        } else {
          const res = await this.signupHandler(this.signup)
          if (res.success) {
            this.errorMessage = ''
            this.$router.push('/')
            setTimeout(() => {
              window.location.reload(true)
            }, 200)
          } else {
            if (res.error == 'username') {
              this.errorMessage = 'Tên đăng nhập đã tồn tại !!!'
            } else {
              this.errorMessage = 'Đăng kí thất bại'
            }
          }
        }
      } else {
        this.errorMessage = 'Nhập đủ thông tin cần thiết'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.see-password {
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
  font-size: 2rem;
}
</style>
