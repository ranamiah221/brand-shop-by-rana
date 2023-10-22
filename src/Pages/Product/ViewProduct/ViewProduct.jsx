import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ViewProduct = () => {
    const product = useLoaderData(); 
    const handleAddCart = () =>{

   fetch('https://brand-shop-server-gik7rup7e-ranas-projects-c2243bd3.vercel.app/myCart',{
     method: 'POST',
     headers:{
        'content-type': 'application/json',
     },
     body : JSON.stringify(product)
   })
   .then(res => res.json())
   .then(data =>{
       console.log(data);
       Swal.fire({
        title: 'Successful!',
        text: 'Card Added Successful',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
   })

    }
    const { _id, name, image, brandName, type, price, shortDescription }= product;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-10">
              <div className="w-1/2">
              <img className="w-full" src={image} alt="Album"/>
              </div>
               <div className="card-body">
                     <h1 className="card-title text-4xl font-medium">{name}</h1>
                     <h2 className="text-2xl font-medium text-gray-600">Brand : {brandName}</h2>
                     <div className="text-base font-normal text-gray-500">
                     <p>Price : {price} Tk</p>
                      <p>Category : {type}</p>
                     <p>{shortDescription}</p>
                     </div>
                  <div className="card-actions justify-end">
                      <button onClick={ handleAddCart} className="btn btn-primary">Add To Cart</button>
                   </div>
               </div>
        </div>
    );
};

export default ViewProduct;