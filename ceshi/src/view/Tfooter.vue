<template>
  <div class="bottomBar">
    <ul class="itemFlex">
      <li class="cular" v-for="(item,index) in tapply" :key="index">
        <a :name="item.names" href="javascript:void(0)" @click="tomodule(item,index)">
          <img
            :src="item.imgs"
            class="lazyload"
          >
        </a>
      </li>
      
      
    </ul>
  </div>
</template>


<script>

export default {
    data(){
        return{
            tapply:[
                {
                    imgs:'https://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png',
                    names:'didao1',
                    togo:'Thome',
                    title:'首页'
                },
                {
                    imgs:'https://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png',
                    names:'didao2',
                    togo:'Tfenlei ',
                     title:'分类'
                },
                {
                    imgs:'https://img09.jiuxian.com/bill/2018/0528/56760d41e3e745afa14e3cea1713631c.png',
                    names:'didao3',
                    togo:'Thottest',
                    title:'裸价清仓'
                },
                {
                    imgs:'https://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png',
                    names:'didao4',
                    togo:'Tcar',
                    title:'购物车'
                },
                {
                    imgs:'https://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png',
                    names:'didao5',
                    togo:'Tmine',
                    title:'我的酒仙'
                }

            ],
            tab:0,

        }
       
    },
     methods:{
                tomodule(item,index){
                        this.tab = index;
                        let name = this.tapply[index].togo
                         this.$store.state.title = this.tapply[index].title
                        // console.log(this.$store.state.title)
                        this.$router.push({
                            path:name
                        })
                       

                }
        }
}
</script>



<style scoped>
.bottomBar {
    height: 42px;
    border-top: 1px solid #cccccc;
    background: #f1f1f1;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}
.bottomBar ul {
    width: 100%;
}
.itemFlex {
    display: -webkit-box!important;
    display: -webkit-flex!important;
    display: -moz-flex;
    display: flex!important;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    flex-wrap: wrap;
}
.cular {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    flex: 1;
    -webkit-flex-basis: 0;
    -moz-flex-basis: 0;
    flex-basis: 0;
    max-width: 100%;
    display: block;
}
.bottomBar li a {
    display: block;
    width: 42px;
    height: 42px;
    overflow: hidden;
    margin: 0 auto;
}
.bottomBar li img {
    width: 100%;
    height: auto;
}
.itemFlex img {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    border: 0;
}
</style>

