var Trail = function(name,location,description){
	this.name = name;
	this.location = location;
	this.description = description;
};

var trails = [
	new Trail('Mt Falcon','Morrison Co', 'Long and steep climb! Nice views at top with plenty more single track to explore. Fun and fast decent. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	
	new Trail('Apex', 'Golden Co', 'Steep climbs with plenty of technical challenges. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	
	new Trail('lair O Bear', 'Ideldale Co', 'Moderate climbs with rolling hills. Moderat technical challenges. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	
	new Trail('Dinosaur Ridge','Morrison','Very rocky trail that is highly technical. Moderate climbs.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	
	new Trail('Blue Lake','Boulder','Beautiful, 6 mile (round trip) hike with moderate grades. Ends at the scenic Blue Lake. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	
	new Trail('Elk Meadows','Evergreen Co','Beautiful, 6 mile (round trip) hike with moderate grades. Ends at the scenic Blue Lake. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;')



];

module.exports = {
	getAllTrails: function(){
		return trails.slice();
	},
	getTrail: function(name){
		var matchingTrail = trails.filter(function(t){
			return t.location===name;
			
		});
		return matchingTrail[0];
	}
};

