/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconFacebook1 } from "../../icons/IconFacebook1";
import { IconInstagram1 } from "../../icons/IconInstagram1";
import { IconTwitter1 } from "../../icons/IconTwitter1";
import "./style.css";

export const Cta = ({
  className,
  icon = <IconFacebook1 className="icon-instance-node" color="white" />,
  override = <IconInstagram1 className="icon-instance-node" color="white" />,
  icon1 = <IconTwitter1 className="icon-instance-node" color="white" />,
  vector = "/img/vector-2.svg",
}) => {
  return (
    <div className={`CTA ${className}`}>
      <div className="content">
        <div className="newsletter">
          <div className="logo">
            <div className="traveller-wrapper">
              <img className="traveller" alt="Traveller" src="/img/traveller-1-1.png" />
            </div>
          </div>
          <div className="frame">
            <p className="text-wrapper">Your Gateway to Unique Destinations!</p>
          </div>
        </div>
        <div className="links">
          <div className="column">
            <div className="div">Company</div>
            <div className="div-2">
              <div className="link">
                <div className="text-wrapper-2">About US</div>
              </div>
              <div className="link">
                <div className="text-wrapper-2">Hidden Gems</div>
              </div>
              <div className="link">
                <div className="text-wrapper-2">Local Guides</div>
              </div>
              <div className="link">
                <div className="text-wrapper-2">FAQs</div>
              </div>
              <div className="link">
                <div className="text-wrapper-2">Support</div>
              </div>
            </div>
          </div>
          <div className="column-2">
            <div className="text-wrapper-3">Follow Us</div>
            <div className="div-2">
              <div className="link-2">
                {icon}
                <div className="text-wrapper-4">Facebook</div>
              </div>
              <div className="link-2">
                {override}
                <div className="text-wrapper-4">Instagram</div>
              </div>
              <div className="link-2">
                {icon1}
                <div className="text-wrapper-4">Twitter</div>
              </div>
            </div>
          </div>
          <img className="vector" alt="Vector" src={vector} />
        </div>
      </div>
      <div className="credits">
        <div className="divider" />
        <div className="row">
          <p className="text-wrapper-4">2023 Logoipsum. All right reserved.</p>
          <div className="footer-links">
            <div className="text-wrapper-5">Privacy Policy</div>
            <div className="text-wrapper-5">Terms of Service</div>
          </div>
        </div>
      </div>
      <img className="vuesax-bold-location" alt="Vuesax bold location" src="/img/vuesax-bold-location.png" />
    </div>
  );
};

Cta.propTypes = {
  vector: PropTypes.string,
};
