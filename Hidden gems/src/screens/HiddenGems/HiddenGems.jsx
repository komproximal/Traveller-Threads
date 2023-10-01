import React from "react";
import { Cta } from "../../components/Cta";
import { IconFacebook } from "../../components/IconFacebook";
import { IconInstagram } from "../../components/IconInstagram";
import { IconTwitter } from "../../components/IconTwitter";
import { Navbar } from "../../components/Navbar";
import { Search } from "../../icons/Search";
import "./style.css";

export const HiddenGems = () => {
  return (
    <div className="hidden-gems">
      <div className="div-3">
        <div className="frame-2">
          <div className="overlap-3">
            <img className="newsletter-2" alt="Newsletter" src="/img/newsletter.svg" />
            <div className="image">
              <div className="search-2">
                <p className="p">Need help finding a gem?</p>
                <div className="form">
                  <div className="form-2">
                    <Search className="uil-message" opacity="0.5" />
                    <div className="text">Enter a Location</div>
                    <img className="ion-filter" alt="Ion filter" src="/img/ion-filter.svg" />
                  </div>
                </div>
                <p className="text-wrapper-11">Commonly Discoverable Places: Bali, Greece</p>
              </div>
            </div>
          </div>
          <div className="featured-gems">
            <div className="title">
              <div className="group-2">
                <img className="material-symbols" alt="Material symbols" src="/img/material-symbols-star.svg" />
                <div className="section-title">
                  <div className="div-wrapper">
                    <div className="text-wrapper-12">Featured Gems</div>
                  </div>
                </div>
              </div>
              <img className="slider-buttons" alt="Slider buttons" src="/img/slider-buttons-2.svg" />
            </div>
            <div className="content-wrapper">
              <div className="content-2">
                <div className="content-3">
                  <div className="product">
                    <div className="frame-3">
                      <div className="gis-poi-favorite-o-wrapper">
                        <img
                          className="gis-poi-favorite-o"
                          alt="Gis poi favorite o"
                          src="/img/gis-poi-favorite-o-9.svg"
                        />
                      </div>
                    </div>
                    <div className="content-4">
                      <div className="header">
                        <div className="text-wrapper-13">Holy Place</div>
                        <div className="frame-4">
                          <img className="vector-4" alt="Vector" src="/img/vector-14.svg" />
                          <div className="text-wrapper-14">(4.5)</div>
                        </div>
                      </div>
                      <div className="frame-5">
                        <div className="desc">
                          <div className="text-wrapper-15">Tokyo Japan, Italy</div>
                        </div>
                        <img className="img-2" alt="Majesticons share" src="/img/majesticons-share-line-3.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="product">
                    <img className="frame-6" alt="Frame" src="/img/frame-32-2.svg" />
                    <div className="content-4">
                      <div className="header">
                        <div className="text-wrapper-13">Mt. Trek Sunrise View</div>
                        <div className="frame-7">
                          <img className="vector-4" alt="Vector" src="/img/vector-14.svg" />
                          <div className="text-wrapper-14">(4.5)</div>
                        </div>
                      </div>
                      <div className="frame-5">
                        <div className="desc">
                          <div className="text-wrapper-15">Bali, Indonesia</div>
                        </div>
                        <img className="img-2" alt="Majesticons share" src="/img/majesticons-share-line-3.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="product">
                    <div className="frame-8">
                      <img
                        className="gis-poi-favorite-o"
                        alt="Gis poi favorite o"
                        src="/img/gis-poi-favorite-o-8.svg"
                      />
                    </div>
                    <div className="content-4">
                      <div className="header">
                        <div className="text-wrapper-13">Remote Valley Temple</div>
                        <div className="frame-9">
                          <img className="vector-4" alt="Vector" src="/img/vector-12.svg" />
                          <div className="text-wrapper-14">(4.5)</div>
                        </div>
                      </div>
                      <div className="desc-2">
                        <div className="frame-5">
                          <div className="desc">
                            <div className="text-wrapper-15">Bangkok, Thailand</div>
                          </div>
                          <img className="img-2" alt="Majesticons share" src="/img/majesticons-share-line-1.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product">
                    <div className="img-wrapper">
                      <img
                        className="gis-poi-favorite-o"
                        alt="Gis poi favorite o"
                        src="/img/gis-poi-favorite-o-7.svg"
                      />
                    </div>
                    <div className="content-4">
                      <div className="header">
                        <div className="text-wrapper-13">Holy Place</div>
                        <div className="frame-4">
                          <img className="vector-4" alt="Vector" src="/img/vector-12.svg" />
                          <div className="text-wrapper-14">(4.5)</div>
                        </div>
                      </div>
                      <div className="desc-2">
                        <div className="desc-2">
                          <div className="frame-5">
                            <div className="desc">
                              <div className="text-wrapper-15">Tamil Nadu, India</div>
                            </div>
                            <img className="img-2" alt="Majesticons share" src="/img/majesticons-share-line-1.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-2">
                    <div className="frame-10">
                      <img className="gis-poi-favorite-o" alt="Gis poi favorite o" src="/img/gis-poi-favorite-o.png" />
                    </div>
                    <div className="content-4">
                      <div className="header">
                        <div className="text-wrapper-13">Best Cafe in Oia</div>
                        <div className="frame-4">
                          <img className="vector-4" alt="Vector" src="/img/vector-6.png" />
                          <div className="text-wrapper-14">(4.5)</div>
                        </div>
                      </div>
                      <div className="desc-2">
                        <div className="desc-2">
                          <div className="desc-2">
                            <div className="frame-5">
                              <div className="desc">
                                <div className="text-wrapper-15">Santorini, Greece</div>
                              </div>
                              <img className="img-2" alt="Majesticons share" src="/img/majesticons-share-line.png" />
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
          <div className="ask-local">
            <div className="title">
              <div className="group-3">
                <img
                  className="healthicons-travel"
                  alt="Healthicons travel"
                  src="/img/healthicons-travel-outline.png"
                />
                <div className="section-title-2">
                  <div className="div-wrapper">
                    <div className="text-wrapper-12">Ask a Local</div>
                  </div>
                </div>
              </div>
              <img className="slider-buttons" alt="Slider buttons" src="/img/slider-buttons.png" />
            </div>
            <div className="content-5">
              <div className="content-2">
                <div className="content-6">
                  <div className="product-3">
                    <img className="avatar-image-2" alt="Avatar image" src="/img/avatar-image-6.png" />
                    <div className="content-4">
                      <div className="header-2">
                        <div className="text-wrapper-13">Akbar Senglu</div>
                        <div className="frame-11">
                          <img className="vector-4" alt="Vector" src="/img/vector-6.png" />
                          <div className="text-wrapper-14">(4.5)</div>
                        </div>
                      </div>
                      <div className="desc-3">
                        <p className="text-wrapper-16">
                          Paris, France, Europe
                          <br />
                          Price: 800 INR / hr
                        </p>
                        <div className="frame-12">
                          <div className="text-wrapper-17">Send Message</div>
                          <img className="uil-message" alt="Uil message" src="/img/uil-message.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-3">
                    <img className="avatar-image-2" alt="Avatar image" src="/img/avatar-image-5.png" />
                    <div className="content-4">
                      <div className="header-2">
                        <div className="text-wrapper-13">Sam John</div>
                        <div className="frame-13">
                          <img className="vector-4" alt="Vector" src="/img/vector-6.png" />
                          <div className="text-wrapper-14">(4.4)</div>
                        </div>
                      </div>
                      <div className="desc-4">
                        <p className="text-wrapper-16">
                          Oia, Santorini, Greece
                          <br />
                          Price: 650 INR / hr
                        </p>
                        <div className="frame-12">
                          <div className="text-wrapper-17">Send Message</div>
                          <img className="uil-message" alt="Uil message" src="/img/uil-message.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-3">
                    <img className="avatar-image-2" alt="Avatar image" src="/img/avatar-image-4.png" />
                    <div className="content-4">
                      <div className="header-2">
                        <div className="text-wrapper-13">Johnny Smith</div>
                        <div className="frame-14">
                          <img className="vector-4" alt="Vector" src="/img/vector-6.png" />
                          <div className="text-wrapper-14">(4.5)</div>
                        </div>
                      </div>
                      <div className="desc-4">
                        <p className="text-wrapper-16">
                          Phnom Penh, Cambodia
                          <br />
                          Price: 400 INR / hr
                        </p>
                        <div className="frame-12">
                          <div className="text-wrapper-17">Send Message</div>
                          <img className="uil-message" alt="Uil message" src="/img/uil-message.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-3">
                    <img className="avatar-image-2" alt="Avatar image" src="/img/avatar-image-3.png" />
                    <div className="content-4">
                      <div className="header-2">
                        <div className="text-wrapper-13">Harry Stickler</div>
                        <div className="frame-15">
                          <img className="vector-4" alt="Vector" src="/img/vector-6.png" />
                          <div className="text-wrapper-14">(4.5)</div>
                        </div>
                      </div>
                      <div className="desc-4">
                        <p className="text-wrapper-16">
                          Hawaii Islands
                          <br />
                          Price: 1200 INR / hr
                        </p>
                        <div className="frame-12">
                          <div className="text-wrapper-17">Send Message</div>
                          <img className="uil-message" alt="Uil message" src="/img/uil-message.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-4">
                    <img className="avatar-image-2" alt="Avatar image" src="/img/avatar-image-2.png" />
                    <div className="content-4">
                      <div className="header-2">
                        <div className="text-wrapper-13">Nicole Edward</div>
                        <div className="frame-16">
                          <img className="vector-4" alt="Vector" src="/img/vector-6.png" />
                          <div className="text-wrapper-14">(4.5)</div>
                        </div>
                      </div>
                      <div className="desc-4">
                        <p className="text-wrapper-16">
                          Nainativu, Sri Lanka
                          <br />
                          Price: 300 INR / hr
                        </p>
                        <div className="frame-12">
                          <div className="text-wrapper-17">Send Message</div>
                          <img className="uil-message" alt="Uil message" src="/img/uil-message.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-category">
            <div className="title">
              <div className="group-4">
                <img
                  className="material-symbols-2"
                  alt="Material symbols"
                  src="/img/material-symbols-travel-explore-outline-rounded.png"
                />
                <div className="section-title">
                  <div className="div-wrapper">
                    <div className="text-wrapper-12">Top Categories</div>
                  </div>
                </div>
              </div>
              <img className="slider-buttons" alt="Slider buttons" src="/img/slider-buttons.png" />
            </div>
            <div className="content-5">
              <div className="content-2">
                <div className="content-3">
                  <div className="product">
                    <div className="frame-17">
                      <div className="overlap-group-2">
                        <img
                          className="gis-poi-favorite-o"
                          alt="Gis poi favorite o"
                          src="/img/gis-poi-favorite-o.png"
                        />
                      </div>
                    </div>
                    <div className="content-4">
                      <div className="header">
                        <div className="text-wrapper-13">Breathtaking Views</div>
                        <div className="eva-arrow-back-fill-wrapper">
                          <img className="img-2" alt="Eva arrow back fill" src="/img/eva-arrow-back-fill.png" />
                        </div>
                      </div>
                      <div className="desc-2">
                        <p className="text-wrapper-18">Monuments , Sunset, Sunrise, etc</p>
                      </div>
                    </div>
                  </div>
                  <div className="product">
                    <div className="frame-18">
                      <div className="overlap-group-3">
                        <img
                          className="gis-poi-favorite-o-2"
                          alt="Gis poi favorite o"
                          src="/img/gis-poi-favorite-o.png"
                        />
                      </div>
                    </div>
                    <div className="content-4">
                      <div className="header">
                        <div className="text-wrapper-13">Adventures</div>
                        <img className="frame-19" alt="Frame" src="/img/frame-40-4.png" />
                      </div>
                      <div className="desc-2">
                        <div className="text-wrapper-18">Boat rides, Treks etc</div>
                      </div>
                    </div>
                  </div>
                  <div className="product">
                    <div className="frame-20">
                      <img className="gis-poi-favorite-o" alt="Gis poi favorite o" src="/img/gis-poi-favorite-o.png" />
                    </div>
                    <div className="content-4">
                      <div className="header">
                        <div className="text-wrapper-13">Holy Places</div>
                        <img className="frame-19" alt="Frame" src="/img/frame-40.png" />
                      </div>
                      <div className="desc-2">
                        <div className="text-wrapper-18">Hidden Temples, Monastery etc</div>
                      </div>
                    </div>
                  </div>
                  <div className="product">
                    <div className="frame-17">
                      <div className="overlap-group-2">
                        <img
                          className="gis-poi-favorite-o"
                          alt="Gis poi favorite o"
                          src="/img/gis-poi-favorite-o.png"
                        />
                      </div>
                    </div>
                    <div className="content-4">
                      <div className="header">
                        <div className="text-wrapper-13">Breathtaking Views</div>
                        <img className="frame-21" alt="Frame" src="/img/frame-40.png" />
                      </div>
                      <div className="desc-2">
                        <p className="text-wrapper-18">Monuments , Sunset, Sunrise, etc</p>
                      </div>
                    </div>
                  </div>
                  <div className="product-2">
                    <div className="frame-18">
                      <div className="overlap-group-3">
                        <img
                          className="gis-poi-favorite-o-2"
                          alt="Gis poi favorite o"
                          src="/img/gis-poi-favorite-o.png"
                        />
                      </div>
                    </div>
                    <div className="content-4">
                      <div className="header">
                        <div className="text-wrapper-13">Adventures</div>
                        <img className="frame-19" alt="Frame" src="/img/frame-40.png" />
                      </div>
                      <div className="desc-2">
                        <div className="text-wrapper-18">Boat rides, Treks etc</div>
                      </div>
                    </div>
                  </div>
                  <div className="product-5">
                    <div className="frame-20">
                      <img className="gis-poi-favorite-o" alt="Gis poi favorite o" src="/img/gis-poi-favorite-o.png" />
                    </div>
                    <div className="content-4">
                      <div className="header">
                        <div className="text-wrapper-13">Holy Places</div>
                        <img className="frame-19" alt="Frame" src="/img/frame-40.png" />
                      </div>
                      <div className="desc-2">
                        <div className="text-wrapper-18">Hidden Temples, Monastery etc</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Cta
            className="CTA-instance"
            icon={<IconFacebook />}
            icon1={<IconTwitter />}
            override={<IconInstagram />}
            vector="/img/vector-5.png"
          />
        </div>
        <Navbar
          className="navbar-instance"
          componentFluentLocation="/img/fluent-location-48-filled-3.svg"
          divClassName="design-component-instance-node"
          divClassNameOverride="navbar-2"
          to="/hidden-gems"
          vector="/img/vector-4.svg"
        />
      </div>
    </div>
  );
};
