<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div>
	</div>
	<!-- <div class="tab-bar-item">分类</div>
	<div class="tab-bar-item">购物车</div>
	<div class="tab-bar-item">我的</div> -->
</template>

<script>
	export default{
		name:'TabBarItem',
		data(){
			return {
				// isActive:false
			}
		},
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'#ff5777'
			}
		},
		methods:{
			itemClick(){
				// 进行判断，避免重复点击导航导致的控制台报错
				if(!this.isActive){
					this.$router.replace(this.path)
				}
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) != -1
			},
			// 用于修改字体的颜色
			activeStyle(){
				return this.isActive?{color:this.activeColor} :{}
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		height: 49px;
		text-align: center;
		font-size: 14px;
	}
	.tab-bar-item img{
		width: 24px;
		height: 24px;
		margin: 3px 0 2px 0;
		vertical-align: middle;
	}
/* 	.active{
		color: #ff5777;
	} */
</style>
