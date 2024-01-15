import React from 'react'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = (props) => {
  let { isLoggedIn ,setIsLoggedIn } = props;

  return (
    <div className='flex justify-evenly'>
      <Link to="/" >
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className='flex gap-3 ' >
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to ="/">About</Link>
          </li>
          <li>
            <Link to ="/">Contact</Link>
          </li>
        </ul>
      </nav>
   
      <div className='flex ml-3 mr-3 gap-3'>
        { !isLoggedIn && 
          <Link to="/login" >
            <button>
              Login
            </button> 
          </Link>
        }
        { !isLoggedIn &&
          <Link to="/signup" >
            <button>
              Sign Up
            </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/ " >
            <button onClick={ () => {
              setIsLoggedIn(false);
              toast.success("Logged Out");
            }}>
              Log Out
            </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/dashboard" >
            <button>
              Dashboard
            </button>
          </Link>
        }
      </div>

    </div>
  )
}

export default Navbar
