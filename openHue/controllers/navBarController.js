openHue.controller("navBarController", function(	$scope, 
													$rootScope,
													apiService) {
	if(apiService.getAPIURL()!=null)
		$rootScope.showMenu=true;
	
	/**
     * Load menu
     */
    $rootScope.$on("showMenu", function(event, args) {
    	$rootScope.showMenu=true;
    });
});