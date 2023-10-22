import Swal from "sweetalert2";


const AddProduct = () => {

   
      const handleAddProduct = event =>{
      event.preventDefault();
      
         const form = event.target;
         const name = form.name.value;
         const image = form.image.value;
         const brandName = form.brandName.value;
         const type = form.type.value;
         const price = form.price.value;
         const shortDescription = form.shortDescription.value;
         const newProduct = { name, image, brandName, type, price, shortDescription }
        console.log(newProduct);

        fetch('https://brand-shop-server-gik7rup7e-ranas-projects-c2243bd3.vercel.app/product',{
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(newProduct),
        })
        .then(res=> res.json())
        .then(data =>{
         console.log(data)
          if(data.insertedId){
            Swal.fire({
               title: 'Successful!',
               text: 'Add Product Successful',
               icon: 'success',
               confirmButtonText: 'Cool'
             })
             form.reset();
          }
        })
    }
  
    return (
        <div className="bg-purple-200 rounded-md p-10 my-6">
           <h2 className="text-3xl font-medium text-center mb-4 text-gray-500">Add Product</h2>
     <form onSubmit={ handleAddProduct }>
         {/* name and image */}
         <div className="flex mb-6">
      <div className="form-control w-1/2">
          <label className="label">
             <span className="label-text">Name</span>
          </label>
             <label className="input-group">
               <input type="text" name="name"  placeholder="name" className="input input-bordered w-full" />
         </label>
      </div>
      <div className="form-control w-1/2 ml-5">
          <label className="label">
             <span className="label-text">Image</span>
          </label>
             <label className="input-group">
               <input type="text" name="image"  placeholder="image" className="input input-bordered w-full" />
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
               <input type="text" name="brandName"  placeholder="brand name" className="input input-bordered w-full" />
         </label>
      </div>
      <div className="form-control w-1/2 ml-5">
          <label className="label">
             <span className="label-text">Type</span>
          </label>
             <label className="input-group">
               <input type="text" name="type"  placeholder="type" className="input input-bordered w-full " />
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
               <input type="text" name="price"  placeholder="price" className="input input-bordered w-full" />
         </label>
      </div>
      <div className="form-control w-1/2 ml-5">
          <label className="label">
             <span className="label-text">Short description</span>
          </label>
             <label className="input-group">
               <input type="text" name="shortDescription"  placeholder="short description" className="input input-bordered w-full" />
         </label>
      </div>                 
       </div>
             <input type="submit" value="Add Product" className="btn bg-gray-300 w-full" />
    </form>
        </div>  
    );
};

export default AddProduct;