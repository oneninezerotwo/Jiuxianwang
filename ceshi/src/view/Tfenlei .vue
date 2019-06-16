<template>
  <div class="feilei">
    <div v-show="isok">
      <div class>
        <van-search placeholder="畅饮618：每满199减20元" v-model="value" @click="isox()"/>
      </div>
      <div class="contentFrame" id="__fenlei_fenlei">
        <ul class="list clearfix">
          <li class="bj first">
            <a href="javascript:;">
              <i></i>
              <span>白酒</span>
            </a>
          </li>
          <li class="ptj">
            <a href="javascript:;">
              <i></i>
              <span>葡萄酒</span>
            </a>
          </li>
          <li class="yj">
            <a href="javascript:;">
              <i></i>
              <span>洋酒</span>
            </a>
          </li>
          <li class="pj first">
            <a href="javascript:;">
              <i></i>
              <span>整箱购</span>
            </a>
          </li>
          <li class="bjj">
            <a href="javascript:;">
              <i></i>
              <span>老酒</span>
            </a>
          </li>
          <li class="jj">
            <a href="javascript:;">
              <i></i>
              <span>清仓特卖</span>
            </a>
          </li>
          <li class="sIcon1 first">
            <a href="javascript:;">
              <i></i>
              <span>海外直采</span>
            </a>
          </li>
          <li class="sIcon2">
            <a href="javascript:;">
              <i></i>
              <span>精美大坛</span>
            </a>
          </li>
          <li class="sIcon3">
            <a href="javascript:;">
              <i></i>
              <span>红酒整箱</span>
            </a>
          </li>
          <li class="sIcon4 first">
            <a href="javascript:;">
              <i></i>
              <span>值得买</span>
            </a>
          </li>
          <li class="sIcon5">
            <a href="javascript:;">
              <i></i>
              <span>销量排行</span>
            </a>
          </li>
          <li class="sIcon6">
            <a href="javascript:;">
              <i></i>
              <span>礼尚往来</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="pubSearcHeader" v-show="!isok">
        <div class="headSearch clearfix">
          <a class="back sIcon" id="backList" href="javascript:;" @click="isox()"></a>
          <div class="searchInput">
            <em class="sIcon"></em>
            <input id="search_input" type="search" value placeholder="畅饮618：每满199减20元" ref="focusss">
            <span class="sIcon" id="search_clear" style="display: none;"></span>
          </div>
          <a class="searchBtn" id="searchBtn" href="javascript:;">搜索</a>
        </div>
        <div class="hsContent" id="hsContent">
          <div class="hs-wrap hotWords" id="hotwordId">
            <div class="hs-title">
              <em class="sIcon"></em>
              <span>热门搜索</span>
            </div>
            <div class="hs-list" id="hot_keyword">
              <span
                style="color: #fc5a5a"

              >国台</span>
              <span style="color: #fc5a5a">茅台</span>
              <span
                style="color: #fc5a5a"
                
              >酒鬼酒</span>
              <span style="color: #666666">五粮液</span>
              <span style="color: #666666">剑南春</span>
              <span style="color: #666666">泸州老窖</span>
              <span style="color: #666666">汾酒</span>
              <span style="color: #666666">洋河</span>
              <span style="color: #666666">水井坊</span>
              <span style="color: #666666">古井贡</span>
              <span style="color: #666666">郎酒</span>
              <span style="color: #666666">西凤</span>
              <span style="color: #666666">董酒</span>
              <span style="color: #fc5a5a">茉莉花</span>
              <span style="color: #666666">奔富</span>
              <span style="color: #666666">马爹利</span>
              <span style="color: #666666">拉菲</span>
              <span style="color: #666666">人头马</span>
              <span style="color: #666666">黄尾袋鼠</span>
              <span style="color: #666666">丁戈树</span>
              <span style="color: #666666">美人鱼</span>
              <span style="color: #666666">克拉克</span>
            </div>
          </div>
          <div class="hs-wrap historyWords" id="hiswordId">
            <div class="hs-title">
              <em class="sIcon"></em>
              <span>最近搜索</span>
              <b class="sIcon clear" id="historyClear" style="display: none;"></b>
            </div>
            <div class="hs-list" id="history_keyword"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      isok: true
    }
  },
  created(){
         if(this.isok==false){
            this.focuss()
         }
  },
  methods: {
    isox() {
      this.isok = !this.isok;
      if(this.isok==false){
        this.$nextTick(()=>{   //正确写法
       this.$refs.focusss.focus();
      //  console.log(this.$refs.focusss)
      })
      }
    },
    
  }
};
</script>

