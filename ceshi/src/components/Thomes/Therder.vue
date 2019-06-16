<template>
  <div class="publicHead" id="head" v-if="!(setname()=='首页')">
    <div class="head clearfix">
      <a class="back" href="javascript:void(0)" @click="togo"></a>
      <h2 class="headTitle" v-text="setname()"></h2>
      <a class="navBar" href="avascript:void(0)" @click="iashow"></a>
    </div>
    <ul class="nav" v-show="show">
      <li class="home">
        <i></i>
        <span>首页</span>
        <a id="daohang_home" href="avascript:void(0)"></a>
      </li>
      <li class="topsearch">
        <i></i>
        <span>搜索</span>
        <a id="daohang_search" href="avascript:void(0)"></a>
      </li>
      <li class="cart">
        <i></i>
        <span>购物车</span>
        <a id="daohang_gouwuche" href="avascript:void(0)"></a>
      </li>
      <li class="commuser">
        <i></i>
        <span>我的酒仙</span>
        <a id="daohang_wodejiuxian" href="avascript:void(0)"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data(){
       return{
          show:false,
          title:''
       }
  },
  // computed:{
  //       aa:function(){
  //         return this.title = this.$store.state.title
  //       }
       
  // },
    created(){
      this.title = this.$store.state.title
      //  consl.log(this.title)
     
  },
  
  methods:{
        iashow(){
          this.show = !this.show
        },
        
        setname(){
          return this.$store.state.title
        },
        togo(){
          this.$router.go(-1)
        },
  },
};
</script>

<style scoped>
.publicHead {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
}
.head {
  height: 40px;
  background-color: #de4943;
  color: #fff;
}
.clearfix:after {
  clear: both;
  display: block;
  content: "...";
  visibility: hidden;
  height: 0;
  font-size: 0;
}

.head, .nav {
    width: 100%;
}

.head .back, .head .navBar {
    width: 30px;
    height: 40px;
    position: absolute;
    top: 0;
    display: block;
}
.head .back {
    background: url(~@/assets/headBack.jpg) no-repeat;
}
.head .headTitle {
    width: 220px;
    margin-left: -110px;
}
.head .headTitle {
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    position: absolute;
    left: 50%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}


.head .back, .head .navBar {
    width: 30px;
    height: 40px;
    position: absolute;
    top: 0;
    display: block;
}
.head .navBar, .nav li i {
    background: url(~@/assets/headIcon.png) no-repeat;
}
.nav {
    height: 45px;
    background-color: #efefef;
    color: #848d96;
    top: 40px;
    border-bottom: 1px solid #ccc;
    /* display: none; */
}
.nav li {
    width: 25%;
    height: 45px;
    float: left;
    position: relative;
}
ol, ul, li {
    list-style: none;
}
.nav .home i {
    background-position: -3px -5px;
}
.nav li i {
    width: 26px;
    height: 20px;
    display: block;
    margin: 5px auto 0;
}
.head .navBar, .nav li i {
    background: url(~@/assets/headIcon.png) no-repeat;
}
.nav li span {
    width: auto;
    height: 18px;
    line-height: 18px;
    display: block;
    text-align: center;
}

.nav li a {
    width: 100%;
    height: 45px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    opacity: 0;
    filter: alpha(opacity=0);
}

a, a:hover {
    text-decoration: none;
    color: #333;
   
}
.head .navBar {
    background-position: -150px 6px;
    right: 10px;
}
.head .back {
    left: 10px;
}
.nav .topsearch i {
    background-position: -37px -5px;
}
.nav .cart i {
    background-position: -72px -5px;
}
.nav .commuser i {
    background-position: -113px -5px;
}
</style>
