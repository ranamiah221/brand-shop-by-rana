import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
   const { createdUser } = useContext(AuthContext);
  const [registerError, setRegisterError]= useState();
    const handleRegister= e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setRegisterError('');
        if(password.length < 6){
           setRegisterError('Password should be at 6 character or longer')
           return;
        }
        else if(!/[A-Z]/.test(password)){
           setRegisterError('Your password should be at least one upper case character')
           return;
        }
        else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
          setRegisterError('Your password should be at least one special character')
        }
        createdUser( email, password)
        .then(result=>{
            console.log(result.user)
            const user = { email }
            fetch('https://brand-shop-server-gik7rup7e-ranas-projects-c2243bd3.vercel.app/user',{
              method:'POST',
              headers:{
                'context-type': 'application/json'
              },
              body:JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
              if(data.insertedId){
                Swal.fire({
                  title: 'Successful!',
                  text: 'User Registered Successful',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
              }
            })
        })
        .catch(error=>{
          if(error){
            Swal.fire({
              title: 'error',
              text: `${error}`,
              icon: 'error',
              confirmButtonText: 'ok'
            })
          }
        })
        
    }
    
    return (
        <div>
    <div className="hero min-h-screen bg-base-200">
     
     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-6">
        <h2 className="text-center text-2xl font-medium mt-5 text-gray-600">Register Now</h2> 
       <form onSubmit={handleRegister} className="card-body">
        
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
           
         </div>
         <div className="form-control mt-6">
           <button className="btn btn-primary">Register</button>
           <p className="mt-3">Already You Have Account ?? Please <Link className="text-blue-800 font-bold" to={'/login'}>Login</Link></p>
           <p className="text-red-500 text-xl font-medium">{registerError}</p>
         </div>
       </form>
     </div>
   
 </div>
        </div>
    );
};

export default Register;