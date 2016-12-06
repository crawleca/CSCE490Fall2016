angular.module('app.services', [])

.factory('loginFirebase', function($ionicPopup) {
	
	/*function isValid (scope) {
		
		if(scope.data.user == null || scope.data.user.length ===0) {
	
			$ionicPopup.alert({
				title: 'Error',
				template: 'Please fill in Email'
			});
			
			return false;
			
		} else if (scope.data.password == null || scope.data.password.length ===0) {
			
			$ionicPopup.alert({
				title: 'Error',
				template: 'Please fill in Password'
			});	
			
			return false;
				
		}

		return true;
	}
	
	function firebaseLogin(scope) {
		
		firebase.auth().signInWithEmailAndPassword(scope.data.user, scope.data.password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
		
			$ionicPopup.alert({
				title: 'Login failed!',
				template: errorMessage
			});
		
		}).then(function(session) {
		
	
		});	
	}
	
	return {
		
		login: function(scope) {
			
			if(isValid(scope)) {
				firebaseLogin(scope);
			}						
		}
	}*/
})

.factory('createAccount', function($ionicPopup) {
	
	/*function isValid (scope) {
		
		if(scope.data.name == null || scope.data.name.length ===0) {
	
			$ionicPopup.alert({
				title: 'Error',
				template: 'Please fill in Profile Name'
			});
			
			return false;
			
		} else if (scope.data.email == null || scope.data.email.length ===0) {
			
			$ionicPopup.alert({
				title: 'Error',
				template: 'Please fill in Email'
			});	
			
			return false;
				
		} else if(scope.data.password == null || scope.data.password.length ===0) {
				
			$ionicPopup.alert({
				title: 'Error',
				template: 'Please fill in Password'
			});				
			
			return false;
				
		} else if (scope.data.confirmPassword == null || scope.data.confirmPassword.length ===0) {
			
			$ionicPopup.alert({
				title: 'Error',
				template: 'Please fill in Confirm Password'
			});
			
			return false;
			
		} else if(scope.data.password != scope.data.confirmPassword) {
			
			$ionicPopup.alert({
				title: 'Error',
				template: 'Passwords do not match!'
			});
			
			return false;
		}
		
		return true;	
	}
	
	function create(scope) {
		
		return firebase.auth().createUserWithEmailAndPassword(scope.data.email, scope.data.password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;

			$ionicPopup.alert({
				title: 'Error',
				template: errorMessage
			});
		});
	}
	
	function update(scope) {
		
		if (firebase.auth().currentUser) {
				
			firebase.auth().currentUser.updateProfile({
				displayName: scope.data.name
			}).then(function() {
				// created account with desired name.
				$ionicPopup.alert({
					title: 'Account Created',
					template: 'Account ' + scope.data.email + ' created for ' + scope.data.name
				});
				
			}, function(error) {
				
				//Could not update account with name

			});
		}
	}
	
	return {
		
        createUser: function(scope) {
			
			if(isValid(scope)) {
				
				create(scope);
				update(scope);
			}
        }
    };*/
});

