<template>
    <div id="swipe" ref="Tswipe">
    <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img   :src="image.img"/>
  </van-swipe-item>
</van-swipe>
</div>
</template>

<script>
export default {    
    data(){
        return{
            images:[
                {
                    img:'https://img08.jiuxian.com/bill/2019/0610/d88aa7176b174e47ac32484bdfc8a86b.jpg'
                },{
                    img:'https://img10.jiuxian.com/bill/2019/0610/003a25ff8c014dda9be49e8a368dcc31.jpg'
                },{
                    img:'https://img09.jiuxian.com/bill/2019/0606/86f359dbcb39468390db499d72c698fe.jpg'
                },{
                    img:'https://img10.jiuxian.com/bill/2019/0614/bdc3d9aa4d4a45edbc3380b9a8bc10d8.jpg'
                },{
                    img:'https://img08.jiuxian.com/bill/2019/0610/d88aa7176b174e47ac32484bdfc8a86b.jpg'
                }
            ],
        }
    },
    

}
</script>
<style scoped>
#swipe{
    min-height: 132px;
    height: 200px;
}
#swipe img{
    height: 200px;
}
</style>

