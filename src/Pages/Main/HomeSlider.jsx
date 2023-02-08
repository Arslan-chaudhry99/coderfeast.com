import React from 'react'
import sliderImage from "./img/Slider-Background.jpg"
import banerSideImg from "./img/banner-img.png"
import "./Slider.css"

const HomeSlider = () => {

    return (
        <>
            <div className='banner_background_img mb-5'>
                <div class="container ">
                    <div className="row">
                        <div className='banner_img_content col-12 col-md-6 '>
                            <div className=' w-100'> <p >Take your SMEs to the next level ⏭️</p></div>
                            <h1>Coder Feast Offering Solutions To Boost Client’s Business Growth.</h1>
                            <p>
                                web development and app development solutions, empowering businesses with cutting-edge technology to drive growth and success. Our team of experts also delivers comprehensive cloud services to meet your every enterprise requirement

                            </p>
                            <div className=' w-100 home_btn_container'><button className='get_in_touch_btn'>Book Free Consultation</button></div>

                        </div>
                        <div className='banner_img   col-12 col-md-6 '>
                            <img src={banerSideImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSlider