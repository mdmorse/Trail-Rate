var Trail = function(name,location,description){
	this.name = name;
	this.location = location;
	this.description = description;
};

var trails = [
	new Trail('Mt Falcon','Morrison Co', 'Long and steep climb! Nice views at top with plenty more single track to explore. Fun and fast decent.'),
	new Trail('Apex', 'Golden Co', 'Steep climbs with plenty of technical challenges'),
	new Trail('lair O Bear', 'Ideldale Co', 'Moderate climbs with rolling hills. Moderat technical challenges'),
	new Trail('Dinosaur Ridge','Morrison Co','Very rocky trail that is highly technical. Moderate climbs'),
	new Trail('Blue Lake','Boulder','Beautiful, 6 mile (round trip) hike with moderate grades. Ends at the scenic Blue Lake')

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

