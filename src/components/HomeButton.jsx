import React from "react";
import { useNavigate } from "react-router";

const homeButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
        type="button"
        className="bg-orange-500 p-6"
      >
        Home
      </button>
    </div>
  );
};

export default homeButton;
