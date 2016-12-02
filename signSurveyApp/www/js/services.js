angular.module('app.services', [])

.service('login', function($state) {

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
		// User is signed in.
		//We need to sign out to sign in another user
		} else {
		// No user is signed in.
		//start the login in procedure
		}
	});
	
	
})

.factory('UserService', function($q, $ionicPopup) {
	
		function createUserFirebase(email, pw)
		{

		}
	
	return {
        createUser: function(name, email, pw, cpw) {
			
            var deferred = $q.defer();
            var promise = deferred.promise;
			
            if (pw == cpw && email != null && name != null && pw != null) {
					createUserFirebase(email,pw)
					deferred.resolve('Creating ' + name + '!');
            } else {
                deferred.reject('Check Syntax.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
	
})

.factory('LoginService', function($q, firbaseData) {
 
	function firebaseLogin(email, pw) {
		
		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				// User is signed in.
				alert("User already signed in");
	
			} else {
				// No user is signed in.
				firebase.auth().signInWithEmailAndPassword(email, pw).catch(function(error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
			
					var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
						template: errorMessage
					});
				});
			}
		});		
	}

    return {
        loginUser: function(email, pw) {
			
            var deferred = $q.defer();
            var promise = deferred.promise;
 
			//Final program will only be successful if firebaseLogin returned true
            if (email != null && pw !=null) {
				firebaseLogin(email,pw)
                deferred.resolve('Welcome ' + email + '!');
            } else {
                deferred.reject('Wrong credentials.');
				alert("Enter a valid email and something in the password")
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

.service('firbaseData', function () {
	
  /*// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCCv098ymUzetwwuG0E0U_qxhXcw4vJOLk",
    authDomain: "scdotproject-27a59.firebaseapp.com",
    databaseURL: "https://scdotproject-27a59.firebaseio.com",
    storageBucket: "scdotproject-27a59.appspot.com",
    messagingSenderId: "657470588429"
  };
  firebase.initializeApp(config);
  
  var rootRef = firebase.database().ref();
  
  return {
	  getRootRef: function () {
		  return rootRef;
	  },
	  getConfig : function() {
		  return config;
	  }
  };*/

})

.service('sharedProperties', function () {
	var property = 'First';
	return {
		getProperty: function () {
			return property;
            },
			setProperty: function(value) {
				property = value;
            }
        };
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);