import { Link } from "react-router-dom";


const Brand = ({brand}) => {
    const {brand_name, brand_image} =brand;
    
    return (
         <div>
            <Link to={`/product`} className="card w-full  bg-base-200 shadow-xl">
               <figure className="px-10 pt-10 w-full lg: h-[250px]">
                  <img src={brand_image} alt="Shoes" className="rounded-xl" />
              </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title">{brand_name}</h2>
  
            </div>
          </Link>
         </div>
    );
};

export default Brand;