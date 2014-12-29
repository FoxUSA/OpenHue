openHue.controller("setupController", function(	$scope, 
												$rootScope,  
												config,
												apiService,
												$timeout) {
	$rootScope.buttons = [];
	
	$scope.api={
		url:"",
		user:""
			
			
	};
	
	/**
	 * Test users input to see if API 
	 */
	$scope.testAPI = function(){
		apiService.discoverManual($scope.api);
	};
});