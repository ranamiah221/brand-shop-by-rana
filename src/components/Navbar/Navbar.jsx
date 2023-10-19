import { Link, NavLink } from "react-router-dom";
import'./Navbar.css';

const Navbar = () => {
      const links= <nav className="text-base font font-medium">
                 <NavLink className= 'mr-5 hover:text-lg ' to='/'>Home</NavLink>
                 <NavLink className= 'mr-5 hover:text-lg ' to='/addProduct'>Add Product</NavLink>
                 <NavLink className= 'mr-5 hover:text-lg ' to='/myCart'>My Cart</NavLink>
                 <NavLink className= 'mr-5 hover:text-lg ' to='/register'>Register</NavLink>
                 <NavLink className= 'mr-5 hover:text-lg ' to='/login'>Login</NavLink>

      </nav>       

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
    <div>
       
        <div>
             <h1>BRAND NEW WEBSITE</h1>
        </div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
      <Link to={'/login'}>Login </Link>
  </div>
</div>
          
    );
};

export default Navbar;