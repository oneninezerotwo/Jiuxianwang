<template>
  <div id="fl">
    <div class="topCatTip clearfix">
      <div class="topCatTipBd">
        <i class="pubIcon"></i>自营商品实付满100元免运费，偏远地区满500免运费
      </div>
    </div>
    <div id="cart_container" style="margin-top: 0px;">
      <input type="hidden" id="platfrom_cart" value="wap">
      <input type="hidden" id="stopDeliveryTitle" value>
      <input type="hidden" id="noStockGiftsIds" value>
      <div class="cartWrap">
        <div class="pucTitle">
          <label>
                            <i id="-1" class="pubIcon" data-type="checkbox"
                            :class="
                                    isok?'tureIcon':'falseIcon'
                                "
                               
                            ></i>
                        </label>
          <span class="jxzy">
            <img src="https://mcart.jiuxian.com/statics/images/jx.png">
          </span>
          <span class="title">酒仙自营</span>
          <span class="cartCoupons" productids="21980">
            领券
            <b class="pubIcon"></b>
          </span>
        </div>

<!--  -->
        <ul class="catShopList" v-for="(item,index) in arr" :key="index">
          <div class="pubWrap" v-if="item.rennitiao&&item.rennitiao">
            <div class="pubBox cuxiao1">
              <span class="pubTag" style="color:#6699ff;border: 1px solid #6699ff;" v-if="item.rennitiao" v-text="item.rennitiao"></span>
              <a
                href="avascript:void(0)"
                class="pubLink fill"
                style="margin-left: 49px;"
              >
                <span style="float: left;" v-if="item.zaigou" v-text="item.zaigou"></span>
                <i class="promIcon promLinkIconBlak"></i>
              </a>
            </div>
          </div>
          <li>
            <div class="catShopCont" cart_unit="item-21980">
              <a href="javascript:void(0)" class="cartDel" cart_unit="item-21980" @click="elepase(index)">|&nbsp;删除</a>
              <label status="checkStatus">
                <input type="checkbox" name="catCheck" data-type="checkbox">
                <i class="pubIcon" data-type="checkbox" :class="
               item.show?'tureIcon':'falseIcon'
                "
                 @click="acticf(index)"
                ></i>
              </label>
              <div class="catShopInfo clearfix">
                <div class="catImg catImgThr">
                  <a href="avascript:void(0)">
                    <img
                      :src="item.img"
                      alt
                    >
                  </a>
                </div>
                <div class="catInfo">
                  <div class="price">
                    <h4 class="twoLineEllipsisCart">
                      <a href="avascript:void(0)">
                        <span v-text="item.title"></span>
                      </a>
                    </h4>
                    <p>
                      <span>¥{{item.zonjia}}</span>
                    </p>
                    <div class="rsCartItem">
                      <div class="comAmount">
                        <a class="publicIcon minus" @click=" reducenum(index)">-</a>
                        <input class="inpVal" type="text"  v-model="item.num">
                        <a class="publicIcon plus" @click="addnum(index)">+</a>
                      </div>
                    </div>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>



      </div>
      <div class="catBomAllCheak">
        <label data-type="checkallcli">
          <i class="pubIcon" data-type="checkall" :class="
              isos?'tureIcon':'falseIcon'
          " 
          @click="addactif"
          ></i>
          <span>全选</span>
        </label>
        <div>
          <p>
            <span>合计：</span>
            <em>￥{{zonjia}}</em>
          </p>
          <p class="colorTxt">
            <span>优惠：</span>
            <strong>￥0.00</strong>
          </p>
        </div>
        <span>
          <a href="javascript:void(0)" class="delBtn">去结算&nbsp;(4)</a>
        </span>
      </div>
      <div class="cartMask"></div>
      <div class="pubPop changePop"></div>
      <div class="couponsPopBj"></div>
      <div class="couponsPop"></div>
      <div class="full-gifts-stairs"></div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[
                {
                    show:true,
                    title:'【老酒特卖】45°西凤金窖500ml(2012-2013年）',
                    img:'https://img07.jiuxian.com/2017/0227/31f189c611994d0984c88620a059b6b84.jpg',
                    price:'3',
                    num:'1',
                    rennitiao:'任你挑',
                    zaigou:'再购6件立享【288.00元任选6件】',
                    xiaoshigou:'限时抢购',
                    zonjia:'3'
                },{
                    show:true,
                    title:'芝华士12年威士忌500ml +百龄坛特醇500ml 双雄套装',
                    img:'https://img08.jiuxian.com/2019/0614/272e1d04659d4619b11067d844756b034.jpg',
                    price:'3',
                    num:'1',
                    rennitiao:'',
                    zaigou:'',
                    xiaoshigou:'限时抢购',
                    zonjia:'3'
                }
        ],
        isok:true,
        isos:true,
        nums:0,//用来频道什么时候到高亮
        zj:0,
        title:'购物车'
        }
    },
    created(){
        //进来先判断他的nums是多少
        this.nums = this.arr.length
        // console.log(this.nums)
            this.$store.state.title = this.title;
                for(var i = 0;i<this.arr.length;i++){
                        if(this.arr[i].show==true){
                           this.zonjia  +=  this.arr[i].price * this.arr[i].num
                               
                        }
                }
                 
    },
    methods:{
        //添加
            addnum(index){
                  
                    if(this.arr[index].num<99){
                         this.arr[index].num++
                         console.log(this.arr[index].num)
                            this.arr[index].zonjia  =  this.arr[index].price *( this.arr[index].num)*1
                      
                        if(this.arr[index].show===true){
                          this.zonjia += (this.arr[index].zonjia)*1
                          console.log(this.zonjia )
                    }
                    }else{
                          this.arr[index].num = 99
                          this.arr[index].zonjia  =  this.arr[index].price * this.arr[index].num*1
                    }
                  
                    
            },
            //减少数量
            reducenum(index){
                 this.arr[index].num--
                    if(this.arr[index].num<1){
                        this.arr[index].num = 1
                    }
                     this.arr[index].zonjia  =  this.arr[index].price * this.arr[index].num
                    if(this.arr[index].show==true){  
                            // this.arr[index].zonjia -= this.arr[index].zonjia
                            // this.zonjia -= this.arr[index].zonjia*1 
                             this.zonjia -= this.arr[index].zonjia
                        }
                    
            },
            //删除单个
            elepase(index){
                    this.arr.splice(index,index+1)
            },
            //点击当个高亮
             acticf(index){
                    this.arr[index].show = !this.arr[index].show 
                    if(this.nums == this.arr.length-1){
                                this.isos=true
                            }else{
                                this.isos=false
                            }
                    if(this.arr[index].show===false){
                        this.nums--
                         this.zonjia -=  (this.arr[index].zonjia)*1
                    }else if(this.arr[index].show===true){
                          this.nums++
                         this.zonjia  +=  (this.arr[index].zonjia)*1
                    }
                    console.log(this.nums,this.arr.length)
                            
                   
        },
            //全部高亮
            addactif(){
                this.isos = !this.isos
              
                for(var i=0;i<this.arr.length;i++){
                        this.arr[i].show = this.isos
                        if(this.isos==true){
                            //  this.zonjia +=  this.arr[i].price * this.arr[i].num
                            this.zonjia +=this.arr[i].zonjia*1
                               this.nums = this.arr.length
                        }else{
                            this.zonjia = 0
                              this.nums = 0
                        }
                }
            },
            

    },
 
    watch:{
           
              arr: {
              handler() {//这个handler是固定的
            //   console.log(aa,bb)
                 for(let i in this.arr){
                    if(this.arr[i].num>=99){
                        this.arr[i].num = 99
                        // console.log(aaa)
                    }else if(this.arr[i].num<=1){
                        this.arr[i].num = 1
                    }
                    // if(this.arr[i].show===true){
                    //       this.zonjia += (this.arr[i].zonjia)*1
                    // }else if(this.arr[i].show===false){
                    //       this.zonjia -= (this.arr[i].zonjia)*1
                    // }
                    
             }
          },
          // 深度监听 监听对象，数组的变化
          deep: true
        },
    }
   
}
</script>

