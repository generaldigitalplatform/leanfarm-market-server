var mongoose = require('mongoose'),
	buyerModel = mongoose.model('Buyer');
var ObjectId = require('mongoose').Types.ObjectId;

exports.createNewBuyer = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	
	var buyer = new buyerModel(req.body);	
	buyer.save(function(err, feedback){
	if(err)
		res.send(err);
	res.json(feedback);
	});
}
exports.findAllBuyer = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	buyerModel.find({},function(err,feedback){
			if(err)	res.send(err);
			if(feedback)
			{
				res.json(feedback);
			}
		});
	};
exports.findBuyerById = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	var buyerObjId = new ObjectId((req.params.Id.length < 12) ? "123456789012" : req.params.Id);
	var query = {$or:[{"_id":buyerObjId},{"PrimaryPhone":req.params.Id},{"SecondaryPhone":req.params.Id},{'ContactAddress.Pincode':req.params.Id},{'ContactAddress.City':req.params.Id},{'ContactAddress.Zone':req.params.Id},{'ContactAddress.State':req.params.Id},{'ContactAddress.Area':req.params.Id}]};
	
	buyerModel.findOne(query,function(err,feedback){
		if (err) res.send(err);;
		if(feedback)
		{
			res.json(feedback);
		}
	}).maxTime(1).exec();
};
exports.updateBuyerById = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	
	var updateData = req.body;
	var options = {upsert:true,new: false};
	
	var buyerObjId = new ObjectId((req.params.Id.length < 12) ? "123456789012" : req.params.Id);
	var query = {$or:[{"_id":buyerObjId},{"PrimaryPhone":req.params.Id},{"SecondaryPhone":req.params.Id},{'ContactAddress.Pincode':req.params.Id},{'ContactAddress.City':req.params.Id},{'ContactAddress.Zone':req.params.Id},{'ContactAddress.State':req.params.Id},{'ContactAddress.Area':req.params.Id}]};
	
	buyerModel.findOneAndUpdate(query,{$set:updateData},options,function(err,feedback){
		if (err) res.send(err);;
		if(feedback)
		{
			res.json(feedback);
		}
	});
};
exports.deleteAllBuyer = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	buyerModel.remove({},function(err,feedback){
			if(err) res.send(err);
			if(feedback)
			{
				res.json(feedback);
			}
		});
	};
exports.deleteBuyerById = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	var updateData = req.body;
	var options = {upsert:true,new: false};
	
	var buyerObjId = new ObjectId((req.params.Id.length < 12) ? "123456789012" : req.params.Id);
	var query = {$or:[{"_id":buyerObjId},{"PrimaryPhone":req.params.Id},{"SecondaryPhone":req.params.Id},{'ContactAddress.Pincode':req.params.Id},{'ContactAddress.City':req.params.Id},{'ContactAddress.Zone':req.params.Id},{'ContactAddress.State':req.params.Id},{'ContactAddress.Area':req.params.Id}]};	

	buyerModel.findOneAndRemove(query,function(err,feedback){
		if (err) res.send(err);;
		if(feedback)
		{
			res.json(feedback);
		}
	});
};
