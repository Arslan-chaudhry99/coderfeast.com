import React from "react";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "./img/wh1o-we-are (1).png";
import reactIcon from "./img/raec1t.png";
import djangoIcon from "./img/dja1nge1.png";
import laravalIcon from "./img/la1ravel.png";
import webLogo from "./img/web-ap1p-development.png";
import nodejsIcon from "./img/nod1e.png";
import appDevlarge from "./img/mobile-app-development.png";
import rubiIcons from "./img/ruby1-on-rail.png";
import dotNetLogo from "./img/ne1t.png";
import kotLinIcons from "./img/kotlin.png";
import andriodIcons from "./img/andr1oid.png";
import fluterIcons from "./img/fl1utter.png";
import SwiftIcons from "./img/s1wift.png";
import appleIcons from "./img/ap1ple.png";
import HomeSlider from "./HomeSlider";
import processImage from "./img/process-img.png";
import Btn from "./Btn";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Home = () => {
  useEffect(() => {
    let a = async () => {
      let a = await axios.post("/", { name: "Arslan chaudhry" });
      console.log(a);
    };
    a();
  }, []);
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  useEffect(() => {
    const data = async () => {
      const res = axios.get("/video");
      console.log(res);
    };
    data();
  }, []);

  const reviewsObj = [
    { name: "", title: "", image: "", review: "" }
  ];
  return (
    <>
      <HomeSlider />
      <div className="our_service_bacground_image ">
        <div className="container home_service_padding">
          <div className="container">
            <h2 className=" ">Our Services</h2>
            <p>
              We offer Web and App Development services,Cloud Services, Staff
              Augmentation, UI/UX Design, and Digital Marketing services to help
              your business generate leads and make sales.
            </p>
          </div>
          <section id="team" className="our_services_heading_margin">
            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4 mt-4 ">
                  <div class="image-flip ">
                    <div class="mainflip flip-0 ">
                      <div class="frontside">
                        <div class="card home_card_padding shadow border-0 ">
                          <div class="card-body text-center align_mentsof_cards">
                            <h4 class="card-title">Web Development</h4>
                            <p class="card-text">
                              Make your mark on the world wide web
                            </p>
                            <p>
                              Read More
                              <i class="bi bi-arrow-right"></i>
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
                          <div class="card-body text-center align_mentsof_cards">
                            <h4 class="card-title">Mobile Development</h4>
                            <p class="card-text">
                              Elevate your brand with our expert mobile
                              development services
                            </p>
                            <p>
                              Read More
                              <i class="bi bi-arrow-right"></i>
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
                          <div class="card-body text-center align_mentsof_cards">
                            <h4 class="card-title">UI/UX Design</h4>
                            <p class="card-text">
                              Experience design excellence
                            </p>
                            <p>
                              Read More
                              <i class="bi bi-arrow-right"></i>
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
                          <div class="card-body text-center align_mentsof_cards">
                            <h4 class="card-title">E-commerce</h4>
                            <p class="card-text">
                              Streamline your sales process
                            </p>
                            <p>
                              Read More
                              <i class="bi bi-arrow-right"></i>
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
                          <div class="card-body text-center align_mentsof_cards">
                            <h4 class="card-title">Content Writing</h4>
                            <p class="card-text">
                              Empower your brand with words that matter
                            </p>
                            <p>
                              Read More
                              <i class="bi bi-arrow-right"></i>
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
                          <div class="card-body text-center align_mentsof_cards">
                            <h4 class="card-title">SEO</h4>
                            <p class="card-text">
                              Stay ahead of the competition
                            </p>
                            <p>
                              Read More
                              <i class="bi bi-arrow-right"></i>
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
      </div>
      <div className="container process_image_section">
        <h3 className="container ">
          <strong>Our Process</strong>
        </h3>
        <p className="container">
          The stages we go through when we take on a project.
        </p>
        <img
          src={processImage}
          alt="img"
          style={{ width: "100%" }}
          className="container"
        />
      </div>
      <div class="container home_who_we_margin">
        <div class="row g-0 text-center">
          <div class="row ">
            <div class="col-sm-6 col-md-6 d-flex justify-content-center align-items-center object-fit-cover">
              <img src={img} alt="img" style={{ width: "90%" }} />
            </div>
            <div
              class="col-sm-6 col-md-6 d-flex justify-content-center align-items-center "
              style={{ flexDirection: "column" }}
            >
              <h3 className="mt-3">Who We Are?</h3>
              <p>
                Coder Feast is a full-stack software development company that
                delivers top-notch digital services to clients domestically and
                internationally. Our team of experienced developers and
                designers can be trusted to provide innovative solutions to meet
                the ever-growing needs of businesses in the digital age. We
                offer a wide range of services, including full-service software
                development, web development, mobile development, UI/UX design,
                e-commerce, content writing, and SEO. Our developers are skilled
                in using complex technologies such as .NET, React, React Native,
                WordPress, Python, and Ruby on Rails to create unique, creative,
                and user-friendly applications. We believe in constantly
                evolving and adapting to the changing landscape of technology.
                With an innovative vision in mind, our team stays ahead of the
                curve to ensure that our clients always receive the latest and
                best solutions.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container home_text_services   ">
        <div class="row row-reverse">
          <div class="col-sm-6 " style={{ flexDirection: "column" }}>
            <h4 className="app_devl_section_heading_h4">Web App Development</h4>
            <p className="app_devl_section_heading_para">
              We use a variety of platforms to develop stunning web applications
              that convert.
            </p>
            <div class="row">
              <div class="col home_icons_driction ">
                <img src={rubiIcons} alt="" width="80px" />
                <p>Ruby on Rails</p>
              </div>
              <div class="col home_icons_driction ">
                <img src={nodejsIcon} alt="" width="80px" />
                <p>Node.Js</p>
              </div>
              <div class="col home_icons_driction ">
                <img src={reactIcon} alt="img" width="80px" />
                <p>React.Js</p>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col home_icons_driction ">
                <img src={dotNetLogo} alt="" width="80px" />
                <p>.Net / Core</p>
              </div>
              <div class="col home_icons_driction ">
                <img src={laravalIcon} alt="" width="80px" />
                <p>Laravel</p>
              </div>
              <div class="col home_icons_driction ">
                <img src={djangoIcon} alt="" width="80px" />
                <p>Python</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 d-flex justify-content-center align-items-center">
            <img src={webLogo} alt="img" style={{ width: "70%" }} />
          </div>
        </div>
      </div>
      <div className="container talk_to_expert text-white ">
        <div className="home_gettouch_section">
          <h2 className="col-12 ">
            <strong>
              Integrate your business using our cutting-edge software solutions.
            </strong>
          </h2>
        </div>
        <div className="home_gettouch_button_section">
          <NavLink to="/contact">
            <button className="get_in_touch_btn text-white shadow-lg text-center ">
              <strong>Get in touch</strong>
            </button>
          </NavLink>
        </div>
      </div>
      <div class="container home_text_services">
        <div class="row ">
          <div class="col-sm-6 col-md-6 d-flex justify-content-center align-items-center ">
            <img src={appDevlarge} alt="img" style={{ width: "70%" }} />
          </div>
          <div class="col-sm-6 col-md-6 " style={{ flexDirection: "column" }}>
            <h4 className="app_devl_section_heading_h4">
              Mobile Apps Development
            </h4>
            <p>
              We have a team of experts developing feature-rich applications for
              iOS and Android.
            </p>
            <div class="row ">
              <div class="col home_icons_driction ">
                <img src={andriodIcons} alt="" width="80px" />
                <p>Android</p>
              </div>
              <div class="col home_icons_driction  ">
                <img src={appleIcons} alt="" width="80px" />
                <p>IOS</p>
              </div>
              <div class="col home_icons_driction ">
                <img src={reactIcon} alt="" width="80px" />
                <p>React Native</p>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col home_icons_driction ">
                <img src={SwiftIcons} alt="" width="80px" />
                <p>Swift</p>
              </div>
              <div class="col home_icons_driction ">
                <img src={kotLinIcons} alt="" width="80px" />
                <p>Kotlin</p>
              </div>
              <div class="col home_icons_driction ">
                <img src={fluterIcons} alt="" width="80px" />
                <p>Flutter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h4 className="container app_devl_section_heading_h4">
          <strong>What Our Clients Are Saying</strong>
        </h4>
        <p className="container">
          Let them do the talking about our services and quality of work.
        </p>
      </div>
      <section className="container testimonial_img">
        <div class="row text-center">
          <Carousel responsive={responsive} showDots arrows={false}>
            <div class="col-md-12 mb-5 mb-md-0 container p-3">
              <div class="d-flex justify-content-center mb-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  class="rounded-circle shadow-1-strong"
                  style={{
                    width: "130px",
                    height: "130px",
                  }}
                />
              </div>
              <h5 class="mb-3">Maria Smantha</h5>
              <h6 class="text-primary mb-3">Web Developer</h6>
              <p class="px-xl-3 text-center">
                <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Quod eos id officiis hic
                tenetur quae quaerat ad velit ab hic tenetur.
              </p>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Home;
