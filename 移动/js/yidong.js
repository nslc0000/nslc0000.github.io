window.onload=function(){
            num=1;
            var con=document.querySelector(".down");
            var tt=setInterval(move,4000);
                function move() {
                    log1 = false;
                    num++;
                    if (num == 1 || 6) {con.style.transition="all 0.5s";
                    }
                    ;

                    con.style.marginLeft = -295 * num + "px";
                }
            con.addEventListener("transitionend",function () {
                if (num==9){
                    con.style.transition="none";
                    con.style.marginLeft="-295px";
                    num=1;
                    log1=true;
            }
                if (num==0) {
                    con.style.transition="none";
                    con.style.marginLeft="-2360px";
                    num=8;
                     log1=true;
            };
           log1=true;
        });
var newleft=document.querySelector(".jianleft");
var newright=document.querySelector(".jianright");
var newcon1=document.querySelector(".content1");

// newcon1.onmousover=function(){
//     clearInterval(tt);alert(1);
// }
// newcon1.onmousout=function(){
//     tt=setInterval(move,1000);
// }

var log1=true;
newright.onclick=function(){
if (log1) {
 move();
}
log1=false;
}
newleft.onclick=function(){
if (log1) {
  num-=2;
 move();
};
}
var newwindo=document.querySelectorAll(".gong .windo");
var newzi=document.querySelectorAll(".gong .zi");
var newleft1=document.querySelector(".gong .asdleft");
var newright2=document.querySelector(".gong .asdright");
var newgong=document.querySelector(".gong");
var newlist=[{title:"中国移动通信集团公司2016年下半年服务质量状况报告...",time:"2017-02-21"},{title:"关于2月9日至10日网站系统升级的公告...",time:"2017-02-09"},{title:"针对存量来电显示收费客户开展服务回馈活动...",time:"2016-12-26"},{title:"客户个人信息收集、使用的目的、范围、方式...",time:"2017-02-07"}];
    var num1=0;
    var num2=1;
    var zhan=setInterval(move1,3000);
    function move1() {
        num1++;
        num2++;
        if(num1==4){
            num1=0
        }
        if(num2==4){
            num2=0;
        }
        if(num1==-1){
            num1=3;
        }
        if(num2==-1){
            num2=3;
        }
            newwindo[0].innerHTML=newlist[num1].title;
            newwindo[1].innerHTML=newlist[num2].title;
        newzi[0].innerHTML=newlist[num1].time;
        newzi[1].innerHTML=newlist[num2].time;
    }
    newgong.onmouseover=function () {
        clearTimeout(zhan)
    }
    newgong.onmouseout=function () {
        zhan=setInterval(move1,3000);
    }
    newleft1.onclick=function () {
        move1()
    }
    newright2.onclick=function () {
        num1-=2;
        num2-=2;
        move1()
    }
    //banner图
   var newdown=document.querySelectorAll(".banner .down10");
    var newbo=document.querySelector(".banner .box");
    var newbo1=document.querySelector(".banner .box1");
    var shu=0;
    var z=1;
    var asd=0;
    var sos=setInterval(mover,2000);
    var n=1;
    function mover(d=1) {
        // log2=false;
        shu++;
        if(shu==newdown.length){
            shu=0;
        }
        if(shu==-1){
            shu=6;
        }
        newdown[shu].style.left=d*740+
        "px";
        newdown[shu].style.zIndex=z++;
        newbox[asd].style.background="#c9b8af";
        newbox[shu].style.background="#e81e73";
        animate(newdown[shu],{left:0},1000);
        animate(newdown[asd],{left:-d*740},1000);
        asd=shu;
        // log2=true;
    }
    var newbanner=document.querySelector(".banner");

    newbanner.onmouseover=function () {
        clearInterval(sos);
    }
    newbanner.onmouseout=function () {
        sos=setInterval(mover,2000);
    }
    var newbox=document.querySelectorAll(".banner .box3");
    newbox.forEach(function (set,v) {
        set.onclick=function () {
            if(v>asd){
                n=1;
            }else if(v<asd){
               n=-1;
            }else{
                return;
            }
            for(let j=0;j<newbox.length;j++){
                newbox[j].style.background="#c9b8af"
            }
            newdown[v].style.left=n*740+"px";
            newdown[v].style.zIndex=z++;
            newbox[v].style.background="#e81e73"
            animate(newdown[v],{left:0},1000);
            animate(newdown[asd],{left:-n*740},1000);
            asd=v;
        }
    })
    var log2=true;
    newbo1.onclick=function () {
        if (log2){
            // log2=false;
            mover(1);
        }

    }
    newbo.onclick=function () {
        if(log2){
            // log2=false;
            shu-=2;
            n=-1;
            mover(-1);
        }
    }
 //jieshu
};