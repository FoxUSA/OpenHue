openHue.controller("setupController", function(	$scope, 
												$rootScope,  
												config,
												apiService,
												$location) {
	$rootScope.buttons = [];
	
	$scope.api={
		url:"",
		user:""
			
			
	};
	
	/**
	 * Test users input to see if API 
	 */
	$scope.testAPI = function(){
		try{
			apiService.discoverManual($scope.api).then(function(){
				apiService.setAPI($scope.api);
				$rootScope.$emit("showMenu", {});
				$location.path("/lights/");
			});
		} catch(e){
			console.log(e);
		}
	};
});