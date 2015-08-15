var mod = angular.module('tvchat.controllers.show', []);



mod.controller('ShowCtrl', function ($scope,
                                     FIREBASE_URL,
                                     UserService) {

	$scope.user = UserService;

	$scope.show = {};

	$scope.data = {
		messages: [],
		message: '',
		loading: true,
		showInfo: false
	};

	var messagesRef = new Firebase(FIREBASE_URL);

	$scope.loadMessages = function () {
	};

	$scope.sendMessage = function () {
	};

	console.log("ShowCtrl-Created");

	$scope.$on("$ionicView.enter", function () {
		console.log("ShowCtrl-Enter");
	});

	$scope.$on("$ionicView.beforeLeave", function () {
		console.log("ShowCtrl-Leave");
	});

});