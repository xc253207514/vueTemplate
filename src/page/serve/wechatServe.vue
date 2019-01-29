<template>
	<div class="wechatServe">
		<div class="banner">
			<div class="b1">电子质保查询</div>
			<div style="color:#fff">倾心臻护 尽享驰骋</div>
		</div>
		<wv-group title="">
		  <wv-input label="" placeholder="手机号/质保卡号/车牌号" v-model="queryCode"></wv-input>
		</wv-group>
		<wv-button type="primary" @click="query">点击查询</wv-button>
		<div class="tips" v-show="showChose">尊敬的用户，共查询到{{queryNumber}}次质保</div>		
		<div class="result">
			<wv-group title="" v-show="showChose">
			  <wv-cell title="当前质保" :value="curValue"  @click="showSheet"></wv-cell>
			</wv-group>
			<wv-group title="授权门店信息" v-show="show">
			  <wv-cell title="授权门店名称" :value="res.StoreName"></wv-cell>
			  <wv-cell title="授权门店电话" :value="res.StoreContact"></wv-cell>
			  <wv-cell title="授权门店编号" :value="res.STNo"></wv-cell>
			  <wv-cell title="授权门店地址" :value="res.StoreAddress"></wv-cell>
			</wv-group>
			<wv-group title="顾客信息" v-show="show">
			  <wv-cell title="顾客/联系人姓名" :value="res.CustomerName"></wv-cell>
			  <wv-cell title="顾客/联系人性别" :value="res.CustomerSex"></wv-cell>
			  <wv-cell title="顾客/联系人手机" :value="res.CustomerContact"></wv-cell>
			</wv-group>
			<wv-group title="车辆信息" v-show="show">
			  <wv-cell title="汽车品牌名称" :value="res.CarModel"></wv-cell>
			  <wv-cell title="汽车车身颜色" :value="res.CarColor"></wv-cell>
			  <wv-cell title="车牌号" :value="res.CarNumber" v-if="res.CarNumber !=''"></wv-cell>
			  <wv-cell title="车架号" :value="res.VIN" v-else></wv-cell>
			</wv-group>
			<wv-group title="贴膜信息" v-show="show">
			  <wv-cell title="施工详细日期" :value="res.SaleTime"></wv-cell>
			  <wv-cell title="膜卷产品名称" :value="res.ProductName"></wv-cell>
			  <wv-cell title="膜卷质保期限" :value="res.GP"></wv-cell>
			  <wv-cell title="膜卷批号" :value="res.BatchNumber"></wv-cell>
			  <wv-cell title="质保卡号" :value="res.ID" style="    font-size: 0.28rem;"></wv-cell>
			  <wv-cell title="贴膜部位" :value="res.SalePart"></wv-cell>	
			</wv-group>
		</div>
		<wv-actionsheet 
		  type="ios" 
		  :actions="actions" 
		  cancel-text="取消" 
		  v-model="sheetVisible"
		 />
	</div>
</template>
<style lang="scss" coped>
@import '../../style/mixin';
	.weui-actionsheet__cell{
		color:#000;
	}
	.weui-dialog__title{
		color:#000;
	}
	.wechatServe{
		.weui-cell__bd{
			p{color:#000}
		}
		.banner{
			@include bis('../../images/banner.png');
			@include wh(7.5rem,4.42rem);
			background-size:cover;
			text-align:center;
			@include sc(0.36rem,#fff);
		    padding-top: 1.7rem;	
			.b1{
				font-size:0.42rem;
				padding:0.1rem 0 ;
				color:#fff;
			}
		}
		input{
			@include sc(0.36rem,#000)
		}
		button{
			margin: 0.3rem 0;
		}
		.result{
			margin-bottom:0.2rem;
			.tip{
				color:#fff;
				padding:0.2rem 0 0.2rem 0.2rem;
				font-size:0.35rem;
			}
		}
		.tips{
				color:#000;
				padding:0.2rem 0 0.2rem 0.2rem;
				font-size:0.35rem;
			}
	}
</style>
<script>	
import {getQuality} from '../../config/data-serve'
import { Dialog } from 'we-vue'	
	export default{
		data(){
			return{
				queryCode:'',
				info:{},
				show:false,
				showChose:false,
				queryNumber:0,
				curValue:'请选择质保查看',
				actions:[],
				res:[],
				sheetVisible:false
			}
		},
		mounted(){
		},
		methods:{
			query(){
				getQuality(this.queryCode).then(res=>{
					console.log(res)
					this.showChose = true;					
					this.info = res;
					this.show = false;
					this.queryNumber = res.length;
					this.curValue = "请选择质保查看";
					var actions = [];
					res.forEach((item,index)=>{
						var action = {
							name:"第"+(index+1)+"次质保",
							method:()=>{
								this.curValue = "第"+(index+1)+"次质保";
								this.res = res[index];
								this.show = true;
							}
						}
						actions.push(action);
					})
					this.actions = actions;
				}).catch(err=>{
					Dialog({
					  title: '注意',
					  message: '查询码错误',
					  skin: 'ios'
					})
					this.showChose = false;	
					return;
				})
			},
			showSheet(){
				this.sheetVisible = true;
			}
		}
	}
</script>