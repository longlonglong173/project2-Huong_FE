import axiosClient from '~/api/axiosClient'
export default {
  namespaced: true,
  state() {
    return {
      userInfo: null,
      isLogin: localStorage.getItem('token'),
    }
  },

  getters: {},

  mutations: {
    // setState(state, data) {
    //   for (const propertyName in state) {
    //     if (!_.isUndefined(data[propertyName])) {
    //       if (propertyName === 'systemError') {
    //         switch (data[propertyName]) {
    //           case 'Incorrect username or password.':
    //             state[propertyName] =
    //               'メールアドレス或いはパスワードに誤りがあります。'
    //             break
    //           case 'Password attempts exceeded':
    //             state[propertyName] = 'パスワードの試行回数を超えました。'
    //             break
    //           case 'User is not confirmed.':
    //             state[propertyName] = '認証の確認が取れていません。'
    //             break
    //           default:
    //             state[propertyName] = data[propertyName]
    //         }
    //       } else {
    //         state[propertyName] = data[propertyName]
    //       }
    //     }
    //   }
    // },
    // toggleIsSignedIn(state) {
    //   state.isSignedIn = !state.isSignedIn
    // },
    // setSignIn(state) {
    //   state.isSignedIn = true
    // },
    // setSignOut(state) {
    //   state.isSignedIn = false
    // },
    setUserInfo(state, data) {
      state.userInfo = { ...data }
    },
  },

  actions: {
    // resetErrorState({ commit }) {
    //   commit('setState', {
    //     emailError: null,
    //     passwordError: null,
    //     systemError: null,
    //   })
    // },

    // toggleIsSignedIn({ commit }) {
    //   commit('toggleIsSignedIn')
    // },
    // setSignIn({ commit }) {
    //   commit('setSignIn')
    // },
    // setSignOut({ commit }) {
    //   commit('setSignOut')
    // },

    async login({ state, commit }, payload) {
      try {
        const res = await axiosClient.post('/dangNhap', {
          maSoDN: payload.username,
          matKhau: payload.password,
        })
        if (res.success) {
          localStorage.setItem('token', res.data.token)
          commit('setUserInfo', res.data)
        }
        return res
      } catch (error) {
        return error
      }
    },

    async signup({ commit }, payload) {
      try {
        const res = await axiosClient.post('/themNguoiDung', {
          maSoDN: payload.username,
          matKhau: payload.password,
        })
        if (res.success) {
          localStorage.setItem('token', res.data.token)
          commit('setUserInfo', res.data)
        }
        return res
      } catch (error) {
        console.log(error)
        return error
      }
    },

    logout() {
      localStorage.clear()
    },

    async datVe(ctx,{ id, name, email, phonenumber, address, cccd, note }) {
      try {
        const res = await axiosClient.post('/datVe', {
          maTour: id,
          ten: name,
          email: email,
          soDT: phonenumber,
          diaChi: address,
          cccd: cccd,
          ghiChu: note,
        })
        return res
      } catch (error) {
        return error
      }
    },

    // async signIn({ state, commit }, payload) {
    //   commit('setState', {
    //     emailError: null,
    //     passwordError: null,
    //     systemError: null,
    //   })
    //   await Auth.signIn({
    //     username: _.get(payload, 'user.email'),
    //     password: _.get(payload, 'user.password'),
    //   })
    //     .then(async (res) => {
    //       localStorage.setItem('userId', res.attributes.sub)
    //       localStorage.setItem(
    //         'signedToken',
    //         res.signInUserSession.idToken.jwtToken
    //       )
    //       localStorage.setItem(
    //         'accessToken',
    //         res.signInUserSession.accessToken.jwtToken
    //       )
    //       localStorage.setItem(
    //         'refreshToken',
    //         res.signInUserSession.refreshToken.token
    //       )
    //       commit('setSignIn')
    //       await this.$axios.post('/sign_in').then((res) => {
    //         this.$router.push(payload.toRoute)
    //       })
    //     })
    //     .catch((error) => {
    //       const errors = _.get(error, 'message', null)
    //       const systemError = _.get(error, 'message', null)
    //       commit('setState', {
    //         errors: errors || null,
    //         systemError: systemError || null,
    //       })
    //       commit('setSignOut')
    //     })
    // },

    // setIsHandle403Redirect({ commit }, payload) {
    //   commit('setState', {
    //     isHandle403Redirect: payload,
    //   })
    // },
  },
}
