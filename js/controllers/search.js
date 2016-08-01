var mod = angular.module('tvchat.controllers.search', []);

mod.controller('SearchCtrl', function($scope, $state, $stateParams, $ionicListDelegate, ShowsService, UserService) {

	$scope.search = {
		'name':''
	};

	$scope.showService = ShowsService;
	$scope.user = UserService;
});