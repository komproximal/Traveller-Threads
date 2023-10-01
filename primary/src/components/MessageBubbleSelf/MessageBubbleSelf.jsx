/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MessageBubbleSelf = ({
  className,
  hiThereMyNameIsClassName,
  text = "Hi there, my name is Annalise and<br/>I will be assisting you today.cfcjdnjcndjcdncdc<br/>cnjdncdjcndjncdjncdjcnd",
  divClassName,
  text1 = "11:31 AM",
  frame = "/img/frame-2882-4.svg",
  topVectorTip = "/img/top-vector-tip-8.svg",
}) => {
  return (
    <div className={`message-bubble-self ${className}`}>
      <div className="bubble-right">
        <div className="message-frame">
          <div className="body">
            <div className="text">
              <p className={`hi-there-my-name-is ${hiThereMyNameIsClassName}`}>{text}</p>
              <div className="spacer" />
            </div>
            <div className="time-read-receipt">
              <div className="frame">
                <div className={`element-AM ${divClassName}`}>{text1}</div>
                <img className="img" alt="Frame" src={frame} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bubble-left">
        <div className="bubble-tip">
          <div className="overlap-group">
            <img className="top-vector-tip" alt="Top vector tip" src={topVectorTip} />
            <div className="top-rectangle" />
          </div>
        </div>
        <div className="bottom-curve" />
        <img className="bottom-curve-vector" alt="Bottom curve vector" src="/img/bottom-curve-vector-8.svg" />
      </div>
    </div>
  );
};

MessageBubbleSelf.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  frame: PropTypes.string,
  topVectorTip: PropTypes.string,
};
