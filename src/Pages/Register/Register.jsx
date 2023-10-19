import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister= e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    
    return (
        <div>
    <div className="hero min-h-screen bg-base-200">
     
     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-6">
        <h2 className="text-center text-2xl font-medium mt-5 text-gray-600">Register Now</h2> 
       <form onSubmit={handleRegister} className="card-body">
         <div className="form-control">
           <label className="label">
             <span className="label-text">Name</span>
           </label>
           <input type="text" name="name" required placeholder="Your Name" className="input input-bordered" required />
         </div>
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
         </div>
       </form>
     </div>
   
 </div>
        </div>
    );
};

export default Register;