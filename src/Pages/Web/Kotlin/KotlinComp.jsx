import React from "react";
import "./style.css";
import "./Faq.css";
import reactSliderImg from "./images/MicrosoftTeams-image-88.png";
import rubiIcons from "../../Main/img/ruby1-on-rail.png";
import KotlinIcons from "../../Main/img/kotlin.png";

const Kotlin = () => {
  return (
    <>
      <div className="reactweb_main ">
        <div className="banner_background_img">
          <div class="container ">
            <div className="row">
              <div className="banner_img_content_react_section col-12 col-md-6 ">
                <div className="w-100 ">
                  <h1 className="">Kotlin Development Company</h1>
                </div>
                <p>
                  Kotlin is a modern, open-source programming language that was
                  developed by JetBrains, a software development company based
                  in Russia. It was first released in 2011 and has gained
                  popularity in recent years due to its ease of use,
                  interoperability with Java, and support for functional
                  programming.
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
            <strong>Our Kotlin Services</strong>
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
                              Kotlin application development
                            </h4>
                            <p class="container ">
                              You can develop custom applications using Kotlin,
                              including desktop, web, mobile, and server-side
                              applications.
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
                            <h4 class="card-title">Android app development</h4>
                            <p class="container ">
                              Kotlin has become a popular language for
                              developing Android apps, so you can offer Android
                              app development services using Kotlin.
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
                            <h4 class="card-title">Kotlin consulting</h4>
                            <p class="text-center ">
                              You can provide consultation services to clients
                              who are interested in adopting Kotlin for their
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
                            <h4 class="card-title">Kotlin migration</h4>
                            <p class="container ">
                              If a client has an existing Java codebase, you can
                              offer Kotlin migration services to help them
                              convert their Java code to Kotlin.
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
                            <h4 class="card-title">Kotlin training</h4>
                            <p class="container ">
                              You can offer Kotlin training services to
                              individuals or teams who want to learn Kotlin.
                              This can include workshops, tutorials, and online
                              courses.
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
                              Kotlin libraries development
                            </h4>
                            <p class="container ">
                              You can develop and publish Kotlin libraries to
                              help other Kotlin developers build their projects
                              more efficiently.
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
              <strong>Kotlin Development</strong>
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
            Why Choose Coderfeast for Kotlin
          </h4>
          <p className="container">
            Coderfeast is a software development company that offers a wide
            range of development services, including Kotlin development. Some
            potential reasons why someone might choose Coderfeast for Kotlin
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

export default Kotlin;
