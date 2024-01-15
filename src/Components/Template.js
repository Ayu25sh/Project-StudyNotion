import React from 'react'
import frameImage from "../Images/frameImage.png"
import SignUpForm from "../Components/SignUpForm"
import LoginForm from "../Components/LoginForm"

const Template = (props) => {
    const {title,desc1,desc2,image,formType,setIsLoggedIn} = props;

  return (
    <div>
      <div>
        <h1>{title}</h1> 
        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>

        {formType === "signup" ?
        (<SignUpForm setIsLoggedIn={setIsLoggedIn} />) : 
        (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

        <div>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>

        <button>
            <p>Sign Up with Google</p>
        </button>

      </div>

      <div>
        <img src={frameImage} alt="pattern" width={558} height={504} loading="lazy" />
        <img src={image} alt="pattern" width={558} height={490} loading="lazy" />
      </div>
    </div>
  )
}

export default Template
