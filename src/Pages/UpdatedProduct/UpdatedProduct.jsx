import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatedProduct = () => {
    const product = useLoaderData();
    const { _id, name, image, brandName, shortDescription, type, price }= product;
    const handleUpdateProduct = event =>{
        event.preventDefault();
        
           const form = event.target;
           const name = form.name.value;
           const image = form.image.value;
           const brandName = form.brandName.value;
           const type = form.type.value;
           const price = form.price.value;
           const shortDescription = form.shortDescription.value;
           const updatedProduct = { name, image, brandName, type, price, shortDescription }
          console.log(updatedProduct);
  
          fetch(`https://brand-shop-server-gik7rup7e-ranas-projects-c2243bd3.vercel.app/${_id}`,{
            method:'PUT',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct),
          })
          .then(res=> res.json())
          .then(data =>{
           console.log(data)
            if(data.modifiedCount > 0){
              Swal.fire({
                 title: 'Successful!',
                 text: 'Update Product Successful',
                 icon: 'success',
                 confirmButtonText: 'Cool'
               })
               form.reset();
            }
          })
      }
    

    return (
        <div className="bg-teal-200 rounded-md p-10 my-6">
        <h2 className="text-3xl font-medium text-center mb-4 text-gray-500">Update Product</h2>
  <form onSubmit={ handleUpdateProduct }>
      {/* name and image */}
      <div className="flex mb-6">
   <div className="form-control w-1/2">
       <label className="label">
          <span className="label-text">Name</span>
       </label>
          <label className="input-group">
            <input type="text" name="name" defaultValue={name} placeholder="name" className="input input-bordered w-full" />
      </label>
   </div>
   <div className="form-control w-1/2 ml-5">
       <label className="label">
          <span className="label-text">Image</span>
       </label>
          <label className="input-group">
            <input type="text" name="image" defaultValue={image}  placeholder="image" className="input input-bordered w-full" />
      </label>
   </div>                 
      </div>
      {/*brand name and type */}
      <div className="flex mb-6">
   <div className="form-control w-1/2">
       <label className="label">
          <span className="label-text">Brand Name</span>
       </label>
          <label className="input-group">
            <input type="text" name="brandName" defaultValue={brandName} placeholder="brand name" className="input input-bordered w-full" />
      </label>
   </div>
   <div className="form-control w-1/2 ml-5">
       <label className="label">
          <span className="label-text">Type</span>
       </label>
          <label className="input-group">
            <input type="text" name="type" defaultValue={type} placeholder="type" className="input input-bordered w-full " />
      </label>
   </div>                 
      </div>
      {/* price and shortDescription */}
     <div className="flex mb-6">
   <div className="form-control w-1/2">
       <label className="label">
          <span className="label-text">Price</span>
       </label>
          <label className="input-group">
            <input type="text" name="price" defaultValue={price}  placeholder="price" className="input input-bordered w-full" />
      </label>
   </div>
   <div className="form-control w-1/2 ml-5">
       <label className="label">
          <span className="label-text">Short description</span>
       </label>
          <label className="input-group">
            <input type="text" name="shortDescription" defaultValue={shortDescription}  placeholder="short description" className="input input-bordered w-full" />
      </label>
   </div>                 
    </div>
          <input type="submit" value="Update Product" className="btn bg-gray-300 w-full" />
 </form>
     </div>  
    );
};

export default UpdatedProduct;