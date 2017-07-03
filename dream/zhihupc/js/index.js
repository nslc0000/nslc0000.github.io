window.onload=function () {
    var navdj=document.querySelector(".navdj");
    var nav=document.querySelector(".nav");
    var syall=document.querySelector(".sy_all");
     var set=document.querySelector(".set");
     var syselect=document.querySelector(".sy_select");
     var day=document.querySelector("#day");
     var navlist=document.querySelectorAll(".navlist>ul");
     var indexp=document.querySelector(".indexp");
    navdj.addEventListener("touchend",function () {
        nav.style.left="0";
        nav.style.transition="all 0.5s";
        syall.style.display="block";
    });
     syall.addEventListener("touchend",function () {
        nav.style.left="-6.35rem";
        nav.style.transition="all 0.5s";
        syall.style.display="none";
        syselect.style.display="none";
    });
      set.addEventListener("touchend",function () {
          syselect.style.display="block";
          syall.style.display="block";
    });
    navlist.forEach(function(v){
        v.addEventListener("touchend",function () {
            nav.style.left="-6.35rem";
            nav.style.transition="all 0.5s";
            syall.style.display="none";
        });
    })
    indexp.addEventListener("touchend",function () {
        nav.style.left="-6.35rem";
        nav.style.transition="all 0.5s";
        syall.style.display="none";
    });
      function includeLinkStyle(url) {
 var link = document.createElement("link");
 link.rel = "stylesheet";
 link.type = "text/css";
 link.href = url;
 document.getElementsByTagName("head")[0].appendChild(link);
}
  day.addEventListener("touchend",function () {
          includeLinkStyle("css/night.css");
          syselect.style.display="none";

    });
};