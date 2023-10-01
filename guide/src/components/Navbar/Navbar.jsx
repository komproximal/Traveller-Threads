/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Bell2 } from "../../icons/Bell2";
import { Component } from "../Component";
import "./style.css";

export const Navbar = ({
  className,
  divClassName,
  divClassNameOverride,
  componentFluentLocation = "/img/fluent-location-48-filled.svg",
  vector = "/img/vector.svg",
}) => {
  return (
    <div className={`navbar ${className}`}>
      <div className="container">
        <img className="img" alt="Traveller" src="/img/traveller-1.png" />
        <div className="column-3">
          <div className={`text-wrapper-7 ${divClassName}`}>Home</div>
          <div className="text-wrapper-8">Hidden Gems</div>
          <Link className="nav-link-dropdown" to="/local-guide">
            <div className={`text-wrapper-8 ${divClassNameOverride}`}>Local Guides</div>
          </Link>
          <div className="text-wrapper-8">Eco-Tips</div>
        </div>
        <div className="group-wrapper">
          <div className="group">
            <Component className="component-1" fluentLocation={componentFluentLocation} property1="default" />
            <div className="notification">
              <div className="overlap">
                <Bell2 className="bell" />
                <div className="dot">
                  <div className="overlap-group">
                    <div className="text-wrapper-9">4</div>
                  </div>
                </div>
              </div>
            </div>
            <img className="vector-2" alt="Vector" src={vector} />
            <div className="ant-design-message">
              <div className="overlap-2">
                <img className="vector-3" alt="Vector" src="/img/vector-1.svg" />
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="text-wrapper-10">1</div>
                  </div>
                </div>
              </div>
            </div>
            <img className="avatar-image" alt="Avatar image" src="/img/avatar-image.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  componentFluentLocation: PropTypes.string,
  vector: PropTypes.string,
};
