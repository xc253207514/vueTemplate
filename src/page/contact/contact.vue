<template>
	<div class="contact">
		<head-top headTitle="联系我们"></head-top>
		<div class="wrapper module">
			<div class="title">
				<div class="n1">联系我们</div>
			</div>
			<ul>
				<li><span>电话:021-68361817</span><span>邮编:201210</span></li>
				<li>网站:www.palladiumfilm.com.cn</li>
				<li>邮箱:service@palladiumfilm.com.cn</li>
				<li>地址：上海市浦东新区蔡伦路85弄95号九洲中心1MB05-07室</li>
				<li><div style="width: 100%; height: 4rem;" id="container" class="map"></div></li>
			</ul>
		</div>
		<div class="module">
			<div class="title">
				<div class="n1">招商加盟</div>
			</div>
			<dl class="zhaoshang">
				<dd>1、8-10年的窗膜从业经验，有高端知名品牌批发或3年以上的PPF品牌销售经验加分</dd>
				<dd>2、有现成稳定的4S销售渠道，并得到客户认可和好评，有高端品牌4S渠道加分</dd>	 
				<dd>3、有独立运作的销售和市场策划团队，能够专注于服务签约的4S渠道和加盟服务商</dd>
				<dd>4、有详细的继续开发所在辖省份4S渠道的计划</dd>
				<dd>5、配置裁膜机，可以提供PPF裁切服务加分</dd>
				<dd>6、确认年度销售目标后，首次进货数量不少于月平均数的1.5倍</dd>
			</dl>
		</div>
	</div>
</template>
<script>
import headTop from '../../components/header/head'
import footFt from '../../components/footer/footer'
import {getPro,getOper} from '../../config/data-serve'	
	export default {
		name:'qimian',
		data(){
			return{

			}
		},
		computed:{

		},
		created(){
		},
		mounted(){
			this.initMap();
		},
		components:{
	        headTop,
	        footFt
	    },
	    methods:{
			initMap(){
				var map = new AMap.Map('container',{
				   zoom: 17,
				   center: [121.62289,31.194955]
				});
				var marker = new AMap.Marker({
					icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_bs.png',
					position: [121.62289,31.194955],
					offset: new AMap.Pixel(-12,-12),
					zIndex: 101,
					title: '你好',
					map: map
				});

			},
	    }
	}
</script>
<style lang="scss" scoped>
	@import '../../style/mixin';
	.contact{
		height:100%;
		background-color:#333;
		.title{
            color:$gold;
            padding:0 0.3rem 0.3rem;
            justify-content:space-between;
            .n1{color:$gold;}
        }
        .wrapper{
        	ul{
        		padding:0 0.3rem 0.3rem;
        		li{
        			line-height:0.45rem;
        			span:first-child{margin-right:0.4rem}
        		}
        	}
        }
        .zhaoshang{
        	padding:0 0.3rem 0.2rem;
        	dd{
				line-height:0.4rem;
        	}
        }
	}
</style>