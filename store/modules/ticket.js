import axiosClient from '~/api/axiosClient'
export default {
  namespaced: true,
  state() {
    return {}
  },

  getters: {},

  mutations: {},

  actions: {
    async getTicketList() {
      try {
        const res = await axiosClient.get('/layDanhSachVe')
        console.log(res)
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
    async updateTicket(ctx, payload) {
      try {
        const res = await axiosClient.post('/suaVe', {
          ma: payload.ma,
          ten: payload.ten || null,
          cccd: payload.cccd || null,
          soDT: payload.soDT || null,
          email: payload.soDT || null,
          diaChi: payload.diaChi || null,
          ghiChu: payload.ghiChu || null,
          gioiTinh: payload.gioiTinh || null,
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
    async deleteTicket(ctx, payload) {
      try {
        const res = await axiosClient.post('xoaVe', {
          ma: payload.ma,
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
  },
  mutations: {},
}
