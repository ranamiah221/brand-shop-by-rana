import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";


const Root = () => {
    return (
        <div>
           <div className="w-11/12 mx-auto">
           <Navbar></Navbar>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;