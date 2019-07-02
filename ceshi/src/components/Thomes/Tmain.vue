<template>
  <div class="spikeBox" ref="Tmain">
    <div class="spikeTit">
      <h3>掌上秒拍</h3>
      <div class="lastTime" remaintime="16648">
        <span>距结束</span>
        <i class="hours" v-text="shi"></i>
        <em>:</em>
        <i class="minutes" v-text="feng"></i>
        <em>:</em>
        <i class="seconds" v-text="miao"></i>
      </div>
      <a id="__home_mp-more" href="https://m.jiuxian.com/m_v1/promote/qg?from=ad_03" class="more">
        <span>更多商品的你来抢！</span>
        <i class="jx-sprite-icon"></i>
      </a>
    </div>
    <div class="spikeWrap">
      <div
        class="swiper-container swiper-container-horizontal"
        id="tSlider_1"
        name="__home_mp-Item"
      >
        <ul class="swiper-wrapper" id="mp">
          <li
            class="swiper-slide swiper-slide-active"
            style="width: 111.143px; margin-right: 10px;"
            v-for="(item,index) in dats"
            :key="index"  
          >
            <a href="###">
              <div class="ulImg">
                <strong class="loadImg"></strong>
                <span class="pic">
                  <img
                    class="swiper-lazy swiper-lazy-loaded"
                    :src="item.proImg"
                  >
                </span>
              </div>
              <span class="name" v-text="item.proName"></span>
              <span class="price">¥{{item.proPrice}}</span>
              <del class="y-price">¥{{item.jxPrice}}</del>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// import { timeout } from 'q';
export default {
    data(){
        return{
                shi:'',
                feng:'',
                miao:'',
                times:null,
                dats:[],//数据
        }
    },
   async created(){
             let {data} = await this.$axios.get('api/m_v1/promote/qgajax.do?t=1560563577952&pagenum=1&tabnum=1',{

            })
           
            this.dats = data.killProList
    },
    methods:{
        //补零
         bu0(num) {
			if(num < 10) {
				return '0' + num;
			} else {
				return '' + num;
			}
		}

    },
       mounted(){
            this.times = setInterval(()=>{
                //先获取现在的时间
                var now =new Date();
                // console.log(now)
                //获取年月日时
                var year = now.getFullYear();
                var month = now.getMonth() + 1;
                var day = now.getDate();
                var hour = now.getHours();
                // console.log(year,month,day,hour)
                //设置场次时间
                var hour_num; //场次开始的  时刻
                if(hour % 2 == 0) {
                    hour_num = hour;
                } else {
                    hour_num = hour - 1;
                }
                var end_hour = hour_num + 2; //场次结束的 时刻
                //拼接年月日
                var endres = year + '-' + month + '-' + day + ' ';
                endres += end_hour + ':00:00'; //2019-02-18 12:00:00
                //得到结束的时间点
                var endTime = new Date(endres);
                //结束时间-当前时间  毫秒数→转化为秒数
                var time = parseInt((endTime - now) / 1000);
                //时分秒
                var showHour = this.bu0(parseInt(time / 60 / 60));
                var showMin = this.bu0(parseInt(time / 60) % 60);
                var showSec = this.bu0(time % 60);

                this.shi = showHour
                this.feng = showMin
                this.miao = showSec
                }, 1000)
          
    },
    destroyed(){
        clearInterval(this.times)
    }
}
</script>

<style scoped>
.spikeBox, .swiper-container {
    width: 100%;
    font-size: 0;
    background: #fff;
}
.spikeTit {
    height: 30px;
    position: relative;
    border-bottom: 1px solid #ededed;
}
.spikeWrap {
    padding: 5px 0;
}
.spikeTit .lastTime {
    margin-left: 75px;
    height: 16px;
    line-height: 16px;
    font-size: 0;
    padding: 7px 0;
}
.spikeTit h3 {
    position: absolute;
    font-size: 14px;
    font-family: "黑体";
    left: 10px;
    line-height: 30px;
    top: 0;
    font-weight: bold;
}

.spikeTit .more {
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 0;
    height: 30px;
    line-height: 30px;
    font-size: 0;
} 
.spikeTit .lastTime span {
    color: #666666;
    margin-right: 5px;
}
.lastTime em {
    margin: 0 2px;
    color: #666666;
}
.lastTime i {
    background: #858585;
    width: 16px;
    height: 16px;
    color: #fff;
    border-radius: 2px;
    text-align: center;
}
.spikeTit .lastTime span, .lastTime i, .lastTime em {
    display: inline-block;
    vertical-align: middle;
    font-style: normal;
    font-size: 12px;
}
.spikeTit .more {
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 0;
    height: 30px;
    line-height: 30px;
    font-size: 0;
}
.spikeTit .more span, .spikeTit .more i {
    display: inline-block;
    vertical-align: middle;
}
.spikeTit .more span {
    color: #999;
    font-size: 12px;
    margin-right: 5px;
}
.spikeTit .more i {
    background-position: -88px 0;
    width: 14px;
    height: 13px;
}
.spikeTit .more span, .spikeTit .more i {
    display: inline-block;
    vertical-align: middle;
}
.jx-sprite-icon {
    background: url(~@/assets/jx-sprite.png) no-repeat;
    background-size: 200px 73px;
}
.swiper-container {
    margin: 0 auto;
    height: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
                }
    

.spikeBox, .swiper-container {
    width: 100%;
    font-size: 0;
    background: #fff;
}
#tSlider_1 .swiper-wrapper {
    padding-left: 10px;
     overflow-x:scroll;
}
#tSlider_1 .swiper-wrapper::-webkit-scrollbar {
    display: none;

}
.swiper-slide, .swiper-wrapper {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
   
}
/* .swiper-container::-webkit-scrollbar {
                      display: none;
} */
.swiper-slide {
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 100;
    overflow: hidden;
    float: left;
    font-size: 0;
    width: 111.143px;
     margin-right: 10px;
}
#tSlider_1 .swiper-slide a {
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 2%;
    overflow: hidden;
}
.ulImg {
    position: relative;
    padding-bottom: 100%;
    display: block;
    overflow: hidden;
}
#tSlider_1 a .name {
    color: #252525;
    height: 32px;
    line-height: 16px;
    overflow: hidden;
    font-size: 12px;
}
#tSlider_1 a span {
    display: block;
}
#tSlider_1 a .price {
    color: #fc5a5a;
    font-size: 14px;
    line-height: 14px;
    margin-top: 5px;
}
#tSlider_1 a .y-price {
    display: block;
    color: #999999;
    font-size: 12px;
    line-height: 14px;
}
del {
    text-decoration: line-through;
}
.loadImg {
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 18;
    background: url(https://img07.jiuxian.com/2018/1224/fe6a3b540f89413cba364ae0285966834.jpg) no-repeat center center;
    background-size: 100%;
}
#tSlider_1 a .pic img {
    left: 0;
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: auto;
}
</style>

