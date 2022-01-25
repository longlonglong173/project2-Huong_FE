<template>
  <div v-if="isDataFetched" class="content-width px-4 font-24">
    <div class="tour-info w-100 d-flex pt-5">
      <div class="col-5">
        <div
          class="tour-img bg-center w-100"
          :style="{ 'background-image': `url('${tour.img}')` }"
        ></div>
      </div>
      <div class="tour-detail col-7">
        <div class="p-4 border-gray">
          <h3 class="font-32">{{ tour.title }}</h3>
        </div>
        <div class="p-4 border-gray border-top-0 font-24">
          <div class="d-flex py-3">
            <div class="col-4">Mã Tour:</div>
            <div class="col-8 p-0">{{ tour.id }}</div>
          </div>
          <div class="d-flex py-3">
            <div class="col-4">Địa Điểm:</div>
            <div class="col-8 p-0">{{ tour.location }}</div>
          </div>
          <div class="d-flex py-3">
            <div class="col-4">Thời Gian:</div>
            <div class="col-8 p-0">{{ tour.time }}</div>
          </div>
          <div class="d-flex py-3">
            <div class="col-4">Phương Tiện:</div>
            <div class="col-8 p-0">{{ tour.vehicle }}</div>
          </div>
          <div class="d-flex py-3">
            <div class="col-4">Giá:</div>
            <div class="col-8 p-0">{{ formatPrice(tour.price) }}đ</div>
          </div>
          <div class="d-flex py-3">
            <div class="col-4">Ngày Khởi hành:</div>
            <div class="col-8 p-0">{{ timeFormat(tour.startTime) }}</div>
          </div>
          <div class="d-flex py-3">
            <div class="col-4">Nơi Khởi Hành:</div>
            <div class="col-8 p-0">{{ tour.startLocation }}</div>
          </div>
          <div class="d-flex py-3">
            <div class="col-4">Số Chỗ Còn Nhận:</div>
            <div class="col-8 p-0">{{ tour.currentSlot }}</div>
          </div>
        </div>
      </div>
    </div>
    <p class="text-error px-4 my-5">{{ noti }}</p>
    <hr class="bg-gray" />
    <h3 class="font-64 font-weight-bold text-center text-uppercase mt-4">
      thông tin liên hệ
    </h3>
    <div class="p-4">
      <div class="mb-3">
        <div class="font-32">Họ tên <span class="text-error">*</span>:</div>
        <input
          type="text"
          placeholder="Nhập tên"
          class="border-gray mt-2 px-4 py-3 w-100"
          v-model="form.name"
        />
      </div>
      <div class="mb-3">
        <div class="font-32">Email <span class="text-error">*</span>:</div>
        <input
          type="email"
          placeholder="Nhập email"
          class="border-gray mt-2 px-4 py-3 w-100"
          v-model="form.email"
        />
      </div>
      <div class="mb-3">
        <div class="font-32">
          Số căn cước công dân hoặc chứng minh nhân dân
          <span class="text-error">*</span>:
        </div>
        <input
          type="text"
          placeholder="Nhập số căn cước công dân hoặc chứng minh nhân dân"
          class="border-gray mt-2 px-4 py-3 w-100"
          v-model="form.cccd"
        />
      </div>
      <div class="mb-3">
        <div class="font-32">
          Số điện thoại <span class="text-error">*</span>:
        </div>
        <input
          type="text"
          placeholder="Nhập số điện thoại"
          class="border-gray mt-2 px-4 py-3 w-100"
          v-model="form.phonenumber"
        />
      </div>
      <div class="mb-3">
        <div class="font-32">Địa chỉ <span class="text-error">*</span>:</div>
        <input
          type="text"
          placeholder="Nhập địa chỉ"
          class="border-gray mt-2 px-4 py-3 w-100"
          v-model="form.address"
        />
      </div>
      <div class="mb-3">
        <div class="font-32">Ghi chú:</div>
        <textarea
          cols="30"
          rows="10"
          placeholder="Ghi chú"
          class="border-gray mt-2 px-4 py-3 w-100"
          v-model="form.note"
        ></textarea>
      </div>
      <p v-if="errorMessage != ''" class="font-24 text-error">
        {{ errorMessage }}
      </p>
      <div class="btn" @click="datVeHandler()">Đặt vé</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      tour: {
        img: '', //hinhAnh
        title: '', //ten
        id: 0, // ma
        time: '', //thoiGian
        price: 0, //gia
        startTime: '', //ngayKhoiHanh
        startLocation: '', //noiKhoiHanh
        currentSlot: 0, //slot
        vehicle: '', //phuongTien
        location: '', //diaDiem
      },
      form: {
        name: '', //ten
        email: '', //email
        address: '', //diaChi
        note: '', //ghiChu
        phonenumber: '', //soDT
        cccd: '', // cccd
      },
      noti: 'Các khoản phí phát sinh (nếu có) như: phụ thu dành cho khách nước ngoài, việt kiều; phụ thu phòng đơn; phụ thu chênh lệch giá tour… Nhân viên Du Lịch Việt sẽ gọi điện thoại tư vấn cho quý khách ngay sau khi có phiếu xác nhận booking. (Trong giờ hành chính) Trường hợp quý khách không đồng ý các khoản phát sinh, phiếu xác nhận booking của quý khách sẽ không có hiệu lực.',
      errorMessage: '',
      isDataFetched: false,
    }
  },
  computed: {
    ...mapState({
      errorImage: (state) => state.common.errorImage,
    }),
  },
  methods: {
    ...mapActions({
      datVe: 'user/datVe',
      setNotiContent: 'common/setNotiContent',
      getTour: 'tour/getTour',
    }),
    formatPrice(price) {
      return new Intl.NumberFormat('de-DE').format(price)
    },
    timeFormat(x) {
      console.log(x)
      const time = new Date(x)
      console.log(typeof time)
      return `ngày ${time.getDate()}, tháng ${
        time.getMonth() + 1
      }, năm ${time.getFullYear()}`
    },
    async datVeHandler() {
      if (
        this.form.name == '' ||
        this.form.email == '' ||
        this.form.address == '' ||
        this.form.phonenumber == null ||
        this.form.cccd == null
      ) {
        this.errorMessage = 'Hãy nhập đủ thông tin'
      } else {
        this.errorMessage = ''
        const formData = {
          id: this.tour.id,
          ...this.form,
        }
        const res = await this.datVe(formData)
        if (res.success) {
          this.setNotiContent('Đặt vé thành công')
          setTimeout(() => {
            this.$router.push('/')
          }, 3000)
        } else {
          this.setNotiContent('Đặt vé không thành công')
        }
      }
    },
  },
  async created() {
    const { params } = this.$route
    const tourInfo = await this.getTour({ id: params.id })
    if (tourInfo.success) {
      const data = tourInfo.data
      this.tour.img = data.hinhAnh || this.errorImage
      this.tour.title = data.ten || ''
      this.tour.id = data.ma
      this.tour.time = data.thoiGian
      this.tour.price = data.gia || 0
      this.tour.startTime = data.ngayKhoiHanh
      this.tour.startLocation = data.noiKhoiHanh || ''
      this.tour.currentSlot = data.slot || 0
      this.tour.vehicle = data.phuongTien || ''
      this.tour.location = data.diaDiem || ''
      this.isDataFetched = true
    } else {
      this.setNotiContent(`Không tìm thấy tour ${params.id} tương ứng`)
      setTimeout(() => {
        this.$router.push('/')
      }, 3000)
    }
  },
}
</script>

<style lang="scss" scoped>
.tour-img {
  padding-bottom: 100%;
}
input {
  text-transform: none !important;
}
</style>
