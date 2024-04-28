import React, { useState } from 'react'
import "./Register.css"
import * as Yup from 'yup'
import axios from "axios";
import {useNavigate} from 'react-router-dom'


const Register = () => {
    const navigate =useNavigate()
    const [errors,setError] = useState({});

    const [showPass, setShowPass] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)
    const [formData,setFormData] =useState({
        fullName:"",
        email:"",
        phoneNumber:"",
        address:"",
        password:"",
        confirmPassword:""
    })
    const validationSchema = Yup.object({
        fullName: Yup.string().required("Full Name is required"),
        email:Yup.string()
            .required("Email is required")
            .email("Invalid email format"),
        phoneNumber:Yup.string()
            .matches(/^\d{10}$/,"Phone Number must be 10 digit")
            .required("Phone Number is required"),
        address:Yup.string().required("Full Name is required"),
        password:Yup.string()
            .required("Full Name is required")
            .matches(/[!@#$%^&*(),.?":{}|<>]/,"Password must contain at least one symbol")
            .min(8,"Passowrd must be 8 character"),
        confirmPassword:Yup.string()
            .oneOf([Yup.ref("password")],'Password does not match')
            .required("Confirm Password is required")
    })
    const handleChange=(e)=>{
        const {name,value} =e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleSubmit =async(e)=>{
        e.preventDefault();
        try {
            await validationSchema.validate(formData,{abortEarly:false});
            const response = await axios.post("http://localhost:5000/register/",formData)
            console.log("Form Submitted",response)
            if(response.status==201){
                navigate('/')
            }
        } catch (error) {
            // console.log(error.inner)
            let newError ={};
            
            if (error && error.inner) {
                error.inner.forEach((err) => {
                    newError[err.path] = err.message;
                });
            }
            // console.log(newError)
            setError(newError)
            console.log(errors)
        }
    }
  return (
    <div>
        <div className="registerPage">
            <div className="register">
                <div className="profile">
                    <h2>Simple Registration Form</h2>
                </div>
            <div className="registerForm">
                <form onSubmit={handleSubmit}>
                    <div className="fullName">
                        <label htmlFor='fullName'>Full Name:
                            <input onChange={handleChange} type='text' value={formData.fullName} name='fullName' id='fullName' placeholder='Enter your Full Name'/>
                            {errors.fullName?(<div className='error'>{errors.fullName}</div>):''}
                        </label>
                    </div>
                    <div className="email">
                        <label htmlFor='email'>Email:
                            <input onChange={handleChange} type='text' value={formData.email} name='email' id='email' placeholder='Enter your Email'/>
                            {errors.email?(<div className='error'>{errors.email}</div>):''}
                        </label>
                    </div>
                    <div className="phoneNumber">
                        <label htmlFor='phoneNumber'>Phone Number:
                            <input onChange={handleChange} type='text' value={formData.phoneNumber} name='phoneNumber' id='phoneNumber' placeholder='Enter your Phone Number'/>
                            {errors.phoneNumber?(<div className='error'>{errors.phoneNumber}</div>):''}
                        </label>
                    </div>
                    <div className="address">
                        <label htmlFor='address'>Address:
                            <input onChange={handleChange} type='text' value={formData.address} name='address' id='address' placeholder='Enter your Address'/>
                            {errors.address?(<div className='error'>{errors.address}</div>):''}
                        </label>
                    </div>
                    <div className="password">
                        <label htmlFor='password'>Password:
                            <input onChange={handleChange} type={showPass?"text":'password'} value={formData.password} name='password' id='password' placeholder='Enter your Password'/>
                        <span onClick={()=>setShowPass(!showPass)} className="showPass">
                            Show
                        </span>
                            {errors.password?(<div className='error'>{errors.password}</div>):''}
                        </label>
                    </div>
                    <div className="confirmPassword">
                        <label htmlFor='confirmPassword'>Confirm Password:
                            <input onChange={handleChange} type={showConfirmPass?"text":'password'} value={formData.confirmPassword} name='confirmPassword' id='confirmPassword' placeholder='Enter your Confirm Password'/>
                        <span onClick={()=>setShowConfirmPass(!showConfirmPass)} className="showPass">
                            Show
                        </span>
                            {errors.confirmPassword?(<div className='error'>{errors.confirmPassword}</div>):''}
                        </label>
                    </div>
                    <div className="registerBtn">
                        <button type='submit'>Register</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Register