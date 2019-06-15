<template>
  <div class="newsBox" id="__home_toutiao">
    <div class="news">
      <i>
        <img src="https://img09.jiuxian.com/bill/2018/0131/dc91033804f74f8c82bd8feec19ac915.jpg">
      </i>
      <div class="swiper-container newList swiper-container-vertical" id="newList">
        <div
          class="swiper-wrapper"
        
        >
             <van-swipe :autoplay="3000" vertical :height="120">
            <van-swipe-item v-for="(ab,index) in datas" :key="index" v-text="ab.title"></van-swipe-item>
          
            </van-swipe>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
                datas:[
                    {
                        title:'酒仙网线下实体火爆招商中'
                    },{
                        title:'国台限时特惠 买一送一'
                    },{
                        title:'古井贡狂欢节 全场满399返150'
                    },{
                        title:'酒鬼酒专场 领券下单更优惠'
                    },{
                        title:'酒仙网线下实体火爆招商中'
                    },{
                        title:'酒仙网线下实体火爆招商中'
                    },{
                        title:'国台限时特惠 买一送一'
                    }
                ],
                heig:'120px'
        }
    }
}
</script>

<style scoped>
.newsBox {
    padding: 8px 10px;
    background: #fff;
}
.news {
    height: 20px;
    position: relative;
}
#newList {
    margin-left: 105px;
    color: #252525;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    width: auto;
}
.swiper-container {
    margin: 0 auto;
    height: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
#newList {
    margin-left: 105px;
    color: #252525;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    width: auto;
}
.swiper-container {
    margin: 0 auto;
    height: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.news i {
    width: 83px;
    height: 16px;
    padding: 2px 10px 2px 0;
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    border-right: 1px solid #ededed;
    padding-right: 10px;
}
.news i img {
    width: 83px;
    height: 16px;
}
</style>


