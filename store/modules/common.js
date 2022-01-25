// import axiosClient from '~/api/axiosClient'
export default {
  namespaced: true,
  state() {
    return {
        notiContent: '',
        errorImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
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
  },

  actions: {
    setNotiContent({state}, data) {
      state.notiContent = data
    },
  },
}