import React from "react";
import "./style.css";
import "./Faq.css";
import reactSliderImg from "./images/MicrosoftTeams-image-88.png";
import rubiIcons from "../../Main/img/ruby1-on-rail.png";
import KotlinIcons from "../../Main/img/kotlin.png";

const Swift = () => {
  return (
    <>
      <div className="reactweb_main ">
        <div className="banner_background_img">
          <div class="container ">
            <div className="row">
              <div className="banner_img_content_react_section col-12 col-md-6 ">
                <div className="w-100 ">
                  <h1 className="">Swift Development Company</h1>
                </div>
                <p>
                  Swift is a modern, open-source programming language developed
                  by Apple for developing iOS, macOS, watchOS, tvOS, and Linux
                  applications. It was first introduced in 2014 and has quickly
                  gained popularity among developers due to its modern features,
                  performance, and ease of use.
                </p>
                <div className=" w-100 home_btn_container">
                  <button className="btn ">Book Free Consultation</button>
                </div>
              </div>
              <div className="banner_img   col-12 col-md-6 ">
                <img src={KotlinIcons} alt="img" className="w-50" />
              </div>
            </div>
          </div>
        </div>
        <div className="container react_dev_services_section_1">
          <h2>
            <strong>Our Swift Services</strong>
          </h2>
          <p>Coderfeast offers the following services:</p>
          <section id="team" className="our_services_heading_margin">
            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4 mt-4 ">
                  <div class="image-flip ">
                    <div class="mainflip flip-0 ">
                      <div class="frontside">
                        <div class="card react_service_cards shadow border-0 py-3 ">
                          <div class="card-body text-center ">
                            <h4 class="card-title">OS app development</h4>
                            <p class="container ">
                              Swift is the primary language used for developing
                              iOS apps, so you can offer custom iOS app
                              development services to clients.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 mt-4 ">
                  <div class="image-flip ">
                    <div class="mainflip flip-0 ">
                      <div class="frontside">
                        <div class="card react_service_cards shadow border-0 py-3 ">
                          <div class="card-body text-center ">
                            <h4 class="card-title">macOS app development</h4>
                            <p class="container ">
                              Swift can also be used to develop desktop
                              applications for macOS, so you can offer custom
                              macOS app development services.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 mt-4 ">
                  <div class="image-flip ">
                    <div class="mainflip flip-0 ">
                      <div class="frontside">
                        <div class="card react_service_cards shadow border-0 py-3 ">
                          <div class="card-body text-center ">
                            <h4 class="card-title">
                              WatchOS and tvOS app development
                            </h4>
                            <p class="text-center ">
                              Swift can also be used to develop apps for the
                              Apple Watch and Apple TV platforms, so you can
                              offer app development services for these
                              platforms.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 mt-4 ">
                  <div class="image-flip ">
                    <div class="mainflip flip-0 ">
                      <div class="frontside">
                        <div class="card react_service_cards shadow border-0 py-3 ">
                          <div class="card-body text-center ">
                            <h4 class="card-title">Swift consulting</h4>
                            <p class="container ">
                              You can offer consultation services to clients who
                              are interested in adopting Swift for their
                              software projects. This can include guidance on
                              best practices, performance optimization, and code
                              review.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 mt-4 ">
                  <div class="image-flip ">
                    <div class="mainflip flip-0 ">
                      <div class="frontside">
                        <div class="card react_service_cards shadow border-0 py-3 ">
                          <div class="card-body text-center ">
                            <h4 class="card-title">Swift migration</h4>
                            <p class="container ">
                              If a client has an existing Objective-C codebase,
                              you can offer Swift migration services to help
                              them convert their Objective-C code to Swift.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 mt-4 ">
                  <div class="image-flip ">
                    <div class="mainflip flip-0 ">
                      <div class="frontside">
                        <div class="card react_service_cards shadow border-0 py-3 ">
                          <div class="card-body text-center ">
                            <h4 class="card-title">Swift training</h4>
                            <p class="container ">
                              You can offer Swift training services to
                              individuals or teams who want to learn Swift. This
                              can include workshops, tutorials, and online
                              courses.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="container talk_to_expert text-white talk_to_our_experts ">
          <div class="home_gettouch_section">
            <h2 class="col-12 ">
              <strong>Swift Development</strong>
            </h2>
          </div>
          <div class="home_gettouch_button_section">
            <button class="get_in_touch_btn  text-white shadow-lg text-center">
              <strong>Talk to Our Experts</strong>
            </button>
          </div>
        </div>

        <div className="container why_chose_react">
          <h4 className="container fw-bold mb-4 FAQ_heading_alignment">
            {" "}
            Why Choose Coderfeast for Swift
          </h4>
          <p className="container">
            Coderfeast is a software development company that offers a wide
            range of development services, including Swift  development. Some
            potential reasons why someone might choose Coderfeast for Swift 
            development services could include
          </p>
        </div>
        {/* contact us page */}
        <section className="aboutus_contact_container">
          <div className="container">
            <div className="contact_us_main_container col-12 ">
              <h4 className="text-white pb-4 FAQ_heading_alignment">
                <strong>Request More Information</strong>
              </h4>
              <div className="">
                <input
                  type="text"
                  className="aboutus_input_filed aboutus_input_filed_input rounded"
                  placeholder="Name*"
                  style={{ color: "white" }}
                />
                <input
                  type="text"
                  className="aboutus_input_filed aboutus_input_filed_input rounded"
                  placeholder="Email*"
                  style={{ color: "white" }}
                />
                <input
                  type="text"
                  className="aboutus_input_filed aboutus_input_filed_input rounded"
                  placeholder="Phone*"
                  style={{ color: "white" }}
                />
                <input
                  type="text"
                  className="aboutus_input_filed aboutus_input_filed_input rounded"
                  placeholder="Company*"
                  style={{ color: "white" }}
                />
                <textarea
                  className="aboutus_input_filed aboutus_input_filed_textarea rounded"
                  placeholder="Message...."
                  style={{ color: "white" }}
                ></textarea>
              </div>
              <button className=" text-white shadow contactus_sumb_btns rounded">
                <strong>Submit</strong>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Swift;
