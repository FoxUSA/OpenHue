/**
 *randomly fade in element to have a wave effect 
 */
openHue.directive("randomFadeInDirective", function($timeout,config) {
	return {
		restrict: "C",//class
		link: function(scope, element, attrs) {
			element.hide().stop().fadeTo(config.fadeSpeedLong(),1);
		}
	};
});