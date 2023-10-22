import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";



const ProductCard = ({ product , products, setProducts}) => {
    const brand_name = useParams();
  
    const { _id, name, image, brandName, type, price }= product;
    const handleDelete =(_id)=>{
     console.log(_id);
     Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
       fetch(`https://brand-shop-server-gik7rup7e-ranas-projects-c2243bd3.vercel.app/product/${_id}`,{
      method : 'DELETE',
     })
     .then(res => res.json())
     .then(data =>{
      console.log(data);
      if(data.deletedCount > 0){
           Swal.fire(
          'Deleted!',
           'Your product has been deleted.',
           'success'
         )
         const remaining  = products.filter (pro => pro._id !== _id)
         setProducts(remaining);
      }
      
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
                            <Link to={`/view/${_id}`}><button className="btn bg-white">Details</button></Link>
                            <Link to={`/product/${_id}`}><button className="btn bg-white">Update</button></Link>
                            <button onClick={()=>handleDelete(_id)} className="btn bg-white">X</button>
                        </div>
                    </div>
               </div>
         </div>
    );
};

export default ProductCard;