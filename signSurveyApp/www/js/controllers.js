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

.controller('newRecordCtrl', function($scope, $state, $cordovaDevice, $cordovaFile, $ionicPlatform, $cordovaEmailComposer, $ionicActionSheet, ImageService, FileService) {
		
            
            $scope.data = {};
            
            $ionicPlatform.ready(function() {
                                 $scope.images = FileService.images();
                                 //$scope.$apply();
                                 })
            
            $scope.addMedia = function() {
            $scope.hideSheet = $ionicActionSheet.show({
                                                      buttons: [
                                                                { text: 'Take photo' },
                                                                { text: 'Photo from library' }
                                                                ],
                                                      titleText: 'Add images',
                                                      cancelText: 'Cancel',
                                                      buttonClicked: function(index) {
                                                      $scope.addImage(index);
                                                      }
                                                      });
            }
            
            $scope.addImage = function(type) {
            $scope.hideSheet();
            ImageService.handleMediaDialog(type).then(function() {
                                                      $scope.$apply();
                                                      });
            }
            
            $scope.sendEmail = function() {
            if ($scope.images != null && $scope.images.length > 0) {
            var mailImages = [];
            var savedImages = $scope.images;
            for (var i = 0; i < savedImages.length; i++) {
            mailImages.push('base64:attachment'+i+'.jpg//' + savedImages[i]);
            }
            $scope.openMailComposer(mailImages);
            }
            }
            
            $scope.openMailComposer = function(attachments) {
            var bodyText = '<html><h2>My Images</h2></html>';
            var email = {
            to: '',
            attachments: attachments,
            subject: 'Devdactic Images',
            body: bodyText,
            isHtml: true
            };
            
            $cordovaEmailComposer.open(email, function(){
                                       console.log('email view dismissed');
                                       }, this);
            }
            

            
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
            
})

.controller('modifyRecordCtrl', function($scope, $state) {
            
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
            var overWrite = {
            
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
            
            }
            
            $scope.submitNR = function() {
            
            
            myFirebase.set(
            {
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
                }
            );
            $state.go('homePage');
            }
            $scope.cancelNR = function() {
            $state.go('homePage');
            }

})

.controller('optionsCtrl', function($scope, $ionicHistory) {
		
	$scope.oQuit = function() {
		$state.go('homePage');
	}
	
	$scope.oSubmit = function() {
		$state.go('homePage');
	}
		
})
 
