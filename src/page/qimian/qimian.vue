<template>
	<div class="qimian">
		<head-top headTitle="漆面保护膜"></head-top>
		<div class="wrapper module">
			<!-- <div class="title">
				<div class="n1">漆面保护膜</div>
			</div> -->
			<div class="tabs df">
				<div class="tab" :class="[currentTab == 0?'on':'']" @click="currentTab = 0">产品介绍</div>
				<div class="tab" :class="[currentTab == 1?'on':'']" @click="currentTab = 1">养护指南</div>
				<div class="tab" :class="[currentTab == 2?'on':'']" @click="currentTab = 2">性能参数</div>
			</div>
			<div class="content" v-if="currentTab == 0">
				<img src="../../images/product1.jpg" alt="">
				<p>帕雷迪汽车漆面保护膜,来自美国亚利桑那州原厂生产( Refleck Tech-nologies Corporation),纯正的原厂产品注定了优良的品质。漆面增亮度高达40%以上,8mil的厚度能更有效的保护车身漆面免受各种意外剐蹭，优异的抗污 抗蚀性缘于先进的纳米顶图层技术。99%的紫外线阻隔率,具有超高的耐黄表现。迅速有效地自我修复图层，让您的爱车长期有效地远离细微划痕。美国原厂10年质保承诺，让您免除后顾之忧。</p>
			</div>
			<div class="content" v-if="currentTab == 1">
				<img src="../../images/product1.jpg" alt="">
				<ul>
					<li>装贴完帕雷迪漆面保护膜后至复查前尽量不要洗车，避免淋雨，7至10天后回施工门店复查，并定期做专业护理。洗车时不要高压水枪近距离正对包边处冲洗，膜面如不慎沾染具有腐蚀性污渍，需及时清洗。车辆在装贴帕雷迪漆面保护膜时，须通过喷洒安装液进行施工，所以施工后夹层中存在少量小水泡属于正常现象，只需半个月左右时间进行晾干即可消失，无需特别处理。</li>
					<li>漆面保养的注意以下事项：</li>
					<li>1、贴膜后一周内避免洗车，以保证胶和漆面产生最好的结合力;</li>
					<li>2、请使用无磨料，不含强溶剂且非强酸强碱性的清洁剂清洁保护膜表面</li>
					<li>3、洗车时避免使用高压水枪正对膜包边处冲洗;</li>
					<li>4、清洁后使用清水冲洗并用干净、柔软的布料或橡胶刮板擦干;  
					<li>5、不建议在膜面抛光; </li>
					<li>6、避免硬物刮擦膜和用力擦洗膜表面，刮擦和磨损的痕迹会影响膜的整体效果;</li>
					<li>停车时，出现以下情况请及时洗车：</li>
					<li>1.不要将车长时间停在树底下，否则会有大量鸟粪、虫胶黏着在膜面产生色斑</li>
					<li>2.不要将车长时间停在空调出风口滴水处，具有腐蚀性的空调水会损伤膜面;</li>
					<li>3.不要将车长时间停在油烟机排风扇下面，否则会有大量油渍积在膜面，造成膜面损伤;</li>
					<li>4.不要将车长时间停在雨水中，雨水中的酸性物质可能侵蚀膜面，影响使用寿命;</li>
					<li>另外，已装贴漆面保护膜的车辆若作婚车使用，请避免将吸盘直接粘在膜面;婚车彩带、爆竹烟花纸如果在雨天长时间粘附在膜面，有时可能造成膜面染色。遇到这种情况，请在12个小时内及时清洗和保养。上述任何一种物质在太阳照射下会加剧对车膜的伤害。</li>
					<li>正确的保养能够让漆面保护膜长期发挥最大功效，充分保护您爱车的漆面历久弥新。</li>
				</ul>
			</div>
			<div class="content" v-if="currentTab == 2">
				<img src="../../images/canshu.png" alt="">
			</div>
		</div>
		<div class="case module">
            <div class="title df">
                <div class="n1">经典案例</div>
            </div>
            <div class="caseWrapper">
                <img src="../../images/casecase.jpg" alt="">
                <div class="c1 ellipsis">奔驰SLC漆面提升30%完美施工帕雷迪隐形车衣</div>
                <div class="c2">施工日期:2018.10.17</div>
                <div class="c2">施工部位:整车漆面膜</div>
                <div class="c2">施工地点:浙江绍兴上虞德星奔驰</div>
            </div> 
        </div>
	</div>
</template>
<script>
import headTop from '../../components/header/head'
import footFt from '../../components/footer/footer'	
	export default {
		name:'qimian',
		data(){
			return{
				currentTab:0
			}
		},
		mounted(){
			if(this.$route.query.type == 'wechat'){
				// this.$nextTick(()=>{
					document.body.scrollTop=800
	            	document.documentElement.scrollTop=800
	            	this.currentTab = 1;
				// })
	        }
		},
		components:{
	        headTop,
	        footFt
	    },
	}
</script>
<style lang="scss" scoped>
	@import '../../style/mixin';
	.qimian{
		height:100%;
		background-color:#333;
		.title{
            color:$gold;
            padding:0 0.3rem 0.3rem;
            justify-content:space-between;
            .n1{color:$gold;}
        }
        .module{
            padding:0.4rem 0 0;
            font-size:0.3rem;       
            background-color:$bc;
             margin-top:0.2rem;
        }
        .tabs{
			.tab{
				@include wh(33.33%,0.6rem);
				text-align:center;
			}
			.on{
				color:$gold;
				border-bottom:0.01rem solid $gold;
			}
        }
        .content{
        	img{
        		@include wh(100%,auto)
        	}
        	p{
        		line-height:0.4rem;
        		padding:0.2rem 0.3rem;
        	}
        	ul{
        		padding:0.2rem 0.3rem;
        		li{
        			line-height:0.4rem;
        		}
        	}
        }
	}
</style>