<template>
	<div class="qimian">
		<head-top headTitle="经销商查询" serve="true"></head-top>
	
		<div class="module">
			<div class="title">
				<div class="n1">质保查询</div>
			</div>
			<div class="inputWrapper">
				<div class="put1">电子质保查询</div>
				<div class="put2">倾心臻护 尽享驰骋</div>
				<Input v-model="value" placeholder="车牌号/质保卡号/手机号"  search @on-search="search"/>
			</div>
			<div class="queryWrapper" :style="{display:query?'block':'none'}">
				<div class="selectTip">尊敬的用户，共查询到{{queryNumber}}次质保</div>
				<div v-for="(msg,index) in msgTotal" :key="index" class="selectBox">
					<div class="s1">第{{index+1}}次质保</div>
					<div class="selectCon">
						<Collapse accordion>
					        <Panel name="1">
					            授权门店信息
					            <table slot="content" border="1" cellspacing="0" >
					            	<tr>
					            		<td>授权门店名称：</td>
					            		<td>{{msg.StoreName}}</td>
					            	</tr>
					            	<tr>
					            		<td>授权门店电话：</td>
					            		<td>{{msg.StoreContact}}</td>
					            	</tr>
					            	<tr>
					            		<td>授权门店编号：</td>
					            		<td>{{msg.STNo}}</td>
					            	</tr>
					            	<tr>
					            		<td>授权门店地址：</td>
					            		<td>{{msg.StoreAddress}}</td>
					            	</tr>
					            </table>
					        </Panel>
					        <Panel name="2">
					            顾客信息
					            <table slot="content" border="1" cellspacing="0" >
					            	<tr>
					            		<td>顾客/联系人姓名：</td>
					            		<td>{{msg.CustomerName}}</td>
					            	</tr>
					            	<tr>
					            		<td>顾客/联系人性别：</td>
					            		<td>{{msg.CustomerSex}}</td>
					            	</tr>
					            	<tr>
					            		<td>顾客/联系人手机：</td>
					            		<td>{{msg.CustomerContact}}</td>
					            	</tr>
					            </table>
					        </Panel>
					        <Panel name="3">
					            车辆信息
					            <table slot="content" border="1" cellspacing="0" >
					            	<tr>
					            		<td>汽车品牌名称：</td>
					            		<td>{{msg.CarModel}}</td>
					            	</tr>
					            	<tr>
					            		<td>汽车车身颜色：</td>
					            		<td>{{msg.CarColor}}</td>
					            	</tr>
					            	<tr v-if="msg.CarNumber !=''">
					            		<td>车牌号</td>
					            		<td>{{msg.CarNumber}}</td>
					            	</tr>
					            	<tr v-else>
					            		<td>车架号</td>
					            		<td>{{msg.VIN }}</td>
					            	</tr>
					            </table>
					        </Panel>
					        <Panel name="4">
					            贴膜信息
					            <table slot="content" border="1" cellspacing="0" >
					            	<tr>
					            		<td>施工详细日期：</td>
					            		<td>{{msg.SaleTime}}</td>
					            	</tr>
					            	<tr>
					            		<td>膜卷产品名称：</td>
					            		<td>{{msg.ProductName}}</td>
					            	</tr>
					            	<tr>
					            		<td>膜卷质保期限：</td>
					            		<td>{{msg.GP}}</td>
					            	</tr>
					            	<tr>
					            		<td>膜卷批号：</td>
					            		<td>{{msg.BatchNumber}}</td>
					            	</tr>
					            	<tr>
					            		<td>质保卡号：</td>
					            		<td style="font-size: 0.2rem;">{{msg.ID}}</td>
					            	</tr>
					            	<tr>
					            		<td>贴膜部位：</td>
					            		<td>{{msg.SalePart}}</td>
					            	</tr>
					            </table>
					        </Panel>
					    </Collapse>
					</div>
				    <div class="tPrice">合计金额:{{msg.Price}}</div>
				</div>
			</div>
		</div>
		<!-- <div class="wrapper module">
			<div class="title">
				<div class="n1">经销商查询</div>
			</div>
			<div style="padding: 0.2rem 0.3rem">
				<Select v-model="pro" placeholder="请选择省份" @on-change="changePro">
			        <Option v-for="item in cityList" :value="item" :key="item">{{ item }}</Option>
			    </Select>
			    <div class="companyArr" v-for="pro in proList">
			    	<div class="name">{{pro.Name}}</div>
			    	<div class="contact">{{pro.Contact}}</div>
			    	<div class="add">{{pro.Province}}{{pro.City}}{{pro.County}}</div>
			    </div>
			</div>
		</div> -->
		<div class="loading" :style="{display:loading?'block':'none'}">玩命加载中...</div>
	</div>
