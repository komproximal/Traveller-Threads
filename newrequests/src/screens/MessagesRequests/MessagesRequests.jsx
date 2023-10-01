import React from "react";
import { Navbar } from "../../components/Navbar";
import { IconsObjects } from "../../icons/IconsObjects";
import { IconsPeople } from "../../icons/IconsPeople";
import { IconsSymbols } from "../../icons/IconsSymbols";
import { Search } from "../../icons/Search";
import { VariantKebabHorizontalColorPrimaryModeLight } from "../../icons/VariantKebabHorizontalColorPrimaryModeLight";
import "./style.css";

export const MessagesRequests = () => {
  return (
    <div className="messages-requests">
      <div className="div-2">
        <div className="text-wrapper-5">READ MORE</div>
        <img className="vector-2" alt="Vector" src="/img/vector-2.png" />
        <div className="form">
          <div className="form-2">
            <Search className="search-1" opacity="0.5" />
            <div className="text">Search User</div>
          </div>
        </div>
        <div className="frame">
          <div className="div-wrapper">
            <div className="group-2">
              <img className="line" alt="Line" src="/img/line-2.svg" />
              <div className="div-3">
                <div className="div-3">
                  <div className="group-3">
                    <div className="text-wrapper-6">Kathryn Murphy</div>
                    <p className="p">Amet minim mollit non deserunt ulla...</p>
                    <div className="text-wrapper-7">01:09</div>
                  </div>
                  <img className="ellipse" alt="Ellipse" src="/img/ellipse-1.svg" />
                </div>
                <div className="ellipse-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="message-frame">
          <div className="messages-frame">
            <div className="text-wrapper-8">08/02/2023</div>
            <div className="message-bubble-other">
              <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-2.svg" />
              <div className="message-bubble">
                <div className="bubble-left">
                  <div className="bubble-tip">
                    <div className="overlap-group-2">
                      <img className="top-vector-tip" alt="Top vector tip" src="/img/top-vector-tip.svg" />
                      <div className="top-rectangle" />
                    </div>
                  </div>
                  <div className="bottom-curve" />
                  <img className="bottom-curve-vector" alt="Bottom curve vector" src="/img/bottom-curve-vector.svg" />
                </div>
                <div className="bubble-right">
                  <div className="message-frame-2">
                    <div className="sender">
                      <div className="text-wrapper-9">Kathryn</div>
                      <div className="role">Bali</div>
                    </div>
                    <div className="body">
                      <div className="text-2">
                        <p className="text-wrapper-10">Hi! I would like to join your group.</p>
                        <div className="frame-2">
                          <p className="sent-request-to-join">
                            <span className="span">
                              Sent Request to join group
                              <br />
                            </span>
                            <span className="text-wrapper-11">🦄 Team Unicorns</span>
                          </p>
                          <div className="frame-3">
                            <div className="text-wrapper-12">ACCEPT</div>
                            <div className="text-wrapper-13">REJECT</div>
                          </div>
                        </div>
                        <div className="spacer" />
                      </div>
                      <div className="time">
                        <div className="element-AM">12:04 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-14">Visit Profile</div>
            </div>
            <footer className="footer">
              <div className="emoji-selector">
                <IconsPeople className="icon-instance-node" />
              </div>
              <div className="frame-5">
                <div className="text-wrapper-15">Start typing...</div>
              </div>
              <div className="frame-6">
                <IconsSymbols className="icon-instance-node" />
                <IconsObjects className="icons-objects" />
              </div>
            </footer>
          </div>
          <header className="header">
            <div className="message-participants">
              <div className="text-wrapper-9">Kathryn Murphy</div>
              <p className="text-wrapper-16">last seen 45 minutes ago</p>
            </div>
            <VariantKebabHorizontalColorPrimaryModeLight className="kebab-horizontal" color="#666668" />
          </header>
        </div>
        <div className="nav-pills">
          <div className="tab">
            <div className="text-3">Primary</div>
          </div>
          <div className="tab">
            <div className="text-3">Local Guide</div>
          </div>
          <div className="tab-2">
            <div className="text-4">Requests</div>
          </div>
        </div>
        <div className="group-4">
          <img className="material-symbols" alt="Material symbols" src="/img/material-symbols-group.svg" />
          <img className="entypo-new-message" alt="Entypo new message" src="/img/entypo-new-message.svg" />
        </div>
        <Navbar
          avatarImage="/img/avatar-image-1.png"
          className="navbar-instance"
          componentFluentLocation="/img/fluent-location-48-filled-3.svg"
          divClassName="design-component-instance-node"
          img="/img/vector-3.svg"
          vector="/img/vector-4.svg"
        />
      </div>
    </div>
  );
};
