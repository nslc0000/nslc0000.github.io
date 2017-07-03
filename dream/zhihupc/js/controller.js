var ctrl=angular.module('ctrl',[]);
ctrl.controller('index',function($ser,$scope){
     $ser.getwheel.then(function(data){
     	    $scope.listdata=data.stories;
     	    var data=data.stories;
     	    var datas=data.splice(3,4);
            $scope.data=datas;
     });
});
ctrl.controller('list',function($ser,$scope,$routeParams){
              $ser.getId($routeParams.id).then(function(data){
                   $scope.data=data;
              })
});
ctrl.controller('shownews',function($ser,$scope,$routeParams){
    console.log($routeParams)
    $ser.getshowId($routeParams.id).then(function(data){
        $scope.body=data;
    })
});