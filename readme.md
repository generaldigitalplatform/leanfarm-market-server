
POST : http://localhost:270167/market/seller
PUT : http://localhost:270167/market/seller/:Id(PrimaryPhone/_id)
GET : http://localhost:270167/market/seller
GET : http://localhost:270167/market/seller/:Id(PrimaryPhone/_id)

{
	"FirstName":"Manikandan",
	"LastName":"Muthu",
	"PrimaryPhone":8248198560,
	"SecondaryPhone":8248198569,
	"SellerType":{
		"Producer":""
	},
	"SellingGoods":{
		"Area":"RamNagar",
		"Name":"Ca",
		"Quantity":"2000",
		"UnitPrice":"22",
		"Date":""
	},
	"ContactAddress":{
	"DoorNumber":10,
	"BuildingNumber":"",
	"BuildingName":"",
	"Street":"Sarojini Street",
	"Area":"Ramnagar",
	"City":"Coimbatore",
	"Taluk":"Coimbatore",
	"District":"Coimbatore",
	"Zone":"Coimbatore",
	"State":"Tamilnadu",
	"Pincode":643001,
	"Landmark":"HDFC Bank"
	},
	"FarmAddress":{
	"FarmName":"test",
	"Area":"Ramnagar",
	"City":"Coimbatore",
	"Taluk":"Coimbatore",
	"District":"Coimbatore",
	"Zone":"Coimbatore",
	"State":"Tamilnadu",
	"Pincode":643001,
	"Landmark":"HDFC Bank"
	},
	"SocialCommunication":{
	"Email":10,
	"WhatsApp":"",
	"Facebook":"",
	"Twitter":"Sarojini Street"
	}
}


POST : http://localhost:270167/market/buyer
PUT : http://localhost:270167/market/buyer/:Id(PrimaryPhone/_id)
GET : http://localhost:270167/market/buyer
GET : http://localhost:270167/market/buyer/:Id(PrimaryPhone/_id)


{
	"FirstName":"Manikandan",
	"LastName":"Muthu",
	"PrimaryPhone":8248198560,
	"SecondaryPhone":8248198569,
	"BuyerType":{
		"Retail":"",
		"WholeSale":"",
		"Consumer":""
	},
	"BuyingGoods":{
		"Area":"RamNagar",
		"Name":"Ca",
		"Quantity":"5000",
		"UnitPrice":"20",
		"Date":""
	},
	"ContactAddress":{
	"DoorNumber":10,
	"BuildingNumber":"",
	"BuildingName":"",
	"Street":"Sarojini Street",
	"Area":"Ramnagar",
	"City":"Coimbatore",
	"Taluk":"Coimbatore",
	"District":"Coimbatore",
	"Zone":"Coimbatore",
	"State":"Tamilnadu",
	"Pincode":643001,
	"Landmark":"HDFC Bank"
	},
	"SocialCommunication":{
	"Email":10,
	"WhatsApp":"",
	"Facebook":"",
	"Twitter":"Sarojini Street"
	}
}