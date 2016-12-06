angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope, $ionicPopup, $state) {
	
	$scope.data = {};
	
	
		function isValid () {
		
		if($scope.data.user == null || $scope.data.user.length ===0) {
	
			$ionicPopup.alert({
				title: 'Error',
				template: 'Please fill in Email'
			});
			
			return false;
			
		} else if ($scope.data.password == null || $scope.data.password.length ===0) {
			
			$ionicPopup.alert({
				title: 'Error',
				template: 'Please fill in Password'
			});	
			
			return false;
				
		}

		return true;
	}
	
	function firebaseLogin() {
		
		firebase.auth().signInWithEmailAndPassword($scope.data.user, $scope.data.password).catch(function(error) {
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
		
		function login() {
			
			if(isValid()) {
				firebaseLogin();
			}						
		}
	
	$scope.login = function() {
		login();
	}
	
	$scope.signup = function() {
		$state.go('signup');
	}
})
   
.controller('signupCtrl', function($scope, $ionicPopup, $ionicHistory) {
	
	$scope.data = {};
	
	function isValid () {
		
		if($scope.data.name == null || $scope.data.name.length ===0) {
	
			$ionicPopup.alert({
				title: 'Error',
				template: 'Please fill in Profile Name'
			});
			
			return false;
			
		} else if ($scope.data.email == null || $scope.data.email.length ===0) {
			
			$ionicPopup.alert({
				title: 'Error',
				template: 'Please fill in Email'
			});	
			
			return false;
				
		} else if($scope.data.password == null || $scope.data.password.length ===0) {
				
			$ionicPopup.alert({
				title: 'Error',
				template: 'Please fill in Password'
			});				
			
			return false;
				
		} else if ($scope.data.confirmPassword == null || $scope.data.confirmPassword.length ===0) {
			
			$ionicPopup.alert({
				title: 'Error',
				template: 'Please fill in Confirm Password'
			});
			
			return false;
			
		} else if($scope.data.password != $scope.data.confirmPassword) {
			
			$ionicPopup.alert({
				title: 'Error',
				template: 'Passwords do not match!'
			});
			
			return false;
		}
		
		return true;	
	}
	
	function create() {
		
		return firebase.auth().createUserWithEmailAndPassword($scope.data.email, $scope.data.password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;

			$ionicPopup.alert({
				title: 'Error',
				template: errorMessage
			});
		});
	}
	
	function update() {
		
		if (firebase.auth().currentUser) {
				
			firebase.auth().currentUser.updateProfile({
				displayName: $scope.data.name
			}).then(function() {
				// created account with desired name.
				$ionicPopup.alert({
					title: 'Account Created',
					template: 'Account ' + $scope.data.email + ' created for ' + $scope.data.name
				});
				
			}, function(error) {
				
				//Could not update account with name

			});
		}
	}
	
	function createAccount(){
			
		if(isValid()) {
				
			create();
			update();
		}
    }
	
	
	$scope.createUser = function() {
		
		createAccount();
	}
	
	$scope.backUser = function(){
		
		$ionicHistory.goBack();
	}	
})

.controller('homePageCtrl', function($scope, $state) {
	
	$scope.newRecord = function() {
		$state.go('newRecord');
	}
	
	$scope.modifyRecord = function() {
		$state.go('modifyRecord');
	}
	
	/*$scope.searchRecord = function() {
		//What ever you want to do
	}*/
	
	$scope.options = function() {
		$state.go('options');
	}
	
	$scope.signOut = function() {
		
		firebase.auth().signOut().then(function() {
			// Sign-out successful.
		}, function(error) {
			alert("Failed to Sign Out");
		});
	}	
})

.controller('newRecordCtrl', function($scope, $ionicHistory, $cordovaCamera) {

	$scope.data = {};
		
	$scope.submitNR = function() {  
	
		var directory = firebase.database().ref("Sign");
		var newRecord = directory.push();
		
		newRecord.set({
			accuracy: $scope.data.accuracy,
			barcode: $scope.data.barcode,
			date: $scope.data.date,
			direction: $scope.data.direction,
			fiveAlphaBkgrnd: $scope.data.fiveAlphaBkgrnd,
			fiveAlphaLegend: $scope.data.fiveAlphaLegend,
			height: $scope.data.height,
			latitude: $scope.data.latitude,
			longitude: $scope.data.longitude,
			msrmt: $scope.data.msrmt,
			standardComments: $scope.data.standardComments,
			twoAlphaBkgrnd: $scope.data.twoAlphaBkgrnd,
			twoAlphaLegend: $scope.data.twoAlphaLegend,
			userComments: $scope.data.userComments
		});
            
		/*var myFirebase = firebase.database().ref(Sign);
        
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
            

        Sign.push({
			msrmt,
			twoAlphaLegend,
			fiveAlphaLegend,
			twoAlphaBkgrnd,
			fiveAlphaBkgrnd,
			latitude,
			accuracy,
			barcode,
			standardComments,
			userComments,
			direction,
			height,
			date,
			time
		});*/
            
         $ionicHistory.goBack();
	}
	
	$scope.takePhoto = function () {
		var options = {
			quality: 75,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
   
        $cordovaCamera.getPicture(options).then(function (imageData) {
			$scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function (err) {
			// An error occured. Show a message to the user
        });
    }
	
	$scope.cancelNR = function() {
		$ionicHistory.goBack();
    }    
})

.controller('modifyRecordCtrl', function($scope, $ionicHistory) {
            
	$scope.data = {}
            
		var myFirebase = firebase.database().ref("Sign/1");
				

		myFirebase.once('value').then(function(snapshot) {
			snapshot.val().accuracy;
			snapshot.val().barcode;
			snapshot.val().date;
			snapshot.val().direction;
			snapshot.val().fiveAlphaBkgrnd;
			snapshot.val().fiveAlphaLegend;
			snapshot.val().height;
			snapshot.val().latitude;
			snapshot.val().longitude;
			snapshot.val().msrmt;
			snapshot.val().standardComments;
			snapshot.val().twoAlphaBkgrnd;
			snapshot.val().twoAlphaLegend;
			snapshot.val().userComments;
		})
				
		/*var overWrite = {     
			accuracy: $scope.data.accuracy,
			barcode: $scope.data.barcode,
			date: $scope.data.date,
			direction: $scope.data.direction,
			fiveAlphaBkgrnd: $scope.data.fiveAlphaBkgrnd,
			fiveAlphaLegend: $scope.data.fiveAlphaLegend,
			height: $scope.data.height,
			latitude: $scope.data.latitude,
			longitude: $scope.data.longitude,
			msrmt: $scope.data.msrmt,
			standardComments: $scope.data.standardComments,
			twoAlphaBkgrnd: $scope.data.twoAlphaBkgrnd,
			twoAlphaLegend: $scope.data.twoAlphaLegend,
			userComments: $scope.data.userComments`	
		}*/
            
    $scope.updateRecord = function() {
           
		myFirebase.set({
			accuracy: $scope.data.accuracy,
			barcode: $scope.data.barcode,
			date: $scope.data.date,
			direction: $scope.data.direction,
			fiveAlphaBkgrnd: $scope.data.fiveAlphaBkgrnd,
			fiveAlphaLegend: $scope.data.fiveAlphaLegend,
			height: $scope.data.height,
			latitude: $scope.data.latitude,
			longitude: $scope.data.longitude,
			msrmt: $scope.data.msrmt,
			standardComments: $scope.data.standardComments,
			twoAlphaBkgrnd: $scope.data.twoAlphaBkgrnd,
			twoAlphaLegend: $scope.data.twoAlphaLegend,
			userComments: $scope.data.userComments
		});
				
		$ionicHistory.goBack();
    }
			
    $scope.cancelNR = function() {
		$ionicHistory.goBack();
    }
})

.controller('optionsCtrl', function($scope, $ionicHistory) {
		
	$scope.oQuit = function() {
		$ionicHistory.goBack();
	}
	
	$scope.oSubmit = function() {
		$ionicHistory.goBack();
	}
		
})
 
