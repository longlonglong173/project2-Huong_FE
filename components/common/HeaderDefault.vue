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
        @click="
          isOpenSearchBar = !isOpenSearchBar
          isOpenSearchResult = false
          searchResult = null
          searchKeyword = ''
          noData = false
        "
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

    <div
      :class="[
        'search-bar-box position-absolute top-100 right-0 left-0 d-flex align-items-center',
        { active: isOpenSearchBar },
      ]"
    >
      <input
        type="search"
        id="search-bar-input"
        class="text-transform-0"
        placeholder="Tìm kiếm tour ..."
        v-model="searchKeyword"
        @input="searchHandler()"
      />
      <label
        for="search-bar-input"
        class="fas fa-search cursor-pointer"
      ></label>
      <div
        v-show="searchResult || noData"
        class="search-result br-8 p-3 bg-white position-absolute top-100 shadow border-gray"
        style="max-height: 20rem; overflow-y: scroll; overflow-x: hidden"
      >
        <div v-show="noData" class="text-error font-24">
          Không có kết quả tìm kiếm nào phù hợp ....
        </div>
        <div
          v-for="s in searchResult"
          :key="`search-tour-${s.ma}`"
          class="py-1 w-100 d-flex align-items-center hover-gray cursor-pointer"
          @click="
            $router.push(`/tour/${s.ma}`)
            searchResult = null
            isOpenSearchResult = false
            isOpenSearchBar = false
            searchKeyword = null
            noData = false
          "
          :title="s.chiTiet || 'Xem chi tiết'"
        >
          <div style="width: 4rem">
            <div
              class="pb-100 bg-center"
              :style="{
                'background-image': `url('${s.hinhAnh || errorImage}')`,
              }"
            ></div>
          </div>
          <div class="ml-3 font-24 line-clamp-2">{{ s.ten }}</div>
        </div>
      </div>
    </div>
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
      searchKeyword: '',
      isOpenSearchResult: false,
      searchResult: null,
      noData: false,
    }
  },
  computed: {
    ...mapState({
      isLogin: (state) => state.user.isLogin,
      errorImage: (state) => state.common.errorImage,
    }),
  },

  methods: {
    ...mapActions({
      logout: 'user/logout',
      search: 'common/search',
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
    async searchHandler() {
      if (this.searchKeyword == '') {
        this.noData = false
        this.searchResult = null
      } else {
        const res = await this.search({
          type: 'title',
          keyword: this.searchKeyword.trim(),
          option: 0,
        })
        if (res.success) {
          if (res.data.length > 0) {
            this.searchResult = res.data
            this.noData = false
          } else {
            this.searchResult = null
            this.noData = true
          }
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
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
.search-bar-box {
  transition: all 200ms;
  padding: 1.5rem 2rem;
  background-color: #333;
  border-top: 1px solid #ddd;
  transform: translateY(-100%);
  visibility: hidden;
  opacity: 0;
  &.active {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }
  input {
    width: calc(100% - 5rem);
    padding: 1rem;
    font-size: 2rem;
    border-radius: 1rem;
  }
  label {
    font-size: 3rem;
    margin-left: 2rem;
    color: #ddd;
  }
  .search-result {
    width: calc(100% - 9rem);
    left: 2rem;
  }
}
</style>
