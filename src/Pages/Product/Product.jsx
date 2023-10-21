
import { useLoaderData } from "react-router-dom";
import ProductBanner from "./ProductBanner";
import ProductCard from "./ProductCard";


const Product = () => {
    const products = useLoaderData();
   
    return (
        <div>
            <ProductBanner></ProductBanner>
           <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
           {
                products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }
           </div>
        </div>
    );
};

export default Product;