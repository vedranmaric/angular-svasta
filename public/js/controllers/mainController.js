angular.module('mainController',['ngStorage'])
	.controller('HomeController', function ($scope){
		$scope.pageClass = 'page-home';
		$scope.message="zdravo";
	});



angular.module('mainController')
	.controller('AboutController', function($scope) {
		$scope.pageClass = 'page-about';
		$scope.message = 'About page.';
});



angular.module('mainController')
  .controller('NavbarController', function($scope,$location, $auth,$rootScope,$localStorage) {
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    $scope.logout = function() {

        $auth.logout().then(function() {
            $localStorage.user = null;
            $rootScope.authenticated = false;
            $rootScope.currentUser = null;
            $location.path('/');
        });
    }	
  });

angular.module('mainController')
  .controller('LoginController', function($scope, $location, $auth, $http, $rootScope,$localStorage) {
  		/*$scope.token = $localStorage.token;
         $scope.tokenClaims = Auth.getTokenClaims();*/
        $scope.loginError = false;
        $scope.loginErrorText;


        $scope.login = function() {

            var credentials = {
                email: $scope.user.email,
                password: $scope.user.password
            }
            
            // Use Satellizer's $auth service to login
            $auth.login(credentials).then(function(data){
            	return $http.get('api/authenticate/user');
            }, function(error){
            	$scope.loginError = true;
                $scope.loginErrorText = error.data.error;
            })
            .then(function(response) {
            	var user = JSON.stringify(response.data.user);
      				$localStorage.user = user;
      				$rootScope.authenticated = true;
      				$rootScope.currentUser = response.data.user;
      				console.log("weee"+$rootScope.currentUser);
            	/* $localStorage.token = response.token;*/
                
                $location.path('/');
            });
        }


  });

  /*$httpProvider.interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {
   return {
       'request': function (config) {
           config.headers = config.headers || {};
           if ($localStorage.token) {
               config.headers.Authorization = 'Bearer ' + $localStorage.token;
           }
           return config;
       },
       'responseError': function (response) {
           if (response.status === 401 || response.status === 403) {
               $location.path('/signin');
           }
           return $q.reject(response);
       }
   };
}]);*/