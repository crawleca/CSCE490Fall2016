angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('homePage', {
    url: '/homePage',
    templateUrl: 'templates/homePage.html',
    controller: 'homePageCtrl'
  })

  .state('newRecord', {
    url: '/newRecord',
    templateUrl: 'templates/newRecord.html',
    controller: 'newRecordCtrl'
  })
  
  .state('modifyRecord', {
    url: '/modifyRecord',
    templateUrl: 'templates/modifyRecord.html',
    controller: 'modifyRecordCtrl'
  })
  
  .state('options', {
	  url: '/options',
	  templateUrl: 'templates/options.html',
	  controller: 'optionsCtrl'
  })

$urlRouterProvider.otherwise('/login')
        
});
