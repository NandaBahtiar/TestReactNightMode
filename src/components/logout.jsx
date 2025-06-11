import React, { useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const ContextValue = useContext(AuthContext);
  return (
    <div>
      <button
        onClick={() => {
          ContextValue.setSudahLogin(false);
          navigate("/");
        }}
        className="bg-slate-600"
        type="button"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
