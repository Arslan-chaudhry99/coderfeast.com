import React from 'react'
import "./style.css"
import img from "./img/MicrosoftTeams-image-6.webp"
import visionIcon from "./img/Vission.svg"
import valueIcon from "./img/values.svg"
import missionIcon from "./img/mission.svg"
const About = () => {
    return (
        <>
            <section className="container mt-5">
                <div class="row ">
                    <div class="col-sm-6 col-md-6 d-flex justify-content-center align-items-center about_why_chose"> <img src={img} alt="img" /></div>
                    <div class="col-sm-6 col-md-6  text-dark about_why_chose_paras" style={{ flexDirection: "column", marginTop: "6%" }}>
                        <h1 className="mb-3">Why Choose coderfeast.</h1>
                        <h3 className="mb-5">We Are Technical Innovators</h3>
                        <p>
                            We digitally transform your business using state-of-the-art solutions.
                            We use blockchain development solutions to reinvent your business and help you achieve your goals.
                            We help about you meet your ever-growing business demands with the use of the latest technologies such as Blockchain and Artificial Intelligence,
                            giving you a competitive edge.
                        </p>
                        <div className="">
                            <ul className='row'>
                                <li className='d-flex  col-12  col-md-6 col-lg-6  col-xl-6 col-xxl-6  '>
                                    <i class="bi bi-check-circle-fill aboutus_margin_icons"></i>
                                    <p>
                                        Web Development
                                    </p>
                                </li>
                                <li className='d-flex  col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 '>
                                    <i class="bi bi-check-circle-fill aboutus_margin_icons"></i>
                                    <p>
                                        Mobile App Development
                                    </p>
                                </li>

                            </ul>
                            <ul className='row'>
                                <li className='d-flex  col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 '>
                                    <i class="bi bi-check-circle-fill aboutus_margin_icons"></i>
                                    <p>
                                        Bussiness Development
                                    </p>
                                </li>
                                <li className='d-flex  col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 '>
                                    <i class="bi bi-check-circle-fill aboutus_margin_icons"></i>
                                    <p>
                                        Blockchain Development
                                    </p>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </section>
            <section className='container  about_company_value'>
                <div className=''>
                    <h2 className='mb-0'>
                        Our Company Values
                    </h2>
                    <p>
                        We have strong values which we abide by.
                    </p>
                </div>

                <div className='row '>
                    <div class="    col-md-4 col-sm-12  " >
                        <div className=' about-cards-w-h border'>
                            <div className=' d-flex justify-content-center align-items-center flex-column'>
                                <img src={visionIcon} alt="img" width="65px" />
                                <h6 className="my-3">VISION</h6>
                            </div>
                            <p>OptimusFox envisions a digital world where the
                                latest technological solutions are executed in businesses.
                                We are committed about to enabling enterprises inculcate
                                blockchain technology in their business processes.</p>
                        </div>
                    </div>
                    <div class="    col-md-4 col-sm-12  " >
                        <div className=' about-cards-w-h border'>
                            <div className=' d-flex justify-content-center align-items-center flex-column'>
                                <img src={visionIcon} alt="img" width="65px" />
                                <h6 className="my-3">VISION</h6>
                            </div>
                            <p>OptimusFox envisions a digital world where the
                                latest technological solutions are executed in businesses.
                                We are committed about to enabling enterprises inculcate
                                blockchain technology in their business processes.</p>
                        </div>
                    </div>
                    <div class="    col-md-4 col-sm-12  " >
                        <div className=' about-cards-w-h border'>
                            <div className=' d-flex justify-content-center align-items-center flex-column'>
                                <img src={visionIcon} alt="img" width="65px" />
                                <h6 className="my-3">VISION</h6>
                            </div>
                            <p>OptimusFox envisions a digital world where the
                                latest technological solutions are executed in businesses.
                                We are committed about to enabling enterprises inculcate
                                blockchain technology in their business processes.</p>
                        </div>
                    </div>

                </div>
            </section>
            <section className='container'>
                <h3><strong>Our Team</strong></h3>
                <p>We have a team of enthusiastic professionals with years of experience in design,
                    product development, marketing,
                    technology and community building to set your business up for success.
                </p>
                <section class="our-webcoderskull ">


                    <ul class="row">
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{ height: "340px" }}>
                                <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt="" /></figure>
                                <h3><a href="http://www.webcoderskull.com/"><strong>Mujab Popalzai</strong></a></h3>
                                <p><strong>Co-Founder & CEO</strong></p>
                                <ul class="follow-us clearfix">
                                    <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                                    <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                                    <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{ height: "340px" }}>
                                <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt="" /></figure>
                                <h3><a href="http://www.webcoderskull.com/"><strong>Mujab Popalzai</strong></a></h3>
                                <p><strong>Co-Founder & CEO</strong></p>
                                <ul class="follow-us clearfix">
                                    <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                                    <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                                    <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{ height: "340px" }}>
                                <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt="" /></figure>
                                <h3><a href="http://www.webcoderskull.com/"><strong>Mujab Popalzai</strong></a></h3>
                                <p><strong>Co-Founder & CEO</strong></p>
                                <ul class="follow-us clearfix">
                                    <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                                    <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                                    <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{ height: "340px" }}>
                                <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt="" /></figure>
                                <h3><a href="http://www.webcoderskull.com/"><strong>Mujab Popalzai</strong></a></h3>
                                <p><strong>Co-Founder & CEO</strong></p>
                                <ul class="follow-us clearfix">
                                    <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                                    <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                                    <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                                </ul>
                            </div>
                        </li>

                    </ul>

                </section>
            </section>
            <section className='aboutus_contact_container'>
                <div className='container'>

                    <div className="contact_us_main_container col-12 ">
                        <h4 className="text-white pb-4"><strong>Request More Information</strong></h4>
                        <div className='aboutus_inputs_container'>
                            <input type="text" className='aboutus_input_filed col-11 col-md-4 col-lg-4 col-xl-4 col-xxl-4' placeholder="Name*" style={{ color: "white" }} />
                            <input type="text" className='aboutus_input_filed col-11 col-md-4 col-lg-4 col-xl-4 col-xxl-4' placeholder="Email*" style={{ color: "white" }} />
                            <input type="text" className='aboutus_input_filed col-11 col-md-4 col-lg-4 col-xl-4 col-xxl-4' placeholder="Phone*" style={{ color: "white" }} />
                            <input type="text" className='aboutus_input_filed col-11 col-md-4 col-lg-4 col-xl-4 col-xxl-4' placeholder="Company*" style={{ color: "white" }} />
                            <textarea className='aboutus_input_filed col-md-8 col-11' placeholder="Message...." style={{ color: "white" }} ></textarea>
                        </div>
                        <button className='btn btn-warning btn-sm mx-2 text-white shadow' ><strong>Submit</strong></button>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About