angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope, $ionicPopup, $state, loginFirebase) {
	
	$scope.data = {};
	
		/*firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				$ionicPopup.alert({
					title: 'YES',
					template: 'User is already signed on'
				});	
				
				$state.go('homePage');
				
			} else {
				$ionicPopup.alert({
					title: 'NO',
				template: 'User is not logged on'
				});	
			}
		});*/

	$scope.login = function() {
		loginFirebase.login($scope);
	}
	
	$scope.signup = function() {
		$state.go('signup');
	}
})
   
.controller('signupCtrl', function($scope, $ionicHistory, createAccount) {
	
	$scope.data = {};
	
	$scope.createUser = function() {
		
		createAccount.createUser($scope);
	}
	
	$scope.backUser = function(){
		
		$ionicHistory.goBack();
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
		
		//$state.go('login');
	}	
})

.controller('newRecordCtrl', function($scope, $state) {
		
            
            $scope.data = {};
            
            $scope.submitNR = function() {
            
          
            var myFirebase = firebase.database().ref(Sign);
            
            var Sign = myFirebase.child("Sign");
            
            var msrmt = $scope.data.msrmt;
            var twoAlphaLegend = $scope.data.twoAlphaLegend;
            var fiveAlphaLegend = $scope.data.fiveAlphaLegend;
            var twoAlphaBkgrnd = $scope.data.twoAlphaBkgrnd;
            var fiveAlphaBkgrnd = $scope.data.fiveAlphaBkgrnd;
            var latitude = $scope.data.latitude;
            var longitude = $scope.data.longitude;
            var accuracy = $scope.data.accuracy;
            var barcode = $scope.data.barcode;
            var standardComments = $scope.data.standardComments;
            var userComments = $scope.data.userComments;
            var direction = $scope.data.direction;
            var height = $scope.data.height;
            var date = $scope.data.date;
            var time = $scope.data.time;
            

            Sign.push({msrmt, twoAlphaLegend, fiveAlphaLegend, twoAlphaBkgrnd, fiveAlphaBkgrnd, latitude, accuracy, barcode, standardComments, userComments, direction, height, date, time
                      });
            
           
            var a = document.getElementsByName('signForm') [0];
            a.reset();
            $state.go('homePage');
            return false;

            }
            
            $scope.cancelNR = function() {
                $state.go('homePage');
            }
            
            $scope.addImage = function() {
            alert("addImage pressed")
            }
})

.controller('modifyRecordCtrl', function($scope, $state) {
		
		
})

.controller('optionsCtrl', function($scope, $ionicHistory) {
		
	$scope.oQuit = function() {
		$ionicHistory.goBack();
	}
	
	$scope.oSubmit = function() {
		$ionicHistory.goBack();
	}
		
})
 
