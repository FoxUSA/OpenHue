//Router
openHue.config(function($routeProvider){
	$routeProvider
		.when("/",
			{
				controller: "setupController",
				templateUrl: "openHue/partials/setupPartial.html"
			})
		.when("/lights",
			{
				controller: "lightsController",
				templateUrl: "openHue/partials/lightsPartial.html"
			})
		.otherwise({ redirectTo: "/" });
});