<template>
	<div class="ft">
		<div class="f1">电话:021-68361817</div>
		<div class="f2">地址：上海市浦东新区蔡伦路85弄95号九洲中心1MB05-07室</div>
		<!-- <img src="../../images/erweima.png" alt=""> -->
        <!-- <BackTop :style="{display:backTop?'block':'none'}"></BackTop>		 -->
	</div>
</template>
<script>
	export default {
		props:['backTop']
	}
</script>
<style lang="scss" scoped>
	@import '../../style/mixin';
	.ft{
		border-top:1px solid $gray;
		background-color: $bc;
		padding:0.2rem 0.3rem;
		@include sc(0.34rem,$gray);
		.f1{}
	}
</style>