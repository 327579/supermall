<template>
  <swiper ref="swiper" v-if="banner.length">
    <swiper-item v-for="v in banner" :key="v">
      <a :href="v.link">
        <img :src="v.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
  name: "HomeSwiper",
  props:{
    banner:{
      type:Array,
      default(){

      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>

</style>
