/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({ property1, className, fluentLocation = "/img/fluent-location-48-filled-2.svg" }) => {
  return (
    <div className={`component ${property1} ${className}`}>
      <img
        className="fluent-location"
        alt="Fluent location"
        src={property1 === "default" ? fluentLocation : "/img/fluent-location-48-filled-1.svg"}
      />
      <div className="text-wrapper">Add Gem</div>
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["on-click", "default"]),
  fluentLocation: PropTypes.string,
};
