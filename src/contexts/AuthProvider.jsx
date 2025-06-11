import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  const [sudahLogin, setSudahLogin] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        sudahLogin,
        setSudahLogin
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
