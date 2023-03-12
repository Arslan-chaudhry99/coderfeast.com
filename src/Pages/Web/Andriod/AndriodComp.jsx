import React from "react";
import "./style.css";
import stacffAug from "./imgs/staff-augmentation.png";
import andriodIcons from "../../Main/img/andr1oid.png";

const AndriodComp = () => {
  return (
    <>
      <div className="banner_background_img">
        <div class="container ">
          <div className="row">
            <div className="banner_img_content_react_section col-12 col-md-6 ">
              <div className="w-100 ">
                <h1 className="staf_augmentation_slider_section_h1">
                  Android App Development SERVICES
                </h1>
              </div>
              <p>
                Coderfeastis an Android app development company that provides
                innovative solutions to businesses worldwide. Our goal is to
                create mobile apps that have a wide range of features and help
                our clients gain a competitive edge and increased business
                value.
              </p>
              <div className=" w-100 home_btn_container">
                <button className="btn ">Book Free Consultation</button>
              </div>
            </div>
            <div className="banner_img   col-12 col-md-6 ">
              <img src={andriodIcons} alt="img" className="w-50" />
            </div>
          </div>
        </div>
      </div>
      <div className="container why_chose_react global_margin_top">
        <h2 className="container fw-bold mb-4 how_help_augmentation">
          Why Invest in Android Applications?
        </h2>

        <div className="container">
          <div className="row">
            <div className="col-12  col-md-6 col-sm-12 mb-5">
              <div className="d-flex augmention_benifit_arrow ">
                <i
                  class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                  style={{ fontSize: "18px" }}
                ></i>
                <h5 className="fw-bold mb-3"> High Return on Investment </h5>
              </div>

              <div>
                <p className="agumentation_benifites_p">
                  Using Android SDK is one benefit of android app development.
                  Developers can use the SDK to build intuitive and interactive
                  applications. Although developers would be required to pay a
                  one-time registration fee for application distribution, they
                  can use any computer device to build and test the product for
                  their smartphones, leading to low investment and enhanced user
                  engagement. Users would enjoy the interactive applications,
                  and companies would gain a greater return on investment.
                </p>
              </div>
            </div>
            <div className="col-12  col-md-6 col-sm-12 mb-5">
              <div className="d-flex augmention_benifit_arrow ">
                <i
                  class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                  style={{ fontSize: "18px" }}
                ></i>
                <h5 className="fw-bold mb-3"> Faster Deployment </h5>
              </div>

              <div>
                <p className="agumentation_benifites_p">
                  Android applications for companies have development cycles
                  that only last a few hours. This provides companies with a
                  competitive edge, especially those who prefer a quicker
                  go-to-market for their ideas. Reduced time to market is
                  desired by all companies, and that is one of the many benefits
                  of Android app development.
                </p>
              </div>
            </div>
            <div className="col-12  col-md-6 col-sm-12 mb-5">
              <div className="d-flex augmention_benifit_arrow ">
                <i
                  class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                  style={{ fontSize: "18px" }}
                ></i>
                <h5 className="fw-bold mb-3"> Versatility and Scalability </h5>
              </div>

              <div>
                <p className="agumentation_benifites_p">
                  With the introduction of Android studio, it makes Android apps
                  compatible with the leading tools and technologies such as
                  AR/VR, the Internet of Things, etc. Android app platforms are
                  also versatile, and it allows developers to build dynamic
                  mobile applications that serve a multitude of purposes after
                  being installed.
                </p>
              </div>
            </div>
            <div className="col-12  col-md-6 col-sm-12 mb-5">
              <div className="d-flex augmention_benifit_arrow ">
                <i
                  class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                  style={{ fontSize: "18px" }}
                ></i>
                <h5 className="fw-bold mb-3"> Security</h5>
              </div>

              <div>
                <p className="agumentation_benifites_p">
                  Android applications have built-in extensive security
                  features. They will help protect applications from malware
                  attacks and viruses. Safety and reliability are extremely
                  important for the end-user and Android applications have all
                  the features to help with that.
                </p>
              </div>
            </div>
            <div className="col-12  col-md-6 col-sm-12 mb-5">
              <div className="d-flex augmention_benifit_arrow ">
                <i
                  class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                  style={{ fontSize: "18px" }}
                ></i>
                <h5 className="fw-bold mb-3">Customization </h5>
              </div>

              <div>
                <p className="agumentation_benifites_p">
                  Since Android is an open-source platform, it offers extensive
                  customization features to developers. This is exactly why
                  Android apps are a popular choice for users. This helps
                  companies reach a broader audience by being up to date and on
                  par with the constantly evolving requirements. The
                  feature-rich applications help companies boost their sales and
                  revenue and gain a competitive edge. Developers can launch
                  applications that are futuristic, innovative, and robust.
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
              Offering intuitive and user-friendly Android applications
            </strong>
          </h2>
        </div>
        <div class="home_gettouch_button_section">
          <button class="get_in_touch_btn  text-white shadow-lg text-center">
            <strong>Get in touch</strong>
          </button>
        </div>
      </div>

      <div class="container global_margin_buttom ">
        <h2 class="mb-5">
          <strong>Android App Development Services</strong>
        </h2>

        <div class="row ">
          <div class="col-12 col-md-4  whats_augmentation_cards_section border_global_for_cards justify-content-start">
            <h5> Custom Android App Development </h5>
            <p>
              We help you launch Android applications that are completely
              tailored to your needs and requirements. We will create apps that
              appeal to your customer base
            </p>
          </div>
          <div class="col-12 col-md-4  whats_augmentation_cards_section border_global_for_cards justify-content-start">
            <h5 className="text-center">
              {" "}
              Enterprise Android App Development{" "}
            </h5>
            <p>
              We create and deploy scalable mobile applications to help large
              organizations effectively engage and communicate with customers
              and employees.
            </p>
          </div>
          <div class="col-12 col-md-4  whats_augmentation_cards_section border_global_for_cards justify-content-start">
            <h5> Android App Testing </h5>
            <p>
              We carry out app testing to make sure all features and
              functionalities are running smoothly and ensure the optimum
              performance of the application.
            </p>
          </div>
          <div class="col-12 col-md-6  whats_augmentation_cards_section justify-content-start">
            <h5> Custom node.js Development Service </h5>
            <p>
              We have expert node developers whose efficiency brings innovative
              solutions to your business application challenges. We provide the
              best custom solutions by taking a creative approach to your
              business problems.
            </p>
          </div>
          <div class="col-12 col-md-6  whats_augmentation_cards_section justify-content-start">
            <h5> Real-Time Chat Application Development </h5>
            <p>
              We have expertise in developing communication apps and delivering
              solutions that is real-time and able to resist huge loads. It is
              possible to establish a future-ready communication app by
              utilizing real-time communication protocols such as WebSockets and
              adhering to agile app development methods.
            </p>
          </div>
        </div>
      </div>
      <div class="container react_dev_services_section_1">
        <h2 class="container">
          <strong>Our Android App Development Process</strong>
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
                          <h4 class="card-title">Scope of the application</h4>
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
                          <h4 class="card-title">Project plan</h4>
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
                          <h4 class="card-title">UI/ UX Design</h4>
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
                          <h4 class="card-title">Development phase</h4>
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
                          <h4 class="card-title">Application testing</h4>
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
                          <h4 class="card-title">Deployment of the project</h4>
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
                <h6>What does an Android app development company do?</h6>
                <i class="bi bi-chevron-expand"></i>
              </div>
            </p>
            <div class="collapse mb-2" id="collapseExample1">
              <div class="faq_content">
                An Android app development company has developers that are
                competent at building scalable and robust Android applications
                for their clients.
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
                <h6>How much does an Android app cost to develop?</h6>
                <i class="bi bi-chevron-expand"></i>
              </div>
            </p>
            <div class="collapse mb-2" id="collapseExample2">
              <div class="faq_content">
                This depends on the company’s requirements and the features and
                functionalities that the application requires. If the
                application requires more features and is complex, it will cost
                more.
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
                <h6>WWhat are the basics of Android programming?</h6>
                <i class="bi bi-chevron-expand"></i>
              </div>
            </p>
            <div class="collapse mb-2" id="collapseExample3">
              <div class="faq_content">
                Android apps are usually written using Java, Kotlin, and C++
                languages.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container why_chose_react">
        <h4 className="container fw-bold mb-4"> Why Choose Coderfeast</h4>
        <p className="container">
          As an Android app development company, we have the technical expertise
          to deliver high-performing applications. To get the maximum results
          out of the Android platform, we work on delivering scalable and robust
          applications to our clients. Our team of Android developers delivers
          results to address the rapidly changing technologies and your
          strategic business goals through an advanced approach. We do our
          research and assist you in adding features that help you stay ahead of
          the competition. We develop apps that help you drive business growth.
          Our Android development team is constantly updating itself with the
          latest technological advancements to deliver modern experiences. With
          years of experience working with android apps, we excel at delivering
          world-class custom android applications. We offer desired features &
          functionality that are tailored to your needs. Our goal is to deliver
          an enhanced user experience as our apps offer easy navigation. We
          build customized Android Apps that cater to every industry.
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
export default AndriodComp;
