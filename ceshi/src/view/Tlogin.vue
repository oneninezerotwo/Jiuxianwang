<template>
  <div>
    <Therder/>
    <div>
      <section class="login">
        <input type="hidden" id="basePath" value="https://m.jiuxian.com/m_v1">
        <ul class="tab">
          <li class="tab1 on">
            <p>账号登录</p>
            <span></span>
          </li>
          <li class="tab2">
            <p>手机动态密码登录</p>
            <span></span>
          </li>
        </ul>
        <div class="content">
          <div class="content1" style="display: block;">
            <form autocomplete="off">
              <div class="user">
                <i></i>
                <input type="text" name="user_name" id="user_name" value placeholder="用户名/邮箱/手机号">

                <p class="tip empty" id="err_msg">
                  <i></i>请输入用户名/邮箱/手机号
                </p>
              </div>
              <div class="pwd">
                <i></i>
                <input type="password" name="password" id="pass" placeholder="密码">

                <p class="tip">
                  <i></i>请输入密码
                </p>
              </div>
              <a class="btn" href="javascript:void(0)" id="subbtn1">立即登录</a>

              <div class="serve clearfix">
                <a class="regist" href="javascript:;">免费注册</a>
                <a class="getpwd" href="javascript:;">找回密码</a>
              </div>

              <div class="partnerLogin">
                <div class="title">
                  <div class="line"></div>
                  <div class="partner">合作伙伴登录</div>
                </div>
                <ul class="choose clearfix">
                  <li>
                    <a href="javascript:;" class="qq"></a>
                  </li>
                  <li>
                    <a href="javascript:;" class="alipay"></a>
                  </li>
                </ul>
              </div>
            </form>
          </div>

          <div class="content2" style="display: none;">
            <form autocomplete="off">
              <div class="tel">
                <i></i>
                <input type="text" id="iphone" placeholder="请输入手机号，新用户将自动注册" value>

                <p class="tip empty">
                  <i></i>请输入手机号
                </p>
                <p class="tip error">
                  <i></i>请输入正确的手机号
                </p>
              </div>
              <div class="identify">
                <input type="text" id="security_code" placeholder="请输入校验码">

                <p class="tip2">
                  <i></i>请输入校验码
                </p>
              </div>
              <div class="hqyzm">
                <a class="yzm off" href="javascript:;" id="yanzhenma">获取校验码</a>
                <a class="yzmTime" href="javascript:;">
                  <i>59</i>秒后重新获取
                </a>
              </div>
              <a class="btn" href="#" id="subbtn2">立即登录</a>

              <div class="serve clearfix">
                <a class="regist" href="javascript:;">免费注册</a>
                <a class="getpwd" href="javascript:;">找回密码</a>
              </div>
              <div class="partnerLogin">
                <div class="title">
                  <div class="line"></div>
                  <div class="partner">合作伙伴登录</div>
                </div>
                <ul class="choose clearfix">
                  <li>
                    <a href="javascript:;" class="qq"></a>
                  </li>
                  <li>
                    <a href="javascript:;" class="alipay"></a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Therder from "../components/Thomes/Therder";
export default {
  data() {
    return {
      title: "用户登陆",
      isok:false,

    };
  },
  created() {
    this.$store.state.title = this.title;
  },
  components: {
    Therder
  },
  methods:{
    //   togo(){
    //       this.$router.go(-1)
    //   }
        setcook(){
            
        }
  }
};
</script>

<style scoped>
section {
  padding-top: 15px;
  max-width: 768px;
  margin: 40px auto 0;
  background: #ffffff;
}
.tab,
.content {
  width: 84%;
  margin: 0 auto;
  overflow: hidden;
}
tab .tab1 {
  text-align: left;
}
.tab li {
  width: 50%;
  height: 45px;
  line-height: 45px;
  float: left;
}
.tab li.on p {
  color: #de4943;
}
.tab li p {
  height: 30px;
  line-height: 40px;
}
.tab li.on span {
  display: block;
}
.login .tab1 span {
  width: 55px;
  float: left;
}
.tab li span {
  height: 2px;
  background-color: #de4943;
  display: none;
}
.tab .tab1 {
  text-align: left;
}
.tab li {
  line-height: 45px;
}
.tab .tab2 {
  text-align: right;
}
.tab li {
  width: 50%;
  height: 45px;
  line-height: 45px;
  float: left;
}
.content {
  margin-top: 10px;
}
.tab,
.content {
  width: 84%;
  margin: 0 auto;
  overflow: hidden;
}
form {
  margin-block-end: 1em;
}
.user,
.pwd,
.pwd2,
.tel,
.verify,
.yzmInput {
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 3px;
  margin-bottom: 40px;
  position: relative;
}

.user i,
.pwd i,
.pwd2 i,
.tel i {
  width: 20px;
  height: 20px;
  display: block;
  float: left;
  margin: 10px 10px 0 10px;
}
.user i,
.pwd i,
.pwd2 i,
.tel i,
.choose a,
.tip i,
.tip2 i,
.success h2 i {
  background: url(https://misc.jiuxian.com/m_user/images/loginIcon.png)
    no-repeat;
}
.user i {
  background-position: 0 -34px;
}
.user input,
.pwd input,
.pwd2 input,
.tel input {
  width: 70%;
  height: 40px;
  line-height: 40px;
}
input[type="submit"],
input[type="button"],
input[type="text"],
input[type="password"] {
  -webkit-appearance: none;
  box-sizing: content-box;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  font-family: Microsoft YaHei;
}
.tip {
  position: absolute;
  top: 40px;
  right: 0;
  color: #de4943;
  display: none;
}
.tip i,
.tip2 i {
  width: 15px;
  height: 15px;
  display: block;
  float: left;
  margin: 3px 5px 0 0;
  background-position: -202px -34px;
}
.pwd i,
.pwd2 i {
  background-position: -72px -34px;
}
.user i,
.pwd i,
.pwd2 i,
.tel i {
  width: 20px;
  height: 20px;
  display: block;
  float: left;
  margin: 10px 10px 0 10px;
}
.verify {
  border: none;
}
.user,
.pwd,
.pwd2,
.tel,
.verify,
.yzmInput {
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 3px;
  margin-bottom: 40px;
  position: relative;
}
.user,
.pwd,
.pwd2,
.tel,
.verify,
.yzmInput {
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 3px;
  margin-bottom: 40px;
  position: relative;
}
.yzmInput > img {
  margin-top: 5px;
}
img {
  vertical-align: top;
}
.btn {
  width: 100%;
  height: 34px;
  line-height: 34px;
  display: block;
  clear: both;
  margin: 30px auto;
  text-align: center;
  background: #de4b45;
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
}
.serve a {
  color: #666;
  text-decoration: underline;
  height: 20px;
  display: block;
  float: left;
}
.serve .getpwd {
  float: right;
}
.partnerLogin .title {
  width: 100%;
  height: 40px;
  margin-top: 65px;
  position: relative;
}
.title .line {
  height: 20px;
  border-bottom: 1px solid #cccccc;
}
.title .partner {
  width: 110px;
  height: 40px;
  background: #ffffff;
  position: absolute;
  top: 0;
  left: 50%;
  line-height: 40px;
  margin: 0 0 0 -55px;
  text-align: center;
  color: #878686;
}
.choose {
  margin: 20px 0;
  text-align: center;
}
.choose li {
  width: 33%;
  display: inline-block;
}
.choose .qq {
  background-position: -78px -99px;
}
.choose a {
  width: 45px;
  height: 45px;
  display: inline-block;
}
.choose .alipay {
  background-position: -156px -99px;
}
</style>
