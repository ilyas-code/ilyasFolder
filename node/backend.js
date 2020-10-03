const express = require('express')
var MongoClient = require('mongodb').MongoClient;
const app = express();
var cors = require('cors')
const url = "mongodb+srv://ilyas-limdi:ilyas-mongo@ilyas-box.2t2cn.mongodb.net/test?retryWrites=true&w=majority"
var corsOptions = {
    origin: "http://localhost:3000",
   credentials:true
  }
app.use(cors(corsOptions))

function FindQuiz(res){

    MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("QuizDb");
        dbo.collection("QuizQA").findOne({},{ projection: { _id: 0 } },function(err, result) {
          if (err) throw err;
          console.log(result);
          var qresult = JSON.stringify(result)
            res.send(qresult)
          db.close();
        });
      });

}

// app.use((req,res,next)=>{
//   res.header('Access-Control-Allow-Origin','*');
//   // res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization')
//   if(req.method === "OPTIONS"){
//     res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET')
//     res.status(200).json({})
//   }
//   next()
// })

app.get("/quizQ",(req,res)=>{
    FindQuiz(res)
})
app.listen(4000, function () {
    console.log('CORS-enabled web server listening on port 4000')
  })