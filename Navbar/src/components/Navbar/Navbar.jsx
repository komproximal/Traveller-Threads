/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Bell2 } from "../../icons/Bell2";
import { Component } from "../Component";
import "./style.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <img className="traveller" alt="Traveller" src="/img/traveller-1.png" />
        <div className="column">
          <div className="div">Home</div>
          <div className="text-wrapper-2">Hidden Gems</div>
          <div className="nav-link-dropdown">
            <div className="text-wrapper-2">Local Guides</div>
          </div>
          <div className="text-wrapper-2">Eco-Tips</div>
        </div>
        <div className="group-wrapper">
          <div className="group">
            <Component
              className="component-1"
              fluentLocation="/img/fluent-location-48-filled-3.svg"
              property1="default"
            />
            <div className="notification">
              <div className="overlap">
                <Bell2 className="bell" />
                <div className="dot">
                  <div className="overlap-group">
                    <div className="text-wrapper-3">4</div>
                  </div>
                </div>
              </div>
            </div>
            <img className="vector" alt="Vector" src="/img/vector-3.svg" />
            <div className="ant-design-message">
              <div className="overlap-2">
                <img className="img" alt="Vector" src="/img/vector-2.svg" />
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="text-wrapper-4">1</div>
                  </div>
                </div>
              </div>
            </div>
            <img className="avatar-image" alt="Avatar image" src="/img/avatar-image-1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
