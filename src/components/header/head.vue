<template>
    <div>
        <header id='head_top' class="df">
            <section class="title_head ellipsis" v-if="headTitle">
                <span class="title_text">{{headTitle}}</span>
            </section>
            <section class="icon-menu" @click="value2 = true"></section>
            <!-- <Button type="primary">Open</Button> -->
            <Drawer title="帕雷迪" placement="right" :closable="false" v-model="value2">
                <CellGroup>
                     <Cell title="首页"  to="home" />
                     <Cell title="漆面保护膜"  to="qimian" />
                     <Cell title="汽车内饰膜"  to="neishi" />
                     <Cell title="服务支持"  to="serve" />
                     <Cell title="联系我们"  to="contact" />
                     <div class="logo"></div>
                </CellGroup>
                <!-- <Menu active-name="1-2" :open-names="['1']">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-analytics" />
                            帕雷迪
                        </template>
                        <MenuItem name="1-1">热点资讯</MenuItem>
                        <MenuItem name="1-2">品牌文化</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-filing" />
                            漆面保护膜
                        </template>
                        <MenuItem name="2-1">产品介绍</MenuItem>
                        <MenuItem name="2-2">养护指南</MenuItem>
                        <MenuItem name="2-2">案例分享</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-filing" />
                            汽车内饰膜
                        </template>
                        <MenuItem name="3-1">产品介绍</MenuItem>
                        <MenuItem name="3-2">养护指南</MenuItem>
                        <MenuItem name="3-2">案例分享</MenuItem>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="ios-filing" />
                            服务支持
                        </template>
                        <MenuItem name="4-1">电子质保查询</MenuItem>
                        <MenuItem name="4-2">经销商查询</MenuItem>
                    </Submenu>
                    <Submenu name="5">
                        <template slot="title">
                            <Icon type="ios-filing" />
                            联系我们
                        </template>
                        <MenuItem name="5-1">招商加盟</MenuItem>
                    </Submenu>
                </Menu> -->
                <div class="logo"></div>   
                <div class="tipImg"><img src="../../images/erweima.png" alt=""></div> 
                <div class="tip">微信扫一扫，关注我们</div>                            
            </Drawer>

        </header>
        <div class="serveBanner" v-if="serve"></div>
        <div class="banner" v-else></div>        
        <Row class="wayWrapper">
            <Col span="6"><Button to="/home"><i class="icon-home"></i>首页</Button></Col>
            <Col span="6"><Button to="/contact"><i class="icon-add"></i>招商加盟</Button></Col>
            <Col span="6"><Button to="/serve"><i class="icon-oper"></i>经销商查询</Button></Col>
            <Col span="6"><Button to="/serve"><i  class="icon-quality"></i>质保查询</Button></Col>
        </Row>
    </div>
</template>
<script>
    // import {mapState, mapActions} from 'vuex'
    export default {
    	data(){
            return{
                value2:false,
            }
        },
        mounted(){
            //获取用户信息
            // this.getUserInfo();

        },
        props: ['serve','headTitle'],
        computed: {
            // ...mapState([
            //     'userInfo'
            // ]),
        },
        methods: {
            // ...mapActions([
            //     'getUserInfo'
            // ]),
        },

    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    #head_top{
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        background-color:#080404;
        padding: 0.3rem;
        @include sc(0.3rem,#d6d6d6); 
        @include wh(100%, 1.2rem);
        @include fj;
        align-items:center;
    }
    .logo{
        @include bis('../../images/logo.png');
        @include wh(4.18rem,0.72rem)
        display: block;  
        position:fixed;
        bottom:1rem  
    }
    .tip{
        padding:0.1rem 0 0 0.45rem;
        color:#333;
        font-size:0.32rem;
    }
    .tipImg{
        padding: 1rem 0 0 0.5rem;
    }
    .icon-menu{
        @include bis('../../images/menu.png')
        @include wh(0.6rem,0.6rem)
    }
    .banner{
        margin-top:1.2rem;
        @include bis('../../images/banner.png')
        @include wh(100%,4.22rem)
    }
    .serveBanner{
        margin-top:1.2rem;
        @include bis('../../images/serveBanner.png')
        @include wh(100%,4.22rem)
    }
    .wayWrapper{
        margin-bottom:0.2rem;
        background-color:$bc;
        height:1.5rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
        text-align:center;
        .ivu-btn{
            background-color:$bc;
            border-color:$bc;
            outline:none
        }
        i{
            display:block;
            margin:0 auto 0.1rem;
        }
        .icon-home{
            @include bis('../../images/home.png')
            @include wh(0.53rem,0.53rem)
        }
        .icon-add{
            @include bis('../../images/hezuo.png')
            @include wh(0.53rem,0.53rem)
        }
        .icon-oper{
            @include bis('../../images/store.png')
            @include wh(0.53rem,0.53rem)
        }
        .icon-quality{
            @include bis('../../images/quality.png')
            @include wh(0.53rem,0.53rem)
        }
    }
    .title_head{
        text-align: center;
        .title_text{
            font-size:0.35rem;
            color: $gray;        
        }
    }
</style>
