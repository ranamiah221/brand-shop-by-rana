

const Card = ({ card }) => {
    const {_id, name, image, brandName, shortDescription, type, price } = card;
    return (
        <div className="w-full bg-base-200 shadow-xl p-10 rounded-md">
                 <div className="w-full h-1/2">
                      <img className="w-full h-full rounded-lg" src={image} alt="Shoes" />
                 </div>
                 <div className=" w-full text-center">
                          <h2 className="text-4xl font-semibold text-teal-800 mt-10">{name}</h2>
                         <div className="text-base font-medium text-gray-700 my-4">
                              <p>Brand : {brandName}</p>
                              <p className="p-2">Category : {type} </p>
                              <p>Price : {price} Tk-/</p>
                        </div>
                             <p className="text-xl font-light text-gray-700">{shortDescription}</p>
                        
                </div>
        </div>
    );
};

export default Card;