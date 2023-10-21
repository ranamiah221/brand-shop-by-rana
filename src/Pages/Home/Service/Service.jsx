
import bkash from '../../../assets/download.png';
import rocket from '../../../assets/unnamed (1).png';
import nagad from '../../../assets/unnamed.png';
const Service = () => {
    return (
        <div>
            <h1 className="text-4xl font-medium text-center text-gray-600 my-3">Our Featured</h1>
            <p className="text-base font-medium text-center text-gray-500">Cutting-edge tech enhances user experience,
                 personalized recommendations, secure transactions,
                 <br />
                  real-time inventory updates, AI-driven customer support, 
                  seamless integration with apps, and data-driven insights for 
                  businesses, <br /> amplifying e-commerce's efficiency and competitiveness.
            </p>
           <div className='grid lg:grid-cols-3 grid-cols-1 mt-10 gap-8'>
           <div className="card w-full bg-base-100 shadow-xl">
  <figure><img className='w-full' src={bkash} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Bkash Mobile Banking</h2>
 
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Pay Now</button>
    </div>
  </div>
</div>

<div className="card w-full bg-base-100 shadow-xl">
  <figure><img className='w-full' src={rocket} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Rocket Mobile Banking</h2>
   
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Pay Now</button>
    </div>
  </div>
</div>

<div className="card w-full bg-base-100 shadow-xl">
  <figure><img className='w-full' src={nagad} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Nagad Mobile Banking</h2>
   
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Puy Now</button>
    </div>
  </div>
</div>
           </div>

        </div>
    );
};

export default Service;