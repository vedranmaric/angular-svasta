
    <!DOCTYPE html>
    <html >
    <head>
     
      <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" />
      <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" />
      <link rel="stylesheet" href="css/app.css" />
    <link rel="stylesheet" href="css/custom.css" />
        
      <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>

      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
      <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.1/angular-ui-router.min.js"></script>
      <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-animate.js"></script>
      <script src="https://cdn.jsdelivr.net/satellizer/0.15.4/satellizer.min.js"></script>
           <script src="https://rawgithub.com/gsklee/ngStorage/master/ngStorage.js"></script>

      <script src="js/controllers/commentController.js"></script> 
      <script src="js/controllers/mainController.js"></script> 
      <script src="js/controllers/categoriesController.js"></script> 
      <script src="js/config/routes.js"></script> 
        <script src="js/services/commentService.js"></script> 
        <script src="js/services/linksService.js"></script> 
        <script src="js/app.js"></script> 
    </head>
    <body ng-app="commentApp"  ng-controller="NavbarController">

        
        <header>
            <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <p class="navbar-brand" ng-if="authenticated">Welcome {{ currentUser.name }}</p>
                </div>

                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#/"><i class="fa fa-home"></i> Home</a></li>
                    
                      <li ng-if="isAuthenticated()"><a href="#/comments"><i class="fa fa-comment"></i> Comments</a></li>
                      <li ng-if="isAuthenticated()"><a href="#/about"><i class="fa fa-shield"></i> About</a></li>
                      <li ng-if="isAuthenticated()"><a href="#/categories"><i class="fa fa-comment"></i> Categories</a></li>
                    
                      <li ng-if="!isAuthenticated()"><a href="#/login">Login</a></li>
                      <li ng-if="!isAuthenticated()"><a href="#/signup">Sign up</a></li>
                     
                  
                      <li  ng-if="isAuthenticated()"><a href ng-click=" logout() ">LogOut</a></li>
                    </div>
                </ul>
            </div>
            </nav>
        </header>

       
        <div id="main">
           <div class="page col-md-8 col-md-offset-2 {{ pageClass }}" ng-view></div>
           

        </div>

    </body>
    </html>