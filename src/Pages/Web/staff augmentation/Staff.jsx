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
                                <h1 className=''>
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
                                alt="img"/>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container why_chose_react global_margin_top'>
                <h2 className='container fw-bold mb-4'>
                    How Can We Help</h2>

                <div className="container">
                    <div className="row">
                        <div className='col-12  col-md-6 col-sm-12 mb-5'>
                            <div className='d-flex augmention_benifit_arrow '>

                                <i class="bi bi-check-circle-fill margin_between_tick_para react_arrows "
                                    style={
                                        {fontSize: "18px"}
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
                                        {fontSize: "18px"}
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
                                        {fontSize: "18px"}
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
                                        {fontSize: "18px"}
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
                                        {fontSize: "18px"}
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
                                        {fontSize: "18px"}
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
                    <button class="btn  btn-warning text-white shadow-lg text-center">
                        <strong>Get in touch</strong>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Staff
