import axiosClient from '~/api/axiosClient'
export default {
  namespaced: true,
  state() {
    return {
      tour: {},
    }
  },

  getters: {},

  mutations: {},

  actions: {
    async getTour(ctx, { id }) {
      try {
        const res = await axiosClient.post('/layThongTinTour', {
          ma: id,
        })
        const tour = res.data
        return {
          ...res,
          success: true,
          data: {
            img: tour.hinhAnh,
            title: tour.ten,
            id: tour.ma,
            time: tour.thoiGian || 0,
            currentPrice: tour.giaHienTai || 0,
            oldPrice: tour.giaCu || 0,
            startTime: tour.ngayKhoiHanh,
            startLocation: tour.noiKhoiHanh || '',
            location: tour.diaDiem,
            currentSlot: tour.slot || 0,
            vehicle: tour.phuongTien || '',
            info: tour.chiTiet || '',
            stars: 5,
          },
        }
      } catch (error) {
        return {
          ...error,
          success: false,
        }
      }
    },
    async getTourList(ctx, { index, count }) {
      try {
        const res = await axiosClient.get('/layDanhSachTour', {
          index: index || 0,
          count: count || 20,
        })
        const data = []
        res.data.forEach((tour) => {
          data.push({
            img: tour.hinhAnh,
            title: tour.ten,
            id: tour.ma,
            time: tour.thoiGian || 0,
            currentPrice: tour.giaHienTai || 0,
            oldPrice: tour.giaCu || 0,
            startTime: tour.ngayKhoiHanh,
            startLocation: tour.noiKhoiHanh || '',
            location: tour.diaDiem,
            currentSlot: tour.slot || 0,
            vehicle: tour.phuongTien || '',
            info: tour.chiTiet || '',
            stars: 5,
          })
        })
        return {
          ...res,
          data: data,
        }
      } catch (error) {
        return error
      }
    },
    async addTour(
      ctx,
      {
        img,
        title,
        time,
        currentPrice,
        oldPrice,
        startTime,
        startLocation,
        location,
        currentSlot,
        vehicle,
        info,
      }
    ) {
      try {
        const res = await axiosClient.post('/themTour', {
          hinhAnh: img,
          ten: title,
          thoiGian: time,
          ngayKhoiHanh: startTime,
          phuongTien: vehicle,
          giaHienTai: currentPrice,
          giaCu: oldPrice,
          diaDiem: location,
          chiTiet: info,
          slot: currentSlot,
          noiKhoiHanh: startLocation,
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
    async updateTour(
      ctx,
      {
        img,
        title,
        id,
        time,
        currentPrice,
        oldPrice,
        startTime,
        startLocation,
        location,
        currentSlot,
        vehicle,
        info,
      }
    ) {
      try {
        const res = await axiosClient.post('/suaTour', {
          ma: id,
          hinhAnh: img,
          ten: title,
          thoiGian: time,
          ngayKhoiHanh: startTime,
          phuongTien: vehicle,
          giaHienTai: currentPrice,
          giaCu: oldPrice,
          diaDiem: location,
          chiTiet: info,
          slot: currentSlot,
          noiKhoiHanh: startLocation,
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

    async deleteTour(ctx, { id }) {
      try {
        const res = await axiosClient.post('/xoaTour', {
          ma: id,
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
}
