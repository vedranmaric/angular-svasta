angular.module('linksService',[])
	.factory('Links', function($http){
		return {
			'get': function(){
				return $http.get('/links');
			}
			/*'save': function (commentData){
				return $http({
					method: 'POST',
					 url: '/comments',
                	headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                	data: $.param(commentData)
				});
			},
			'destroy': function(id){
				return $http.delete('comments/'+id);
			}*/
		};
	});