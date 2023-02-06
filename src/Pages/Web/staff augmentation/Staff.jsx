import React from 'react'
import "./style.css"
import stacffAug from "./imgs/staff-augmentation.png"
const Staff = () => {
    return (
        <>
            <div className='banner_background_img'>
                <div class="container ">
                    <div className="row">
                        <div className='banner_img_content_react_section col-12 col-md-6 '>
                            <div className='w-100 '>
                                <h1 className='staf_augmentation_slider_section_h1'>
                                    STAFF AUGMENTATION SERVICES
                                </h1>
                            </div>
                            <p>
                                Staff augmentation services allows companies to access specialized expertise and skills that may not be available in-house. Staff augmentation can be used in a variety of industries, including IT, engineering, finance, and marketing and it allows companies to quickly and easily scale their workforce up or down according to their needs.
                            </p>
                            <div className=' w-100 home_btn_container'>
                                <button className='btn '>Book Free Consultation</button>
                            </div>

                        </div>
                        <div className='banner_img   col-12 col-md-6 '>
                            <img src={stacffAug}
                                alt="img" />
                        </div>
                    </div>

                </div>
            </div>
            <div className='container why_chose_react global_margin_top'>
                <h2 className='container fw-bold mb-4 how_help_augmentation'>
                    How Can We Help</h2>

                <div className="container">
                    <div className="row">
                        <div className='col-12  col-md-6 col-sm-12 mb-5'>
                            <div className='d-flex augmention_benifit_arrow '>

                                <i class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                                    style={
                                        { fontSize: "18px" }
                                    }></i>
                                <h5 className='fw-bold mb-3'>Understanding Your Requirements</h5>
                            </div>

                            <div>

                                <p className='agumentation_benifites_p'>
                                    Developing an understanding with clients by sharing the details of your requirement to get the perfect candidate to meet your needs.
                                </p>

                            </div>

                        </div>
                        <div className='col-12  col-md-6 col-sm-12 mb-5'>
                            <div className='d-flex augmention_benifit_arrow '>

                                <i class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                                    style={
                                        { fontSize: "18px" }
                                    }></i>
                                <h5 className='fw-bold mb-3'>Industry-Specific Technical Experts</h5>
                            </div>

                            <div>

                                <p className='agumentation_benifites_p'>
                                    Providing complete control over clients to choose from our pre-screened pool of candidates specific to your industry.
                                </p>

                            </div>

                        </div>
                        <div className='col-12  col-md-6 col-sm-12 mb-5'>
                            <div className='d-flex augmention_benifit_arrow '>

                                <i class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                                    style={
                                        { fontSize: "18px" }
                                    }></i>
                                <h5 className='fw-bold mb-3'>Affordable
                                </h5>
                            </div>

                            <div>

                                <p className='agumentation_benifites_p'>
                                    Get highly skilled technical experts to provide the best solutions, without bearing the costs of in-house work forces.
                                </p>

                            </div>

                        </div>
                        <div className='col-12  col-md-6 col-sm-12 mb-5'>
                            <div className='d-flex augmention_benifit_arrow '>

                                <i class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                                    style={
                                        { fontSize: "18px" }
                                    }></i>
                                <h5 className='fw-bold mb-3'>
                                    Accelerates Time-to-Market

                                </h5>
                            </div>

                            <div>

                                <p className='agumentation_benifites_p'>
                                    Trained professionals to operate at high efficiencies and provide fast-track development to get your product in the market faster.
                                </p>

                            </div>

                        </div>
                        <div className='col-12  col-md-6 col-sm-12 mb-5'>
                            <div className='d-flex augmention_benifit_arrow '>

                                <i class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                                    style={
                                        { fontSize: "18px" }
                                    }></i>
                                <h5 className='fw-bold mb-3'>
                                    High Turnover Rates


                                </h5>
                            </div>

                            <div>

                                <p className='agumentation_benifites_p'>
                                    Hiring already skilled external resources to focus solely on your project decreases attrition rates and produces positive results.
                                </p>

                            </div>

                        </div>
                        <div className='col-12  col-md-6 col-sm-12 mb-5'>
                            <div className='d-flex augmention_benifit_arrow '>

                                <i class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                                    style={
                                        { fontSize: "18px" }
                                    }></i>
                                <h5 className='fw-bold mb-3'>
                                    Outperform Your Competitors


                                </h5>
                            </div>

                            <div>

                                <p className='agumentation_benifites_p'>
                                    With a remotely working team of professionals with a profound skill set, you’re more likely to outperform your competitors.
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
                            Offering the best talent pool to help you scale your business</strong>
                    </h2>
                </div>
                <div class="home_gettouch_button_section">
                    <button class="get_in_touch_btn  text-white shadow-lg text-center">
                        <strong>Get in touch</strong>
                    </button>
                </div>
            </div>
            {/* What's in it for you? */}
            <div className='container global_margin_buttom '>
                <h2 className='mb-5'>
                    <strong>What's in it for you?</strong>
                </h2>
                <div className='row '>
                    <div className='col-12 col-md-4  whats_augmentation_cards_section border_global_for_cards'>
                        <h5>Fast Hiring</h5>
                        <p>We provide complete control over the kind of staff you want to hire. Choose between full time, part time, contractual or permanent staff.</p>
                    </div>
                    <div className='col-12 col-md-4  whats_augmentation_cards_section border_global_for_cards'>
                        <h5>Top Talent</h5>
                        <p>Select the most suitable candidates from our prescreened pool of experts.</p>
                    </div>
                    <div className='col-12 col-md-4  whats_augmentation_cards_section border_global_for_cards'>
                        <h5>Daytime Hours
                        </h5>
                        <p>We facilitate our candidates working hours according to your requirements.</p>
                    </div>
                    <div className='col-12 col-md-6  whats_augmentation_cards_section '>
                        <h5>Daytime Hours
                        </h5>
                        <p>We facilitate our candidates working hours according to your requirements.</p>
                    </div>
                    <div className='col-12 col-md-6  whats_augmentation_cards_section '>
                        <h5>Integrity

                        </h5>
                        <p>Our team specializes in not just technical expertise but also integrity, good english communication and professionalism overall.</p>
                    </div>
                </div>
            </div>
            <div className='container global_margin_buttom '>
                <h2 className='mb-5'>
                    <strong>Onboarding Process</strong>
                </h2>
                <div className='row container'>
                    <div className='  whats_augmentation_cards_section onboding_margin shadow'>
                        <div className="count_inaugmentation">1</div>
                        <h5>Hire Preferred Team</h5>
                        <p>Select your preferred candidates from our pool of qualified individuals.</p>
                    </div>
                    <div className='  whats_augmentation_cards_section onboding_margin shadow'>
                        <div className="count_inaugmentation mb-2">2</div>
                        <h5>Start Two Weeks Trial</h5>
                        <p>Assess performance for free first.</p>
                    </div>
                    <div className='  whats_augmentation_cards_section onboding_margin shadow'>
                        <div className="count_inaugmentation">3</div>
                        <h5>Get Started!
                        </h5>
                        <p>Once you’re satisfied, get started with your project and see better results.</p>
                    </div>

                </div>
            </div>

            <div className='faq_container container'>
                <h4 className='container fw-bold mb-5' s>FAQs</h4>
                <div className='container'>
                    <div>
                        <p>
                            <div data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1" className='faq_question '>
                                <h6>How does the customer track the progress of their project development?</h6>
                                <i class="bi bi-chevron-expand"></i>
                            </div>

                        </p>
                        <div class="collapse mb-2" id="collapseExample1">
                            <div class="faq_content">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            <div data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" className='faq_question '>
                                <h6>How does the customer track the progress of their project development?</h6>
                                <i class="bi bi-chevron-expand"></i>
                            </div>

                        </p>
                        <div class="collapse mb-2" id="collapseExample2">
                            <div class="faq_content">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>
                            <div data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3" className='faq_question '>
                                <h6>How does the customer track the progress of their project development?</h6>
                                <i class="bi bi-chevron-expand"></i>
                            </div>

                        </p>
                        <div class="collapse mb-2" id="collapseExample3">
                            <div class="faq_content">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container why_chose_react'>
                <h4 className='container fw-bold mb-4'>  Why Choose Coderfeast</h4>
                <p className='container'>
                    OptimusFox has been recognized as a leading reactjs development company in USA. Our developers aim to create high-performing web apps using the top JavaScript library. Having years of experience in ReactJS development, our team of developers is hard at work creating react components and full-scale applications.
                    <br />
                    We have experienced in-house resources to offer react.js development services according to your business needs. The team at OptimusFox is proficient at offering the most effective solutions to challenging & complex issues. Our developers secure your apps with modern security techniques that prevent crashes and fix bugs and offer all maintenance services.
                    <br />
                    By using the latest technological updates and frameworks, our prime motivation is to bring forward innovative solutions that give you a greater return on investment.

                </p>
                <div className="container">
                    <div className="row">
                        <div className='d-flex col-12  col-md-6 col-sm-12'>
                            <i class="bi bi-arrow-right mx-2 react_arrows"></i>
                            <p>
                                Qualified IT Specialists </p>
                        </div>
                        <div className='d-flex col-12  col-md-6 col-sm-12'>
                            <i class="bi bi-arrow-right mx-2 react_arrows"></i>
                            <p>
                                Qualified IT Specialists </p>
                        </div>
                        <div className='d-flex col-12  col-md-6 col-sm-12'>
                            <i class="bi bi-arrow-right mx-2 react_arrows"></i>
                            <p>
                                Qualified IT Specialists </p>
                        </div>
                        <div className='d-flex col-12  col-md-6 col-sm-12'>
                            <i class="bi bi-arrow-right mx-2 react_arrows"></i>
                            <p>
                                Qualified IT Specialists </p>
                        </div>


                    </div>
                </div>
            </div>

            {/* contact us page */}
            <section className='aboutus_contact_container'>
                <div className='container'>

                    <div className="contact_us_main_container col-12 ">
                        <h4 className="text-white pb-4"><strong>Request More Information</strong></h4>
                        <div className=''>
                            <input type="text" className='aboutus_input_filed aboutus_input_filed_input rounded' placeholder="Name*" style={{ color: "white" }} />
                            <input type="text" className='aboutus_input_filed aboutus_input_filed_input rounded' placeholder="Email*" style={{ color: "white" }} />
                            <input type="text" className='aboutus_input_filed aboutus_input_filed_input rounded' placeholder="Phone*" style={{ color: "white" }} />
                            <input type="text" className='aboutus_input_filed aboutus_input_filed_input rounded' placeholder="Company*" style={{ color: "white" }} />
                            <textarea className='aboutus_input_filed aboutus_input_filed_textarea rounded' placeholder="Message...." style={{ color: "white" }} ></textarea>
                        </div>
                        <button className=' text-white shadow contactus_sumb_btns rounded' ><strong>Submit</strong></button>

                    </div>
                </div>
            </section>

        </>
    )
}
export default Staff
