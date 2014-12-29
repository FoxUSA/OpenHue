//Router
openHue.config(function($routeProvider){
	$routeProvider
		.when("/",
			{
				controller: "setupController",
				templateUrl: "openHue/partials/setupPartial.html"
			})
		.otherwise({ redirectTo: "/" });
});