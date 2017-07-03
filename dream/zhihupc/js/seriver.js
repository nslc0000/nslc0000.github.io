var seriver=angular.module('seriver',[]);
seriver.factory('$ser',function($http,$q){
	return {
		getwheel:(function(){
			var def=$q.defer();
         $http({
         	method:'GET',
         	url:'php/data.php?url=http://news-at.zhihu.com/api/4/news/latest',
         }).then(function(data){
               def.resolve(data.data)
         })
          return def.promise;
		})(),
		getNew:function(){
			var def=$q.defer();
         $http({
         	method:'GET',
         	url:'php/data.php?url=http://news-at.zhihu.com/api/4/themes',
         }).then(function(data){
               def.resolve(data.data)
         })
          return def.promise;
		},
		getId:function(id){
			var def=$q.defer();
			$http({
				method:'GET',
				url:'php/data.php?url=http://news-at.zhihu.com/api/4/theme/'+id,
			}).then(function(data){
				def.resolve(data.data)
			})
			return def.promise;
		},
		getshowId:function(id){
			var def=$q.defer();
			$http({
				method:'GET',
				url:'php/data.php?url=http://news-at.zhihu.com/api/4/news/'+id,
			}).then(function(data){
				def.resolve(data.data)
			})
			return def.promise;
		}
	}
         

});