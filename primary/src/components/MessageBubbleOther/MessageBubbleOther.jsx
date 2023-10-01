/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../Avatar";
import "./style.css";

export const MessageBubbleOther = ({
  className,
  topVectorTip = "/img/top-vector-tip-9.svg",
  nameClassName,
  roleClassName,
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <div className={`message-bubble-other ${className}`}>
      <div className="avatar-with-online">
        <Avatar className="avatar-instance" size="thirty-two-px" type="user" variant="black-bg" />
      </div>
      <div className="message-bubble">
        <div className="div">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <img className="top-vector-tip-2" alt="Top vector tip" src={topVectorTip} />
              <div className="top-rectangle-2" />
            </div>
          </div>
          <div className="bottom-curve-2" />
          <img className="bottom-curve-vector-2" alt="Bottom curve vector" src="/img/bottom-curve-vector-9.svg" />
        </div>
        <div className="message-frame-wrapper">
          <div className="message-frame-2">
            <div className="sender">
              <div className={`name ${nameClassName}`}>Jav</div>
              <div className={`role ${roleClassName}`}>Engineering</div>
            </div>
            <div className="body-2">
              <div className="text-2">
                <div className={`text-wrapper ${divClassName}`}>I’m down! Any ideas??</div>
                <div className="spacer-2" />
              </div>
              <div className="time">
                <div className={`text-wrapper-2 ${divClassNameOverride}`}>11:35 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MessageBubbleOther.propTypes = {
  topVectorTip: PropTypes.string,
};
