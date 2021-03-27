<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	#tab-bar{
		display: flex;
		position: fixed;
		right: 0;
		left: 0;
		bottom: 0;
		box-shadow: 0 2px 1px rgba(100,100,100,.2);
		background-color: #f6f6f6;
	}
</style>
