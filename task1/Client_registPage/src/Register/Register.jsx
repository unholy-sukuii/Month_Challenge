import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <div>
        <div className="registerPage">
            <div className="register">
                <div className="profile">
                    <h2>Simple Registration Form</h2>
                </div>
            <div className="registerForm">
                <form>
                    <div className="fullName">
                        <label htmlFor='fullName'>Full Name:
                            <input type='text' name='fullName' id='fullName' placeholder='Enter your Full Name'/>
                        </label>
                    </div>
                    <div className="email">
                        <label htmlFor='email'>Email:
                            <input type='text' name='email' id='email' placeholder='Enter your Email'/>
                        </label>
                    </div>
                    <div className="phone number">
                        <label htmlFor='phone number'>Phone Number:
                            <input type='number' name='phone number' id='phone number' placeholder='Enter your Phone Number'/>
                        </label>
                    </div>
                    <div className="address">
                        <label htmlFor='address'>Address:
                            <input type='text' name='address' id='address' placeholder='Enter your Address'/>
                        </label>
                    </div>
                    <div className="password">
                        <label htmlFor='password'>Password:
                            <input type='password' name='password' id='password' placeholder='Enter your Password'/>
                        </label>
                    </div>
                    <div className="confirmPassword">
                        <label htmlFor='confirmPassword'>Confirm Password:
                            <input type='password' name='confirmPassword' id='confirmPassword' placeholder='Enter your Confirm Password'/>
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