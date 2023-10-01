/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Bell } from "../../icons/Bell";
import { Component } from "../Component";
import "./style.css";

export const Navbar = ({
  className,
  divClassName,
  componentFluentLocation = "/img/fluent-location-48-filled.svg",
  vector = "/img/vector.svg",
  img = "/img/vector-1.svg",
  avatarImage = "/img/avatar-image.png",
}) => {
  return (
    <div className={`navbar ${className}`}>
      <div className="container">
        <img className="traveller" alt="Traveller" src="/img/traveller-1.png" />
        <div className="column">
          <div className={`div ${divClassName}`}>Home</div>
          <div className="text-wrapper-2">Hidden Gems</div>
          <div className="nav-link-dropdown">
            <div className="text-wrapper-2">Local Guides</div>
          </div>
          <div className="text-wrapper-2">Eco-Tips</div>
        </div>
        <div className="group-wrapper">
          <div className="group">
            <Component className="component-1" fluentLocation={componentFluentLocation} property1="default" />
            <div className="notification">
              <div className="overlap">
                <Bell className="bell-2" />
                <div className="dot">
                  <div className="overlap-group">
                    <div className="text-wrapper-3">4</div>
                  </div>
                </div>
              </div>
            </div>
            <img className="vector" alt="Vector" src={vector} />
            <div className="ant-design-message">
              <div className="overlap-2">
                <img className="img" alt="Vector" src={img} />
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="text-wrapper-4">1</div>
                  </div>
                </div>
              </div>
            </div>
            <img className="avatar-image" alt="Avatar image" src={avatarImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  componentFluentLocation: PropTypes.string,
  vector: PropTypes.string,
  img: PropTypes.string,
  avatarImage: PropTypes.string,
};
