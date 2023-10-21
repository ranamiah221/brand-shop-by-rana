import { useParams } from "react-router-dom";



const ProductCard = ({ product }) => {
    const brand_name = useParams();
    console.log(brand_name);
    const { name, image, brandName, type, shortDescription }= product;
    
    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-full" src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h3>{brandName}</h3>
    <p>{type}</p>
    <p>{shortDescription}</p>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;