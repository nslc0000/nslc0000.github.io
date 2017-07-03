var app=angular.module('app',['ngRoute','dir','seriver','ctrl','ngSanitize']);
app.run(function($rootScope,$ser){
         $ser.getNew().then(function(data){
         	 $rootScope.newdata=data.others;
         })
});
app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'tpl/whell.html',
        controller:'index',
    }).when('/list/:id',{
        templateUrl:'tpl/list.html',
        controller:'list',
    }).when('/shownews/:id',{
        templateUrl:'tpl/show.html',
        controller:'shownews',
    })
})