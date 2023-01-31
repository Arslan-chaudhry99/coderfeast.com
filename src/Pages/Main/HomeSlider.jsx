import React from 'react'
import sliderImage from "./img/Slider-Background.jpg"
import banerSideImg from "./img/banner-img.png"
import "./Slider.css"

const HomeSlider = () => {

    return (
        <>
            <div className='banner_background_img'>
                <div class="container ">
                    <div className="row">
                        <div className='banner_img_content col-12 col-md-6 '>
                            <div className=' w-100'> <p >Take your SMEs to the next level</p></div>
                            <h1>We Are a Blockchain Enterprise Services & Solutions Provider.</h1>
                            <p>As a blockchain development company with a track record of expertise under our belt, we at OptimusFox are committed to delivering high-quality results to our clients. </p>
                            <div className=' w-100 home_btn_container'><button className='btn '>Book Free Consultation</button></div>

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