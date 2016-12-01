angular.module('app.services', [])

.factory('UserService', function($q) {
	
		function createUserFirebase(email, pw)
		{
			/*alert("Running create user");
			firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			alert(errorCode);
			alert(errorMessage);
			});*/
			
			var ref = new Firebase("https://scdotproject-27a59.firebaseio.com/");

			ref.createUser({
				email    : email,
				password : pw
			}, function(error, userData) {
				if (error) {
					console.log("Error creating user:", error);
					alert(error);
				} else {
				console.log("Successfully created user account with uid:", userData.uid);
				alert(userData.uid);
				}
			});
		}
	
	    return {
        createUser: function(name, email, pw, cpw) {
			
            var deferred = $q.defer();
            var promise = deferred.promise;
			
            if (pw == cpw && email != null && name != null && pw != null) {
                deferred.resolve('Creating ' + name + '!');
				createUserFirebase(email,pw);
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

.factory('LoginService', function($q) {

	// Initialize Firebase
	/*var config = {
		apiKey: "AIzaSyCCv098ymUzetwwuG0E0U_qxhXcw4vJOLk",	
		authDomain: "scdotproject-27a59.firebaseapp.com",
		databaseURL: "https://scdotproject-27a59.firebaseio.com",
		storageBucket: "scdotproject-27a59.appspot.com",
		messagingSenderId: "657470588429"
  };
  firebase.initializeApp(config);*/
  
  function firebaseLogin(email, pw) {
	  
	  var ref = new Firebase("https://scdotproject-27a59.firebaseio.com/");
		ref.authWithPassword({
			email    : email,
			password : pw
		}, function(error, authData) {
		if (error) {
			console.log("Login Failed!", error);
			alert(error);
		} else {
			console.log("Authenticated successfully with payload:", authData);
			alert(userData.uid);
		}
		});
  }

    return {
        loginUser: function(email, pw) {
			
            var deferred = $q.defer();
            var promise = deferred.promise;
 
			//Final program will only be successful if firebaseLogin returned true
            if (email != null && pw !=null /*&& firebaseLogin(email,pw)*/) {
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

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);