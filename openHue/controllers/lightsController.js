openHue.controller("lightsController", function(	$scope, 
													$rootScope,  
													config,
													lightService) {
	$rootScope.buttons = [];
	
	lightService.getLights().then(function(data){
		$scope.lights=data;
	});
	
	/**
	 * Send request to toggle light state
	 */
	$scope.toggleLightOnState = function(id,light){
		lightService.toggleLightOnState(id,light);
	};
});