(function() {
	'use strict';

	angular.module('lab', ['ngRoute'])
		.config(['$routeProvider', configRoutes]);

	function configRoutes($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'src/js/views/default.html',
				controller: ''
			})
			.when('/login', {
				templateUrl: 'src/js/views/login.html',
				controller: 'LoginController'
			});

	}
})();