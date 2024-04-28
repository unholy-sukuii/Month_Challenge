const User = require("../model/userModel")

exports.registerUser = async(req,res)=>{
    const {fullName,email,phoneNumber,password,address,confirmPassword} = req.body

    if(!fullName || !email || !phoneNumber || !address || !password || !confirmPassword){
        return res.status(400).json({
            message:"Please enter fullName,email,phoneNumber,password,address,confirmPassword."
        })
    }
    try {
        const emailFound = User.find({email:email})
        const phoneFound = User.find({phoneNumber:phoneNumber})
        if(emailFound || phoneFound){
            return res.status(400).json({
                message:(emailFound?`This email ${emailFound} is already connected with another accound`:`This email ${phoneFound} is already connected with another accound`)
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
    }


}