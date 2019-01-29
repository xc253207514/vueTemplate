<template>
  	<div class="homes">
        <head-top headTitle="帕雷迪"></head-top>
        <div class="news module">
            <div class="title df">
                <div class="n1">新闻资讯</div>
                 <div class="nav" @click="more">更多</div>
                <Icon type="ios-arrow-forward"/>
            </div>
            <div class="news-content">
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
        <div class="video module">
            <div class="title df">
                <div class="n1">品牌视频</div>
                <!-- <Icon type="ios-arrow-forward"/> -->
            </div>
            <video src="https://quantum-1255467040.cos.ap-shanghai.myqcloud.com/miniProgram/baoshijie.mp4" controls="controls"></video>
        </div>
        <div class="company module" ref="company">
            <div class="title df">
                <div class="n1">企业文化</div>
                <!-- <Icon type="ios-arrow-forward"/> -->
            </div>
            <ul>
                <li><img src="../../images/culture.png" alt=""></li>
                <li>骓熠（上海）新材料科技有限公司，成立于2018年8月上海，注册资金人民币1，000万。作为美国恒昼科技公司的帕雷迪（Palladium）品牌中国市场的国家代理商，向中国的高端车主提供一站式汽车膜解决方案。</li>
                <li>使命 : 成为服务高端汽车集团在后市场业务的最佳战略合作伙伴</li>
                <li>愿景 : 持续为企业 , 汽车集团及客户创造多利三赢的商业文化与契机</li>
                <li>宣言 : 倾心臻护, 尽情驰骋</li>
            </ul>
        </div>
        <div class="product module">
            <div class="title df">
                <div class="n1">产品介绍</div>
            </div>
            <div class="tabs df">
                <div class="tab" :class="[currentTab == 0?'on':'']" @click="currentTab = 0">制造商</div>
                <div class="tab" :class="[currentTab == 1?'on':'']" @click="currentTab = 1">漆面保护膜</div>
                <div class="tab" :class="[currentTab == 2?'on':'']" @click="currentTab = 2">内饰保护膜</div>
                <!-- <div class="tab" >汽车安全膜</div> -->
            </div>
            <div class="pr" v-if="currentTab == 0">
                <img src="../../images/car1.jpg" alt="">
                <dl>
                    <dt>制造商————REFLEEK</dt>
                    <dd>恒昼科技(英文缩写Reflek)创立于1997年美国加州的鲍德温公园市(Baldwin Park)，一直以来都是世界上磁控溅射行业的先驱者。最初公司是为了生产磁控溅射软体电路和微传感器基材而设立，公司拥有多项此类专利技术。2004年Reflek恒昼科技购买了世界最顶尖级磁控溅射机器两台，将其占地一万两千平米的工厂总部设立在美国亚利桑那钱德勒市，从而进一步扩展自己的业务范围，进入了磁控金属隔热膜及磁控功能膜的新领域。</dd>
                    <dd>从2004年开始，Reflek恒昼科技专注于不同种类金属隔热原膜的开发及生产，将其不同金属磁控基材，稳定的供应给一些美国太阳膜制造商，公司的薄膜业务也得到了长足发展。2010年，恒昼科技开发了成品磁控膜的生产，并致力于漆面保护膜的研发，在经过了最初两年的市场培育期，在2013年有了飞跃发展。目前产品已经在包括美国，加拿大，墨西哥，新加坡，中国，沙特，阿联酋，阿曼，科威特，俄罗斯等24个国家和地区进行销售。</dd>
                </dl>
            </div>
            <div class="pr" v-if="currentTab == 1">
                <img src="../../images/car2.jpg" alt="">
                <dl>
                    <dt>漆面保护膜</dt>
                    <dd>漆面保护膜，英文：Paint Protection Film缩写为：PPF，又称“隐形车衣”，是以TPU为基材的一种软体膜材料，主要运用是贴在汽车车漆急大灯表面。TPU材料具有强韧性，它能保护车体各部位烤漆表面免遭剥落、划伤，并防止烤漆表面生锈及老化发黄。同时漆面保护膜还具有防碎石碰撞摩擦和抗击紫外线照射的能力，由于其卓越的材料延展性、透明性及曲面适应性，装贴后绝不影响车身外观，现在它已经被越来越多的汽车生产厂商所实用。</dd>
                    <dd>美国PALLADIUMTM帕雷迪汽车保护膜产品源自美国，是众多车主全方面保护其爱车的终极选择。PALLADIUMTM帕雷迪汽车保护膜的产品线目前包含了雅典娜（Athena）汽车漆面保护膜系列、维纳斯（Aphrodite）汽车内饰保护膜。让您的爱车避免与路上碎石，杂物等对汽车外表面造成的损伤，在车子小碰擦的情况下，最大限度保护原厂车漆</dd>
                </dl>
            </div>
            <div class="pr" v-if="currentTab == 2">
                <img src="../../images/car3.jpg" alt="">
                <dl>
                    <dt>内饰保护膜</dt>
                    <dd>帕雷迪汽车内饰保护膜为您爱车的桃木、镀铬内饰提供全方位的保护，让其在用车过程中免受不经意的各种划伤和划痕，同时大大提高内饰亮度。若您的爱车内饰已经有了岁月的痕迹，帕雷迪汽车内饰保护膜的柔性胶水可以完美的修复桃木、镀铬饰面上的细小划痕，让你的爱车内饰焕然一新。</dd>
                    <dd>美国PALLADIUMTM帕雷迪汽车保护膜产品源自美国，是众多车主全方面保护其爱车的终极选择。PALLADIUMTM帕雷迪汽车保护膜的产品线目前包含了雅典娜（Athena）汽车漆面保护膜系列、维纳斯（Aphrodite）汽车内饰保护膜。让您的爱车避免与路上碎石，杂物等对汽车外表面造成的损伤，在车子小碰擦的情况下，最大限度保护原厂车漆</dd>
                </dl>
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
        <!-- <foot-ft></foot-ft> -->
    </div>
