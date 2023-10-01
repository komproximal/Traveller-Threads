/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { VariantKebabHorizontalColorPrimaryModeLight } from "../../icons/VariantKebabHorizontalColorPrimaryModeLight";
import { Avatar } from "../Avatar";
import "./style.css";

export const Header = ({
  className,
  messageParticipantsClassName,
  divClassName,
  divClassNameOverride,
  variantKebabHorizontalColorPrimaryModeLightStyleOverrideClassName,
}) => {
  return (
    <div className={`header ${className}`}>
      <div className={`message-participants ${messageParticipantsClassName}`}>
        <div className={`text-wrapper-3 ${divClassName}`}>🦄 Team Unicorns</div>
        <p className={`p ${divClassNameOverride}`}>last seen 45 minutes ago</p>
      </div>
      <div className="avatar-group">
        <div className="overlap-group-3">
          <Avatar className="design-component-instance-node" size="twenty-four-px" type="user" variant="yellow-bg" />
          <div className="avatar-with">
            <Avatar className="avatar-2" size="twenty-four-px" type="user" variant="fuschia-bg" />
          </div>
          <div className="avatar-wrapper">
            <Avatar className="avatar-2" size="twenty-four-px" type="user" variant="indigo-bg" />
          </div>
          <div className="avatar-instance-wrapper">
            <Avatar className="avatar-2" size="twenty-four-px" type="user" variant="black-bg" />
          </div>
        </div>
      </div>
      <VariantKebabHorizontalColorPrimaryModeLight
        className={variantKebabHorizontalColorPrimaryModeLightStyleOverrideClassName}
        color="#666668"
      />
    </div>
  );
};
