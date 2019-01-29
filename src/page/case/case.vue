<template>
	<div>
		<div class="case">
			<div class="caseBox" v-for="(ce,index) in caseArr">
				<img :src="ce.url[0]" alt=""  :key="index">
				<div class="name" @click="goDetail(index)">
					{{ce.name}}
					<Icon type="ios-arrow-forward" />
				</div>
				<div class="bg"></div>
			</div>
		</div>
	</div>
</template>
<script>
	import case1 from '../../images/case/image001.jpg'
	import case2 from '../../images/case/image003.jpg'
	import case3 from '../../images/case/image005.jpg'
	import case4 from '../../images/case/image007.jpg'
	import case21 from '../../images/case/case21.jpg'
	import case22 from '../../images/case/case22.jpg'
	import case23 from '../../images/case/case23.jpg'
	import case24 from '../../images/case/case24.jpg'
	import case31 from '../../images/case/case31.jpg'
	import case32 from '../../images/case/case32.jpg'
	export default{
		name:"case",
		data(){
			return{
				caseArr:[
					{
						url:[case31,case32],
						name:'奔驰SLC',
						time:'2018年10月17号',
						part:'整车SLC',
						add:'浙江绍兴上虞德星奔驰'
					},
					{
						url:[case1,case2,case3,case4],
						name:'S560迈巴赫',
						time:'2018年11月2日',
						part:'整车',
						add:'浙江星杭奔驰'

					},
					{
						url:[case21,case22,case23,case24],
						name:'AMG a45',
						time:'2018年11月1号',
						part:'整车',
						add:'杭州东星行奔驰'
					},
				
				],
				show:false,
				detailInfo:{}
				
			}
		},
		methods:{
			goDetail(e){
				// console.log(e)
				// this.show = true;
				// this.detailInfo = this.caseArr[e];
				this.$router.push({path:'/caseDe',query:{id:e}})
			},
			goBack(){
				this.show = false;
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../style/mixin';
	.case{
		.caseBox{
			position:relative;
			margin-bottom:20px;
			img{
				@include wh(100%,auto);
			}
			.name{
				@include sc(0.3rem,#fff);
				position:absolute;
				left:0;right:0;
				bottom:0;
				z-index:100;
				height:0.88rem;
				line-height:0.88rem;
				text-align:center;
			}
			.bg{
				position:absolute;
				bottom:0;
				@include wh(100%,0.88rem);
				background-color:#000;
				opacity:0.3;
				z-index:10;
			}
		}
		.caseList{
			position:fixed;
			left:-0.1rem;bottom:1rem;
			background-color:#fff;
			box-shadow:3px 5px 20px #1a1a1a;
			color:#1a1a1a;
			@include sc(0.34rem,#1a1a1a)
			z-index:500;
			padding:2px 4px 2px 6px;
			border-radius:8px;
		}
	}
</style>