const mongoose = require('mongoose');

//Invoking dotenv(Telling nodejs to use .env)
// require('dotenv').config(); 
exports.connectDatabase = async()=>{
    await mongoose.connect("mongodb+srv://task1:task1@task1.atczsfp.mongodb.net/?retryWrites=true&w=majority&appName=task1")
    console.log("Database is connected successfully");
}