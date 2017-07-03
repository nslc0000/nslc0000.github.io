var dir=angular.module('dir',[]);
dir.directive('whell',function(){
     return {
         restrict:'AECM',
         templateUrl:'directive_tpl/whell.html',
         replace:true,
          scope:{
            data:"="
          },
         link:function(scope,elem){
           var par=elem.parent().parent();
    var mySwiper=new Swiper(par,{
        initialSlide:0,
        loop:true,
        autoplay : 2000,
        speed:300,
       pagination : '.swiper-pagination',
    })
         	 
         }
     }
});
dir.directive('indexlist',function(){
        return {
          restrict:'AECM',
          templateUrl:'directive_tpl/list1.html',
          replace:true,
          scope:{
            ta:"="
          },
        };
});
dir.directive('titles',function(){
    return{
        restrict:'AECM',
        template:'<span>{{ti}}</span>',
        replace:true,
        scope:{
            ti:"@"
        },
    };
});
