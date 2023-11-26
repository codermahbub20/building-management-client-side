/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Components/hooks/useAuth";


const PrivateRoute = ({children}) => {

    const {user,loading} = useAuth();
    const location = useLocation()
    console.log(user)
    
    if(loading) {
       return <span className="loading loading-dots loading-lg"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;