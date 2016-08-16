var app = angular.module('tvchat', [
	'ionic',
	'ngCordova',
	'ngOpenFB',
	'firebase',
	'angularMoment',
	'tvchat.controllers',
	'tvchat.services',
	'tvchat.filters',
	'tvchat.utils'
]);


app.constant("FACEBOOK_APP_ID", '<REPLACE-ME>');


app.run(function ($rootScope, $ionicPlatform, $cordovaStatusbar) {


		$ionicPlatform.ready(function () {

			// Hide the accessory bar by default
			if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}
			// Color the iOS status bar text to white
			if (window.StatusBar) {
				$cordovaStatusbar.overlaysWebView(true);
				$cordovaStatusbar.style(0); //Light
			}
		});
	});

app.run(function (ngFB, FACEBOOK_APP_ID) {
	ngFB.init({appId: FACEBOOK_APP_ID});
});

app.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('intro', {
				url: '/',
				templateUrl: 'templates/intro.html',
				controller: 'IntroCtrl'
			})

			.state('app', {
				url: "/app",
				abstract: true,
				templateUrl: "templates/menu.html",
				controller: 'MenuCtrl'
			})

			.state('app.search', {
				url: "/search",
				views: {
					'menuContent': {
						templateUrl: "templates/search.html",
						controller: 'SearchCtrl'
					}
				}
			})

			.state('app.show', {
				url: "/show/:showId",
				cache: false,
				views: {
					'menuContent': {
						templateUrl: "templates/show.html",
						controller: 'ShowCtrl'
					}
				}
			})
		;

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/');

	});
