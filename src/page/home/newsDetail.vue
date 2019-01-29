<template>
	<div class="newsDetail">
		<head-top headTitle="帕雷迪"></head-top>
		<div class="module">
			<div class="title df">
                <div class="n1">新闻资讯</div>
            </div>
            <div class="newContent"></div>
         
		</div>
	</div>	
</template>
<script>
import headTop from '../../components/header/head'	
	export default{
		data(){
			return{
				value1:0,
				showNew1:true,
				showNew2:false
			}
		},
		components:{
			headTop
		},
		created(){
			
		},
		mounted(){
			document.querySelector('body').style.backgroundColor = "#333";
			const param = this.$route.query.id;
			
		    $.ajax({
		url:'https://d.carbros.cn:4433/PalladiumServer/Site/GetActivityNewsInfo?Count='+ 2 + "&PageNumber=" + 1,
		type:'get',
		header:{'applications':'x-www-form-urlencoded'},
		success:(res)=>{
			var Content = res.QueryActivityNewsList[param].Content;
			$(".newContent").html(Content)
		$(".newContent img").css("width","7rem")
		   }
			})

		}
	}
</script>
<style lang="scss" scoped>
    @import '../../style/mixin';
	.newsDetail{
		@include wh(100%,100%);
        background-color:#333;
		.title{
            color:$gold;
            padding:0 0.3rem 0.3rem;
            justify-content:space-between;
            .n1{color:$gold;}
        }
        .module{
        	padding-bottom:0.2rem;
        	
        	
        	.newContent{
        		line-height:0.45rem;
        		padding-left:0.26rem;
        		padding-right:0.3rem;
        	}
        
        }
     
	}
</style>
