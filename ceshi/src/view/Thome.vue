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
     mounted(){
            window.addEventListener('scroll',this.handleScroll)
        },
        methods:{
            handleScroll () {
                let herderHei = (this.$refs.Thome).scrollHeight//先获取盒子的高度
                // let documenhei = document.documentElement.scrollTop//获取滚动的高度
                // if(documenhei>=herderHei){
                //         this.isok = true
                // }else{
                //      this.isok = false
                // }
                this.$store.state.theight = herderHei-42
                // console.log(this.$store.state.theight)
               
            },
        }
}
</script>

<style scoped>
#Thome{
    padding-bottom: 43px;
}
</style>

