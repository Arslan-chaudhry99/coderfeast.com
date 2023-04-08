import React from "react";
import "./style.css";
import stacffAug from "./imgs/staff-augmentation.png";
import fluterIcons from "../../Main/img/fl1utter.png";
import { useEffect } from "react";
const Flutter = () => {
 
  return (
    <>
      <div className="banner_background_img">
        <div class="container ">
          <div className="row">
            <div className="banner_img_content_react_section col-12 col-md-6 ">
              <div className="w-100 ">
                <h1 className="staf_augmentation_slider_section_h1">
                  Flutter App Development Company
                </h1>
              </div>
              <p>
                Coderfeast is a top flutter app development company that helps
                businesses worldwide with flutter applications. We use Flutter,
                a fast-growing, open-source, cross-platform app development
                framework to build intuitive web, Android, and iOS apps in a
                shorter timeframe.
              </p>
              <div className=" w-100 home_btn_container">
                <button className="btn ">Book Free Consultation</button>
              </div>
            </div>
            <div className="banner_img   col-12 col-md-6 ">
              <img src={fluterIcons} alt="img" className="w-50" />
            </div>
          </div>
        </div>
      </div>
      <div class="container global_margin_buttom mt-5">
        <h2 class="mb-5">
          <strong>Advantages of Flutter App Development</strong>
        </h2>

        <div class="row ">
          <div class="col-12 col-md-4  whats_augmentation_cards_section border_global_for_cards justify-content-start">
            <h5> Best Performance </h5>
            <p>
              Flutter apps perform the same way as native mobile applications.
              Their code is built directly into machine language. Their
              performance is equally as good as native applications.
            </p>
          </div>
          <div class="col-12 col-md-4  whats_augmentation_cards_section border_global_for_cards justify-content-start">
            <h5 className="text-center">Cost Savings</h5>
            <p>
              Since there’s a single codebase this means you’ll only have to
              code once most of the time, which reduces the efforts and
              resources needed to code, develop and test different applications.
              This also helps you with significant cost savings.
            </p>
          </div>
          <div class="col-12 col-md-4  whats_augmentation_cards_section border_global_for_cards justify-content-start">
            <h5> Faster Go-To-Market </h5>
            <p>
              These applications require less time to code so the developers are
              able to work on other features and functions instead of writing
              code for different platforms. The same developers are thus able to
              work on other tasks too decreasing the time to market.
            </p>
          </div>
          <div class="col-12 col-md-4  whats_augmentation_cards_section border_global_for_cards justify-content-start">
            <h5> Support for Older Version </h5>
            <p>
              Flutter has its own rendering engine which makes it unique from
              other cross-platform tools. This is the reason it is able to work
              with older versions of both iOS and Android.
            </p>
          </div>
          <div class="col-12 col-md-4  whats_augmentation_cards_section border_global_for_cards justify-content-start">
            <h5> Cross-Platform </h5>
            <p>
              With the help of Flutter, you can build cross-platform
              applications that are responsive across all iOS and Android
              devices.
            </p>
          </div>
          <div class="col-12 col-md-4  whats_augmentation_cards_section border_global_for_cards justify-content-start">
            <h5> Open Source </h5>
            <p>
              Flutter is trusted by a global community of contributors from all
              across the globe. It is supported by Google and is also reliable,
              open, 0and transparent.
            </p>
          </div>
          <div class="col-12 col-md-6  whats_augmentation_cards_section justify-content-start">
            <h5> Powerful Community </h5>
            <p>
              There is a powerful community of Flutter developers from all
              around the globe that make contributions to make Flutter better.
              They make it really easy for newcomers to come on board and learn
              the framework effectively. There are so many resources, videos,
              and guides that new and budding developers can take help from to
              learn the Flutter development process in next to no time.
            </p>
          </div>
          <div class="col-12 col-md-6  whats_augmentation_cards_section justify-content-start">
            <h5> Go Beyond Mobile </h5>
            <p>
              You can go beyond mobile development with Flutter. Now, there is
              support available for desktops and web apps. Your Flutter app code
              is compiled to a native macOS and Windows desktop app. These apps
              can run on Andriod, iOS, web, macOS, windows, and linux.
            </p>
          </div>
        </div>
      </div>
      <div class="container talk_to_expert text-white global_margin_buttom">
        <div class="home_gettouch_section">
          <h2 class="col-12 ">
            <strong>Creating responsive and compelling Flutter apps</strong>
          </h2>
        </div>
        <div class="home_gettouch_button_section">
          <button class="get_in_touch_btn  text-white shadow-lg text-center">
            <strong>Get in touch</strong>
          </button>
        </div>
      </div>

      <div class="container react_dev_services_section_1">
        <h2>
          <strong>Flutter App Development Services</strong>
        </h2>
        <p>
          We offer the best experiences to our clients globally with our
          first-class Flutter app development services in USA.
        </p>
        <section id="team" class="our_services_heading_margin">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-4 mt-4 ">
                <div class="image-flip ">
                  <div class="mainflip flip-0 ">
                    <div class="frontside">
                      <div class="card react_service_cards shadow border-0 py-3 ">
                        <div class="card-body text-center ">
                          <h4 class="card-title">
                            Custom Flutter App Development
                          </h4>
                          <p class="container ">
                            We offer dynamic flutter apps to help businesses
                            surpass their competition and become market leaders.
                            We offer customized flutter app development to meet
                            your business needs.
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
                          <h4 class="card-title"> Support & Maintenance </h4>
                          <p class="container ">
                            Our flutter development team provides you with
                            regular technical support to ensure the best
                            performance of your applications.
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
                            {" "}
                            API Development & Integration{" "}
                          </h4>
                          <p class="text-center ">
                            Our team of developers deploys and integrates APIs
                            for your flutter applications. API development helps
                            you achieve your business goals.
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
                            Flutter App Consultation Services
                          </h4>
                          <p class="container ">
                            Struggling to choose the best development
                            methodology for your product? Our consultation
                            services will help you make the right decision.
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
                          <h4 class="card-title">UI/UX Design</h4>
                          <p class="container ">
                            Our designers create compelling UI/UX design for
                            your mobile apps that gravitate your target audience
                            towards your apps.
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
                          <h4 class="card-title"> App Testing </h4>
                          <p class="container ">
                            We carry out extensive testing to make sure your
                            applications are free of errors and bugs. We aim to
                            fix issues that come up as soon as possible.
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
                <h6>Is Flutter good for app development?</h6>
                <i class="bi bi-chevron-expand"></i>
              </div>
            </p>
            <div class="collapse mb-2" id="collapseExample1">
              <div class="faq_content">
                Flutter is one of the most effective solutions to develop apps
                for iOS and Android. You don’t even have to write a different
                codebase for each platform. This saves time and costs for
                developers and companies.
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
                <h6>How much does it cost to hire a Flutter app developer?</h6>
                <i class="bi bi-chevron-expand"></i>
              </div>
            </p>
            <div class="collapse mb-2" id="collapseExample2">
              <div class="faq_content">
                This depends on the company’s requirements and the skills and
                expertise of the developer. If the Flutter app developer is
                competent and experienced then the cost of hiring would be
                higher.
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
                <h6>What are Flutter development services?</h6>
                <i class="bi bi-chevron-expand"></i>
              </div>
            </p>
            <div class="collapse mb-2" id="collapseExample3">
              <div class="faq_content">
                It is a cross-platform app development framework. You can build
                iOS and Android applications using the Flutter framework to
                build high-performing apps.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container why_chose_react">
        <h4 className="container fw-bold mb-4"> Why Choose Coderfeast</h4>
        <p className="container">
          Our team develops beautiful and feature-rich applications that are
          guaranteed to deliver profitable results for your apps. Launching a
          product on time is essential to grab the audience’s attention.
          Coderfeast uses the latest tools to build flutter apps for your brand.
          Our flutter development team fixes bugs, adds the required features,
          and builds UIs within the designated timelines. Our flutter developers
          write code that concerns future challenges. We build an architecture
          that is easy to upgrade when required. Our experts use advanced
          testing techniques to track bugs in flutter apps, making sure the app
          is responsive, compelling, and functional. We use a variety of
          automation tools that automate manual and repetitive tasks which
          enhance the productivity of developers. We use automation tools to
          deliver high-quality results to our clients.
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
export default Flutter;
