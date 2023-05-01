//import
const mongoose =require("mongoose")

// connection string
mongoose.connect("mongodb://localhost:27017/ark",{useNewUrlParser:true})

// model
const User=mongoose.model("User",
{
    id:String,    
    user_name:String,
    password:String
})

module.exports={
    User
}