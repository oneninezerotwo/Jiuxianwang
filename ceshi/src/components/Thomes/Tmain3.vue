<template>
  <div v-if="arr">
    <div class="productList" ref="Tmain3">
      <input type="hidden" id="topicId" value="1165">
      <div class="tabs itemFlex">
        <a href="javascript:;" class="cular">爆款推荐</a>
      </div>
      <div class="swiper-container" id="qSlider_1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="content-slide" id="__home_baokuan">
              <ul class="proItem clearfix" id="zxList">
                <li v-for="(item,index) in arr" :key="index" @click="Toxianqin(item.commonProductInfo.pid)">
                  <a href="javascript:;">
                    <span class="tagList">
                      <i 
                      v-for="(a,indexs) in item.promo" :key="indexs"
                      :style="
                         {
                             backgroundColor:a.backColor
                             }
                      " v-text="a.name"></i>
                    </span>
                    <div class="ulImg">
                      <strong class="loadImg"></strong>
                      <span class="pic">
                        <img
                          :src="item.commonProductInfo.imgPath"
                          class="test-lazyload"
                        >
                      </span>
                    </div>
                    <span class="name">
                      <!-- <i class="jxzx"></i> -->
                      <span v-text="item.commonProductInfo.pname"></span>
                    </span>
                    <span class="price">
                      <strong class="priceInteger" goodid="49255">¥50.00</strong>
                      <del>¥99.00</del>
                    </span>
                  </a>
                </li>
                <van-button type="primary" size="large" @click="addarr">加载更多</van-button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[],
            page:2
            
        }
    },
   async created(){
       this.$lod.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
                });
    //    https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=2
        let {data} = await this.$axios.get('api/m_v1/statics/getzx.htm?topicId=1165&',{
                 params:{
                        pageNum:this.page
                      }
        })
        this.$lod.close();
        this.arr = data.promoList
                console.log(this.arr)
    },
    mounted(){
            window.addEventListener('scroll',this.handleScroll)
        },
    methods:{
          
        async  addarr(){
                this.$lod.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
                });
                  this.page++
            //    https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=2
                let {data} = await this.$axios.get('api/m_v1/statics/getzx.htm?topicId=1165&',{
                      params:{
                        pageNum:this.page
                      }
                })
                this.$lod.close();
                this.arr = [...this.arr,...data.promoList]
                        console.log(this.arr)
    },


          
          Toxianqin(id){
                this.$router.push({
                    path:`/Txianqingye?id=${id}`,
                    // query:'555'
                })
          }      
        }
}
</script>

<style scoped>
.productList {
    width: 100%;
    background: #fff;
}
.tabs {
    width: 100%;
    height: 33px;
    border-bottom: 1px solid #f1f2f2;
}
tabs a {
    line-height: 33px;
    height: 33px;
    text-align: center;
    color: #666666;
    font-size: 12px;
}
.cular {
    flex: 1;
    flex-basis: 0;
    max-width: 100%;
    display: block;
}
.swiper-container {
    margin: 0 auto;
    height: auto;
    position: relative;
    overflow: hidden;
    /* z-index: 1; */
}
.spikeBox, .swiper-container {
    width: 100%;
    font-size: 0;
    background: #fff;
}
.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    /* z-index: 1; */
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
}
.swiper-slide {
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    /* z-index: 100; */
    overflow: hidden;
    float: left;
    font-size: 0;
}
.proItem li {
    width: 49.5%;
    background: #fff;
    float: left;
    overflow: hidden;
    position: relative;
    padding: 20px 10px 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 0.5% 0.5% 0;
    overflow: hidden;
    /* z-index: 1; */
}
.clearfix:after {
    clear: both;
    display: block;
    content: "...";
    visibility: hidden;
    height: 0;
    font-size: 0;
}
.tabs a {
    line-height: 33px;
    height: 33px;
    text-align: center;
    color: #666666;
    font-size: 12px;
}
.proItem {
    width: 100%;
    background: #f3f5f6;
}
.proItem li a {
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
.tagList {
    position: absolute;
    height: 16px;
    display: block;
    left: 5px;
    top: 5px;
    font-size: 0;
    /* z-index: 100; */
}
.tagList i {
    display: block;
    text-align: center;
    height: 16px;
    line-height: 16px;
    border-radius: 3px;
    padding: 0 3px;
    font-size: 12px;
    color: #fff;
    font-style: normal;
    margin-right: 5px;
    float: left;
}
.ulImg {
    position: relative;
    display: block;
    overflow: hidden;
}

.proItem li .name {
    height: 32px;
    line-height: 16px;
    overflow: hidden;
    color: #252525;
    font-size: 0;
}
.proItem li .name, .proItem li .price {
    display: block;
}
.proItem li .name i {
    /* background: url(../images/jxzx.png) no-repeat; */
    background-size: 57px 16px;
    width: 59px;
    height: 16px;
    margin-right: 4px;
    display: inline-block;
    vertical-align: top;
    margin-top: 0.5px;
}
.proItem li .name span {
    font-size: 12px;
    line-height: 16px;
    vertical-align: top;
}
.proItem li .price {
    width: 108%;
    white-space: nowrap;
}
.proItem li .name, .proItem li .price {
    display: block;
}
.proItem li .priceInteger {
    font-size: 14px;
    color: #fc5a5a;
    font-weight: normal;
}
.proItem li del {
    color: #999;
    display: inline-block;
    font-size: 12px;
    margin-left: 5px;
}
.proItem li del {
    color: #999;
}
del {
    text-decoration: line-through;
}
.proItem li .pic img {
    width: 100%;
    height: auto;
}
</style>

