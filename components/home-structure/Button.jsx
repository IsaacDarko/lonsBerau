import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-2 px-4 font-poppins text-sm text-white bg-blue-500 rounded 
    inline-flex items-center font-semibold tracking-widest active:bg-blue-400 transition ease-in-out duration-150 ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
