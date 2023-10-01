import React from "react";
import { Header } from "../../components/Header";
import { MessageBubbleOther } from "../../components/MessageBubbleOther";
import { MessageBubbleSelf } from "../../components/MessageBubbleSelf";
import { NavPills } from "../../components/NavPills";
import { Navbar } from "../../components/Navbar";
import { IconsObjects } from "../../icons/IconsObjects";
import { IconsPeople } from "../../icons/IconsPeople";
import { IconsSymbols } from "../../icons/IconsSymbols";
import { Search } from "../../icons/Search";
import "./style.css";

export const MessagesPrimary = () => {
  return (
    <div className="messages-primary">
      <div className="div-2">
        <div className="group-2">
          <img className="material-symbols" alt="Material symbols" src="/img/material-symbols-group.svg" />
          <img className="entypo-new-message" alt="Entypo new message" src="/img/entypo-new-message.svg" />
        </div>
        <div className="text-wrapper-9">READ MORE</div>
        <img className="vector-3" alt="Vector" src="/img/vector-4.png" />
        <div className="form">
          <div className="form-2">
            <Search className="search-1" opacity="0.5" />
            <div className="text-6">Search User</div>
          </div>
        </div>
        <div className="message-frame-3">
          <div className="messages-frame">
            <div className="text-wrapper-10">06/07/2023</div>
            <MessageBubbleSelf
              className="message-bubble-self-instance"
              divClassName="design-component-instance-node-2"
              frame="/img/frame-2882.svg"
              hiThereMyNameIsClassName="message-bubble-self-2"
              text="I am down for whatever!"
              text1="11:36 AM"
              topVectorTip="/img/top-vector-tip.svg"
            />
            <MessageBubbleSelf
              className="message-bubble-self-3"
              divClassName="design-component-instance-node-2"
              frame="/img/frame-2882-2.svg"
              hiThereMyNameIsClassName="message-bubble-self-2"
              text="Agreed"
              text1="11:52 PM"
              topVectorTip="/img/top-vector-tip.svg"
            />
            <div className="message-bubble-other-2">
              <div className="online-indicator-wrapper">
                <div className="online-indicator" />
              </div>
              <div className="message-bubble-2">
                <div className="bubble-left-2">
                  <div className="bubble-tip-2">
                    <div className="overlap-group-5">
                      <img className="top-vector-tip-3" alt="Top vector tip" src="/img/top-vector-tip-2.svg" />
                      <div className="top-rectangle-3" />
                    </div>
                  </div>
                  <div className="bottom-curve-3" />
                  <img
                    className="bottom-curve-vector-3"
                    alt="Bottom curve vector"
                    src="/img/bottom-curve-vector-9.svg"
                  />
                </div>
                <div className="bubble-right-2">
                  <div className="message-frame-4">
                    <div className="sender-2">
                      <div className="name-2">Aubrey</div>
                      <div className="role-2">Product</div>
                    </div>
                    <div className="body-3">
                      <div className="text-7">
                        <p className="i-m-down-any-ideas">I was thinking the cafe place to be included</p>
                        <div className="spacer-3" />
                      </div>
                      <div className="element-AM-wrapper">
                        <div className="element-AM-2">11:45 AM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="message-bubble-other-3">
              <div className="online-indicator-wrapper">
                <div className="online-indicator" />
              </div>
              <div className="message-bubble-2">
                <div className="bubble-left-2">
                  <div className="bubble-tip-2">
                    <div className="overlap-group-5">
                      <img className="top-vector-tip-3" alt="Top vector tip" src="/img/top-vector-tip-2.svg" />
                      <div className="top-rectangle-3" />
                    </div>
                  </div>
                  <div className="bottom-curve-3" />
                  <img
                    className="bottom-curve-vector-3"
                    alt="Bottom curve vector"
                    src="/img/bottom-curve-vector-9.svg"
                  />
                </div>
                <div className="bubble-right-2">
                  <div className="message-frame-4">
                    <div className="sender-2">
                      <div className="name-2">Aubrey</div>
                      <div className="role-2">Product</div>
                    </div>
                    <div className="body-3">
                      <div className="text-7">
                        <p className="i-m-down-any-ideas-2">
                          <span className="span">But limited vegan options </span>
                          <span className="text-wrapper-11">@Janet</span>
                          <span className="span">!</span>
                        </p>
                        <div className="spacer-3" />
                      </div>
                      <div className="element-AM-wrapper">
                        <div className="element-AM-2">11:46 AM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="message-bubble-other-4">
              <div className="avatar-with-online-2" />
              <div className="message-bubble-2">
                <div className="bubble-left-2">
                  <div className="bubble-tip-2">
                    <div className="overlap-group-5">
                      <img className="top-vector-tip-3" alt="Top vector tip" src="/img/top-vector-tip-2.svg" />
                      <div className="top-rectangle-3" />
                    </div>
                  </div>
                  <div className="bottom-curve-3" />
                  <img
                    className="bottom-curve-vector-3"
                    alt="Bottom curve vector"
                    src="/img/bottom-curve-vector-9.svg"
                  />
                </div>
                <div className="bubble-right-2">
                  <div className="message-frame-4">
                    <div className="sender-2">
                      <div className="name-2">Janet</div>
                      <div className="role-2">Engineering</div>
                    </div>
                    <div className="body-3">
                      <div className="text-7">
                        <p className="i-m-down-any-ideas-3">
                          That works- I was actually planning to
                          <br />
                          get a rice dish anyways👍
                        </p>
                        <div className="spacer-3" />
                      </div>
                      <div className="element-AM-wrapper">
                        <div className="element-AM-2">12:03 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <MessageBubbleOther
              className="message-bubble-other-instance"
              divClassName="message-bubble-other-6"
              divClassNameOverride="design-component-instance-node-2"
              nameClassName="design-component-instance-node-3"
              roleClassName="message-bubble-other-5"
              topVectorTip="/img/top-vector-tip-2.svg"
            />
            <div className="message-bubble-self-4">
              <div className="bubble-right-3">
                <div className="message-frame-4">
                  <div className="body-3">
                    <div className="text-8">
                      <div className="text-wrapper-12">Hi guys!</div>
                    </div>
                    <div className="frame-wrapper">
                      <div className="frame-2">
                        <div className="text-wrapper-13">11:31 AM</div>
                        <img className="frame-3" alt="Frame" src="/img/frame-2882.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bubble-left-3">
                <div className="bubble-tip-3">
                  <div className="overlap-group-5">
                    <img className="top-vector-tip-4" alt="Top vector tip" src="/img/top-vector-tip.svg" />
                    <div className="top-rectangle-4" />
                  </div>
                </div>
                <div className="bottom-curve-4" />
                <img className="bottom-curve-vector-3" alt="Bottom curve vector" src="/img/bottom-curve-vector-8.svg" />
              </div>
            </div>
            <div className="message-bubble-self-5">
              <div className="bubble-right-3">
                <div className="message-frame-4">
                  <div className="body-3">
                    <div className="text-8">
                      <p className="text-wrapper-12">What do you think of Tokyo intinerary?</p>
                    </div>
                    <div className="frame-wrapper">
                      <div className="frame-2">
                        <div className="text-wrapper-13">11:31 AM</div>
                        <img className="frame-3" alt="Frame" src="/img/frame-2882.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bubble-left-3">
                <div className="bubble-tip-3">
                  <div className="overlap-group-5">
                    <img className="top-vector-tip-4" alt="Top vector tip" src="/img/top-vector-tip.svg" />
                    <div className="top-rectangle-4" />
                  </div>
                </div>
                <div className="bottom-curve-4" />
                <img className="bottom-curve-vector-3" alt="Bottom curve vector" src="/img/bottom-curve-vector-8.svg" />
              </div>
            </div>
            <footer className="footer">
              <div className="emoji-selector">
                <IconsPeople className="icon-instance-node" />
              </div>
              <div className="frame-4">
                <div className="text-wrapper-14">Start typing...</div>
              </div>
              <div className="frame-5">
                <IconsSymbols className="icon-instance-node" />
                <IconsObjects className="icons-objects" />
              </div>
            </footer>
          </div>
          <Header
            className="header-instance"
            divClassName="design-component-instance-node-3"
            divClassNameOverride="header-3"
            messageParticipantsClassName="header-2"
            variantKebabHorizontalColorPrimaryModeLightStyleOverrideClassName="header-4"
          />
        </div>
        <NavPills
          alignment="left"
          className="nav-pills-instance"
          hasTab={false}
          tabClassName="nav-pills-2"
          tabClassNameOverride="nav-pills-4"
          text="Primary"
          text1="Requests"
          textClassName="nav-pills-3"
        />
        <div className="frame-6">
          <div className="frame-7">
            <div className="group-3">
              <img className="line" alt="Line" src="/img/line-1.svg" />
              <img className="line-2" alt="Line" src="/img/line-2.svg" />
              <img className="line-3" alt="Line" src="/img/line-3.svg" />
              <img className="line-4" alt="Line" src="/img/line-5.svg" />
              <img className="line-5" alt="Line" src="/img/line-8.png" />
              <img className="line-6" alt="Line" src="/img/line-4.svg" />
              <img className="line-7" alt="Line" src="/img/line-6.svg" />
              <img className="line-8" alt="Line" src="/img/line-8.png" />
              <img className="line-9" alt="Line" src="/img/line-8.png" />
              <div className="div-3">
                <div className="div-3">
                  <div className="group-4">
                    <div className="text-wrapper-15">Team Unicorns</div>
                    <p className="text-wrapper-16">Amet minim mollit non deserunt ulla...</p>
                    <div className="text-wrapper-17">01:01</div>
                  </div>
                  <div className="emojione-tokyo">
                    <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-8.svg" />
                    <img className="emojione-tokyo" alt="Emojione tokyo" src="/img/emojione-v1-tokyo-tower.svg" />
                  </div>
                </div>
                <div className="ellipse-2" />
              </div>
              <div className="overlap-3">
                <div className="group-5">
                  <div className="group-4">
                    <div className="text-wrapper-18">Kathryn Murphy</div>
                    <p className="text-wrapper-16">Amet minim mollit non deserunt ulla...</p>
                    <div className="text-wrapper-17">01:09</div>
                  </div>
                  <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-7.svg" />
                </div>
                <div className="ellipse-2" />
              </div>
              <div className="overlap-4">
                <div className="group-5">
                  <div className="group-4">
                    <div className="text-wrapper-19">Esther Howard</div>
                    <p className="text-wrapper-16">Amet minim mollit non deserunt ulla...</p>
                    <div className="text-wrapper-17">01:21</div>
                  </div>
                  <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-6.svg" />
                </div>
                <div className="ellipse-2" />
              </div>
              <div className="overlap-5">
                <div className="group-5">
                  <div className="group-4">
                    <div className="text-wrapper-20">Kristin Watson</div>
                    <p className="text-wrapper-16">Amet minim mollit non deserunt ulla...</p>
                    <div className="text-wrapper-17">01:29</div>
                  </div>
                  <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-5.svg" />
                </div>
                <div className="ellipse-3" />
              </div>
              <div className="group-6">
                <div className="group-4">
                  <div className="text-wrapper-20">Kristin Watson</div>
                  <p className="text-wrapper-16">Amet minim mollit non deserunt ulla...</p>
                  <div className="text-wrapper-17">01:29</div>
                </div>
                <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-4.svg" />
              </div>
              <div className="group-7">
                <div className="group-4">
                  <div className="text-wrapper-20">Kristin Watson</div>
                  <p className="text-wrapper-16">Amet minim mollit non deserunt ulla...</p>
                  <div className="text-wrapper-17">01:29</div>
                </div>
                <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-3.svg" />
              </div>
              <div className="group-8">
                <div className="group-4">
                  <div className="text-wrapper-20">Kristin Watson</div>
                  <p className="text-wrapper-16">Amet minim mollit non deserunt ulla...</p>
                  <div className="text-wrapper-17">01:29</div>
                </div>
                <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-2.png" />
              </div>
              <div className="group-9">
                <div className="group-4">
                  <div className="text-wrapper-21">Qwertyvate Key</div>
                  <p className="text-wrapper-16">Amet minim mollit non deserunt ulla...</p>
                  <div className="text-wrapper-17">01:40</div>
                </div>
                <div className="overlap-6">
                  <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-1-1.svg" />
                  <img className="ellipse-5" alt="Ellipse" src="/img/ellipse-2.png" />
                  <div className="text-wrapper-22">+9</div>
                </div>
              </div>
              <div className="group-10">
                <div className="group-4">
                  <div className="text-wrapper-23">Cody Fisher</div>
                  <p className="text-wrapper-16">Amet minim mollit non deserunt ulla...</p>
                  <div className="text-wrapper-17">01:40</div>
                </div>
                <img className="ellipse" alt="Ellipse" src="/img/ellipse-1.png" />
              </div>
            </div>
          </div>
        </div>
        <Navbar
          avatarImage="/img/avatar-image-1.png"
          className="navbar-instance"
          componentFluentLocation="/img/fluent-location-48-filled-3.svg"
          divClassName="navbar-2"
          img="/img/vector-2.svg"
          vector="/img/vector-3.svg"
        />
      </div>
    </div>
  );
};
