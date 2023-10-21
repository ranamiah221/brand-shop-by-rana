
import { useLoaderData } from "react-router-dom";
import ProductBanner from "./ProductBanner";
import ProductCard from "./ProductCard";
import { useState } from "react";


const Product = () => {
    const loadedproducts = useLoaderData();
    const [products, setProducts]= useState(loadedproducts)
   
    return (
        <div>
            <ProductBanner></ProductBanner>
           <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-12">
           {
                products.map(product => <ProductCard key={product._id}
                     product={product}
                     products={products}
                     setProducts = {setProducts}
                     ></ProductCard>)
            }
           </div>
        </div>
    );
};

export default Product;