<style scoped>
.feilei {
  margin-top: 44px;
}
.tangxing {
  display: flex;
  position: relative;
}
.headSearch .back {
  display: block;
  width: 33px;
  height: 40px;
  background-position: -3px 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 101;
  flex: 1;
}
.headSearch .searchBtn {
  display: block;
  width: 54px;
  height: 40px;
  line-height: 40px;
  color: #666;
  font-size: 14px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  flex: 1;
}
.search {
  flex: 8;
}
.clearfix:after {
  clear: both;
  display: block;
  content: "...";
  visibility: hidden;
  height: 0;
  font-size: 0;
}
.contentFrame .list li {
  width: 33%;
  height: 80px;
  float: left;
  border-left: 1px solid #f6f6f6;
  border-bottom: 1px solid #f6f6f6;
}
.contentFrame .list li a {
  display: block;
}
.contentFrame .list li i {
  background: url(~@/assets/selectIcon0314.png) no-repeat;
}
.contentFrame .list .bj i {
  background-position: 0 0;
}
.contentFrame .list li i {
  width: 36px;
  height: 36px;
  display: block;
  margin: 10px auto;
}
.contentFrame .list li span {
  display: block;
  text-align: center;
}
.contentFrame .list .bj i {
  background-position: 3px 0;
}
.contentFrame .list .ptj i {
  background-position: -78px 0px;
}
.contentFrame .list .yj i {
  background-position: -163px 1px;
}
.contentFrame .list .pj i {
  background-position: 0 -70px;
}
.contentFrame .list .bjj i {
  background-position: -84px -70px;
}
.contentFrame .list .jj i {
  background-position: -165px -70px;
}
.contentFrame .list .sIcon1 i {
  background-position: 0 -141px;
}
.contentFrame .list .sIcon2 i {
  background-position: -84px -141px;
}
.contentFrame .list .sIcon3 i {
  background-position: -163px -141px;
}
.contentFrame .list .sIcon4 i {
  background-position: 0 -217px;
}
.contentFrame .list .sIcon5 i {
  background-position: -84px -218px;
}
.contentFrame .list .sIcon6 i {
  background-position: -165px -217px;
}
a {
  text-decoration: none;
  color: #333;
}
.pubSearcHeader {
  background-color: #fafafa;
  position: relative;

}
.headSearch {
  height: 40px;
  border-bottom: 1px solid #e4e4e4;
  padding: 0 54px 0 33px;
  display: flex;
  background-color: #fafafa;
  position: relative;
  z-index: 100;
  overflow: hidden;
}
.headSearch .back {
  display: block;
  width: 33px;
  height: 40px;
  background-position: -3px 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 101;
}
.hsContent .hs-wrap {
    padding-top: 15px;
}
.hs-title span {
    vertical-align: middle;
    font-size: 15px;
    color: #252525;
}
.sIcon {
  background: url(~@/assets/searchIcon.png) no-repeat;
  background-size: 120px 40px;
  cursor: pointer;
}
.searchInput {
  margin: 6px 0;
  position: relative;
}
.headSearch .tabPic,
.headSearch .searchBtn {
  display: block;
  width: 54px;
  height: 40px;
  line-height: 40px;
  color: #666;
  font-size: 14px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
}
.searchInput em {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-position: -41px -18px;
  position: absolute;
  left: 10px;
  top: 8px;
}
.sIcon {
  background: url(~@/assets/searchIcon.png) no-repeat;
  background-size: 120px 40px;
  cursor: pointer;
}
.searchInput input,
.searchInput b {
  display: inline-block;
  width: 100%;
  height: 28px;
  font-size: 12px;
  color: #333;
  line-height: 28px;
  border: none;
  background-color: #ececec;
  border-radius: 5px;
  padding: 0 30px;
}

input,
select {
  vertical-align: middle;
}
.searchBtn {
  flex: 2;
}
.back {
  flex: 2;
}
.searchInput {
  flex: 8;
}
.van-search .van-cell .van-search__content {
  background-color: #ececec;
}
.searchFrame .hsContent, .searchFrame .automatedwords {
    padding-top: 81px;
}
.hsContent, .automatedwords {
    width: 100%;
    
    overflow-y: auto;
    background-color: #fff;
    padding-top: 41px;
    position: absolute;
    top: 0;
 
}
.hs-title {
    line-height: 24px;
    font-size: 0;
    vertical-align: middle;
    padding: 0 12px;
    position: relative;
    width: 100%;
}
.hotWords .hs-title em {
    background-position: -62px 0;
}
.hs-title em {
    vertical-align: middle;
    width: 16px;
    height: 16px;
    margin-right: 8px;
}
.hs-title span{
    width: 60px;
    z-index: 3;
}
.hs-title {
    line-height: 24px;
    font-size: 0;
}
.sIcon {
    background: url(~@/assets/searchIcon.png) no-repeat;
    background-size: 120px 40px;
    cursor: pointer;
}
hs-title span {
    vertical-align: middle;
    font-size: 15px;
    color: #252525;
}
.hs-title * {
    display: inline-block;
}
.hotWords .hs-list {
    padding: 12px 10px 0 20px;
}
.hotWords .hs-list span {
    display: inline-block;
    padding: 0 12px;
    height: 23px;
    line-height: 23px;
    color: #666;
    font-size: 13px;
    margin: 0 10px 16px 0;
    background-color: #f4f4f4;
    border-radius: 12px;
    cursor: pointer;
}
historyWords .hs-title em {
    background-position: -84px 0;
}
.hs-title em {
    vertical-align: middle;
    width: 16px;
    height: 16px;
    margin-right: 8px;
}
.hs-title * {
    display: inline-block;
}
.sIcon {
    background: url(~@/assets/searchIcon.png) no-repeat;
    background-size: 120px 40px;
    cursor: pointer;
}
</style>

