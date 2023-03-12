import React from "react";
import "./style.css";
import "./Faq.css";
import reactSliderImg from "./images/MicrosoftTeams-image-88.png";
import rubiIcons from "../../Main/img/ruby1-on-rail.png";
import dotNetLogo from "../../Main/img/ne1t.png";

const Dotnet = () => {
  return (
    <>
      <div className="reactweb_main ">
        <div className="banner_background_img">
          <div class="container ">
            <div className="row">
              <div className="banner_img_content_react_section col-12 col-md-6 ">
                <div className="w-100 ">
                  <h1 className="">Dotnet Development Company</h1>
                </div>
                <p>
                  .NET (pronounced dotnet) is a free, open-source, and
                  cross-platform framework developed by Microsoft. It provides a
                  programming model that can be used to build a wide range of
                  applications, including desktop, web, mobile, gaming, and IoT
                  applications. .NET includes a large class library, runtime,
                  and tools that enable developers to create high-performance,
                  scalable, and secure applications easily.
                </p>
                <div className=" w-100 home_btn_container">
                  <button className="btn ">Book Free Consultation</button>
                </div>
              </div>
              <div className="banner_img   col-12 col-md-6 ">
                <img src={dotNetLogo} alt="img" className="w-50" />
              </div>
            </div>
          </div>
        </div>
        <div className="container react_dev_services_section_1">
          <h2>
            <strong>Our Dotnet Services</strong>
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
                            <h4 class="card-title">
                              Custom software development
                            </h4>
                            <p class="container ">
                              Develop custom software solutions tailored to the
                              specific needs of your clients using .NET
                              technologies.
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
                              Web application development
                            </h4>
                            <p class="container ">
                              Develop web applications using ASP.NET, including
                              web portals, e-commerce sites, and content
                              management systems.
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
                              Desktop application development
                            </h4>
                            <p class="text-center ">
                              Develop Windows-based desktop applications using
                              Windows Presentation Foundation (WPF) and Windows
                              Forms.
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
                              Mobile application development
                            </h4>
                            <p class="container ">
                              Develop cross-platform mobile applications using
                              Xamarin and .NET Core.
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
                            <h4 class="card-title">Integration services</h4>
                            <p class="container ">
                              Integrate .NET applications with other software
                              systems, including databases, third-party APIs,
                              and legacy systems.
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
                            <h4 class="card-title">Migration services</h4>
                            <p class="container ">
                              Migrate legacy applications to .NET technologies,
                              including upgrading from older versions of .NET to
                              the latest version.
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
              <strong>.Net Development</strong>
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
            Why Choose Coderfeast for .Net
          </h4>
          <p className="container">
          Coderfeast may have a team of skilled .NET developers with deep expertise in building robust, scalable, and secure applications using .NET technologies.
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

export default Dotnet;
