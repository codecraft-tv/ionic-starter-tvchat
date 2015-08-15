var app = angular.module('tvchat.services.userService', []);


app.service('UserService', function (FIREBASE_URL,
                                     $q,
                                     $rootScope,
                                     $localstorage,
                                     $ionicPopup) {

	var self = {
		/* This contains the currently logged in user */
		current: {},

		/*
		 Makes sure the favorites property is preset on the current user.

		 firebase REMOVES any empty properties on a save. So we can't
		 bootstrap the user object with favorites: {}.
		 */
		ensureFavorite: function () {
			if (!self.current.favorites) {
				self.current.favorites = {};
			}
		},

		/*
		 If adds or removes a show from the users favorites list
		 */
		toggleFavorite: function (show) {
			// Toggles the favorite setting for a show for the current user.
			self.ensureFavorite();
			if (self.current.favorites[show.showid]) {
				self.removeFavorite(show)
			} else {
				self.addFavorite(show)
			}
			self.current.$save();
		},
		/*
		 Adds a show to the users favorites shows list
		 */
		addFavorite: function (show) {
			self.ensureFavorite();
			self.current.favorites[show.showid] = show;
		},
		/*
		 Removes a show from the users favorites shows list
		 */
		removeFavorite: function (show) {
			self.ensureFavorite();
			self.current.favorites[show.showid] = null;
		},
		/*
		 Checks to see if a user has already logged in in a previous session
		 by checking localstorage, if so then loads that user up from firebase.
		 */
		loadUser: function () {
			var d = $q.defer();

			//TODO

			return d.promise;
		},
		/*
		 Logout the user
		 */
		logoutUser: function () {
			//TODO
		},
		/*
		 Login the user
		 */
		loginUser: function () {
			var d = $q.defer();

			//
			// Initiate the facebook login process
			//
			console.log('Calling facebook login');
			openFB.login(
				function (response) {
					console.log(response);
					if (response.status === 'connected') {
						console.log('Facebook login succeeded');
						//
						// Facebook login was a success, get details about the current
						// user
						//
						var token = response.authResponse.accessToken;
						openFB.api({
							path: '/me',
							params: {},
							success: function (userData) {
								console.log('Got data from facebook about current user');
								console.log(userData);
								//
								// We got details of the current user now authenticate via firebase
								//
								console.log('Authenticating with firebase');

								//TODO

							},
							error: function (error) {
								console.error('Facebook error: ' + error.error_description);
								//
								// There was an error calling the facebook api to get details about the
								// current user. Show the user an error message
								//
								$ionicPopup.alert({
									title: "Facebook Error",
									template: error.error_description
								});
								d.reject(error);
							}
						});
					} else {
						console.error('Facebook login failed');
						//
						// There was an error authenticating with facebook
						// Show the user an error message
						//
						$ionicPopup.alert({
							title: "Facebook Error",
							template: 'Failed to login with facebook'
						});
						d.reject(error);
					}
				},
				{
					scope: 'email' // Comma separated list of permissions to request from facebook
				});
			return d.promise;
		}
	};

	self.loadUser();

	return self;
})
;