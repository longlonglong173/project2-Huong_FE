import axiosClient from '~/api/axiosClient'
export default {
  namespaced: true,
  state() {
    return {
      notiContent: '',
      errorImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    }
  },

  getters: {},

  mutations: {},

  actions: {
    setNotiContent({ state }, data) {
      state.notiContent = data
    },
    async search(ctx, payload) {
      try {
        const res = await axiosClient.get('/timKiem', {
          params: {
            type: payload.type || 'title',
            keyword: payload.keyword || null,
            option: payload.option || 0,
          },
        })
        return {
          ...res,
          success: true,
        }
      } catch (error) {
        return {
          ...error,
          success: false,
        }
      }
    },
    async statistic() {
      try {
        const res = await axiosClient.get('/thongKeTour')
        return {
          ...res,
          success: true,
        }
      } catch (error) {
        return {
          ...error,
          success: false,
        }
      }
    },
  },
}
