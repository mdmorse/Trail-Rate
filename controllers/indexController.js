var trailModel = require('../models/trail.js');


module.exports = {
	home:function (req,res){
		res.render('index.jade',{
			trails: trailModel.filter()
		});
	},

	detail: function(req,res){
		var trail = trailModel.getTrail(req.query.location);
		res.send(trail);
	}

};