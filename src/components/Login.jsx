import React, { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import ThemeContext from "./state/ThemeContext ";

const Login = () => {
  const theme = useContext(ThemeContext);
  const contextValue = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(
      "setara dengan componentDidMount karena dependency array nya array kosong"
    );
    console.log(contextValue.sudahLogin);
    if (contextValue.sudahLogin) {
      navigate("/dashboard/users");
    }
  }, []);
  return (
    <>
      <div className={`px-40 flex flex-1 justify-center py-5 h-[100vh] bg-slate-400 `}>
        <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
          <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
            Welcome back
          </h2>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label
              onChange={(e) => {
                console.log(e.target.value);
                contextValue.setSudahLogin(true);
              }}
              className="flex flex-col min-w-40 flex-1"
            >
              <p className="text-white text-base font-medium leading-normal pb-2">
                Usernames
              </p>
              <input
                placeholder="Enter your username"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#314c68] bg-[#182634] focus:border-[#314c68] h-14 placeholder:text-[#90accb] p-[15px] text-base font-normal leading-normal"
                defaultValue="" // Changed value to defaultValue for uncontrolled component, or manage with state
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-white text-base font-medium leading-normal pb-2">
                Password
              </p>
              <input
                type="password" // Added type="password" for password fields
                placeholder="Enter your password"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#314c68] bg-[#182634] focus:border-[#314c68] h-14 placeholder:text-[#90accb] p-[15px] text-base font-normal leading-normal"
                defaultValue="" // Changed value to defaultValue for uncontrolled component, or manage with state
              />
            </label>
          </div>
          <p className="text-[#90accb] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">
            Forgot password?
          </p>
          <div className="flex px-4 py-3">
            <button
              onClick={() => {
                // contextValue.setSudahLogin(true);
                navigate("/dashboard/users");
              }}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#3490f3] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Login</span>
            </button>
          </div>
          <p className="text-[#90accb] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
            Don't have an account? Sign up
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;
