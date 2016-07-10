//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/naukri';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // do some work here with the database.
	var job_collection = db.collection('jobs');
	var seeker_collection = db.collection('job_seekers');
	//////////////////////////////////////////////////////////////////////////////////
	var add_this_job = 
	{
	company_name:"Sapient Global",
	sector:"IT",
	designation:"software-engineer",
	description:"blah blah blah",
	brief_of_skills_required:"blah blah blah",
	}
	job_collection.insert([add_this_job], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted %d documents into the "job_collection" collection. The documents inserted with "_id" are:', result.length, result);
      }
	});
	///////////////////////////////////////////////////////////////////////////////
    //Close connection
    db.close();
	}
});