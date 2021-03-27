<template>
	<div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banner="banners" ref="hSwiper"></home-swiper>
    <recommend-v-iew :recommends="recommend"></recommend-v-iew>
	</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childrencomponent/HomeSwiper";
import RecommendVIew from "@/views/home/childrencomponent/RecommendVIew";

import {getHomeMultidata} from "network/home";


  export default {
    components:{
      NavBar,
      HomeSwiper,
      RecommendVIew
    },
    data(){
      return {
        // 轮播
        banners: [],
        //
        dKeyword: [],
        //
        keywords: [],
        // 推荐
        recommend: []
      };
    },
    created() {
      // 1.请求多个数据
      getHomeMultidata().then(res =>{
        // console.log(res);
        this.banners = res.data.banner.list
        this.dKeyword = res.data.dKeyword.list
        this.keywords = res.data.keywords.list
        this.recommend = res.data.recommend.list
      })
    }
  }
</script>

<style>
  .home-nav{
    background: var(--color-tint);
    color: #fff;
  }
</style>
