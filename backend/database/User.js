const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://imsanafeer:<password>@cluster0.eovo6ks.mongodb.net/?retryWrites=true&w=majority");
const Schema = mongoose.Schema;

var userSchema = new  Schema({
    userFname:String,
    userLname:String,
    userEmail:String,
    userPassword:String,
    userAge:Number,
    userGender:String,
    isAdmin:Boolean
});
UserInfo = mongoose.model("user",userSchema)

module.exports=UserInfo;