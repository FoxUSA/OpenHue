/**
 * @author - Jake Liscom 
 * @project - OpenHue
 */

/**
 * Light service
 */
openHue.service("lighthService", function ($http, api) {	
	
	/**
	 * Search
	 */
	this.getLights = function(){
		return $http.get(api.getAPIURL() +"/lights/").then(
			function(response){//Successful
				if(response.status==200)
					return response.data;	
				throw response.status;
			},
			function(response){
				throw response.status;
			});
	};
	
});