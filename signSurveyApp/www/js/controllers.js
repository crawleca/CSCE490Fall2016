angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope, LoginService, $ionicPopup, $state) {
	
	$scope.data = {};
	
	$scope.login = function() {
		LoginService.loginUser($scope.data.user, $scope.data.password).success(function(data) {
			$state.go('homePage');
		}).error(function(data) {
			var alertPopup = $ionicPopup.alert({
				title: 'Login failed!',
				template: 'Please check your credentials! All you have to do is enter a valid email and something in password'
			});
		})
	}
	
	$scope.signup = function() {
		$state.go('signup')
	}
})
   
.controller('signupCtrl', function($scope, UserService, $ionicPopup, $state) {
		
	$scope.data = {};
	
	$scope.createUser = function() {
		
		UserService.createUser($scope.data.name, $scope.data.email, $scope.data.password, $scope.data.confirmPassword).success(function(data) {
			$state.go('login');
		}).error(function(data) {
			var alertPopup = $ionicPopup.alert({
				title: 'Creation failed',
				template: 'Please check syntax!'
			});
		})
	}
})

.controller('homePageCtrl', function($scope, $state) {
	
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
		$state.go('login');
	}
	
	
})

.controller('newRecordCtrl', function($scope, $state) {
		
		
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
 