import React from 'react'
import Template from "../Components/Template.js"
import loginImg from "../Images/login.webp"

const Login = (props) => {
  const{setIsLoggedIn} = props;
  return (
    <div>
      <Template 
        title="Welcome Back"
        desc1="Build skils for today,tomorrow and beyond"
        desc2="Education to future-proof your career"
        image={loginImg}
        formType="login"
        setIsLoggedIn = {setIsLoggedIn}
      />
    </div>
  )
}

export default Login
