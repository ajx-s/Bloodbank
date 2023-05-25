const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://imsanafeer:<password>@cluster0.eovo6ks.mongodb.net/?retryWrites=true&w=majority")

const Schema = mongoose.Schema;
var requestSchema = new  Schema({
    requestName:String,
    requestAge:Number,
    requestEmail:String,
    requestPhone:Number,
    requestBlood:String,
    requestAilment:String,
    requestUnit:Number
});

RequestInfo = mongoose.model("request",requestSchema)

module.exports=RequestInfo;