const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema =new Schema({
    fullName:{type:String,require:true},
    email:{type:String,require:true,lowercase:true,unique: true},
    phoneNumber:{type:Number,require:true,unique:true},
    address:{type:String,require:true},
    password:{type:String,require:true},
    confirmPassword:{type:String,require:true},
})
const User = mongoose.model("User",userSchema)
module.exports = User