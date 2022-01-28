import axiosClient from '~/api/axiosClient'
export default {
  namespaced: true,
  state() {
    return {
      navLeftSelected: 0,
    }
  },

  getters: {},

  mutations: {},

  actions: {
    async getUserList(ctx, { index, count }) {
      try {
        const res = await axiosClient.get('/layDanhSachNguoiDung', {
          index: index || 0,
          count: count || 20,
        })
        return {
          ...res,
          data: res.data.map((user) => ({
            id: user.ma,
            name: user.ten || '',
            cccd: user.cccd || '',
            gender: user.gioiTinh || 'nam',
            phonenumber: user.soDT || '',
            email: user.email || '',
            address: user.diaChi || '',
            role: user.vai || 'CLIENT',
            token: user.token || null,
          })),
          success: true,
        }
      } catch (error) {
        return {
          ...error,
          success: false,
        }
      }
    },
    async addUser(ctx, payload) {
      try {
        const res = await axiosClient.post('/themNguoiDung', {
          maSoDN: payload.username || '',
          matKhau: payload.password || '',
          ten: payload.name || '',
          gioiTinh: payload.gender || '',
          soDT: payload.phonenumber || '',
          email: payload.email || '',
          diachi: payload.address || '',
          cccd: payload.cccd || '',
        })
        return {
          ...res,
          data: {
            id: res.data.ma,
            name: res.data.ten || '',
            cccd: res.data.cccd || '',
            gender: res.data.gioiTinh || 'nam',
            phonenumber: res.data.soDT || '',
            email: res.data.email || '',
            address: res.data.diaChi || '',
            role: res.data.vai || 'CLIENT',
            token: res.data.token || null,
          },
          success: true,
        }
      } catch (error) {
        return {
          ...error,
          success: false,
        }
      }
    },
    async updateUser(ctx, payload) {
      try {
        const data = {
          ma: payload.id,
          ten: payload.name || '',
          cccd: payload.cccd || '',
          gioiTinh: payload.gender || '',
          soDT: payload.phonenumber || '',
          email: payload.email || '',
          diaChi: payload.address || '',
        }
        const res = await axiosClient.post('/suaNguoiDung', { ...data })
        return {
          ...res,
          data: {
            id: res.data.ma,
            name: res.data.ten || '',
            cccd: res.data.cccd || '',
            gender: res.data.gioiTinh || 'nam',
            phonenumber: res.data.soDT || '',
            email: res.data.email || '',
            address: res.data.diaChi || '',
            role: res.data.vai || 'CLIENT',
            token: res.data.token || null,
          },
          success: true,
        }
      } catch (error) {
        return {
          ...error,
          success: false,
        }
      }
    },
    async deleteUser(ctx, { id }) {
      try {
        const res = await axiosClient.post('/xoaNguoiDung', {
          ma: id,
        })
        return {
          ...res,
          success: true,
        }
      } catch (error) {
        return { ...error, success: false }
      }
    },
    async setRole(ctx, { id, role }) {
      try {
        const res = await axiosClient.post('/setVai', {
          ma: id,
          vai: role,
        })
        return {
          ...res,
          success: true,
        }
      } catch (error) {
        return { ...error, success: false }
      }
    },
  },
  mutations: {
    setNavLeftSelected(state, data) {
      state.navLeftSelected = data
    },
  },
}
