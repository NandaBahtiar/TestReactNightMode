import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router";

const ProtectedRoute = (props) => {
  const authContextValue = useContext(AuthContext);
  const { sudahLogin } = authContextValue;

  if (sudahLogin) {
    return props.children;
  } else {
    console.log("redirect to login...");

    return <Navigate to={"/"} />;
  }
};
export default ProtectedRoute;
