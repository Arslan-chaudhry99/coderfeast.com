import React from "react";
import "./style.css";
import img from "./img/MicrosoftTeams-image-6.png";
import visionIcon from "./img/Vission.png";
import valueIcon from "./img/values.png";
import missionIcon from "./img/mission.png";
import { useEffect } from "react";
const About = () => {

  
  return (
    <>
      <div class="banner_background_img">
        <div class="container ">
          <div class="row">
            <div class="banner_img_content_react_section col-12 col-md-6 ">
              <div class="w-100 ">
                <h1 class="staf_augmentation_slider_section_h1">
                  Coderfeast About
                </h1>
              </div>
              <p>
                web development and app development solutions, empowering
                businesses with cutting-edge technology to drive growth and
                success. Our team of experts also delivers comprehensive cloud
                services to meet your every enterprise requirement
              </p>
              <div class=" w-100 home_btn_container">
                <button class="btn ">Contact Us</button>
              </div>
            </div>
            <div class="banner_img   col-12 col-md-6 ">
              <img
                src="/static/media/staff-augmentation.ca4567be005f08f757c9.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="container mt-5">
        <div class="row ">
          <div class="col-sm-6 col-md-6 d-flex justify-content-center align-items-center about_why_chose">
            {" "}
            <img src={img} alt="img" />
          </div>
          <div
            class="col-sm-6 col-md-6  text-dark about_why_chose_paras"
            style={{ flexDirection: "column", marginTop: "6%" }}
          >
            <h1 className="mb-3">Why Choose coderfeast.</h1>
            <h3 className="mb-5">We Are Technical Innovators</h3>
            <p>
              Choose Coder Feast for a truly transformative technology
              experience. Our innovative approach, commitment to quality, and
              customer-focused values set us apart, ensuring that your business
              receives exceptional software solutions tailored to meet your
              unique needs and drive success. Partner with us and discover the
              power of technology.
            </p>
            <div className="">
              <ul className="row">
                <li className="d-flex  col-12  col-md-6 col-lg-6  col-xl-6 col-xxl-6  ">
                  <i class="bi bi-check-circle-fill aboutus_margin_icons"></i>
                  <p>Web Development</p>
                </li>
                <li className="d-flex  col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                  <i class="bi bi-check-circle-fill aboutus_margin_icons"></i>
                  <p>Mobile app development</p>
                </li>
              </ul>
              <ul className="row">
                <li className="d-flex  col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                  <i class="bi bi-check-circle-fill aboutus_margin_icons"></i>
                  <p>Software development</p>
                </li>
                <li className="d-flex  col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                  <i class="bi bi-check-circle-fill aboutus_margin_icons"></i>
                  <p>E-Commerce Solutions</p>
                </li>
                <li className="d-flex  col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                  <i class="bi bi-check-circle-fill aboutus_margin_icons"></i>
                  <p>UI/UX design</p>
                </li>
                <li className="d-flex  col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                  <i class="bi bi-check-circle-fill aboutus_margin_icons"></i>
                  <p>Content writing and SEO</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container  about_company_value">
        <div className="">
          <h2 className="mb-0">Our Company Values</h2>
          <p>We have strong values which we abide by.</p>
        </div>

        <div className="row ">
          <div class="    col-md-4 col-sm-12  mb-4">
            <div className=" about-cards-w-h border">
              <div className=" d-flex justify-content-center align-items-center flex-column">
                <img src={visionIcon} alt="img" width="65px" />
                <h6 className="my-3">Vision</h6>
              </div>
              <p>
                Our vision is to be the leading provider of full-stack software
                development services , delivering exceptional solutions to
                businesses of all sizes, both domestically and internationally.
                We aim to continuously evolve and stay at the forefront of
                technology to meet the ever-changing needs of our clients.
              </p>
            </div>
          </div>
          <div class="    col-md-4 col-sm-12  mb-4">
            <div className=" about-cards-w-h border">
              <div className=" d-flex justify-content-center align-items-center flex-column">
                <img src={missionIcon} alt="img" width="65px" />
                <h6 className="my-3">Mission</h6>
              </div>
              <p>
                Our mission at Coder Feast is to empower businesses by providing
                innovative and top-quality software solutions. We strive to help
                our clients achieve their goals through the power of technology.
                
              </p>
            </div>
          </div>
          <div class="    col-md-4 col-sm-12  mb-4">
            <div className=" about-cards-w-h border">
              <div className=" d-flex justify-content-center align-items-center flex-column">
                <img src={valueIcon} alt="img" width="65px" />
                <h6 className="my-3">Value</h6>
              </div>
              <p>
                At Coder Feast, our values shape our approach to software
                development. We prioritize innovation, quality, customer focus,
                collaboration, and continuous improvement to deliver exceptional
                results. These values guide us in our mission to empower
                businesses and drive success through technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <h3>
          <strong>Our Team</strong>
        </h3>
        <p>
          We have a team of enthusiastic professionals with years of experience
          in design, product development, marketing, technology and community
          building to set your business up for success.
        </p>
        <section class="our-webcoderskull ">
          <ul class="row">
            <li class="col-12 col-md-6 col-lg-3">
              <div class="cnt-block equal-hight" style={{ height: "340px" }}>
                <figure>
                  <img
                    src="http://www.webcoderskull.com/img/team4.png"
                    class="img-responsive"
                    alt=""
                  />
                </figure>
                <h3>
                  <a href="http://www.webcoderskull.com/">
                    <strong>Mujab Popalzai</strong>
                  </a>
                </h3>
                <p>
                  <strong>Co-Founder & CEO</strong>
                </p>
                <ul class="follow-us clearfix">
                  <li>
                    <a>
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="bi bi-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="col-12 col-md-6 col-lg-3">
              <div class="cnt-block equal-hight" style={{ height: "340px" }}>
                <figure>
                  <img
                    src="http://www.webcoderskull.com/img/team4.png"
                    class="img-responsive"
                    alt=""
                  />
                </figure>
                <h3>
                  <a href="http://www.webcoderskull.com/">
                    <strong>Mujab Popalzai</strong>
                  </a>
                </h3>
                <p>
                  <strong>Co-Founder & CEO</strong>
                </p>
                <ul class="follow-us clearfix">
                  <li>
                    <a>
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="bi bi-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="col-12 col-md-6 col-lg-3">
              <div class="cnt-block equal-hight" style={{ height: "340px" }}>
                <figure>
                  <img
                    src="http://www.webcoderskull.com/img/team4.png"
                    class="img-responsive"
                    alt=""
                  />
                </figure>
                <h3>
                  <a href="http://www.webcoderskull.com/">
                    <strong>Mujab Popalzai</strong>
                  </a>
                </h3>
                <p>
                  <strong>Co-Founder & CEO</strong>
                </p>
                <ul class="follow-us clearfix">
                  <li>
                    <a>
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="bi bi-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="col-12 col-md-6 col-lg-3">
              <div class="cnt-block equal-hight" style={{ height: "340px" }}>
                <figure>
                  <img
                    src="http://www.webcoderskull.com/img/team4.png"
                    class="img-responsive"
                    alt=""
                  />
                </figure>
                <h3>
                  <a href="http://www.webcoderskull.com/">
                    <strong>Mujab Popalzai</strong>
                  </a>
                </h3>
                <p>
                  <strong>Co-Founder & CEO</strong>
                </p>
                <ul class="follow-us clearfix">
                  <li>
                    <a>
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="bi bi-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
      </section>
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

export default About;
