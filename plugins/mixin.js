import Vue from 'vue'

Vue.mixin({})

export const FORMAT = {
  methods: {
    formatPriceVnd(price) {
      return new Intl.NumberFormat('de-DE').format(price) + 'đ'
    },
    timeFormat(x) {
      const time = new Date(x)
      return `ngày ${time.getDate()}, tháng ${
        time.getMonth() + 1
      }, năm ${time.getFullYear()}`
    },
  },
}
