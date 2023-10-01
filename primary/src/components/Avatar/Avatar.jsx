/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Avatar = ({ size, variant, type, className }) => {
  return (
    <div className={`avatar ${size} ${variant} ${type} ${className}`}>
      {((size === "forty-eight-px" && variant === "lavender-bg") ||
        (size === "forty-px" && variant === "pink-bg") ||
        (size === "sixty-four-px" && variant === "purple-bg") ||
        (size === "thirty-two-px" && variant === "black-bg") ||
        (size === "twenty-four-px" && variant === "lavender-bg") ||
        variant === "purple-user") && (
        <img
          className="toyfaces-colored-BG"
          alt="Toyfaces colored BG"
          src={
            variant === "lavender-bg"
              ? "/img/toyfaces-colored-bg-47-3.png"
              : variant === "purple-bg"
              ? "/img/toyfaces-colored-bg-59-1.png"
              : variant === "pink-bg"
              ? "/img/toyfaces-colored-bg-56-1.png"
              : variant === "purple-user"
              ? "/img/toyfaces-colored-bg-32-1.png"
              : size === "thirty-two-px"
              ? "/img/toyfaces-colored-bg-29-1-1.png"
              : undefined
          }
        />
      )}

      {variant === "lavender-bg" && size === "forty-eight-px" && (
        <img className="toyfaces-colored-BG-2" alt="Toyfaces colored BG" src="/img/toyfaces-colored-bg-47-3.png" />
      )}
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf([
    "twenty-four-px",
    "twenty-eight-px",
    "forty-eight-px",
    "sixteen-px",
    "forty-px",
    "sixty-four-px",
    "thirty-two-px",
    "twenty-px",
  ]),
  variant: PropTypes.oneOf([
    "purple-user",
    "office",
    "green-bg",
    "fuschia-bg",
    "pink-bg",
    "indigo-bg",
    "black-bg",
    "yellow-bg",
    "purple-bg",
    "lavender-bg",
    "rose-bg",
  ]),
  type: PropTypes.oneOf(["account", "user"]),
};
