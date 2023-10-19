

const AddProduct = () => {

  
    return (
        <div>
           <h2 className="text-3xl font-medium text-center">Add Product</h2>
     <form>
         {/* name and quantity row.. */}
         <div className="flex mb-6">
      <div className="form-control w-1/2">
          <label className="label">
             <span className="label-text">Coffee Name</span>
          </label>
             <label className="input-group">
               <input type="text" name="name" placeholder="Coffee name" className="input input-bordered w-full" />
         </label>
      </div>
      <div className="form-control w-1/2 ml-5">
          <label className="label">
             <span className="label-text">Available Quantity</span>
          </label>
             <label className="input-group">
               <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
         </label>
      </div>                 
         </div>
         {/*supplier and  taste row */}
         <div className="flex mb-6">
      <div className="form-control w-1/2">
          <label className="label">
             <span className="label-text">Supplier</span>
          </label>
             <label className="input-group">
               <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full" />
         </label>
      </div>
      <div className="form-control w-1/2 ml-5">
          <label className="label">
             <span className="label-text">Taste</span>
          </label>
             <label className="input-group">
               <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full " />
         </label>
      </div>                 
         </div>
         {/* category and details row */}
        <div className="flex mb-6">
      <div className="form-control w-1/2">
          <label className="label">
             <span className="label-text">Category</span>
          </label>
             <label className="input-group">
               <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
         </label>
      </div>
      <div className="form-control w-1/2 ml-5">
          <label className="label">
             <span className="label-text">Details</span>
          </label>
             <label className="input-group">
               <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
         </label>
      </div>                 
       </div>
       {/* photo url */}
      <div className="flex mb-6">
      <div className="form-control w-full">
          <label className="label">
             <span className="label-text">Photo Url</span>
          </label>
             <label className="input-group">
               <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
         </label>
      </div>
                    
      </div>
         <input type="submit" value="Add a coffee" className="btn bg-gray-500 w-full" />
    </form>
        </div>  
    );
};

export default AddProduct;