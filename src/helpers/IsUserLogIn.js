import React from "react";
import { HOME } from "../Constant/routes";
import { Navigate } from "react-router-dom";

const IsUserLogIn = ({ user, children }) => {
    if (user) {
        return <Navigate to={HOME} replace />;
    }

    return children;
};

export default IsUserLogIn;
