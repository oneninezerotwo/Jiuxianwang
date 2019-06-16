<template>
    <div class="sousuo" ref="haha" :class="{
        'actvif':isok
    }">
       <div class="sousuoer">
           <div class="imgse">
           <img :src="logo" alt="">
       </div>
       <form action="/" class="search">
        <van-search placeholder="请输入搜索关键词" v-model="value" background=''/>
        
    </form>
       </div>
    </div>
</template>

<script>
import logo from '../../assets/jx-sprite.png'
export default {
    data(){
        return{
            value:'',
            logo,
            isok:false
        }
    },
    mounted(){
            window.addEventListener('scroll',this.handleScroll)
        },
        methods:{
            handleScroll () {
                let herderHei = (this.$refs.haha).offsetHeight//先获取盒子的高度
                // console.log(herderHei);
                
                let documenhei = document.documentElement.scrollTop//获取滚动的高度
                if(documenhei>=herderHei){
                        this.isok = true
                }else{
                     this.isok = false
                }
            },
        }
}
</script>


<style scoped>
.sousuo{
    /* height: 50px; */
 width: 100%;   
  
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
}
.actvif{
      background: orangered;
}
.search{
    flex: 8;
    width: 100%;
}
.sousuoer{
 display: flex;
}
.imgse{
    flex: 2
}
.imgse{
    width: 57px;
    height: 27px;
    border-radius: 3px;
    overflow: hidden;
    padding: 10px 0 10px 16px;
    /* opacity: 0.2; */
}
.imgse>img{
    display: inline-block;
    width: 253px;
    height: 89px;
    background-position: 0 0;
}

</style>
