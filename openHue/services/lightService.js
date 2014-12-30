/**
 * @author - Jake Liscom 
 * @project - OpenHue
 */

/**
 * Light service
 */
openHue.service("lightService", function ($http, apiService) {	
	
	/**
	 * Get list of all lights
	 * @returns - array of lights id's are off by one
	 */
	this.getLights = function(){
		return $http.get(apiService.getAPIURL() +"/lights/").then(
			function(response){//Successful
				if(response.status==200){
					var data = [];
					var i =1;
					while(response.data[i]!=null){
						data.push(response.data[i]);
						i++;
					}
					
					return data;
				}
				throw response.status;
			},
			function(response){
				throw response.status;
			});
	};
	
	/**
	 * Toggle lights on state
	 */
	this.toggleLightOnState = function(id,light){
		var correctID = id+1;
		return $http.put(apiService.getAPIURL() +"/lights/"+correctID+"/state",{on:!light.state.on}).then(
				function(response){//Successful
					if(response.status==200){
						light.state.on=!light.state.on;
						return;
					}
					
					throw response.status;
				},
				function(response){
					throw response.status;
				});
	}
	
});