angular.module('configuratorModule').controller('unadunaRootController','$scope','USER_ROLES', 'AUTH_EVENTS', function($http, $scope, USER_ROLES){
	
	$scope.currentUser = null;
	$scope.userRoles = USER_ROLES;
	//$scope.isAuthorized = AuthService.isAuthorized;
	 
	$scope.setCurrentUser = function (user) {
		$scope.currentUser = user;
	};
	
});