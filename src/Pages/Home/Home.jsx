import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Brand from "../../components/Brand/Brand";

const Home = () => {
    const brandInfo = useLoaderData();
    return (
        <div>
             <Banner></Banner>
             <h1 className="text-center font-bold text-4xl text-gray-700">Our Brand </h1>
             <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-12">
                {
                    brandInfo.map((brand,idx) => <Brand key={idx} brand={brand}></Brand>)
                }
             </div>
        </div>
    );
};

export default Home;