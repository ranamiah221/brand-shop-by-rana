import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";



const ProductCard = ({ product }) => {
    const brand_name = useParams();
    console.log(brand_name);
    const { _id, name, image, brandName, type, price }= product;
    const handleDelete =(_id)=>{
     console.log(_id);
     fetch(`http://localhost:5000/product/${_id}`,{
      method : 'DELETE',
     })
     .then(res => res.json())
     .then(data =>{
      console.log(data);
      if(data.deletedCount > 0){
        Swal.fire({
          title: 'Successful!',
          text: 'deleted Successful',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
     })
    }
    
    return (
        <div className="card card-side bg-base-200 shadow-xl">
             <div className="w-1/2">
                  <img className="w-full h-full" src={image} alt="" />
             </div>
             <div className="card-body w-1/2">
                  <div className="flex justify-between items-center gap-3">
                      <div className="text-base font-medium text-gray-500">
                         <h2 className="card-title">{name}</h2>
                          <h3>Brand : {brandName}</h3>
                          <p>Category : {type}</p>
                           <p>Price : {price}</p>
                       </div>
                       <div className="btn-group gap-5 btn-group-vertical">
                            <button className="btn bg-white">View</button>
                            <button className="btn bg-white">Update</button>
                            <button onClick={()=>handleDelete(_id)} className="btn bg-white">X</button>
                        </div>
                    </div>
               </div>
         </div>
    );
};

export default ProductCard;