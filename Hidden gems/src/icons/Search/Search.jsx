/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Search = ({ opacity = "0.2", className }) => {
  return (
    <svg
      className={`search ${className}`}
      fill="none"
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="circle"
        cx="8.83333"
        cy="8.83333"
        r="5.83333"
        stroke="#4B465C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
      <circle
        className="circle"
        cx="8.83333"
        cy="8.83333"
        r="5.83333"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={opacity}
        strokeWidth="1.75"
      />
      <path
        className="path"
        d="M18 18L13 13"
        stroke="#4B465C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
      <path
        className="path"
        d="M18 18L13 13"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={opacity}
        strokeWidth="1.75"
      />
    </svg>
  );
};

Search.propTypes = {
  opacity: PropTypes.string,
};
