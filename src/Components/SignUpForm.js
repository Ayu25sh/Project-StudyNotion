import React from 'react'
import { useState } from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const[formData,setFormData] = useState({
        firstName:"",lastName:"",email:"",createPassword:"",confirmPassword:""});

    function changeHandler(event){
        setFormData( prevFormData => (
            {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        ))
    } 
    const[showPassword1,setShowPassword1] = useState(false);
    const[showPassword2,setShowPassword2] = useState(false);

    function submitHandler(event){
        event.preventDefault();
        if(formData.createPassword != formData.confirmPassword){
            toast.error("password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Accounnt Created");
        const accountData = {
            ...formData
        }
        navigate("/dashboard");

    }

  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>

        <form onSubmit={submitHandler}>
            <div>
                <label>
                    <p>First Name<sup>*</sup></p>
                    <input
                        required
                        type='text'
                        placeholder='Enter first name'
                        value={formData.firstName}
                        name="firstName"
                        onChange={changeHandler}
                    />
                </label>
                <label>
                    <p>Last Name</p>
                    <input
                        required
                        type='text'
                        placeholder='Enter last name'
                        value={formData.lastName}
                        name="lastName"
                        onChange={changeHandler}
                    />
                </label>
            </div>
            <label>
                <p>Email Address</p>
                <input
                    required
                    type='email'
                    placeholder='Enter Email Address'
                    value={formData.email}
                    name="email"
                    onChange={changeHandler}
                />
            </label>
            <div>
                <label>
                    <p>Create Password</p>
                    <input
                        type={showPassword1 ? ('text') :('password')}
                        placeholder='Enter Password'
                        value={formData.createPassword}
                        name="createPassword"
                        onChange={changeHandler}
                    />
                    <span onClick={() => setShowPassword1((prev) => !prev)}>
                        {showPassword1 ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible />)}
                    </span>
                </label>
                <label>
                    <p>Confirm Password</p>
                    <input
                        type={showPassword2 ? ('text') :('password')}
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        name="confirmPassword"
                        onChange={changeHandler}
                    />
                    <span onClick={() => setShowPassword2((prev) => !prev)}>
                        {showPassword2 ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible />)}
                    </span>
                </label>
            </div>
            <button>Create Account</button>
        </form>
    </div>
  )
}

export default SignUpForm;
