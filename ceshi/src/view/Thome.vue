<template>
    <div id="Thome" ref="Thome">
            <Tshousuo />
            <Tswipe />
            <Tjiulei />
            <Tguangao />
            <Tmain />
            <Tmaint />
            <Tmain3 />
           <Tfooter />
           <div v-show="bool" @click="goTop">
               <div class="toTop" id="toTop" style="display: block;"><i class="jx-sprite-icon"></i></div>
           </div>
    </div>
</template>
<script>
import Tshousuo from '../components/Thomes/Tshousuo'
import Tswipe from '../components/Thomes/Tswipe'
import Tjiulei from '../components/Thomes/Tjiulei'
import Tfooter from './Tfooter'
import Tguangao from '../components/Thomes/Tguangao'
import Tmain from '../components/Thomes/Tmain'
import Tmaint from '../components/Thomes/Tmaint'
import Tmain3 from '../components/Thomes/Tmain3'
export default {
    data(){
        return{
            Theigth:0,//滚动的值
            scrollTo:500,//判断距离
            // scrollTop:0,//滚动距离头部的距离
            bool:false
        }
    },
    created(){
            this.$store.state.title = '首页'
    },
    components:{
        Tfooter,
        Tshousuo,
        Tswipe,
        Tjiulei,
        Tguangao,
        Tmain,
        Tmaint,
        Tmain3
    },
    //  mounted(){
    //         window.addEventListener('scroll',this.handleScroll)
    //     },
        methods:{
    //         handleScroll () {
    //             // let herderHei = (this.$refs.Thome).scrollHeight//先获取盒子的高度
    //               let documenhei = document.documentElement.scrollTop//获取滚动的高度
    //             // this.$store.state.theight = herderHei-42
    //             this.Theigth =documenhei
    //         },
            goTop() {
                let timer =  setInterval(() => {
                    if (this.Theigth > 0) {
                    this.Theigth -= 100;
                    window.scrollTo(0, this.Theigth);
                    // console.log(22)
                    } else {
                         clearInterval(timer);
                    }
                }, 30);
        }
        },
        mounted(){
               //滚动事件
                  window.onscroll = ()=>{
                    this.Theigth = window.scrollY;//赋予滚动的距离
                    //变量scrollTop是滚动条滚动时，距离顶部的距离
                    // this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    if(this.Theigth>=this.scrollTo){
                        this.bool= true
                    }else{
                        this.bool=false
                    }
            }
        }
}
</script>

<style scoped>
#Thome{
    padding-bottom: 43px;
}
.toTop {
    width: 51px;
    height: 51px;
    position: fixed;
    bottom: 70px;
    right: 12px;
    z-index: 10000;
    display: none;
}
.toTop i {
    display: block;
    background-position: -93px -2px;
    background-size: 150px 55px;
    width: 100%;
    height: 100%;
}
.jx-sprite-icon {
    background: url(https://m.jiuxian.com/mjava_statics/images/home/jx-sprite.png) no-repeat;
    background-size: 200px 73px;
}
</style>

