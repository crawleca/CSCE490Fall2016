angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope, $ionicPopup, $state) {
	
	$scope.data = {};
	
	$scope.$on("$ionicView.enter", function ( scopes, states) {
		
		firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			$state.go('homePage')
		
			$ionicPopup.alert({
				title: 'Already Logged On',
				template: user.email + ' is logged on!'
			});
		} else {
		// No user is signed in.
		}
		});
		
		/*firebase.auth().signOut().then(function() {
		// Sign-out successful.
		}, function(error) {
		// An error happened.
		});*/
		
	})
	
	$scope.login = function() {

		firebase.auth().signInWithEmailAndPassword($scope.data.user, $scope.data.password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			
			$ionicPopup.alert({
				title: 'Login failed!',
				template: errorMessage
				});
		});
	}
	
	$scope.signup = function() {
		$state.go('signup')
	}
})
   
.controller('signupCtrl', function($scope, $ionicPopup, $state) {
		
	$scope.data = {};
	
	$scope.createUser = function() {
		
		firebase.auth().createUserWithEmailAndPassword($scope.data.email, $scope.data.password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			$ionicPopup.alert({
				title: 'Try again',
				template: errorMessage
			});
		});
		$state.go('login')
	}
})

.controller('homePageCtrl', function($scope, $state, $ionicHistory) {
	
	$ionicHistory.nextViewOptions({
		disableBack: true
	});
	
	$scope.newRecord = function() {
		$state.go('newRecord');
	}
	
	$scope.modifyRecord = function() {
		$state.go('modifyRecord');
	}
	
	$scope.searchRecord = function() {
		//What ever you want to do
	}
	
	$scope.options = function() {
		$state.go('options');
	}
	
	$scope.signOut = function() {
		
		firebase.auth().signOut().then(function() {
			// Sign-out successful.
		}, function(error) {
			alert("Failed to Sign Out");
		});
		
		$state.go('login');
	}	
})

.controller('newRecordCtrl', function($scope, $state) {
		
            $scope.submitNR = function() {
               $state.go('homePage')
            }
            
            $scope.cancelNR = function() {
                $state.go('homePage')
            }
})

.controller('modifyRecordCtrl', function($scope, $state) {
		
		
})

.controller('optionsCtrl', function($scope, $state) {
		
	$scope.oQuit = function() {
		$state.go('homePage');
	}
	
	$scope.oSubmit = function() {
		$state.go('homePage');
	}
		
})
 
