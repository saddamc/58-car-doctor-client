import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="mx-auto my-auto max-w-sm mt-[100px] "><span className="loading loading-bars loading-lg"></span></div>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;