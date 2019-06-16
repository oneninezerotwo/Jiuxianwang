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
           <div>
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
    //     // methods:{
        //     handleScroll () {
        //         let herderHei = (this.$refs.Thome).scrollHeight//先获取盒子的高度
                
        //         this.$store.state.theight = herderHei-42
        //     },
        // }
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

