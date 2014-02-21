var trailModel = require('../models/trail.js');


module.exports = {
	home:function (req,res){
		res.render('index.jade',{
			trails: trailModel.getAllTrails()
		});
	},

	detail: function(req,res){
		res.render('detail.jade',{
			trails: trailModel.getAllTrails(),
			trail: trailModel.getTrail(req.params.name)
			});
		}
};