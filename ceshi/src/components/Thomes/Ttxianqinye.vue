<template>
  <div id="box">
   <div>
      <div class="Txianqin">
      <van-swipe :autoplay="3000" indicator-color="red">
        <van-swipe-item>
          <img src="http://img06.jiuxian.com/2017/0330/d3701c1b19394cb899014b235fb995985.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://img08.jiuxian.com/2017/0330/e849d97dba344773a9fb2685e22fcd385.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://img08.jiuxian.com/2017/0330/e849d97dba344773a9fb2685e22fcd385.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="http://img08.jiuxian.com/2017/0330/e849d97dba344773a9fb2685e22fcd385.jpg" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <div class="detailsbd">
        <div class="detailsTil">
          <h4 style="margin: 0;">
            <img src="/mjava_statics/images/goods/jxzy.png" class="jxzy" style="display: true" />
            <span>38°扳倒井青花瓷700ml（双瓶装）</span>
          </h4>
        </div>
        <div class="detailsTip" style="margin: 0;">200万酒友品尝认证 700ml大容量，低度浓香</div>

        <div id="priceAndTag">
          <div class="detailsPrice clearfix">
            <p id="no_clubPrice" style="display: none">
              <span class="price">
                <em>￥</em>
                <b>38.00</b>
              </span>
            </p>
            <p id="has_clubPrice" style="display: none">
              <span class="price">
                <em>￥</em>
                <b>38.00</b>
              </span>
              <span class="clubPrice" id="club_price">
                <em>￥</em>
                <b>38.00</b>
                <s></s>
              </span>
            </p>
            <p id="is_club_price" style="display: none">
              <span class="clubPriceUser">
                <em>￥</em>
                <b>38.00</b>
                <s></s>
              </span>
              <del class="priceJX" id="promo_price_or_jxPrice"></del>
            </p>
            <p id="has_clubPrice_zy" style>
              <span class="price">
                <em>￥</em>
                <b>38.00</b>
              </span>
              <del class="priceJX" id="detailsPriceJXJ_jxj">
                <span>
                  酒仙价:
                  <s>58.00</s>
                </span>
              </del>
            </p>
            <span style="display:none" id="detailsPrice_buy_button" class="oPrice"></span>
          </div>
          <div class="clubDisc" style id="zy_club_desc">
            <i class="clubImg"></i>
            <span>会员下单再享98折,可省0.76元</span>
          </div>
          <div class="detailsPhone clearfix">
            <i class="pubIcon" id="tag" style="display: none;"></i>
            <i class="tagText" id="tagText" style="background-color: rgb(255, 168, 85);">抄底价</i>
            <em id="lessPcPrice" style="display: none;"></em>
            <strong id="limitLastTime" class="limitLastTime" time style="display: none;">
              剩余
              <span class="hours"></span>小时
              <span class="minus"></span>分
              <span class="seconds"></span>秒
            </strong>
          </div>
        </div>
      </div>
      <div>
        <div class="detailsbd" id="club_span" style="padding: 10px 10px 0px;">
          <div class="detailsDl">
            <a id="club_href" href="https://mmember.jiuxian.com/club/index">
              <div class="dt">
                <s class="clubPic"></s>
              </div>
              <div class="dd club_text">购买CLUB会员享受更多优惠</div>
              <i class="pubIcon arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="detailsbd" style="padding: 10px 10px 0;">
      <div class="detailsDl">
        <div class="detailsDl" id="promo" style="display: none">
          <div class="dt">优惠</div>
          <div class="dd"></div>
        </div>
        <div class="detailsDl" id="gifts" style="display: none;"></div>
        <div class="detailsDl">
          <div class="dt">金币</div>
          <div class="dd">
            <p>
              赠送
              <b class="coinNum">19</b>个金币
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="detailsbd" style="padding: 10px 10px 0;">
      <div class="detailsbd format">
        <div class="formatTitle">规格</div>
        <div class="formatList clearfix">
          <div class="formatItem">
            <a href="https://m.jiuxian.com/m_v1/goods/view/12170">38°扳倒井青花瓷700ml</a>
          </div>

          <div class="formatItem formatCur">
            <a href="https://m.jiuxian.com/m_v1/goods/view/88368">38°扳倒井青花瓷700ml（双瓶装）</a>
          </div>

          <div class="formatItem">
            <a href="https://m.jiuxian.com/m_v1/goods/view/12428">38°扳倒井青花瓷700ml（6瓶</a>
          </div>
        </div>
      </div>
    </div>
    <div class="detailsbd" style="padding: 10px 10px 5px; margin-bottom: 0;">
			<div class="detailsDl">
				<div class="detailsDl">
					<input type="hidden" id="goods_number" value="9418"> <input type="hidden" id="single_amount" value="-99">
					<div class="dt">数量</div>
					<div class="dd">
						<div class="rsCartItem">
							<div class="comAmount">
									<a id="decrease_number_goods" class="publicIcon minus on" href="javascript:;" onclick="chgNum(-1)">-</a> 
									<input type="text" value="1" id="prosum" onblur="chgNum()" onafterpaste="chgNum()"> 
									<a class="publicIcon plus " href="javascript:;" onclick="chgNum(1)" id="increase_number_goods">+</a>
							</div>
						</div>
					</div>
					<div id="numOver">
						<p class="limitNumTip" style="display: none">超出限购</p>
						<p class="numOver" id="number_over_goods" style="display: none">您选择的商品数量已超过库存</p>
					</div>
				</div>
			</div>

			<!-- 地址start -->
			<div id="detailAdresspopBj" class="detailAdresspopBj"></div>
			<div class="dOrder-city" id="_shdz">
				<strong class="pubIcon detailBtn"></strong>
				<div class="set-tit">送至</div>
				<a href="javascript:;" class="dOrder-city-sel"> <b pid="2">北京</b> <b pid="52">北京市</b><b pid="500">东城区</b></a>

			</div>
            <div class="depit_citydrp" style="display: none; height: 717px;">
                <h5 class="h5_dptctdrp">
                    <a href="javascript:;" pid="2"><em>北京</em><i></i></a>
                    <!-- 省 -->
                    <a href="javascript:;" pid="52"><em>北京市</em><i></i></a>
                    <!-- 市 -->
                    <a href="javascript:;" pid="500"><em>东城区</em><i></i></a>
                    <!-- 县 -->
                </h5>
                <ul class="dptctdrp_list dptctdrp_list2"><li style="padding:0px 0px;"><a href="javascript:;" pid="2">北京</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="3">安徽省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="4">福建省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="5">甘肃省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="6">广东省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="7">广西省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="8">贵州省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="9">海南省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="10">河北省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="11">河南省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="12">黑龙江省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="13">湖北省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="14">湖南省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="15">吉林省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="16">江苏省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="17">江西省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="18">辽宁省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="19">内蒙古省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="20">宁夏</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="21">青海省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="22">山东省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="23">山西省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="24">陕西省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="25">上海</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="26">四川省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="27">天津</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="28">西藏</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="29">新疆</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="30">云南省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="31">浙江省</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="32">重庆</a></li></ul>
                <!-- 省名 -->
                <ul style="display: none;" class="dptctdrp_list"><li style="padding:0px 0px;"><a href="javascript:;" pid="52">北京市</a></li></ul>
                <!-- 省会名 -->
                <ul style="display: none;" class="dptctdrp_list"><li style="padding:0px 0px;"><a href="javascript:;" pid="500">东城区</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="501">西城区</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="502">海淀区</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="503">朝阳区</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="504">崇文区</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="505">宣武区</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="506">丰台区</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="507">石景山区</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="508">房山区</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="509">门头沟区</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="510">通州区</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="511">顺义区</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="512">昌平区</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="513">怀柔区</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="514">平谷区</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="515">大兴区</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="516">密云县</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="517">延庆县</a></li><li style="padding:0px 0px;"><a href="javascript:;" pid="3451">其它区</a></li></ul>
                <!-- 县名 -->
            </div>
			<p class="addTip">有货，预计1-2天可到达</p>
			<!-- 地址end -->

			<!-- 运费说明 酒仙配送商品不展示运费-->
													<!-- 提示信息 -->
			<div class="detailsDl">
				<div class="detailsDl">
					<div class="dt" style="top: 1px;">提示</div>
					<div class="dd">
						<p id="coupon" style="">此商品不能使用优惠券</p>
						<p id="handBag"> 此商品无原厂手提袋 </p>
					</div>
				</div>
			</div>
		</div>

        <div class="detailsSecurityBox">
						<div class="detailsSecurity">
				 <span><i style="background: url('https://img09.jiuxian.com/bill/2016/1129/16d97e874a194b55b347ca1f63a89b58.png') no-repeat 0 0; background-size: 13px 13px;"></i>正品保障</span>
				 <span><i style="background: url('https://img07.jiuxian.com/bill/2016/1129/8efeb2432fcf4bd585dee2b6d3e800f1.png') no-repeat 0 0; background-size: 13px 13px;"></i>满100包邮</span>
				 <span><i style="background: url('https://img08.jiuxian.com/bill/2016/1129/c625b2a3daf94197810e69579d10e031.png') no-repeat 0 0; background-size: 13px 13px;"></i>7天退换</span>
				 <span><i style="background: url('https://img07.jiuxian.com/bill/2016/1129/311cd9577b674fa783222f1c9f373cfd.png') no-repeat 0 0; background-size: 13px 13px;"></i>酒仙发货&amp;售后</span>
							</div>
					</div>
   </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        arr:[]
    };
  },
    async created(){
                  var Gid = this.$route.query.id
                let {data} = await this.$axios.get(`api/m_v1/goods/detailPromo/${Gid}`,{

                })
                
                this.arr= data
                console.log(this.arr)
        },

};
</script>

