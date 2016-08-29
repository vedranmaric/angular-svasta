angular.module('routes', ['ngRoute', 'satellizer', 'ui.router','ngStorage'])
  .config(function($routeProvider,$authProvider) {
     $authProvider.loginUrl = '/api/authenticate';
        var skipIfLoggedIn = function($q, $auth) {
          var deferred = $q.defer();
          if ($auth.isAuthenticated()) {
            deferred.reject();
          } else {
            deferred.resolve();
          }
          return deferred.promise;
        };

        var loginRequired = function($q, $location, $auth) {
          var deferred = $q.defer();
          if ($auth.isAuthenticated()) {
            deferred.resolve();
          } else {
            $location.path('/login');
          }
          return deferred.promise;
        };

    	$routeProvider
    		.when('/', {
    			templateUrl:'../../views/pages/home.html' ,
    			controller: 'HomeController',
    		})
            .when('/login', {
                templateUrl: '../../views/pages/login.html',
                controller: 'LoginController',
                resolve: {
                      skipIfLoggedIn: skipIfLoggedIn
                    }   
            })

    		.when('/about', {
    			templateUrl: '../../views/pages/about.html',
    			controller:  'AboutController',
                resolve: {
                      loginRequired: loginRequired
                    }
    		})
    		.when('/categories', {
    			templateUrl: '../../views/pages/categories.html',
    			controller:  'CategoriesController',
                resolve: {
                      loginRequired: loginRequired
                    }
    		})
    		.when('/comments', {
    			templateUrl:'../../views/pages/comments.html',
    			controller:  'CommentController',
                resolve: {
                      loginRequired: loginRequired
                    }
    		});
    }).run(function($rootScope, $state, $localStorage) {

            // $stateChangeStart is fired whenever the state changes. We can use some parameters
            // such as toState to hook into details about the state as it is changing
            
            //$rootScope.$on('$stateChangeStart', function(event, toState) {
                
                // Grab the user from local storage and parse it to an object
                var user = JSON.parse( $localStorage.user);            

                // If there is any user data in local storage then the user is quite
                // likely authenticated. If their token is expired, or if they are
                // otherwise not actually authenticated, they will be redirected to
                // the auth state because of the rejected request anyway
                if(user) {

                    // The user's authenticated state gets flipped to
                    // true so we can now show parts of the UI that rely
                    // on the user being logged in
                    $rootScope.authenticated = true;

                    // Putting the user's data on $rootScope allows
                    // us to access it anywhere across the app. Here
                    // we are grabbing what is in local storage
                    $rootScope.currentUser = user;

                    // If the user is logged in and we hit the auth route we don't need
                    // to stay there and can send the user to the main state
                    /*if(toState.name === "auth") {

                        // Preventing the default behavior allows us to use $state.go
                        // to change states
                        event.preventDefault();

                        // go to the "main" state which in our case is users
                        $location.path('/');
                    }      */ 
                }
           // });
        });
/*






















  angular
        .module('routes', ['ui.router', 'satellizer'])
        .config(function($stateProvider, $urlRouterProvider, $authProvider) {

             var skipIfLoggedIn = function($q, $auth) {
                  var deferred = $q.defer();
                  if ($auth.isAuthenticated()) {
                    deferred.reject();
                  } else {
                    deferred.resolve();
                  }
                  return deferred.promise;
                };

                var loginRequired = function($q, $location, $auth) {
                  var deferred = $q.defer();
                  if ($auth.isAuthenticated()) {
                    deferred.resolve();
                  } else {
                    $location.path('/login');
                  }
                  return deferred.promise;
                };

            
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl:'../../views/pages/home.html' ,
                    controller: 'HomeController',
                    
                })
               .state('login', {
                    url: '/login',
                    templateUrl: '../../views/pages/login.html',
                    controller: 'LoginController',
                    resolve: {
                      skipIfLoggedIn: skipIfLoggedIn
                    }   
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: '../../views/pages/contact.html',
                    controller:  'ContactController',
                    resolve: {
                      loginRequired: loginRequired
                    }
                })
                 .state('about', {
                    url: '/about',
                    templateUrl: '../../views/pages/about.html',
                    controller:  'AboutController',
                    resolve: {
                      loginRequired: loginRequired
                    }
                })
                .state('comments', {
                    url: '/comments',
                    templateUrl:'../../views/pages/comments.html',
                    controller:  'CommentController',
                    resolve: {
                      loginRequired: loginRequired
                    }
                });
                $urlRouterProvider.otherwise('/');

        });

*/