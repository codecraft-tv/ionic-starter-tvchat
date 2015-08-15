var mod = angular.module('tvchat.controllers.show', []);



mod.controller('ShowCtrl', function ($scope, $rootScope, $state, $stateParams, $timeout, $ionicScrollDelegate, FIREBASE_URL, $firebaseArray, UserService, ShowsService) {

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
		console.log("Loading data for show ", $scope.show.name);

		var query = messagesRef
			.child("messages")
			.orderByChild("roomId")
			.equalTo($scope.roomId)
			.limitToLast(200);

		$scope.data.messages = $firebaseArray(query);
		$scope.data.messages.$loaded().then(function (data) {
			console.log("AngularFire $loaded");
			$ionicScrollDelegate.$getByHandle('show-page').scrollBottom(true);
			$scope.data.loading = false;
		});
	};

	$scope.sendMessage = function () {
		if ($scope.data.message) {
			var d = new Date();
			$scope.data.messages.$add({
				roomId: $scope.roomId,
				roomName: $scope.show.name,
				text: $scope.data.message,
				username: $scope.user.current.name,
				userId: $scope.user.current.userId,
				profilePic: $scope.user.current.profilePic,
				timestamp: d.getTime()
			});

			$scope.data.message = '';
			$ionicScrollDelegate.$getByHandle('show-page').scrollBottom(true);
		}
	};

	$scope.$on("$ionicView.enter", function () {
		console.log("Entering view");
		$scope.roomId = parseInt($stateParams.showId);
		$scope.show = ShowsService.getShow(parseInt($stateParams.showId));
		$scope.data.loading = true;
		$scope.data.messages = [];
		$scope.data.message = '';
		$scope.data.showInfo = false;
		$scope.loadMessages();
	});

	$scope.$on("$ionicView.beforeLeave", function () {
		console.log("Leaving view");
		$scope.data.messages.$destroy();
	});

});