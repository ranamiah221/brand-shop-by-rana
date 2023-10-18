import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError(); 
    return (
        <div className="lg:mt-72 md:mt-44 mt-16">
           
           <h1 className="text-5xl font-bold text-center ">Ooops!!</h1>
             <p className="text-base font-medium text-center text-red-600 mt-3">Sorry, an unexpected error has occurred.</p>
             <p className="text-xl font-medium text-center">{error.statusText || error.message}</p>
          
        </div>
    );
};

export default ErrorPage;