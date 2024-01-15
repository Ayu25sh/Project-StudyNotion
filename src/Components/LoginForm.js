import React from 'react'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const[formData,setFormData] = useState( {email : "", password: ""});
    const[showPassword,setShowpassword] =  useState(false);  

    function changeHandler(event){
        setFormData( prevFormData => (
            {
                    ...prevFormData,
                    [event.target.name]:event.target.value
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>
                Email Address<sup>*</sup>
            </p>
            <input
                required
                type="email"
                placeholder ='Email Id'
                onChange={changeHandler}
                name="email"
                value = {formData.email}
            />
        </label>
        <label>
            <p>
                Password<sup>*</sup>
            </p>
            <input
                required
                type={showPassword ? ("text") :("password")}
                placeholder ='Password'
                onChange={changeHandler}
                name="password"
                value = {formData.password}
            />

            <span onClick={() => setShowpassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible />)}
            </span>

            <Link to="#">
                <p>
                    Forgot Password
                </p>
            </Link>
            
        </label>

        <button>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm;
