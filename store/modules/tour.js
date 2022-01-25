import axiosClient from '~/api/axiosClient'
export default {
    namespaced: true,
    state() {
      return {
          tour: {}
      }
    },
  
    getters: {},
  
    mutations: {
    },
  
    actions: {
        async getTour(ctx, { id }) {
            try {
                const res = await axiosClient.post('/layThongTinTour', {
                    ma: id
                })
                return res
            } catch (error) {
                return {
                    ...error,
                    success: false,
                }
            }
      }
    },
  }
  