<style scoped>
#fl {
  margin-top: 40px;
}
.topCatTip {
  border-top: 1px solid #ffe9c6;
  border-bottom: 1px solid #ffe9c6;
  background-color: #fff4e2;
  height: 32px;
  line-height: 32px;
  color: #ff3333;
  font-size: 12px;
  width: 100%;
  overflow: hidden;
}
.topCatTip .topCatTipBd {
  padding: 0 0 0 10px;
}
.topCatTip i {
  display: inline-block;
  background-position: -40px 2px;
  width: 11px;
  height: 22px;
  margin-right: 5px;
  _display: inline;
  position: relative;
  top: 4px;
}
.pubIcon {
  background: url(https://mcart.jiuxian.com/statics/images/cart/catIcon.png)
    no-repeat 0 0;
  background-size: 150px 150px;
}
button, input, select, textarea {
    font-size: 100%;
    outline: none;
    -webkit-tap-highlight-color: transparent;
}
.cartWrap {
    margin-top: 8px;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
}
.pucTitle {
    height: 45px;
    line-height: 45px;
    background: #fff;
    position: relative;
}
label, button, input[type="button"], input[type="reset"], input[type="submit"] {
    cursor: pointer;
}
.pucTitle .tureIcon {
    background-position: -2px -115px;
}
.pucTitle i {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 10px;
    left: 10px;
    display: block;
}
.pubIcon {
    background: url(https://mcart.jiuxian.com/statics/images/cart/catIcon.png) no-repeat 0 0;
    background-size: 150px 150px;
}
.jxzy {
    width: 15px;
    height: 15px;
    position: absolute;
    left: 40px;
    top: 15px;
    display: block;
}
.pucTitle {
   
    line-height: 45px;
  
   
}
.jxzy img {
    width: 100%;
    height: auto;
    display: block;
}
.pucTitle .title {
    font-size: 14px;
    color: #252525;
    margin-left: 62px;
    line-height: 45px;
}
.cartCoupons {
    display: block;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
    cursor: pointer;
}
.cartCoupons b {
    display: inline-block;
    width: 7px;
    height: 12px;
    margin-left: 5px;
    position: relative;
    top: 3px;
    background-position: -71px 0;
}
.pubIcon {
    background: url(https://mcart.jiuxian.com/statics/images/cart/catIcon.png) no-repeat 0 0;
    background-size: 150px 150px;
}
.catShopList {
    border-top: 1px solid #e8e8e8;
}
ol, ul, li {
    list-style: none;
}
.pubWrap {
    background: #fff;
    width: 100%;
    padding-top: 10px;
    position: relative;
    z-index: 1;
}
.pubBox {
    height: 16px;
    line-height: 16px;
    margin: 0 10px 0 40px;
    font-size: 0;
    position: relative;
    z-index: 1;
    overflow: hidden;
    font-family: "Arial";
}
.pubBox .pubTag {
    color: #fc5a5a;
    font-size: 12px;
    height: 14px;
    padding: 0 3px;
    border: 1px solid #fc5a5a;
    border-radius: 2px;
    line-height: 14px;
    position: absolute;
    left: 0;
    top: 0;
}
.pubBox .fill {
    color: #feac37;
}
.pubBox .pubLink {
    height: 16px;
    overflow: hidden;
    display: block;
    position: relative;
    z-index: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.cuxiao1 .pubLink {
    font-size: 12px;
    margin-right: 90px;
    margin-left: 49px;
}
.pubBox span, .pubBox a, .pubBox i {
    display: block;
}
.pubBox .fill {
    color: #feac37;
}
.pubLink .promLinkIconBlak {
    background-position: -6px 3px;
    width: 7px;
    height: 12px;
    margin: 2px 0 0 5px;
    float: left;
}
.pubBox span, .pubBox a, .pubBox i {
    display: block;
}
.promIcon {
    background: url(https://mcart.jiuxian.com/statics/images/cart/catIcon.png) no-repeat 0 0;
    background-size: 50px 50px;
}
.catShopList li {
    background-color: #fff;
    position: relative;
}
.catShopList li .catShopCont {
    padding: 10px 0;
    position: relative;
}
.catShopList li .cartDel {
    height: 22px;
    line-height: 22px;
    display: block;
    color: #666;
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding-left: 10px;
    z-index: 101;
}
a, a:hover {
    text-decoration: none;
    color: #333;
}
catShopList li label input {
    display: none;
}
button, input, select, textarea {
    font-size: 100%;
    outline: none;
    -webkit-tap-highlight-color: transparent;
}
/* .catShopList li label .tureIcon {
    background-position: 0 -115px;
} */
.catShopList li label i {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 42%;
    left: 10px;
    display: block;
}
.pubIcon {
    background: url(https://mcart.jiuxian.com/statics/images/cart/catIcon.png) no-repeat 0 0;
    background-size: 150px 150px;
}
.catShopList li .catShopInfo {
    margin-left: 20px;
    padding-right: 10px;
    height: 80px;
}
.catShopList li .catShopInfo .catImg.catImgThr {
    top: 10px;
    left: 40px;
}
.catShopList li .catShopInfo .catImg {
    width: 80px;
    height: 81px;
}
.catShopList li .catShopInfo .catImg, .catShopList li .catShopInfo .catImgTwe {
    border: 1px solid #e8e8e8;
    position: absolute;
    position: absolute;
    top: 10px;
    left: 10px;
}
.catShopList li .catShopInfo .catImg img, .catShopList li .catShopInfo .catImgTwe img {
    width: 100%;
    height: auto;
}
.catShopList li .catShopInfo .catInfo {
    margin-left: 112px;
}
/*  */

/* .catShopList li label .falseIcon {
    background-position: -26px -115px;
}
.catShopList li label .tureIcon {
    background-position: 0 -115px;
} */

/*  */
.catShopList li .catShopInfo .catInfo h4 {
    width: 100%;
    height: 36px;
    line-height: 18px;
    font-size: 0;
    overflow: hidden;
    color: #333;
}
.twoLineEllipsisCart {
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
   
}
.catShopList li .catShopInfo .catInfo p {
    font-size: 12px;
    color: #ff0000;
    padding: 0 0 5px;
    height: 18px;
    line-height: 18px;
}
.catShopList li .catShopInfo .catInfo p span {
    float: left;
    margin-right: 5px;
}
.catShopList li .catShopInfo .catInfo p {
    font-size: 12px;
    color: #ff0000;
    padding: 0 0 5px;
    height: 18px;
    line-height: 18px;
}
.rsCartItem {
    width: 75px;
    height: 20px;
    border: 1px solid #d0d0d0;
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
}
.comAmount {
    width: 75px;
    height: 20px;
    position: relative;
}
.comAmount .minus {
    left: 0;
    border-right: 1px solid #d0d0d0;
    line-height: 18px;
}
.comAmount a {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    overflow: hidden;
    color: #666;
    cursor: pointer;
    text-align: center;
    line-height: 20px;
    font-size: 16px;
    font-family: Arial;
}
.comAmount .inpVal {
    width: 75px;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: 0;
}
button, input, select, textarea {
    font-size: 100%;
    outline: none;
    -webkit-tap-highlight-color: transparent;
}
.comAmount .plus {
    right: 0;
    border-left: 1px solid #d0d0d0;
}
.comAmount a {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    overflow: hidden;
    color: #666;
    cursor: pointer;
    text-align: center;
    line-height: 20px;
    font-size: 16px;
    font-family: Arial;
}
.catShopList li .catShopInfo .catInfo p {
    font-size: 12px;
    color: #ff0000;
    padding: 0 0 5px;
    height: 18px;
    line-height: 18px;
}
.catShopList li .catShopInfo .catInfo h4 {
    width: 100%;
    height: 36px;
    line-height: 18px;
    font-size: 0;
    overflow: hidden;
    color: #333;
}
.catShopList li .catShopInfo .catInfo h4 span {
    vertical-align: top;
    font-size: 14px;
}
a{
    text-decoration: none;
    color: #333;
}
.catShopList li label input {
    display: none;
}
.catBomAllCheak {
    height: 50px;
    background-color: #fff;
    line-height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #d9d9d9;
    z-index: 999;
}
.catBomAllCheak label .tureIcon {
    background-position: 0 -115px;
}
.catBomAllCheak label i {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 14px;
    left: 10px;
    display: block;
}
.pubIcon {
    background: url(https://mcart.jiuxian.com/statics/images/cart/catIcon.png) no-repeat 0 0;
    background-size: 150px 150px;
}
.catBomAllCheak label span {
    padding-left: 40px;
    color: #666;
}
.catBomAllCheak span {
    float: right;
}
.catBomAllCheak {
    line-height: 50px;
    }
    .catBomAllCheak label, .catBomAllCheak div {
    display: inline-block;
}
.catBomAllCheak span {
    float: right;
}
.catBomAllCheak span a.delBtn {
    color: #fff;
    background-color: #fd5a5b;
}
.catBomAllCheak span a {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    width: 98px;
    font-size: 16px;
    background-color: #ddd;
    color: #999;
    text-align: center;
}
.catBomAllCheak div p {
    line-height: 27px;
    font-size: 16px;
    color: #252525;
    position: relative;
}
.catBomAllCheak div p span {
    display: block;
    width: 50px;
    float: left;
}
.catBomAllCheak div p {
    line-height: 27px;
    font-size: 16px;
    color: #252525;}
    .catBomAllCheak div p em {
    color: #ff3333;
}
.catBomAllCheak div p.colorTxt {
    color: #999;
    font-size: 14px;
    position: relative;
    top: -8px;
}
.catBomAllCheak div p span {
    display: block;
    width: 50px;
    float: left;
}
.catBomAllCheak div p.colorTxt {
    color: #999;
    font-size: 14px;
    
}
.catBomAllCheak div p strong {
    font-weight: normal;
    padding: 0 5px 0 0;
}
address, cite, dfn, em, var {
    font-style: normal;
}
.catBomAllCheak div[data-v-19e4f3a1]{
    margin-left: 20px
}
/*  */
.pucTitle .falseIcon {
    background-position: -27px -115px;
}
.catShopList li label .falseIcon {
    background-position: -26px -115px;
}



.catShopList .tureIcon{
    background-position: 0 -115px;
}
.catShopList .falseIcon{
    background-position: -26px -115px;
}



.catBomAllCheak label .falseIcon {
    background-position: -25px -115px;
}
.catBomAllCheak label .tureIcon {
    background-position: 0 -115px;
}
</style>
