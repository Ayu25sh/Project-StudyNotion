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
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-white mb-1 loading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type="email"
                placeholder ='Email Id'
                onChange={changeHandler}
                name="email"
                value = {formData.email}
                className='bg-slate-700 rounded-[0.5rem] text-white w-full p-[12px]'
            />
        </label>
        <label className='w-full relative' >
            <p className='text-[0.875rem] text-white mb-1 loading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                type={showPassword ? ("text") :("password")}
                placeholder ='Password'
                onChange={changeHandler}
                name="password"
                value = {formData.password}
                className='bg-slate-700 rounded-[0.5rem] text-white w-full p-[12px]'
            />

            <span onClick={() => setShowpassword((prev) => !prev)} className='absolute right-3 top-[38px]  cursor-pointer'>
                {showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible />)}
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
