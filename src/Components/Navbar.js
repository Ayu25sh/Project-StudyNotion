import React from 'react'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = (props) => {
  let { isLoggedIn ,setIsLoggedIn } = props;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>
      <Link to="/" >
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className='flex gap-x-6 text-white' >
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
   
      <div className='flex items-center gap-x-4'>
        { !isLoggedIn && 
          <Link to="/login" >
            <button className='bg-slate-700 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-600'>
              Login
            </button> 
          </Link>
        }
        { !isLoggedIn &&
          <Link to="/signup" >
            <button className='bg-slate-700 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-600'>
              Sign up
            </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/ " >
            <button onClick={ () => {
              setIsLoggedIn(false);
              toast.success("Logged Out");
            }} className='bg-slate-700 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-600'>
              Log Out
            </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/dashboard" >
            <button className='bg-slate-700 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-600'>
              Dashboard
            </button>
          </Link>
        }
      </div>

    </div>
  )
}

export default Navbar
