<template>
  <div v-if="tour" class="box h-100" :body-class="bodyClass">
    <div class="content d-flex flex-column justify-content-between h-100">
      <div>
        <div
          class="position-relative pb-100 bg-center"
          :style="{ 'background-image': `url('${tour.img || errorImage}')` }"
        ></div>
        <h3 class="mt-3">
          <i class="fas fa-map-marker-alt"></i> {{ tour.location }}
        </h3>
        <h3 class="font-32 font-weight-bold">{{ tour.title }}</h3>
        <p>
          {{ tour.info }}
        </p>
      </div>
      <div>
        <div class="stars">
          <i
            v-for="(star, index) in tour.stars"
            :key="`star-${index}`"
            class="fas fa-star color-orange"
          ></i>
        </div>
        <div class="price">
          {{ formatPriceVnd(tour.currentPrice) }}
          <span>{{ formatPriceVnd(tour.oldPrice) }}</span>
        </div>
        <nuxt-link v-if="!isAdmin" :to="`/tour/${tour.id}`" class="btn"
          >Đặt ngay</nuxt-link
        >
        <div v-else class="btn" @click="$emit('showDetail')">Xem chi tiết</div>
      </div>
    </div>
  </div>
</template>

<script>
import { FORMAT } from '~/plugins/mixin'
import { mapState } from 'vuex'
export default {
  props: {
    tour: {
      type: Object,
      default: () => null,
    },
    bodyClass: {
      type: String,
      default: '',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [FORMAT],
  computed: {
    ...mapState({
      errorImage: (state) => state.common.errorImage,
    }),
  },
}
</script>

<style lang="scss">
.price {
  font-size: 1.5rem;
  span {
    font-size: 1rem;
    text-decoration: line-through;
    color: #aaa;
  }
}
</style>
