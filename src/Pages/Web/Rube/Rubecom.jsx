import React from "react";
import "./style.css";
import "./Faq.css";
import reactSliderImg from "./images/MicrosoftTeams-image-88.png";
import rubiIcons from "../../Main/img/ruby1-on-rail.png";
import { useEffect } from "react";
const Rubecom = () => {
 
  return (
    <>
      <div className="reactweb_main ">
        <div className="banner_background_img">
          <div class="container ">
            <div className="row">
              <div className="banner_img_content_react_section col-12 col-md-6 ">
                <div className="w-100 ">
                  <h1 className="">Ruby on Rails Development Company</h1>
                </div>
                <p>
                  Ruby on Rails is a web application development framework that
                  uses the Ruby programming language. It's known for its
                  emphasis on convention over configuration, making it a popular
                  choice for rapid application development. With its built-in
                  features and libraries, Rails simplifies common web
                  development tasks such as database integration and routing.
                </p>
                <div className=" w-100 home_btn_container">
                  <button className="btn ">Book Free Consultation</button>
                </div>
              </div>
              <div className="banner_img   col-12 col-md-6 ">
                <img src={rubiIcons} alt="img" className="w-50" />
              </div>
            </div>
          </div>
        </div>
        <div className="container react_dev_services_section_1">
          <h2>
            <strong>Our Ruby on Rails Services</strong>
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
                              Authentication and Authorization
                            </h4>
                            <p class="container ">
                              Ruby on Rails has built-in support for user
                              authentication and authorization. Services such as
                              authentication and authorization can be
                              implemented using the Devise and CanCanCan gems
                              respectively.
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
                              Payment Gateway Integration
                            </h4>
                            <p class="container ">
                              Payment gateway integration can be implemented
                              using gems such as Stripe, Braintree, and PayPal.
                              These gems provide an easy and quick way to
                              integrate payment processing functionality into a
                              Rails application.
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
                            <h4 class="card-title">Email Services</h4>
                            <p class="text-center ">
                              Rails provides built-in support for sending
                              emails. Services such as sending email
                              newsletters, account activation emails, and
                              password reset emails can be easily implemented
                              using gems such as Mailchimp or SendGrid.
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
                            <h4 class="card-title">File Upload Services</h4>
                            <p class="container ">
                              Rails provides built-in support for file uploads.
                              Services such as uploading images, documents, and
                              videos can be implemented using gems such as
                              CarrierWave and Paperclip.
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
                              Background Job Processing
                            </h4>
                            <p class="container ">
                              Long-running tasks such as sending emails,
                              generating reports, and processing images can be
                              offloaded to a background job processing service.
                              Gems such as Sidekiq, Resque, and DelayedJob can
                              be used to implement background job processing in
                              a Rails application.
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
                            <h4 class="card-title">Caching</h4>
                            <p class="container ">
                              Caching is a technique used to speed up web
                              applications by storing frequently accessed data
                              in memory. Rails provides built-in support for
                              caching using gems such as Redis and Memcached.
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
                            <h4 class="card-title">API Development</h4>
                            <p class="container ">
                              Rails can be used to build APIs that can be
                              consumed by other applications. Services such as
                              building a RESTful API or a GraphQL API can be
                              implemented using gems such as Grape and GraphQL.
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
                            <h4 class="card-title">Testing</h4>
                            <p class="container ">
                              Testing is an essential part of software
                              development. Rails provides built-in support for
                              testing using gems such as RSpec, MiniTest, and
                              Cucumber.
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
                            <h4 class="card-title">Search</h4>
                            <p class="container ">
                              Search functionality can be implemented using gems
                              such as ElasticSearch and Solr. These gems provide
                              an easy and quick way to implement advanced search
                              functionality in a Rails application.
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
              <strong>
                High Performing Web Apps with Rube on Rails Development
              </strong>
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
            Why Choose Coderfeast for Rube on Rails
          </h4>
          <p className="container">
            Coderfeast have a team of skilled developers with expertise in Rubi
            on Rail development. Clients will be confident in the quality of the
            work you deliver as they know they are working with experienced
            professionals who are proficient in the language.
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

export default Rubecom;