</template>
<script>
import headTop from '../../components/header/head'
import footFt from '../../components/footer/footer'
import {getPro,getOper,getQuality} from '../../config/data-serve'	
	export default {
		name:'qimian',
		data(){
			return{
				value:'',
				msgTotal:[],
				query:false,
				loading:false,
				pro:'',
				cityList:[],
				proList:[
					// {Name:'缪玉强',Contact:'15800671370',Province:'安徽省',City:'上海市',County:'定远县'},
					// {Name:'缪玉强',Contact:'15800671370',Province:'安徽省',City:'上海市',County:'定远县'},
					// {Name:'缪玉强',Contact:'15800671370',Province:'安徽省',City:'上海市',County:'定远县'},
					// {Name:'缪玉强',Contact:'15800671370',Province:'安徽省',City:'上海市',County:'定远县'},
				],
				queryNumber:0
			}
		},
		computed:{

		},
		created(){
			document.getElementsByTagName('body')[0].style.backgroundColor = '#333';
		},
		mounted(){
			// this.city();
			getPro().then((res)=>{
				console.log(res)
				this.cityList = res;
			})
		},
		components:{
	        headTop,
	        footFt
	    },
	    methods:{
			changePro(e){
				getOper(e).then((res)=>{
					console.log(res);
					this.proList = res;
				})
			},
			search(e){
				this.loading = true;
				getQuality(e).then((res)=>{
					this.loading  = false;
					this.msgTotal = res;
					this.query = true;
					this.queryNumber = res.length;
				}).catch((err)=>{
					console.log(err)
					this.loading = false;
					this.query = false;
					this.loadingTip();
				})
			},
			loadingTip(){
				this.$Message.info('请输入正确的查询码！');
			}
	    }
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
            padding:0.4rem 0 1rem;
            font-size:0.3rem;       
            background-color:$bc;
             margin-top:0.2rem;
        }
        .inputWrapper{
			padding: 0.2rem 0.3rem;
			text-align:center;
			.put1{
				font-size:0.44rem;
				padding-bottom:0.2rem
			}
			.put2{
				font-size:0.34rem;
				padding-bottom:0.2rem
			}
        }
        .queryWrapper{
			margin:0 0 0.2rem;
        	.tPrice{
        		// background-color:#f7f7f7;
        		color:$gold;
        		padding:0.1rem 0.3rem 0 0;
        		text-align:right;
        	}
        	.selectTip{
        		background-color:#1a1a1a;
        		padding:0.16rem 0 0.16rem 0.3rem;
        	}
        	.selectBox{
        		margin-bottom:0.2rem;
        	}
        	.selectCon{
        		padding:0 0.3rem;
        	}
        	.s1{
        		padding:0.2rem 0.3rem;
        	}
        }
        table{
			border-collapse:collapse;
			tr{
				width:100%;
				td{
					border:1px solid #dcdcdc;
					color:#aaa;
					&:nth-of-type(1){
						@include wh(2.6rem,0.8rem);
						text-align:center
					}
					&:nth-of-type(2){
						width:56%;
						padding-left:0.1rem
					}
				}
			}
		}
		.companyArr{
			font-size:0.3rem;
			border-bottom:0.01rem solid #b6b6b6;
			.name{
				padding:0.18rem 0;
			}
			.contact{
				padding:0 0 0.18rem ;
			}
			.add{
				padding:0 0 0.18rem ;
			}

		}
	}
</style>