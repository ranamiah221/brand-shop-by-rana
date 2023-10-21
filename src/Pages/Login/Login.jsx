import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const { login }= useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin= e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        login(email, password)
        .then(result=>{
          console.log(result.user)
          navigate(location?.state?location.state : '/'),
          Swal.fire({
            title: 'Successful!',
            text: 'User Registered Successful',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        })
        .catch(error=> {
                Swal.fire({
                title: 'error',
              text: `${error}`,
              icon: 'error',
              confirmButtonText: 'ok'
            })
        })
    }
    return (
        <div>
<div className="hero min-h-screen bg-base-200">
     
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
       <h2 className="text-center text-2xl font-medium mt-5 text-gray-600">Login Now</h2> 
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email"  required placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" required placeholder="password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <p className="mt-3">New ?? Please <Link className="text-blue-800 font-bold" to={'/register'}>Register</Link></p>
        </div>
      </form>
    </div>
  
</div>
        </div>
    );
};

export default Login;