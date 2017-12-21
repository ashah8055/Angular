
var myApp = angular.module('myApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider
	.when('/', {
        templateUrl: 'views/main.html',
           /* controller: 'MainController'
           */ 
        })
	 .when('/signup', {
                
                templateUrl: 'views/signup.html',
               controller: 'SignupController'   
            })          
              
        .otherwise({
            redirectTo: '/'
        })

}]);