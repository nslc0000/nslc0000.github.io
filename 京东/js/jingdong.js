/**
 * Created by ASUS on 2017/3/12.
 */
window.onload=function () {
    //banner轮播图
    var lunbo1=document.querySelectorAll(".banner .banner-zh .main1");
    var quan1=document.querySelectorAll(".banner .banner-zh .kuai1");
    for(let i=0;i<quan1.length;i++){
        quan1[i].onmouseover=function(){
            for(let j=0;j<quan1.length;j++){
                quan1[j].style.background="#fff";
                lunbo1[j].style.zIndex="0";
                lunbo1[j].style.opacity="0";
            }
            quan1[i].style.background="#c81623";
            lunbo1[i].style.zIndex="2";
            lunbo1[i].style.opacity="1";
            num=i;
        }
    }
    var num=0;
    var tt=setInterval(move,1000);
    function move() {
        num++;
        if (num==lunbo1.length){
            num=0;
        }
        if (num==-1){
            num=lunbo1.length-1;
        }
        for(let j=0;j<quan1.length;j++){
            quan1[j].style.background="#fff";
            lunbo1[j].style.zIndex="0";
            lunbo1[j].style.opacity="0";
        }
        quan1[num].style.background="#c81623";
        lunbo1[num].style.zIndex="2";
        lunbo1[num].style.opacity="1";
    }
    var banner1=document.querySelector(".banner .banner-zh");
    banner1.onmouseover=function () {
        clearInterval(tt)
        newjian.style.display="block";
        newjian1.style.display="block";
    };
    banner1.onmouseout=function () {
        tt=setInterval(move,1000)
        newjian.style.display="none";
        newjian1.style.display="none";
    };
    var newjian=document.querySelector(".banner .banner-zh .left");
    var newjian1=document.querySelector(".banner .banner-zh .right");
    newjian.onclick=function () {
        num-=2;
        move();
    };
    newjian1.onclick=function () {
        move();
    };
    //倒计时
    var newli1=document.querySelectorAll(".content .top-time1");
    var fun=new Date();
    var now1=new Date();
    var nownum=now1.getTime()+10800000;
    fun.setTime(nownum);
    setInterval(function (){
        var now=new Date();
        var guodu=fun.getTime()-now.getTime();
        if(guodu==0){
            fun.setTime(now.getTime()+10800000);
        }
        var hou=Math.floor(guodu/(1000*60*60));
        newli1[0].innerHTML=hou;
        var mill=Math.floor(guodu/(1000*60)%60);
        newli1[1].innerHTML=mill;
        var sec=Math.floor(guodu/1000%60);
        newli1[2].innerHTML=sec;
    },1000)
    //点击消失
    var newtop=document.querySelector(".top .close");
    var newtop1=document.querySelector(".top");
    newtop.onclick=function (e) {
        // e.stopPropagation();
        newtop1.innerHTML=" ";
    }
    //移入换图
    var newzi=document.querySelector(".banner .banner1-zi");
    var newzi1=document.querySelector(".banner .banner1-zi1");
    var newtab=document.querySelector(".banner .banner1-tab1");
    var newtab1=document.querySelector(".banner .banner1-tab2");
    var newhong=document.querySelector(".banner .banner-hong");
    newzi.onmousemove=function () {
        newtab.style.display="block";
        newtab1.style.display="none";
        newhong.style.left="15px"
    }
    newzi1.onmousemove=function () {
        newhong.style.left="66px"
        newtab.style.display="none";
        newtab1.style.display="block";
    }
//点击换图
var newle=document.querySelector(".content .bottom-le");
var newle1=document.querySelector(".content .bottom-left");
var newle2=document.querySelector(".content .bottom-right");
var shuzi=1;
newle2.onclick=function () {
    newle.style.transition="all 0.5s";
    shuzi++;
    newle.style.marginLeft=-1000*shuzi+"px";
}
    newle.addEventListener("transitionend",function () {
        if (shuzi==5){
            newle.style.transition = "none";
            newle.style.marginLeft = "-1000px";
            shuzi=1;
        }
    })
    newle1.onclick=function () {
        newle.style.transition="all 0.5s";
        shuzi-=1;
        newle.style.marginLeft=-1000*shuzi+"px";

    }
    newle.addEventListener("transitionend",function () {
        if (shuzi==0){
            newle.style.transition = "none";
            newle.style.marginLeft = "-4000px";
            shuzi=4;
        }
    })
//content1移入效果
var newwin=document.querySelectorAll(".content1 .window");
    var newcard=document.querySelectorAll(".content1 .low1");
    var newcard1=document.querySelector(".content1 .low2");
    var con1=0;
  newcard.forEach(function (sel,i) {
      sel.onmousemove=function () {
      newwin[con1].style.display="none";
      newwin[i].style.display="block";
      newcard1.style.left=7+79*i+"px";
      con1=i;
      }
  })
    //contrent5的选项卡效果
    var newlow=document.querySelectorAll(".content5 .lowna1");
    var newdo1=document.querySelectorAll(".content5 .doleft");
    var newdo2=document.querySelectorAll(".content5 .doleft1");
    var newdowna=document.querySelectorAll(".content5 .downa");
    
    function dianji(dian,dian1,inner,width) {
        var shu3=width.offsetWidth;
        var shuzi=1;
        dian.onclick=function () {
            inner.style.transition="all 0.5s";
            shuzi++;
            inner.style.marginLeft=-shu3*shuzi+"px";
        }
        dian1.onclick=function () {
            inner.style.transition="all 0.5s";
            shuzi-=1;
            inner.style.marginLeft=-shu3*shuzi+"px";
        }
        inner.addEventListener("transitionend",function () {
            if (shuzi==3){
                shuzi=1;
                inner.style.transition = "none";
                inner.style.marginLeft = -shu3*shuzi+"px"
                
            }
            if (shuzi==0){
                shuzi=2;
                inner.style.transition = "none";
                inner.style.marginLeft = -shu3*shuzi+"px";
                
            }
        })
    };
    newlow.forEach(function (ele,j) {
        dianji(newdo2[j],newdo1[j],newlow[j],newdowna[j])
    })
    //滚动条
    var addtop=document.querySelector(".addtop");
    var dbi=0;
    window.onscroll=function () {
        dbi=document.body.scrollTop==0?document.documentElement:document.body;
        if (dbi.scrollTop>600){
            addtop.style.top="0px";
        }else{
            addtop.style.top="-52px";
        }
        if(dbi.scrollTop>1600){
            addleft1.style.opacity="1";
        }else{
            addleft1.style.opacity="0";
        }
    }
    //楼层跳转
    var addleft=document.querySelectorAll(".addleft2");
    var addleft1=document.querySelector(".addleft");
    var newlct=document.querySelectorAll(".lct");
    newlct.forEach(function (ele,s) {
        var ceng=[];
        ceng[s]=newlct[s].offsetTop;
        var cen1=ceng.slice(1);
        var shu5=0;
        // console.log(cen1)
        cen1.push(10000);
        window.addEventListener("scroll",function () {
            dbi=document.body.scrollTop==0?document.documentElement:document.body;
            if ((ceng[s]-50<=dbi.scrollTop)&&(cen1[s]-50>dbi.scrollTop)) {
                newlct.forEach(function (el,a) {
                    addleft[a].style.background="#918888";
                });
                addleft[s].style.background="#c81623";
            }
        })
        addleft[s].onclick=function () {
            var ot=newlct[s].offsetTop-50;
            animate(dbi, {scrollTop:ot},1000);
            addleft[s].style.background="#c81623";
        };
        addleft[s].onmouseover=function () {
            newlct.forEach(function (el,a) {
                addleft[a].style.background="#918888";
            });
            addleft[s].style.background="#c81623";
        }
        addleft[10].onclick=function () {
            animate(dbi, {scrollTop: 0},1000);
        }
    })
    //结束
}