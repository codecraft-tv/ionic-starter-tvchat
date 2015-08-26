var mod = angular.module('tvchat.services.userService', []);


mod.service('UserService', function (FIREBASE_URL, $q, $rootScope, $localstorage, $ionicPopup, $firebaseAuth, $firebaseObject) {


	var ref = new Firebase(FIREBASE_URL);
	var usersRef = new Firebase(FIREBASE_URL + "/users");

	var self = {
		/*****************************************************
		 *  This contains the currently logged in user
		 *****************************************************/
		current: {},

		/*****************************************************
		 *  Adds or removes a show from the users favorites list
		 *****************************************************/
		toggleFavorite: function (show) {

			if (!self.current.favorites) {
				//
				// Makes sure the favorites property is preset on the current user.
				// firebase REMOVES any empty properties on a save. So we can't
				// bootstrap the user object with favorites: {}.
				//
				self.current.favorites = {};
			}
			if (self.current.favorites[show.showid]) {
				//
				// Removes a show from the users favorites shows list
				//
				self.current.favorites[show.showid] = null;
			} else {
				//
				// Adds a show to the users favorites shows list
				//
				self.current.favorites[show.showid] = show;
			}
			self.current.$save();
		},

		/*****************************************************
		 * Checks to see if a user has already logged in in a previous session
		 * by checking localstorage, if so then loads that user up from firebase.
		 *****************************************************/
		loadUser: function () {
			var d = $q.defer();

			// Check local storage to see if there is a user already logged in
			var currentUserId = $localstorage.get('tvchat-user');
			if (currentUserId) {
				// If there is a logged in user then load up the object via firebase
				// and use $firebaseObject to keep it in sync between our
				// application and firebase.
				console.debug("Found previously logged in user, loading from firebase");
				var user = $firebaseObject(usersRef.child(currentUserId));
				user.$loaded(function () {
					// When we are sure the object has been completely
					// loaded from firebase then resolve the promise.
					self.current = user;
					d.resolve(self.current);
				});
			} else {
				d.resolve();
			}
			return d.promise;
		},

		/*****************************************************
		 * Logout the user
		 *****************************************************/
		logoutUser: function () {
			$localstorage.set('tvchat-user', null);
			self.current = {};
		},

		/*****************************************************
		 * Login the user
		 *****************************************************/
		loginUser: function () {
			var d = $q.defer();


			self.loadUser().then(function (user) {
				if (user) {
					d.resolve(self.current);
				}
				else {


					//
					// Initiate the facebook login process
					//
					console.log('Calling facebook login');
					openFB.login(
						function (response) {
							console.log(response);
							if (response.status === 'connected') {
								console.log('Facebook login succeeded');
								var token = response.authResponse.accessToken;
								console.log('Token: ', token);
								//
								// Facebook login was a success, get details about the current
								// user
								//
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

										var auth = $firebaseAuth(ref);
										auth.$authWithOAuthToken("facebook", token)
											.then(function (authData) {
												console.log("Authentication success, logged in as:", authData.uid);
												console.log(authData);
												//
												// We've authenticated, now it's time to either get an existing user
												// object or create a new one.
												//
												usersRef.child(authData.uid)
													.transaction(function (currentUserData) {
														if (currentUserData === null) {
															//
															// If the transaction is a success and the current user data is
															// null then this is the first time firebase has seen this user id
															// so this user is NEW.
															//
															// Any object we return from here will be used as the user data
															// in firebase
															//
															return {
																'name': userData.name,
																'profilePic': 'http://graph.facebook.com/' + userData.id + '/picture',
																'userId': userData.id
															};
														}
													},
													function (error, committed) {
														//
														// This second function in the transaction clause is always called
														// whether the user was created or is being retrieved.
														//
														// We want to store the userid in localstorage as well as load the user
														// and store it in the self.current property.
														//
														$localstorage.set('tvchat-user', authData.uid);
														self.current = $firebaseObject(usersRef.child(authData.uid));
														self.current.$loaded(function () {
															// When we are sure the object has been completely
															// loaded from firebase then resolve the promise.
															d.resolve(self.current);
														});
													});
											})
											.catch(function (error) {
												console.error("Authentication failed:", error);
												//
												// We've failed to authenticate, show the user an error message.
												//
												$ionicPopup.alert({
													title: "Error",
													template: 'There was an error logging you in with facebook, please try later.'
												});
												d.reject(error);
											});
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
								d.reject();
							}
						},
						{
							scope: 'email'
						});
				}
			});
			return d.promise;
		}
	};

	self.loadUser();

	return self;
})
;