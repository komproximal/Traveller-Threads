/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
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
          <div className={`text-wrapper-5 ${divClassName}`}>Home</div>
          <div className="text-wrapper-6">Hidden Gems</div>
          <div className="nav-link-dropdown">
            <div className="text-wrapper-6">Local Guides</div>
          </div>
          <div className="text-wrapper-6">Eco-Tips</div>
        </div>
        <div className="group-wrapper">
          <div className="group">
            <Component className="component-1" fluentLocation={componentFluentLocation} property1="default" />
            <div className="notification">
              <div className="overlap">
                <Bell className="bell-2" />
                <div className="dot">
                  <div className="overlap-group-4">
                    <div className="text-wrapper-7">4</div>
                  </div>
                </div>
              </div>
            </div>
            <img className="vector" alt="Vector" src={vector} />
            <Link className="ant-design-message" to="/messagesu47-primary">
              <div className="overlap-2">
                <img className="vector-2" alt="Vector" src={img} />
                <div className="dot-2">
                  <div className="overlap-group-4">
                    <div className="text-wrapper-8">1</div>
                  </div>
                </div>
              </div>
            </Link>
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
