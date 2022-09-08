const express=require("express")
const  mongoose  = require("mongoose")
const userSchema= new mongoose.Schema({
     name:{
         type:String,
         require:true
     },
     password:{
        type:String,
        trim:true,
        require:true
     }
})
const NewUser= new mongoose.model("NewUser",userSchema)
module.exports=NewUser;