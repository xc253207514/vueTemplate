<template>
	<div class="caseDe">
		<div class="detail">
			<wv-group title="案例信息">
			  <wv-cell title="施工日期" :value="detailInfo.time"></wv-cell>
			  <wv-cell title="施工部位" :value="detailInfo.part"></wv-cell>
			  <wv-cell title="施工地点" :value="detailInfo.add"></wv-cell>
			</wv-group>
			<div class="imgBox">
				<img v-for="img in detailInfo.url" :src="img" alt="" v-preview="img">
			</div>
		</div>
		<div class="backCase" @click="back()">返回案例</div>
	</div>
</template>
<style lang="scss" scoped>
	.detail{
		color:#1a1a1a;
		background-color:#fff;
		z-index:200;
		.imgBox{
			img{
				width:100%;
			}
		}
	}
	.backCase{
		width:1.38rem;
		height:0.5rem;
		background-color:#5db13b;
		color:#ffffff;
		text-align:center;
		position:fixed;
		right:0.0rem;
		bottom:0.85rem;
		border-radius:0.2rem 0 0 0.2rem;
		font-size:0.26rem;
		line-height:0.5rem;
		// opacity:.6;

	}
</style>
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
				detailInfo:{}
			}
		},
		mounted(){
			var curId = this.$route.query.id;
			this.detailInfo = this.caseArr[curId];
		},
		methods:{
			back(){
				this.$router.replace({path:'/case'})
			}
		}
	}
</script>