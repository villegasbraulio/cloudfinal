var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://prilioo:Braulio140397@cluster0.4xovx.mongodb.net/mydb?retryWrites=true&w=majority";

MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});