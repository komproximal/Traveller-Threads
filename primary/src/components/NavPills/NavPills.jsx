/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const NavPills = ({
  alignment,
  className,
  tabClassName,
  textClassName,
  text = "Active",
  text1 = "Links",
  tabClassNameOverride,
  hasTab = true,
}) => {
  return (
    <div className={`nav-pills ${alignment} ${className}`}>
      <div className={`tab ${tabClassName}`}>
        <div className={`text-3 ${textClassName}`}>{text}</div>
      </div>
      <div className="div-wrapper">
        <div className="text-4">{text1}</div>
      </div>
      <div className={`div-wrapper ${tabClassNameOverride}`}>
        <div className="text-4">{text1}</div>
      </div>
      {hasTab && (
        <div className="div-wrapper">
          <div className="text-5">Disabled</div>
        </div>
      )}
    </div>
  );
};

NavPills.propTypes = {
  alignment: PropTypes.oneOf(["right", "center", "left"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  hasTab: PropTypes.bool,
};
