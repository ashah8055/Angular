var mainApp = angular.module("mainApp", ["ui.router"]);
mainApp.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: "/",
			templateUrl: "app/partials/home.tpl.html",
			controller: "onLoadCtrl"
		})
});
