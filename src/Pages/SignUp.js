import React from 'react'
import Template from "../Components/Template.js"
import loginImg from "../Images/login.webp"

const SignUp = ({setIsLoggedIn}) => {
  return (
    <div>
            <Template 
        title="Join the millions learning to code with study notion for free"
        desc1="Build skils for today,tomorrow and beyond"
        desc2="Education to future-proof your career"
        image={loginImg}
        formType="signup"
        setIsLoggedIn = {setIsLoggedIn}
      />
    </div>
  )
}

export default SignUp
