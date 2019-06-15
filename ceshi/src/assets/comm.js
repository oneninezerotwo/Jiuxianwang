// 倒计时时间
function toDb(a){//补零
    if(a<10){
        return '0' + a;
    }else{
        return '' + a;
    }
  };
export  function getTime(){
    var time = new Date();
    var year = time.getFullYear();//年
    var mon = time.getMonth() + 1;//月
    var day = time.getDate();//日
    var hours = time.getHours()+1;//小时
    var hoursss = new Date(year+"-"+mon+"-"+day+" "+hours+":"+00+":"+00);//先定义一个时间
    var shuchuu = parseInt((hoursss-time)/1000);//两个小时之后的时间和现在的时间一直相减
    var hou = parseInt(shuchuu/60/60);
    var feng = parseInt(shuchuu/60%60);
    var miao = parseInt(shuchuu%60);
    // $('.shi').html(toDb(hou));
    // $('.fen').html(toDb(feng));
    // $('.miao').html(toDb(miao));
  };