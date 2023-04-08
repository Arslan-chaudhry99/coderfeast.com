import React from "react";
import "./style.css";
import stacffAug from "./imgs/staff-augmentation.png";
import appleIcons from "../../Main/img/ap1ple.png";
import { useEffect } from "react";
const IosComp = () => {
  
  return (
    <>
      <div className="banner_background_img">
        <div class="container ">
          <div className="row">
            <div className="banner_img_content_react_section col-12 col-md-6 ">
              <div className="w-100 ">
                <h1 className="staf_augmentation_slider_section_h1">
                  IOS App Development
                </h1>
              </div>
              <p>
                Coderfeast offers professional iOS App Development, creating
                intuitive, user-friendly, and interactive applications. Our team
                of developers is passionate about building feature-rich iOS apps
                that stand out from the competition. We offer custom iOS app
                development to meet the specific needs of our clients, using
                innovative methodologies to ensure the success of their iOS app.
              </p>
              <div className=" w-100 home_btn_container">
                <button className="btn ">Book Free Consultation</button>
              </div>
            </div>
            <div className="banner_img   col-12 col-md-6 ">
              <img src={appleIcons} alt="img" className="w-50"/>
            </div>
          </div>
        </div>
      </div>
      <div className="container why_chose_react global_margin_top">
        <h2 className="container fw-bold mb-4 how_help_augmentation">
          Benefits of iOS App Development
        </h2>

        <div className="container">
          <div className="row">
            <div className="col-12  col-md-6 col-sm-12 mb-5">
              <div className="d-flex augmention_benifit_arrow ">
                <i
                  class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                  style={{ fontSize: "18px" }}
                ></i>
                <h5 className="fw-bold mb-3">Enhanced Customer Experience</h5>
              </div>

              <div>
                <p className="agumentation_benifites_p">
                  Given the high-quality software, functionalities, and
                  extensive customer support, it would make sense why users
                  gravitate towards iOS applications. It offers apps that have
                  smooth functionality and offers the best user experience. This
                  makes iPhone applications the most ideal choice for customers
                  as it offers feature-rich apps and user experience that keep
                  them coming back for more.
                </p>
              </div>
            </div>
            <div className="col-12  col-md-6 col-sm-12 mb-5">
              <div className="d-flex augmention_benifit_arrow ">
                <i
                  class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                  style={{ fontSize: "18px" }}
                ></i>
                <h5 className="fw-bold mb-3">High Market Penetration</h5>
              </div>

              <div>
                <p className="agumentation_benifites_p">
                  Apple has a huge user base in the USA and the UK. If you want
                  your company to expand its horizons and penetrate those
                  markets, creating iPhone apps is the way to go. Apple has an
                  established legacy and its high-quality products will help
                  your business gain a competitive edge if you invest in iOS
                  development.
                </p>
              </div>
            </div>
            <div className="col-12  col-md-6 col-sm-12 mb-5">
              <div className="d-flex augmention_benifit_arrow ">
                <i
                  class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                  style={{ fontSize: "18px" }}
                ></i>
                <h5 className="fw-bold mb-3"> Greater Return on Investment </h5>
              </div>

              <div>
                <p className="agumentation_benifites_p">
                  iOS applications have a greater return on investment as
                  compared to Android. This is because iPhone offers the best
                  user experience, with excellent UI/UX. Companies can greatly
                  benefit by investing in iOS applications to achieve
                  profitability.
                </p>
              </div>
            </div>
            <div className="col-12  col-md-6 col-sm-12 mb-5">
              <div className="d-flex augmention_benifit_arrow ">
                <i
                  class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                  style={{ fontSize: "18px" }}
                ></i>
                <h5 className="fw-bold mb-3"> Less Development Time </h5>
              </div>

              <div>
                <p className="agumentation_benifites_p">
                  iOS applications take less time to develop as compared to
                  Android applications. This is because Android applications
                  need to be tested across 20+ devices, all of which have
                  different screen sizes, resolutions, and operating systems.
                  Android apps also have a longer development cycle. iOS
                  development on the other hand helps companies achieve greater
                  market visibility, the ability to gain a competitive edge,
                  rich customer experiences, and enhanced profitability.
                </p>
              </div>
            </div>
            <div className="col-12  col-md-6 col-sm-12 mb-5">
              <div className="d-flex augmention_benifit_arrow ">
                <i
                  class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                  style={{ fontSize: "18px" }}
                ></i>
                <h5 className="fw-bold mb-3"> Excellent Interface </h5>
              </div>

              <div>
                <p className="agumentation_benifites_p">
                  iPhones are best known for their excellent UI/UX design that
                  offers the best experiences to users. It increases user
                  engagement as well. This is why iOS development services can
                  help to gravitate a large number of people towards your
                  applications. The easy interface would entice users to
                  download your applications and use them. This would help boost
                  your company’s sales and a return on investment.
                </p>
              </div>
            </div>
            <div className="col-12  col-md-6 col-sm-12 mb-5">
              <div className="d-flex augmention_benifit_arrow ">
                <i
                  class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                  style={{ fontSize: "18px" }}
                ></i>
                <h5 className="fw-bold mb-3"> Enhanced Security </h5>
              </div>

              <div>
                <p className="agumentation_benifites_p">
                  Apple offers the best security to users. Various applications
                  require confidential and responsive information from users. It
                  is imperative to protect this data from hackers and other
                  external threats. One of the many great things about Apple is
                  that it has a strict approval procedure for all of its
                  applications. iOS applications come with advanced and secure
                  features that protect them from external threats, hacking, or
                  phishing.
                </p>
              </div>
            </div>
            <div className="col-12  col-md-6 col-sm-12 mb-5">
              <div className="d-flex augmention_benifit_arrow ">
                <i
                  class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                  style={{ fontSize: "18px" }}
                ></i>
                <h5 className="fw-bold mb-3"> Reduced Fragmentation </h5>
              </div>

              <div>
                <p className="agumentation_benifites_p">
                  Apple only has to do one upgradation on its operating system
                  every year. Apple also has fewer devices compared to Android.
                  Android apps have to be tested out extensively to work
                  properly on all Android operating system versions. iPhones on
                  the other hand just have to meet the testing criteria of the
                  previous iOS versions. This reduces testing time for iOS
                  developers and guarantees quick go-to-market time for iPhone
                  applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container talk_to_expert text-white global_margin_buttom">
        <div class="home_gettouch_section">
          <h2 class="col-12 ">
            <strong>
              Developing custom iOS apps to meet your business needs{" "}
            </strong>
          </h2>
        </div>
        <div class="home_gettouch_button_section">
          <button class="get_in_touch_btn  text-white shadow-lg text-center">
            <strong>Get in touch</strong>
          </button>
        </div>
      </div>

      <div class="container react_dev_services_section_1">
        <h2 class="container">
          <strong>iOS App Development Services</strong>
        </h2>
        <p className="container">
          We offer the following iOS Application development services to our
          clients.
        </p>
        <section id="team" class="our_services_heading_margin">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-4 mt-4 ">
                <div class="image-flip ">
                  <div class="mainflip flip-0 ">
                    <div class="frontside">
                      <div class="card home_card_padding shadow border-0 ">
                        <div class="card-body text-center align_mentsof_cards justify-content-start">
                          <h4 class="card-title">
                            {" "}
                            Custom iOS App Development{" "}
                          </h4>
                          <p class="container ">
                            We help build iOS applications that are specifically
                            tailored to your unique needs and requirements. We
                            create apps that help your business gain
                            unprecedented value.
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
                      <div class="card home_card_padding shadow border-0 ">
                        <div class="card-body text-center align_mentsof_cards justify-content-start">
                          <h4 class="card-title">Cross-platform Development</h4>
                          <p class="container ">
                            Our team of experts builds feature-rich applications
                            that are compatible across all iOS devices.
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
                      <div class="card home_card_padding shadow border-0 ">
                        <div class="card-body text-center align_mentsof_cards justify-content-start">
                          <h4 class="card-title"> iPhone UI/UX </h4>
                          <p class="container ">
                            We aim to create stellar user experiences for iPhone
                            users as well as engaging and dynamic user
                            interfaces that keep users coming back for more.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <div class="col-xs-12 col-sm-6 col-md-4 mt-4 ">
                  <div class="image-flip ">
                    <div class="mainflip flip-0 ">
                      <div class="frontside">
                        <div class="card home_card_padding shadow border-0 ">
                          <div class="card-body text-center align_mentsof_cards justify-content-start">
                            <h4 class="card-title">
                              {" "}
                              iPhone App Update & Optimization{" "}
                            </h4>
                            <p class="container ">
                              Our expert team of iOS developers makes timely
                              updates to your applications alongside
                              optimization for a smooth user experience.
                            </p>
                          </div>
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
      <div class="container react_dev_services_section_1">
        <h2 class="container">
          <strong>iPhone app development Process</strong>
        </h2>

        <section id="team" class="our_services_heading_margin">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-4 mt-4 ">
                <div class="image-flip ">
                  <div class="mainflip flip-0 ">
                    <div class="frontside">
                      <div class="card home_card_padding shadow border-0 ">
                        <div class="card-body text-center align_mentsof_cards">
                          <h4 class="card-title">Research and Planning</h4>
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
                      <div class="card home_card_padding shadow border-0 ">
                        <div class="card-body text-center align_mentsof_cards">
                          <h4 class="card-title">
                            Compliance with Apple guidelines
                          </h4>
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
                      <div class="card home_card_padding shadow border-0 ">
                        <div class="card-body text-center align_mentsof_cards">
                          <h4 class="card-title">Concept & Wireframing</h4>
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
                      <div class="card home_card_padding shadow border-0 ">
                        <div class="card-body text-center align_mentsof_cards">
                          <h4 class="card-title">
                            UI/UX Design & Software Architecture
                          </h4>
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
                      <div class="card home_card_padding shadow border-0 ">
                        <div class="card-body text-center align_mentsof_cards">
                          <h4 class="card-title">Develop App Functionality</h4>
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
                      <div class="card home_card_padding shadow border-0 ">
                        <div class="card-body text-center align_mentsof_cards">
                          <h4 class="card-title">Application Testing</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 d-flex justify-content-center">
                <div class="col-xs-12 col-sm-6 col-md-4 mt-4 ">
                  <div class="image-flip ">
                    <div class="mainflip flip-0 ">
                      <div class="frontside">
                        <div class="card home_card_padding shadow border-0 ">
                          <div class="card-body text-center align_mentsof_cards">
                            <h4 class="card-title">Launch and Deployment</h4>
                          </div>
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
      <div className="container why_chose_react mt-5">
        <h4 className="container fw-bold mb-4">
          Tools & Technologies Needed for iOS Development
        </h4>

        <div className="container">
          <div className="row">
            <div className="d-flex col-12  col-md-6 col-sm-12">
              <i class="bi bi-arrow-right mx-2 react_arrows"></i>
              <p>Objective-C </p>
            </div>
            <div className="d-flex col-12  col-md-6 col-sm-12">
              <i class="bi bi-arrow-right mx-2 react_arrows"></i>
              <p>AppCode </p>
            </div>
            <div className="d-flex col-12  col-md-6 col-sm-12">
              <i class="bi bi-arrow-right mx-2 react_arrows"></i>
              <p>Swift </p>
            </div>
            <div className="d-flex col-12  col-md-6 col-sm-12">
              <i class="bi bi-arrow-right mx-2 react_arrows"></i>
              <p>TestFlight </p>
            </div>
            <div className="d-flex col-12  col-md-6 col-sm-12">
              <i class="bi bi-arrow-right mx-2 react_arrows"></i>
              <p>XCode </p>
            </div>
            <div className="d-flex col-12  col-md-6 col-sm-12">
              <i class="bi bi-arrow-right mx-2 react_arrows"></i>
              <p>UIKit </p>
            </div>
            <div className="d-flex col-12  col-md-6 col-sm-12">
              <i class="bi bi-arrow-right mx-2 react_arrows"></i>
              <p>Cocoa and Cocoa Touch </p>
            </div>
          </div>
        </div>
      </div>
      <div className="faq_container container">
        <h4 className="container fw-bold mb-5" s>
          FAQs
        </h4>
        <div className="container">
          <div>
            <p>
              <div
                data-bs-toggle="collapse"
                href="#collapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample1"
                className="faq_question "
              >
                <h6>Which language is used for developing iOS apps?</h6>
                <i class="bi bi-chevron-expand"></i>
              </div>
            </p>
            <div class="collapse mb-2" id="collapseExample1">
              <div class="faq_content">
                iOS applications are primarily written with Swift and Objective
                C programming languages.
              </div>
            </div>
          </div>
          <div>
            <p>
              <div
                data-bs-toggle="collapse"
                href="#collapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample2"
                className="faq_question "
              >
                <h6>How much does it cost to develop an iOS application?</h6>
                <i class="bi bi-chevron-expand"></i>
              </div>
            </p>
            <div class="collapse mb-2" id="collapseExample2">
              <div class="faq_content">
                The cost depends on the specifications and exact requirements of
                the application. It depends on the features and functionalities,
                the time needed to develop the app, the complexity of the
                application, etc
              </div>
            </div>
          </div>
          <div>
            <p>
              <div
                data-bs-toggle="collapse"
                href="#collapseExample3"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample3"
                className="faq_question "
              >
                <h6>What is the advantage of the iPhone over Android?</h6>
                <i class="bi bi-chevron-expand"></i>
              </div>
            </p>
            <div class="collapse mb-2" id="collapseExample3">
              <div class="faq_content">
                iPhone offers an excellent user experience and enhanced security
                measures, and it takes less time and cost to develop compared to
                Android applications and has a better market presence all around
                the globe compared to Android.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container why_chose_react">
        <h4 className="container fw-bold mb-4"> Why Choose Coderfeast</h4>
        <p className="container">
          Coderfeast is a renowned iOS app development company known for its
          innovative work. Our applications are developed by the Apple store
          guidelines. We build a great user interface for your iOS applications
          to increase customer engagement. Coderfeast is an iOS app development
          company in USA that enlightens its customers with the latest
          technologies. Our team is constantly up to date with the latest Apple
          technologies and frameworks to provide you with the best futuristic
          applications and give you a competitive edge. No matter what industry
          you’re from, Coderfeast builds strong products and makes sure your
          applications are successful upon launching. So regardless of the
          industry you are from, we are driven to design and deliver
          personalized iOS applications that provide user-friendliness and
          versatile features and functionality. We make sure that your end
          product stands out in the competitive market and makes an impact.
        </p>
      </div>

      {/* contact us page */}
      <section className="aboutus_contact_container">
        <div className="container">
          <div className="contact_us_main_container col-12 ">
            <h4 className="text-white pb-4">
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
    </>
  );
};
export default IosComp;
