/**
 * @author - Jake Liscom 
 * @project - OpenHue
 */

/**
 * Light service
 */
openHue.service("apiService", function ($http, config) {	
	var self = this;
	/**
	 * Get API object
	 */
	this.getAPI = function(){
		return localStorage.getItem("api");
	};
	
	/**
	 * Get a promise to the API URL
	 * @returns - URL if API has been setup, null if has not
	 */
	this.getAPIURL=function(){
		return this.apiToURL(self.getAPI());
	};
	
	/**
	 * Format string from api object
	 * @param api - api object to use
	 * @return - the the formated URL string
	 */
	this.apiToURL=function(api){
		if(api!=null)
			return "//"+api.url+'/api/'+api.user;
		
		return null; 
	};
	
	/**
	 * Set the API object
	 */
	this.setAPI=function(api){
		return localStorage.setItem("api",api);
	};
	
	/**
	 * Search the network for a Hue controller with a manual given IP
	 * @returns - promise of a discovery response
	 */
	this.discoverManual = function(api){
		return $http.get(this.apiToURL(api)).then(
			function(response){//Successful
				if(response.status==200)
					return response.data.indexOf("error") > -1;	//TODO check if its an error
				throw response.status;
			},
			function(response){
				throw response.status;
			});
	};
	
	/**
	 * Search the network for a Hue controller
	 * @returns - promise of a discovery response
	 */
	this.discoverAuto = function(){
		return $http.get(self.getAPIURL() +"/description.xml").then(
			function(response){//Successful
				if(response.status==200)
					return response.data.indexOf("hue") > -1;//is a Hue device?
				throw response.status;
			},
			function(response){
				throw response.status;
			});
	};
	
	/**
	 * tryAuthenticateing a user
	 */
	this.testAuthenticate = function(){
		return $http.get(self.getAPIURL()).then(
				function(response){//Successful
					if(response.status==200)
						return;//
					throw response.status;
				},
				function(response){
					throw response.status;
				});
	};
	
	this.register = function(){
		
	};	
});