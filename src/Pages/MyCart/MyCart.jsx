import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";


const MyCart = () => {
    const cards = useLoaderData();
    return (
        <div className="grid lg:grid-cols-3 gap-8 my-12 md:grid-cols-2 grid-cols-1 justify-between">
            {
              cards.map(card => <Card key={card._id} card={card}></Card>)  
            }
        </div>
    );
};

export default MyCart;