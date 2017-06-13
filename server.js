var express 	= require('express'),
	app 		= express(),	
	mongoose 	= require('mongoose'),
	bodyParser  = require('body-parser'),
	cors = require("cors"),
	databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/l',
	//databaseUri = 'mongodb://gdpserver:gdpserver@ds111882.mlab.com:11882/heroku_fw10lrf3?authMechanism=SCRAM-SHA-1',
	sellerModel = require('./api/models/SellerModel');
	buyerModel = require('./api/models/BuyerModel');


app.options('*', cors()); 

var connectionOptions = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }; 

mongoose.connect(databaseUri,connectionOptions);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var sellerRoutes = require('./api/routes/SellerRoute');
var buyerRoutes = require('./api/routes/BuyerRoute');

app.use('/market',sellerRoutes);
app.use('/market',buyerRoutes);

var port = 3000;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('l-server running on port ' + port + '.');
});

module.exports = app;