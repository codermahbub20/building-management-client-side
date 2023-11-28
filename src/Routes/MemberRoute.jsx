/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import useRole from "../Components/hooks/useRole";
import useAuth from "../Components/hooks/useAuth";


const MemberRoute = ({children}) => {

    const {loading} = useAuth();
    const location = useLocation()

    const [roles] = useRole()

    if(loading) {
       return <span className="loading loading-bars loading-lg"></span>
    }

    if(roles === 'member'){
        return children;
    }

    return <Navigate to="/dashboard" state={{from: location}} replace></Navigate>
};

export default MemberRoute;