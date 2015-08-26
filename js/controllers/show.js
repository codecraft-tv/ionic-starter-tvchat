var mod = angular.module('tvchat.controllers.show', []);



mod.controller('ShowCtrl', function ($scope,
                                     $stateParams,
                                     $firebaseArray,
                                     $ionicScrollDelegate,
                                     ShowsService,
                                     FIREBASE_URL,
                                     UserService) {

	$scope.user = UserService;


	$scope.showId = $stateParams.showId;
	$scope.show = ShowsService.getShow(parseInt($scope.showId));


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
			.orderByChild("showId")
			.equalTo($scope.showId)
			.limitToLast(200);

		$scope.data.messages = $firebaseArray(query);
		$scope.data.messages.$loaded().then(function (data) {
			console.log("AngularFire $loaded");
			$scope.data.loading = false;
			$ionicScrollDelegate.$getByHandle('show-page').scrollBottom(true);
		});

	};

	$scope.sendMessage = function () {

		if ($scope.data.message) {
			$scope.data.messages.$add({
				showId: $scope.showId,
				text: $scope.data.message,
				username: $scope.user.current.name,
				userId: $scope.user.current.userId,
				profilePic: $scope.user.current.profilePic,
				timestamp: new Date().getTime()
			});
			$scope.data.message = '';
			$ionicScrollDelegate.$getByHandle('show-page').scrollBottom(true);
		}

	};

	$scope.loadMessages();

});