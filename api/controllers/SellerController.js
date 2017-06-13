var mongoose = require('mongoose'),
	sellerModel = mongoose.model('Seller');
var ObjectId = require('mongoose').Types.ObjectId;

exports.createNewSeller = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	
	var seller = new sellerModel(req.body);	
	seller.save(function(err, feedback){
	if(err)
		res.send(err);
	res.json(feedback);
	});
}
exports.findAllSeller = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	sellerModel.find({},function(err,feedback){
			if(err)	res.send(err);
			if(feedback)
			{
				res.json(feedback);
			}
		});
	};
exports.findSellerById = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	var sellerObjId = new ObjectId((req.params.Id.length < 12) ? "123456789012" : req.params.Id);
	var query = {$or:[{"_id":sellerObjId},{"PrimaryPhone":req.params.Id},{"SecondaryPhone":req.params.Id},{'ContactAddress.Pincode':req.params.Id},{'ContactAddress.City':req.params.Id},{'ContactAddress.Zone':req.params.Id},{'ContactAddress.State':req.params.Id},{'ContactAddress.Area':req.params.Id}]};
	
	sellerModel.findOne(query,function(err,feedback){
		if (err) res.send(err);;
		if(feedback)
		{
			res.json(feedback);
		}
	}).maxTime(1).exec();
};
exports.updateSellerById = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	
	var updateData = req.body;
	var options = {upsert:true,new: false};
	
	var sellerObjId = new ObjectId((req.params.Id.length < 12) ? "123456789012" : req.params.Id);
	var query = {$or:[{"_id":sellerObjId},{"PrimaryPhone":req.params.Id},{"SecondaryPhone":req.params.Id},{'ContactAddress.Pincode':req.params.Id},{'ContactAddress.City':req.params.Id},{'ContactAddress.Zone':req.params.Id},{'ContactAddress.State':req.params.Id},{'ContactAddress.Area':req.params.Id}]};
	
	sellerModel.findOneAndUpdate(query,{$set:updateData},options,function(err,feedback){
		if (err) res.send(err);;
		if(feedback)
		{
			res.json(feedback);
		}
	});
};
exports.deleteAllSeller = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	sellerModel.remove({},function(err,feedback){
			if(err) res.send(err);
			if(feedback)
			{
				res.json(feedback);
			}
		});
	};
exports.deleteSellerById = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	var updateData = req.body;
	var options = {upsert:true,new: false};
	
	var sellerObjId = new ObjectId((req.params.Id.length < 12) ? "123456789012" : req.params.Id);
	var query = {$or:[{"_id":sellerObjId},{"PrimaryPhone":req.params.Id},{"SecondaryPhone":req.params.Id},{'ContactAddress.Pincode':req.params.Id},{'ContactAddress.City':req.params.Id},{'ContactAddress.Zone':req.params.Id},{'ContactAddress.State':req.params.Id},{'ContactAddress.Area':req.params.Id}]};	

	sellerModel.findOneAndRemove(query,function(err,feedback){
		if (err) res.send(err);;
		if(feedback)
		{
			res.json(feedback);
		}
	});
};
