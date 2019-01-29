<template>
	<div class="qimian">
		<head-top headTitle="汽车内饰膜"></head-top>
		<div class="wrapper module">
			<div class="tabs df">
				<div class="tab" :class="[currentTab == 0?'on':'']" @click="currentTab = 0">产品介绍</div>
				<div class="tab" :class="[currentTab == 1?'on':'']" @click="currentTab = 1">养护指南</div>
				<div class="tab" :class="[currentTab == 2?'on':'']" @click="currentTab = 2">性能参数</div>
			</div>
			<div class="content" v-if="currentTab == 0">
				<img src="../../images/product1.jpg" alt="">
				<p>帕雷迪汽车内饰保护膜为您爱车的桃木、镀铬内饰提供全方位的保护,让其在用车过程中免受不经意的各种划伤和划痕,同时大大提高内饰亮度。若您的爱车内饰已经有了岁月的痕迹,帕雷迪汽车内饰保护膜的柔性胶水可以完美的修复桃木、镀铬饰面上的细小划痕,让你的爱车内饰焕然一新</p>
			</div>
			<div class="content" v-if="currentTab == 1">
				<img src="../../images/product1.jpg" alt="">
				<ul>
					<li>1、在车辆内饰维修保养中，注意不要将带有油污的脏手触摸或用油抹布随意擦洗；</li>
					<li>2、不要将粘有油污的工具或含有有机溶剂的擦布置于内饰上，以免产生化学反应；</li>
					<li>3、对于织物面料的内饰，清洗后一定要立即处理干燥，如不慎滴上果汁或咖啡等带色液体，及时洗掉；</li>
					<li>4、车辆应停在车库或通风良好的地方，若临时停放要选择阴凉的地方，避免强烈的阳光或臭氧照射；</li>
					<li>5、防止尖锐物件对内饰漆膜进行强烈冲击、磕碰和划痕；</li>
					<li>6、对镀光金属件的清洗，应使用炭精清洗剂，洗后用棉或纸巾擦干；</li>
					<li>7、内饰件的清洗要选用质量较好的洗涤剂，选用碱性或酒精含量较低的清洁剂。</li>
				</ul>
			</div>
			<div class="content" v-if="currentTab == 2">
				<img src="../../images/neishi.png" alt="">
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
				this.$nextTick(()=>{
					document.body.scrollTop=800
	            	document.documentElement.scrollTop=800
	            	this.currentTab = 1;
				})
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
		@include wh(100%,100%);
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