<style  scoped>
#box {
  background-color: #f3f5f6;
}
.Txianqin {
  margin-top: 40px;
  text-align: center;
  background: white;
}
.Txianqin img {
  height: 320px;
}
.detailsbd {
  padding: 10px;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 8px;
}
.detailsTil {
  position: relative;
  margin-bottom: 8px;
}
.detailsTil h4 {
  margin-right: 70px;
  font-size: 0;
  color: #252525;
  line-height: 20px;
  display: inline-block;
}
.jxzy {
  width: 38px;
  height: 13px;
  vertical-align: top;
  margin: 2px 5px 0 0;
  display: inline-block;
}
.detailsTil h4 span {
  font-size: 15px;
}
.detailsTip {
  font-size: 13px;
  color: #fc5a5a;
}
.detailsPrice {
  height: 24px;
  line-height: 24px;
  font-size: 16px;
  padding: 0 0 5px 0;
  position: relative;
}
.clubDisc {
  height: 20px;
  line-height: 20px;
  margin-bottom: 5px;
  _display: inline;
  font-size: 0;
  font-family: "微软雅黑";
}
.detailsPhone {
  line-height: 16px;
  font-size: 12px;
  margin-bottom: 5px;
  position: relative;
}
.clearfix:after {
  clear: both;
  display: block;
  content: "...";
  visibility: hidden;
  height: 0;
  font-size: 0;
}
.detailsPrice .price {
  float: left;
  color: #fc5a5a;
}
.detailsPrice {
  height: 24px;
  line-height: 24px;
  font-size: 16px;
  padding: 0 0 5px 0;
  position: relative;
}
.detailsPrice .price em,
.detailsPrice .clubPriceUser em {
  font-size: 14px;
  float: left;
  position: relative;
  top: 2px;
  padding-right: 2px;
  font-style: normal;
}
.detailsPrice .price b,
.detailsPrice .clubPriceUser b {
  float: left;
  font-weight: normal;
  font-size: 19px;
}
.detailsPrice .price {
  float: left;
  color: #fc5a5a;
}
.detailsPrice .priceJX {
  float: left;
  font-size: 12px;
  color: #999;
  padding-left: 8px;
}
.detailsPrice {
  height: 24px;
  line-height: 24px;
  font-size: 16px;
  padding: 0 0 5px 0;
  position: relative;
}
.clearfix:after {
  clear: both;
  display: block;
  content: "...";
  visibility: hidden;
  height: 0;
  font-size: 0;
}
.clubDisc {
  height: 20px;
  line-height: 20px;
  margin-bottom: 5px;
  _display: inline;
  font-size: 0;
  font-family: "微软雅黑";
}
.clubDisc .clubImg {
  background: url(https://m.jiuxian.com/mjava_statics/images/goods/clubImg.png)
    no-repeat;
  background-size: 29px 11px;
  width: 29px;
  height: 11px;
  overflow: hidden;
  margin-right: 5px;
}
.clubDisc span,
.clubDisc .clubImg {
  display: inline-block;
  vertical-align: middle;
}
.clubDisc span {
  font-size: 12px;
  color: #666;
}
.clubDisc span,
.clubDisc .clubImg {
  display: inline-block;
  vertical-align: middle;
}
.detailsPhone {
  line-height: 16px;
  font-size: 12px;
  margin-bottom: 5px;
  position: relative;
}
.detailsPhone .tagText {
  display: block;
  float: left;
  height: 16px;
  line-height: 16px;
  padding: 0 4px;
  border-radius: 2px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  background-color: #fc6a6a;
  color: #fff;
  font-size: 11px;
  font-style: normal;
}
.pubIcon {
  background: url(https://m.jiuxian.com/mjava_statics/images/goods/catIcon.png)
    no-repeat 0 0;
  background-size: 150px;
  background-position: 0 -97px;
  width: 58px;
  height: 14px;
}
.detailsbd {
  padding: 10px;
  background-color: #fff;
  overflow: hidden;
}
.detailsbd {
  padding: 8px 10px;
  margin-bottom: 8px;
  background-color: #fff;
}
.detailsDl {
  width: 100%;
  position: relative;
  margin-bottom: 5px;
}
a {
  color: #666;
  text-decoration: none;
}
.detailsDl .dt {
  display: inline-block;
  line-height: 20px;
  height: 20px;
  font-size: 14px;
  color: #666;
  position: absolute;
  top: 1px;
  left: 0;
}
.detailsDl .dd {
  margin: 0 0 5px 54px;
  display: inline-block;
  color: #252525;
  width: 90%;
  font-size: 14px;
  padding-right: 10px;
  position: relative;
}

.detailCommentTil div i,
.detailsDl .arrow {
  background-position: -130px -40px;
  width: 10px;
  height: 13px;
  overflow: hidden;
  display: block;
  position: absolute;
  top: 16px;
  right: 5px;
}
.detailsDl .arrow {
  top: 5px;
}
.pubIcon {
  background: url(https://m.jiuxian.com/mjava_statics/images/goods/catIcon.png)
    no-repeat 0 0;
  background-size: 150px;
  background-position: 0 -97px;
  width: 58px;
  height: 14px;
}
.detailsDl .dt .clubPic {
  display: inline-block;
  width: 45px;
  height: 17px;
  background: url(https://m.jiuxian.com/mjava_statics/images/club2.png)
    no-repeat center center;
  background-size: 45px 17px;
  margin: 1px 3px 0 0;
}
.formatTitle {
    font-size: 14px;
    color: #666666;
    line-height: 20px;
}
.formatItem {
    height: 26px;
    line-height: 26px;
    background: #f5f5f5;
    -webkit-border-radius: 13px 13px 13px 13px;
    border-radius: 13px 13px 13px 13px;
    padding: 0 15px;
    float: left;
    font-size: 13px;
    color: #333333;
    margin: 0 10px 10px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.formatCur {
    line-height: 24px;
    border: 1px solid #fc5a5a;
    background: #ffeeee;
    padding: 0 14px;
}
.detailsDl {
    width: 100%;
    position: relative;
    margin-bottom: 5px;
}
input, select {
    vertical-align: middle;
}
.detailsDl .dt {
    display: inline-block;
    line-height: 20px;
    height: 20px;
    font-size: 14px;
    color: #666;
    position: absolute;
    top: 1px;
    left: 0;
}
.detailsDl .dd {
    margin: 0 0 5px 54px;
    display: inline-block;
    color: #252525;
    width: 90%;
    font-size: 14px;
    padding-right: 10px;
    position: relative;
}
.detailsDl .dd .rsCartItem {
    width: 75px;
    height: 23px;
    border: 1px solid #e8e8e8;
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    padding: 0;
}
.detailsDl .dd .comAmount {
    width: 75px;
    height: 22px;
    position: relative;
    padding: 0;
}
.detailsDl .dd .comAmount .minus.on, .detailsDl .dd .comAmount .plus.on {
    color: #999;
}
.detailsDl .dd .comAmount .minus {
    left: 0;
    border-right: 1px solid #e8e8e8;
}
.detailsDl .dd .comAmount a {
    width: 20px;
    height: 22px;
    position: absolute;
    top: 0;
    overflow: hidden;
    color: #666;
    cursor: pointer;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
}
.detailsDl .dd a {
    display: block;
}
.detailsDl .dd .comAmount input {
    display: inline-block;
    width: 75px;
    height: 22px;
    line-height: 22px;
    text-align: center;
}

input[type=submit], input[type=button], input[type=text], input[type=password] {
    -webkit-appearance: none;
    box-sizing: content-box;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    outline: none;
    font-family: Microsoft YaHei;
}
input, select {
    vertical-align: middle;
}
.detailsDl .dd .comAmount .plus {
    right: 0;
    border-left: 1px solid #e8e8e8;
}
#numOver .numOver {
    display: none;
    color: #ff3938;
    clear: both;
    margin-left: 36px;
}
.detailAdresspopBj {
    height: 100%;
    position: fixed;
    top: 0;
    overflow: hidden;
    width: 100%;
    background-color: #000;
    opacity: 0.8;
    -moz-opacity: 0.8;
    filter: alpha(opacity=80);
    left: 0;
    z-index: 9999;
    display: none;
}
.dOrder-city {
    padding: 10px 0 0;
    color: #252525;
    height: 24px;
    position: relative;
    z-index: 3;
}
.dOrder-city .detailBtn {
    background-position: -130px -40px;
    display: block;
    height: 13px;
    overflow: hidden;
    position: absolute;
    right: 5px;
    top: 18px;
    width: 10px;
}
.pubIcon {
    background: url(https://m.jiuxian.com/mjava_statics/images/goods/catIcon.png) no-repeat 0 0;
    background-size: 150px;
    background-position: 0 -97px;
    width: 58px;
    height: 14px;
}
.set-tit {
    float: left;
    line-height: 24px;
    color: #666;
}
.dOrder-city .dOrder-city-sel {
    color: #252525;
    float: left;
    height: 22px;
    line-height: 22px;
    margin-left: 10px;
    display: inline-block;
    background: #fff;
    padding-left: 5px;
    position: relative;
    z-index: 1;
    display: block;
    width: 80%;
}
.dOrder-city .dOrder-city-sel b {
    color: #252525;
    font-weight: normal;
    padding-right: 5px;
    vertical-align: middle;
}
.addTip {
    color: #fc5a5a;
    margin-left: 42px;
    font-size: 12px;
    padding-bottom: 10px;
}
.depit_citydrp {
    padding: 10px;
    width: 80%;
    position: fixed;
    overflow: hidden;
    right: 0;
    top: 0;
    background: #fff;
    z-index: 100001;
}
.detailsSecurityBox {
    padding: 10px 12px;
    border-bottom: 1px solid #e2e2e2;
    margin-bottom: 8px;
    background: #f9f9f9;
}
.detailsSecurity {
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    position: relative;
}
.detailsSecurity span {
    float: left;
    color: #666;
    font-size: 12px;
    display: block;
    height: 20px;
    margin-right: 15px;
}
.detailsSecurity {
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    position: relative;
}
.detailsSecurity i {
    width: 13px;
    height: 13px;
    display: block;
    float: left;
    margin: 3px 3px 0 0;
}
</style>
