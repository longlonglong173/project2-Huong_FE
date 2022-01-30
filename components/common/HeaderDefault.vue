<template>
  <header>
    <div id="menu-bar" class="fas fa-bars"></div>
    <nuxt-link to="/" class="logo"><span>T</span>ravel</nuxt-link>
    <nav class="navbar">
      <div class="navbar-item" @click="scollToElement('#home')">home</div>
      <div class="navbar-item" @click="scollToElement('#book')">đặt vé</div>
      <div class="navbar-item" @click="$router.push('/tours')">Tour</div>
      <div class="navbar-item" @click="scollToElement('#services')">
        Dịch vụ
      </div>
      <div class="navbar-item" @click="scollToElement('#gallery')">
        Địa điểm
      </div>
      <div class="navbar-item" @click="scollToElement('#review')">review</div>
      <div class="navbar-item" @click="scollToElement('#contact')">liên hệ</div>
    </nav>

    <div class="icons position-relative">
      <i
        class="fas fa-search"
        id="search-btn"
        @click="isOpenSearchBar = !isOpenSearchBar"
      ></i>
      <i class="fas fa-user m-0" id="login-btn" @click="openLoginForm()"></i>
      <div
        :class="[
          'user-menu position-absolute right-0 p-2 br-4 bg-white',
          {
            active: isOpenUserMenu,
          },
        ]"
      >
        <div class="btn-cus m-0" @click="$router.push('/user_info')">
          <i class="fal fa-user font-32"></i>Thông tin
        </div>
        <div class="btn-cus mt-2" @click="logoutHandler()">
          <i class="fal fa-sign-out-alt"></i>Đăng xuất
        </div>
      </div>
    </div>

    <form
      action=""
      :class="['search-bar-container', { active: isOpenSearchBar }]"
    >
      <input type="search" id="search-bar" placeholder="Tìm kiếm tour ..." />
      <label for="search-bar" class="fas fa-search"></label>
    </form>
    <LoginForm
      :isOpenLoginForm="isOpenLoginForm"
      @close="isOpenLoginForm = false"
    />
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import LoginForm from '~/components/LoginForm.vue'
export default {
  components: {
    LoginForm,
  },
  data() {
    return {
      isOpenSearchBar: false,
      isOpenLoginForm: false,
      isOpenUserMenu: false,
    }
  },
  computed: {
    ...mapState({ isLogin: (state) => state.user.isLogin }),
  },

  methods: {
    ...mapActions({
      logout: 'user/logout',
    }),
    openLoginForm() {
      if (this.isLogin) {
        this.isOpenUserMenu = !this.isOpenUserMenu
      } else {
        this.isOpenLoginForm = !this.isOpenLoginForm
      }
    },
    logoutHandler() {
      this.logout()
      window.location.reload(true)
    },
    scollToElement(id) {
      this.$router.replace({ name: this.$route.name, hash: id })
    },
  },
}
</script>

<style scoped>
.user-menu {
  top: calc(100% + 8px);
  transform-origin: right top;
  transform: scale(0);
  opacity: 0;
}
.user-menu.active {
  transform: scale(1) !important;
  opacity: 1;
}
</style>
