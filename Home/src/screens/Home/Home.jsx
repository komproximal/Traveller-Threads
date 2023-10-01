import React from "react";
import { Cta } from "../../components/Cta";
import { Group } from "../../components/Group";
import { IconFacebook } from "../../components/IconFacebook";
import { IconInstagram } from "../../components/IconInstagram";
import { IconTwitter } from "../../components/IconTwitter";
import { IconFacebook2 } from "../../icons/IconFacebook2";
import { IconInstagram1 } from "../../icons/IconInstagram1";
import { IconTwitter2 } from "../../icons/IconTwitter2";
import { VuesaxBoldCalendar2 } from "../../icons/VuesaxBoldCalendar2";
import { VuesaxBoldMap } from "../../icons/VuesaxBoldMap";
import { VuesaxOutlineSearchNormal } from "../../icons/VuesaxOutlineSearchNormal";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="frame-2">
        <div className="column-3">
          <div className="content-2">
            <img className="img" alt="Vector" src="/img/vector-7.svg" />
            <p className="your-gateway-to">Your gateway to hidden gems &amp; unique destinations!</p>
            <p className="p">
              Start your adventure right here with our handpicked travel experiences. Find new places to explore, make
              unforgettable memories, and navigate the world with our carefully designed itinerary.
            </p>
          </div>
          <div className="search">
            <div className="map">
              <VuesaxBoldMap className="icon-instance-node-2" />
              <div className="frame-3">
                <div className="text-wrapper-6">Locations</div>
                <div className="text-wrapper-7">e.g Kyoto, Japan</div>
              </div>
            </div>
            <img className="line" alt="Line" src="/img/line-1.svg" />
            <div className="frame-4">
              <VuesaxBoldCalendar2 className="icon-instance-node-2" />
              <div className="frame-5">
                <div className="text-wrapper-8">Date</div>
                <div className="text-wrapper-9">MM/DD/YYYY</div>
              </div>
            </div>
            <div className="vuesax-outline-wrapper">
              <VuesaxOutlineSearchNormal className="majesticons-share" />
            </div>
          </div>
        </div>
        <div className="column-4">
          <div className="text-wrapper-10">Follow Us</div>
          <div className="social-links">
            <div className="link-3">
              <IconFacebook2 className="icon-instance-node-2" color="#909090" />
            </div>
            <div className="link-3">
              <IconInstagram1 className="icon-instance-node-2" color="#909090" />
            </div>
            <div className="link-3">
              <IconTwitter2 className="icon-instance-node-2" color="#909090" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-wrapper-11">HEY THERE, Adventurer!</div>
      <div className="carousel">
        <div className="title">
          <div className="group-2">
            <img className="vector-2" alt="Vector" src="/img/vector-6.svg" />
            <div className="section-title">
              <div className="div-wrapper">
                <div className="text-wrapper-12">Your Favourites</div>
              </div>
            </div>
          </div>
          <div className="slider-buttons">
            <img className="button" alt="Button" src="/img/button-1.svg" />
            <img className="button" alt="Button" src="/img/button.svg" />
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content-3">
            <div className="content-4">
              <div className="content-5">
                <div className="product">
                  <img className="frame-6" alt="Frame" src="/img/frame-32-3.png" />
                  <div className="content-6">
                    <div className="header">
                      <div className="text-wrapper-13">Pink Sky Gondola Ride</div>
                      <div className="frame-7">
                        <img className="vector-3" alt="Vector" src="/img/vector-1.png" />
                        <div className="text-wrapper-14">(4.5)</div>
                      </div>
                    </div>
                    <div className="frame-8">
                      <div className="desc">
                        <div className="text-wrapper-15">Venice, Italy</div>
                      </div>
                      <img
                        className="majesticons-share"
                        alt="Majesticons share"
                        src="/img/majesticons-share-line.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="product">
                  <img className="frame-6" alt="Frame" src="/img/frame-32-2.png" />
                  <div className="content-6">
                    <div className="header">
                      <div className="text-wrapper-13">Mt. Trek Sunrise View</div>
                      <div className="frame-9">
                        <img className="vector-3" alt="Vector" src="/img/vector-1.png" />
                        <div className="text-wrapper-14">(4.5)</div>
                      </div>
                    </div>
                    <div className="frame-8">
                      <div className="desc">
                        <div className="text-wrapper-15">Bali, Indonesia</div>
                      </div>
                      <img
                        className="majesticons-share"
                        alt="Majesticons share"
                        src="/img/majesticons-share-line.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="frame-10">
                    <img className="gis-poi-favorite-o" alt="Gis poi favorite o" src="/img/gis-poi-favorite-o.png" />
                  </div>
                  <div className="content-6">
                    <div className="header">
                      <div className="text-wrapper-13">Remote Valley Temple</div>
                      <div className="frame-11">
                        <img className="vector-3" alt="Vector" src="/img/vector-1.png" />
                        <div className="text-wrapper-14">(4.5)</div>
                      </div>
                    </div>
                    <div className="desc-2">
                      <div className="frame-8">
                        <div className="desc">
                          <div className="text-wrapper-15">Bangkok, Thailand</div>
                        </div>
                        <img
                          className="majesticons-share"
                          alt="Majesticons share"
                          src="/img/majesticons-share-line.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="gis-poi-favorite-o-wrapper">
                    <img className="gis-poi-favorite-o" alt="Gis poi favorite o" src="/img/gis-poi-favorite-o.png" />
                  </div>
                  <div className="content-6">
                    <div className="header">
                      <div className="text-wrapper-13">Holy Place</div>
                      <div className="frame-12">
                        <img className="vector-3" alt="Vector" src="/img/vector-1.png" />
                        <div className="text-wrapper-14">(4.5)</div>
                      </div>
                    </div>
                    <div className="desc-2">
                      <div className="desc-2">
                        <div className="frame-8">
                          <div className="desc">
                            <div className="text-wrapper-15">Tamil Nadu, India</div>
                          </div>
                          <img
                            className="majesticons-share"
                            alt="Majesticons share"
                            src="/img/majesticons-share-line.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-2">
                  <div className="frame-13">
                    <img className="gis-poi-favorite-o" alt="Gis poi favorite o" src="/img/gis-poi-favorite-o.png" />
                  </div>
                  <div className="content-6">
                    <div className="header">
                      <div className="text-wrapper-13">Best Cafe in Oia</div>
                      <div className="frame-12">
                        <img className="vector-3" alt="Vector" src="/img/vector-1.png" />
                        <div className="text-wrapper-14">(4.5)</div>
                      </div>
                    </div>
                    <div className="desc-2">
                      <div className="desc-2">
                        <div className="desc-2">
                          <div className="frame-8">
                            <div className="desc">
                              <div className="text-wrapper-15">Santorini, Greece</div>
                            </div>
                            <img
                              className="majesticons-share"
                              alt="Majesticons share"
                              src="/img/majesticons-share-line.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlap">
        <div className="about-me">
          <img className="image" alt="Image" src="/img/image-3.png" />
          <div className="text">
            <p className="discover-the">
              Discover the captivating beauty of OIA village in Santorini, Greece, with Steph as your guide. From
              sharing insider tips to enhancing your travel experience, Steph&#39;s warm hospitality and local expertise
              make your journey through OIA an unforgettable adventure.
            </p>
            <div className="text-wrapper-16">MEET</div>
            <div className="text-wrapper-17">Steph!</div>
            <div className="group-3">
              <Group />
              <Group />
              <Group />
              <Group />
              <Group />
            </div>
            <div className="overlap-group">
              <div className="text-wrapper-18">4.79</div>
              <div className="text-wrapper-19">(78 reviews)</div>
            </div>
            <div className="text-wrapper-20">See reviews</div>
          </div>
        </div>
        <div className="frame-14">
          <div className="text-wrapper-21">Connect Now</div>
        </div>
      </div>
      <div className="best-service">
        <div className="title-2">
          <p className="text-wrapper-22">Explore With Our Exceptional Features</p>
        </div>
        <div className="services">
          <div className="guided-tours">
            <div className="overlap-group-2">
              <p className="text-wrapper-23">Expert-led tours by local guides.</p>
              <div className="text-wrapper-24">Guided Tours</div>
              <img className="img-2" alt="Tour guide" src="/img/tour-guide-1.png" />
            </div>
          </div>
          <div className="best-flight-options">
            <div className="overlap-group-2">
              <div className="text-wrapper-25">Unearth off-the-beaten-path destinations expertly.</div>
              <div className="text-wrapper-26">Expert Itinerary</div>
              <img className="map-2" alt="Map" src="/img/map-776559-1.png" />
            </div>
          </div>
          <div className="religious-tours">
            <div className="overlap-group-2">
              <div className="text-wrapper-27">Group Chats</div>
              <p className="text-wrapper-25">Plan trips together effortlessly with friends or fellow strangers.</p>
              <img className="chat" alt="Chat" src="/img/chat-1.png" />
            </div>
          </div>
          <div className="medical-insurance">
            <div className="overlap-group-2">
              <p className="text-wrapper-28">Add undiscovered hidden gems for others to exploe.</p>
              <div className="text-wrapper-29">Add Destinations</div>
              <img className="img-2" alt="Planet earth" src="/img/planet-earth-1598196-1.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="group-4">
        <div className="ellipse" />
        <div className="ellipse-2" />
        <div className="ellipse-3" />
      </div>
      <div className="title-3">
        <div className="text-wrapper-22">Ask A Local Guide</div>
      </div>
      <div className="overlap-2">
        <div className="explore-by-style">
          <div className="card">
            <button className="overlap-group-wrapper">
              <div className="overlap-group-3">
                <div className="text-wrapper-30">Use Reusable Items</div>
              </div>
            </button>
          </div>
          <div className="button-wrapper">
            <button className="button-2">
              <div className="overlap-group-4">
                <div className="text-wrapper-31">Pack Lightly</div>
              </div>
            </button>
          </div>
          <div className="card-2">
            <button className="button-3">
              <div className="use-public-wrapper">
                <div className="use-public">
                  Use Public <br />
                  Transportation
                </div>
              </div>
            </button>
          </div>
          <div className="text-wrapper-32">Make Sustainable Travel Plans</div>
        </div>
        <div className="text-wrapper-33">READ MORE</div>
      </div>
      <Cta
        className="CTA-instance"
        icon={<IconFacebook />}
        icon1={<IconTwitter />}
        override={<IconInstagram />}
        vector="/img/vector.png"
      />
      <div className="overlap-3">
        <div className="group-5">
          <div className="ellipse-4" />
          <div className="ellipse-5" />
          <div className="ellipse-6" />
        </div>
        <img className="unsplash-wsvth" alt="Unsplash wsvth" src="/img/unsplash-wsvth-lwci0.png" />
        <div className="frame-15">
          <div className="text-wrapper-34">Explore More</div>
        </div>
      </div>
    </div>
  );
};
