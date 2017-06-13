var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SellerSchema = new Schema({
	FirstName:String,
	LastName:String,
	PrimaryPhone:String,
	SecondaryPhone:String,
	SellerType:{
		Producer:String,
		Merchant:String
	},
	SellingGoods:{
		Area:String,
		Name:String,
		Quantity:Number,
		UnitPrice:Number,
		Date:Date,
	},
	ContactAddress:[{
		DoorNumber:String,
		BuildingNumber:String,
		BuildingName:String,
		Street:String,
		Area:String,
		City:String,
		Taluk:String,
		District:String,
		Zone:String,
		State:String,
		Pincode:String,
		Landmark:String
	}],
	FarmAddress:[{
		FarmName:String,
		Area:String,
		City:String,
		Taluk:String,
		District:String,
		Zone:String,
		State:String,
		Pincode:String,
		Landmark:String
	}],
	SocialCommunication:[{
		Email:String,
		WhatsApp:String,
		Facebook:String,
		Twitter:String		
	}]	
},{"strict":false});

module.exports = mongoose.model('Seller',SellerSchema);
