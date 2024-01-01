const mongoose = require('mongoose');

const MONGO_BASE = process.env.MONGO_BASE || "oer-converter-mongodb:27017";
MongoUrl = `mongodb://${MONGO_BASE}/oer-converter-feedback`

mongoose.connect(MongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	if (!err)
		console.log('MongoDB connection successful...');
	else
		console.log('Error in DB connection: ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
