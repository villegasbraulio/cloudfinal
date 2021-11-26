const express = require('express')
const app = express()
const port = 3000

var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://prilioo:Braulio140397@cluster0.4xovx.mongodb.net/cloudfinal?retryWrites=true&w=majority";


app.use(express.json())
app.all('/', (req, res) => {
    console.log(JSON.stringify(req.body.Records[0].s3.object.key,null, 2));
    console.log(JSON.stringify(req.body.Records[0].eventTime,null, 2));
    console.log(JSON.stringify(req.body.Records[0].s3.bucket.name,null, 2));

    var objeto = [
      { "bucket": req.body.Records[0].s3.bucket.name, "date": req.body.Records[0].eventTime, "key": req.body.Records[0].s3.bucket.name},
    ];


  res.json(req.body)

  MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cloudfinal");
    
    dbo.collection("clou").insertMany(objeto, function(err, res) {
      if (err) throw err;
      console.log("exito");
      db.close();
    });
  });


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// MongoClient.connect(uri, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("cloudfinal");
//   dbo.collection("clou").insertOne(objeto, function(err, res) {
//     if (err) throw err;
//     console.log("succefull prili");
//     db.close();
//   });
// });




