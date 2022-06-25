const express = require("express");
const app = express();
const port=5000;
const mongoose = require('mongoose');


  mongoose.connect('mongodb+srv://Yashasvi:yashasvi@cluster0.orftexo.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }
  );
const db =mongoose.connection;
db.on("error",console.error.bind(console,"connection error: "));
db.once("open",function(){
  console.log("connected");
});
app.listen(port,function(){ 
  console.log('Server is running on port' ,port);
});


app.get("/homepage",(req,res)=>{
    res.send("Backhend");
});