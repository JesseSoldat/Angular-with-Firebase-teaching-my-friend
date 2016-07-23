let config = function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('root', {
			abstract: true,
			controller: 'LoginCtrl as vm',
			templateUrl: 'templates/app-core/layout.html'
		})
		.state('login', {
			url: '/',
			controller: 'LoginCtrl as vm',
			templateUrl: 'templates/app-core/login.html'
		})
		.state('root.dash', {
			url: '/dash',
			controller: 'DashCtrl as vm',
			templateUrl: 'templates/app-core/dash.html'
		})
		.state('root.profile', {
			url: '/profile',
			controller: 'ProfileCtrl as vm',
			templateUrl: 'templates/app-profile/profile.html'
		})
		.state('root.edit-profile', {
			url: '/edit-profile',
			controller: 'EditProfileCtrl as vm',
			templateUrl: 'templates/app-profile/edit-profile.html'
		})
		;

};
config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default config;