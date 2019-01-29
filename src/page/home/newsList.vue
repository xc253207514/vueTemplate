<template>
	<div class="newsDetail" >
		<head-top headTitle="帕雷迪"></head-top>
		<div class="module">
			<div class="title df">
                <div class="n1">新闻资讯</div>
            </div>
            
	<div class="newContent">
	<router-link :to="{path:'/newsDetail',query:{id:index}}" v-for="(n,index) in news" :key="index" class="newWrapper df">
	<img :src="n.BannerImg" alt="">
	<div class="desc">
	<div class="d1 ellipsis">{{n.Title}}</div>
	<div class="d2">{{n.CreateTime}}</div>
	<div class="d3">{{n.Intro.slice(0,15)}}...</div>
	</div>
	</router-link>
	</div>
       
		</div>
		<div v-show="ismore" class="more">{{more}}</div>
	</div>	
</template>
<script>

import headTop from '../../components/header/head'
import isReachBottom from './isReachBottom'
	export default{
		name:'newsList',
		data(){
			return{
				sc:"1",
				news:[],
				value1:0,
				showNew1:true,
				showNew2:false,
				hasMore:"",
				index:1,
				more:"",
				ismore:false
			}
		},
		components:{
			headTop
		},
		created(){
			
	window.addEventListener("scroll", this.reachBottom)
		
		this.queryInfo();
		},
		mounted(){
			
    
 
		},
	computed:{
	 
	},
	methods: {
		queryInfo(){
			 $.ajax({
			url:'https://d.carbros.cn:4433/PalladiumServer/Site/GetActivityNewsInfo?Count='+ 5 + "&PageNumber=" + this.index,
		type:'get',
		header:{'applications':'x-www-form-urlencoded'},
		success:(res)=>{
			console.log(res)
			 if(res.QueryActivityNewsList.length==0){
			 	this.ismore = true
		    	this.more = "到底啦..."
		    	setTimeout(()=>{
		    		this.ismore = false
		    	},800)
		    }else{
		     this.ismore = true
		    this.more = "加载中..."
		    setTimeout(()=>{
		    	this.ismore = false
		     },800)
			for(var i=0;i<res.QueryActivityNewsList.length;i++){
				res.QueryActivityNewsList[i].CreateTime = res.QueryActivityNewsList[i].CreateTime.split("T")[0]
			}
			this.news = res.QueryActivityNewsList
}		   
		}
	})
		},
		
		
 reachBottom() {
 	console.log(isReachBottom())
    if (isReachBottom()) {
    	console.log(this.news)
    	this.index++;
    	this.queryInfo();
    }
        } 
     },
		watch: {
//	   判断是否是需要滑动加载数据的页面
//	  investShow() {
//	    // 如果是需要滑动加载数据的页面，就绑定reachBottomg事件
//	    if(this.sc==1){
//	    	window.addEventListener("scroll", this.reachBottom)
//	    }else {
//	    // 否则移除
//	window.removeEventListener("scroll", this.reachBottom)
//	  }
//	
//	  } 
	}

	}
</script>
<style lang="scss" scoped>
    @import '../../style/mixin';
	.newsDetail{
		@include wh(100%,100%);
        background-color:#191919;
		.title{
            color:$gold;
            padding:0 0.3rem 0.3rem;
            justify-content:space-between;
            .n1{color:$gold;}
        }
       
        .module{
        	padding-bottom:0.2rem;
        	background-color:rgb(51, 51, 51);
        	
        	.newContent{
                padding-left:0.3rem;
        		padding-right:0.3rem;
                .d1{
                    width:5.0rem;
                    font-size:0.34rem;
                    padding-bottom:0.15rem;
                }
                .d2{
                   padding-bottom:0.3rem; 
                }
                .d3{
                   line-height:0.4rem;
                }
                img{
                    @include wh(2rem,1.54rem);
                    margin-right:0.2rem
                }
                .newWrapper{
                	 margin-bottom:0.6rem;
                }
              
            }
        	
        
        }
        .more{
        	position: fixed;
        	bottom: 0;
        	width: 100%;
        	height: 0.4rem;
        	background:#333333;
        	color:white;
        	text-align: center;
        	line-height: 0.4rem;
        	font-size:0.2rem;
        }
     
	}
</style>
