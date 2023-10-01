import React from "react";
import { Cta } from "../../components/Cta";
import { IconFacebook } from "../../components/IconFacebook";
import { IconInstagram } from "../../components/IconInstagram";
import { IconTwitter } from "../../components/IconTwitter";
import { Navbar } from "../../components/Navbar";
import "./style.css";

export const Tips = () => {
  return (
    <div className="tips">
      <div className="div-3">
        <div className="frame-2">
          <Cta
            className="CTA-instance"
            icon={<IconFacebook />}
            icon1={<IconTwitter />}
            override={<IconInstagram />}
            vector="/img/vector-5.png"
          />
          <p className="p">Are you a sustainable eco-traveller?</p>
          <p className="put-yourself-to-the">
            Put yourself to the test and see if you&#39;re already following the tips below. If not, there&#39;s no
            better time to begin than today.
          </p>
          <div className="card">
            <button className="button">
              <div className="div-wrapper">
                <div className="text-wrapper-11">Respect Nature</div>
              </div>
            </button>
          </div>
          <div className="button-wrapper">
            <button className="button">
              <div className="div-wrapper">
                <div className="text-wrapper-12">
                  Support Local <br />
                  Business
                </div>
              </div>
            </button>
          </div>
          <div className="card-2">
            <button className="button">
              <div className="div-wrapper">
                <div className="text-wrapper-13">Minimize Waste</div>
              </div>
            </button>
          </div>
          <div className="card-3">
            <button className="button-2">
              <div className="div-wrapper">
                <div className="text-wrapper-12">
                  Eco-Friendly
                  <br />
                  Accomodations
                </div>
              </div>
            </button>
          </div>
          <div className="card-4">
            <button className="button">
              <div className="div-wrapper">
                <div className="text-wrapper-12">Use Reusable Items</div>
              </div>
            </button>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <button className="button-3">
                <div className="div-wrapper">
                  <div className="text-wrapper-14">Educate Others</div>
                </div>
              </button>
            </div>
          </div>
          <div className="card-5">
            <button className="button-4">
              <div className="overlap-group-2">
                <div className="text-wrapper-15">Pack Lightly</div>
              </div>
            </button>
          </div>
          <div className="card-6">
            <button className="button-5">
              <div className="use-public-wrapper">
                <div className="use-public">
                  Use Public <br />
                  Transportation
                </div>
              </div>
            </button>
          </div>
        </div>
        <Navbar
          className="navbar-instance"
          componentFluentLocation="/img/fluent-location-48-filled-3.svg"
          divClassName="design-component-instance-node"
          divClassNameOverride="navbar-2"
          to="/tips"
          vector="/img/vector-4.svg"
        />
      </div>
    </div>
  );
};
