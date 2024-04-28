
const express = require("express");
const { connectDatabase } = require("./database/database");
const app =express();

//cors
const cors = require("cors")
app.use(cors({
    origin:"*",
    methods:['GET', 'PUT', 'POST']
}))

connectDatabase();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const userRouter =require("../Server_registPage/routes/userRouter");
const User = require("./model/userModel");

app.get("/",(req,res)=>{
    res.send("I am live")
})
// app.post("/register",userRouter)
app.post("/register",async(req,res)=>{
    const {fullName,email,phoneNumber,password,address,confirmPassword} = req.body

    if(!fullName || !email || !phoneNumber || !address || !password || !confirmPassword){
        return res.status(400).json({
            message:"Please enter fullName,email,phoneNumber,password,address,confirmPassword."
        })
    }
    try {
        const emailFound = await User.find({email:email})
        const phoneFound = await User.find({phoneNumber:phoneNumber})
        if(emailFound.length>0 || phoneFound.length>0){
            return res.status(400).json({
                message:(emailFound?`This email ${email} is already connected with another accound`:`This email ${phoneNumber} is already connected with another accound`)
            })
        }
        const user = await User.create({
            fullName,email,phoneNumber,password,address,confirmPassword
        })
        res.status(201).json({
            message:"User registered successfully",
            user:user
        })
    } catch (error) {
        console.log("Something went wrong",error)
        res.status(500).json({
            message: "Internal Server Error"
        });
    }


})

app.listen(5000,(req,res)=>{
    console.log("Server started at PORT 5000")
})
