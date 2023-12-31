import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/crop_logo_1420804.png';
import './Navbar.css';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
      const links= <nav className="text-base font font-medium ">
                 <NavLink className= 'mr-5 hover:btn bg-white   ' to='/'>Home</NavLink>
                 <NavLink className= 'mr-5 hover:btn bg-white   ' to='/addProduct'>Add Product</NavLink>
                 <NavLink className= 'mr-5 hover:btn bg-white   ' to='/myCart'>My Cart</NavLink>
                 <NavLink className= 'mr-5 hover:btn bg-white   ' to='/register'>Register</NavLink>
                 <NavLink className= 'mr-5 hover:btn bg-white   ' to='/login'>Login</NavLink>

      </nav>       
    const { user, logOut }= useContext(AuthContext);
    const handleLogOut = ()=>{
        logOut()
        .then( Swal.fire({
          title: 'Successful!',
          text: 'Logout Successful',
          icon: 'success',
          confirmButtonText: 'Cool'
        }))
        .catch()
          
    }
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {links} 
      </ul>
    </div>
    <div className="flex gap-4 items-center">
       <img className="w-1/5" src={logo} alt="" />
        <div>
             <h1 className="text-3xl font-semibold text-blue-400">Free Explore</h1>
        </div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <span>
      {
        user && <p>{user.email}</p>
      }
    </span> 
     {
      user ? <button className="border p-2 m-3 rounded-lg font-medium bg-slate-400" onClick={handleLogOut}>Log Out</button> :
      <Link  className="border p-2 m-3 rounded-lg font-medium bg-slate-300" to={'/login'}>Login </Link>
    }
   
  </div>
</div>
          
    );
};

export default Navbar;