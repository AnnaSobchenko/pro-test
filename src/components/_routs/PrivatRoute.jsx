import { useLocation, Navigate, Outlet } from "react-router-dom";

import useAuth from "../_shared/hooks/useAuth";

const PrivateRoute = ()=> {
    const isLogin = useAuth();

    const location = useLocation();

    if(!isLogin) {
        return <Navigate to="/auth" state={{from: location}} />
    }
    return <Outlet />
};

export default PrivateRoute;