</template>

<script>
import Swiper from '../../plugins/swiper.min'
import headTop from '../../components/header/head'
import new1Pic from '../../images/news1_content.jpg'
export default {
    data(){
        return{
            news:[

            ],
            currentTab:0,
            scroll:'',
        }
    },
    created(){
    	 $.ajax({
			url:'https://d.carbros.cn:4433/PalladiumServer/Site/GetActivityNewsInfo?Count='+ 2 + "&PageNumber=" + 1,
			type:'get',
			header:{'applications':'x-www-form-urlencoded'},
			success:(res)=>{
				console.log(res)
				for(var i=0;i<res.QueryActivityNewsList.length;i++){
					res.QueryActivityNewsList[i].CreateTime = res.QueryActivityNewsList[i].CreateTime.split("T")[0]
				}
				this.news = res.QueryActivityNewsList
			
			}
		})
    },
	mounted(){
        if(this.$route.query.type == 'wechat'){
            document.body.scrollTop=800
            document.documentElement.scrollTop=800
        }
    },
    components:{
        headTop,
    },

    computed:{

    },

    methods:{
    	more(){
    		this.$router.push("/newsList")
    	}
    },
    watch:{
    }
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .homes{
        height:100%;
        background-color:#333;
        .title{
            color:$gold;
            padding:0 0.3rem 0.3rem;
            display:flex;
            align-items: center;
            justify-content:space-between;
            .n1,.nav{color:$gold;}
            .nav{
            	margin-top:-0.05rem;
            	margin-right:-4.7rem;
            }
        }
        .news{
            .newWrapper{
                /*@include wh(100%,auto);*/
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
                &:not(:last-child){
                    margin-bottom:0.4rem;                
                }
            }
        }
        .video{
            margin-top:0.2rem;
            video{
                @include wh(100%,auto)
            }
        }
        .company{
            ul{
                padding:0rem 0.3rem 0.2rem;
                text-indent:16px;
                li{
                    line-height:0.4rem;
                    img{
                        @include wh(93%,auto)
                    }
                }
            }
        }
        .product{
            .pr{
                img{
                    @include wh(100%,auto)
                }
                dl{
                    padding:0.2rem 0.3rem 0.2rem;
                    dt{font-size:0.4rem;padding-bottom:0.2rem}
                    dd{
                        line-height:0.45rem;
                    }
                }
            }
        }
        .tabs{
            .tab{
                @include wh(33%,0.6rem);
                text-align:center;
            }
            .on{
                color:$gold;
                border-bottom:0.01rem solid $gold;
            }
        }
    }
</style>
