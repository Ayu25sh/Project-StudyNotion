import React from 'react'
import frameImage from "../Images/frameImage.png"
import SignUpForm from "../Components/SignUpForm"
import LoginForm from "../Components/LoginForm"
import { FcGoogle } from "react-icons/fc";


const Template = (props) => {
    const {title,desc1,desc2,image,formType,setIsLoggedIn} = props;

  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
      <div >
        <h1 className='text-white font-semibold text-[1.875rem] loading-[2.375rem]'>{title}</h1> 
        <p className='text-[1.125rem] loading-[1.625rem] mt-4'>
            <span className='text-white'>{desc1}</span>
            <span className='text-blue-100'>{desc2}</span>
        </p>

        {formType === "signup" ?
        (<SignUpForm setIsLoggedIn={setIsLoggedIn} />) : 
        (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

        <div className=' flex w-full items-center my-4 gap-x-2'>
            <div className='w-full h-[1px] bg-slate-600'></div>
            <p className='text-slate-600 font-medium loading-[1.375rem]'>OR</p>
            <div className='w-full h-[1px] bg-slate-600'></div>
        </div>

        <button className='flex w-full justify-center items-center rounded-[8px] font-medium text-white border border-dlate-600 px-[12px] py-[8px] gap-x-2 mt-6'>
            <FcGoogle />

            <p>Sign Up with Google</p>
        </button>

      </div>

      <div className='relative w-11/12 max-w-[450px]'>
        <img src={frameImage} alt="pattern" width={558} height={504} loading="lazy" />
        <img src={image} alt="pattern" width={558} height={490} loading="lazy" className='absolute top-4 right-4 '/>
      </div>
    </div>
  )
}

export default Template
