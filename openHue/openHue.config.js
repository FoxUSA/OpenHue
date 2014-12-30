/**
 * Angular js config file
 */
openHue.value("config", {
	/**
	 * Used to compute random short fade speed
	 */
	fadeSpeedShort: function(){ 
		return 250*Math.random()+200;
	},
	
	/**
	 * Used to compute random long fade speed
	 */
	fadeSpeedLong: function(){
		return 2000*Math.random()+200;
	}
});


