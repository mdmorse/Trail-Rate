var mongoose = require('mongoose');


var trails = new mongoose.Schema({
	name: String,
	location: String,
	description: String
});

var trailModel = module.exports = mongoose.model('trail', trails);
trailModel.find({}, function(err,doc){
	console.log(doc);
});



//*****************Mock Data***************************


var Trail = function(name,location,description){
	this.name = name;
	this.location = location;
	this.description = description;
};

var trails = [
	new Trail('Mt Falcon','Morrison', 'Long and steep climb! Nice views at top with plenty more single track to explore. Fun and fast decent. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	new Trail('Matthews Winters','Morrison', 'Long and steep climb! Nice views at top with plenty more single track to explore. Fun and fast decent. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	new Trail('Another Morrison Trail','Morrison', 'Long and steep climb! Nice views at top with plenty more single track to explore. Fun and fast decent. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	new Trail('Apex', 'Golden Co', 'Steep climbs with plenty of technical challenges. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	new Trail('Golden Trail 1', 'Golden Co', 'Steep climbs with plenty of technical challenges. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	new Trail('Golden Trail 2', 'Golden Co', 'Steep climbs with plenty of technical challenges. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	new Trail('lair O Bear', 'Ideldale Co', 'Moderate climbs with rolling hills. Moderate technical challenges. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	new Trail('Evergreen Trail 1', 'Ideldale Co', 'Moderate climbs with rolling hills. Moderate technical challenges. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	new Trail('Evergreen Trail 2', 'Ideldale Co', 'Moderate climbs with rolling hills. Moderate technical challenges. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	new Trail('Dinosaur Ridge','Morrison','Very rocky trail that is highly technical. Moderate climbs.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	new Trail('Blue Lake','Boulder','Beautiful, 6 mile (round trip) hike with moderate grades. Ends at the scenic Blue Lake. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	new Trail('Boulder Trail 1','Boulder','Beautiful, 6 mile (round trip) hike with moderate grades. Ends at the scenic Blue Lake. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	new Trail('Boulder Trail 2','Boulder','Beautiful, 6 mile (round trip) hike with moderate grades. Ends at the scenic Blue Lake. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	new Trail('Elk Meadows','Evergreen','Beautiful, 6 mile (round trip) hike with moderate grades. Ends at the scenic Blue Lake. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	new Trail('Evergreen Trail 1','Evergreen','Beautiful, 6 mile (round trip) hike with moderate grades. Ends at the scenic Blue Lake. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'),
	new Trail('Evergreen Trail 2','Evergreen','Beautiful, 6 mile (round trip) hike with moderate grades. Ends at the scenic Blue Lake. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium non lectus eu porta. Etiam mollis consequat diam, sed luctus ligula placerat vel. Curabitur vitae lectus ac odio blandit faucibus. Aenean eu turpis vitae justo gravida aliquam. Sed mollis posuere elit id gravida. Donec viverra ultrices quam, at blandit ligula dictum non. Mauris dui dui, sagittis in massa vitae, malesuada varius justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;')

];

module.exports = {
	
		getTrail: function(name){
		var matchingTrail = trails.filter(function(t){
			console.log('GET TRAIL',t.location, name);
			return t.location===name;
			
		});
		return matchingTrail;
		},
		filter: function(){
			var results = [];
			for(i=0; i < trails.length; i++){
				if(results.indexOf(trails[i].location) < 0){
					results.push(trails[i].location);
				}
			}
			console.log('FILTER',results);
			return results;
		}
		//******************save function*******************
		// save:function(){
		// 	for(i=0; i<trails.length; i++){
		// 		var newCollection = new trailModel(trails[i]);
		// 		newCollection.save(); 
		// 	}
		// }
		
};

