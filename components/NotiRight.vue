<template>
  <div
    :class="['noti-right p-3 border-gray font-32 font-weight-bold', { 'show-noti': isShowNoti }]"
  >
    {{ notiContent }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      isShowNoti: false,
    }
  },
  computed: {
    ...mapState({
      notiContent: (state) => state.common.notiContent,
    }),
  },
  watch: {
    notiContent(val) {
      if (val != '') {
        this.isShowNoti = true
        setTimeout(() => {
            this.isShowNoti = false
            setTimeout(() => {
                this.setNotiContent('')
            }, 200);
        }, 3000);
      }
    },
  },
  methods: {
      ...mapActions({
          setNotiContent: 'common/setNotiContent'
      })
  }
}
</script>

<style lang="scss" scoped>
.noti-right {
  position: fixed;
  top: 15%;
  right: 12px;
  max-width: 300px;
  background-color: #fff;
  z-index: 1000;
  transition: all 200ms;
  border-radius: 1rem;
  transform: translateX(calc(100% + 2rem));
  opacity: 0;
  visibility: hidden;
}
.show-noti {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
}
</style>
