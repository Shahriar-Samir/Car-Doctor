import {NavLink} from 'react-router-dom'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { AuthContext } from '../Providers/AuthProvider';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Navbar = () => {
    const {logOutHandler,user} = useContext(AuthContext)

  const logOutHandle = ()=>{
      logOutHandler()
      .then(()=>{
        toast.success('Successfully Logged Out')
      })
      .catch(err=>{
        toast.error('Something went wrong')
      })
  }

    return (
        <div className="navbar bg-base-100 items-center px-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] shadow bg-base-100 rounded-box w-52 gap-4 border-gray-500 border p-2">
      <NavLink to='/' className={({isActive})=> isActive? 'underline text-lg bg-black text-white text-center rounded-3' : 'text-lg text-center rounded-3'}>Home</NavLink>
            <NavLink to='/myOrders' className={({isActive})=> isActive? 'underline text-lg bg-black text-white text-center rounded-3' : 'text-lg text-center rounded-3'} >My Orders</NavLink>
            {user ?  <button onClick={logOutHandle} className='text-lg font-bold'>Logout</button> : <NavLink to='/login' className={({isActive})=> isActive? 'underline text-lg bg-black text-white text-center rounded-3' : 'text-lg text-center rounded-3'}>Login</NavLink>  }  
      </ul>
    </div>
        <img className='w-[50px] md:w-[70px] lg:w-[100px]' src='/icons/logo.svg'/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-5 font-semibold items-center">
              <NavLink to='/'>Home</NavLink>
            <NavLink to='/myOrders'>My Orders</NavLink>
            {user ?  <button onClick={logOutHandle}>Logout</button> : <NavLink to='/login'>Login</NavLink>  }  
    </ul>
  </div>
  <div className="navbar-end gap-5">

    <button className='bg-transparent text-common-color border-2 border-common-color rounded-md py-2 px-3 font-medium md:font-semibold '>Appointment</button>
  </div>
</div>
    );
};

export default Navbar;