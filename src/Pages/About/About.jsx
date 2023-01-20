import React from 'react'
import "./style.css"
import img from "./img/MicrosoftTeams-image-6.webp"
import visionIcon from "./img/Vission.svg"
import valueIcon from "./img/values.svg"
import missionIcon from "./img/mission.svg"
const About = () => {
    return (
        <>
            <div className="container mt-4">
                <div class="row ">
                    <div class="col-sm-6 col-md-6 d-flex justify-content-center align-items-center"> <img src={img} alt="img" /></div>
                    <div class="col-sm-6 col-md-6  text-dark" style={{ flexDirection: "column", marginTop: "6%" }}>
                        <h1 className="mb-3">Why Choose coderfeast.</h1>
                        <h3 className="mb-5">We Are Technical Innovators</h3>
                        <p>
                            We digitally transform your business using state-of-the-art solutions.
                            We use blockchain development solutions to reinvent your business and help you achieve your goals.
                            We help about you meet your ever-growing business demands with the use of the latest technologies such as Blockchain and Artificial Intelligence,
                            giving you a competitive edge.
                        </p>
                        <div className="d-flex">
                            <ul >
                                <li className='d-flex'>
                                    <i class="bi bi-check-circle-fill "></i>
                                    <p>
                                        Blockchain Development
                                    </p>
                                </li>
                                <li className='d-flex'>
                                    <i class="bi bi-check-circle-fill "></i>
                                    <p>
                                        Blockchain Development
                                    </p>
                                </li>
                            </ul>
                            <ul >
                                <li className='d-flex'>
                                    <i class="bi bi-check-circle-fill "></i>
                                    <p>
                                        Blockchain Development
                                    </p>
                                </li>
                                <li className='d-flex'>
                                    <i class="bi bi-check-circle-fill "></i>
                                    <p>
                                        Blockchain Development
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className='container mt-5'>
                <div>
                    <h2 className='mb-0'>
                        Our Company Values
                    </h2>
                    <p>
                        We have strong values which we abide by.
                    </p>
                </div>
                {/* col-sm-12 col-md-3 col-xl-3 col-xxl-3 col-lg-3 */}
                <div className='row d-flex justify-content-around align-items-center'>
                    <div class=" card about-us-cards-padding  about-cards-w-h mb-4" >
                        <div className='d-flex justify-content-center align-items-center text-center' style={{ flexDirection: "column" }}>
                            <img src={visionIcon} alt="img" width="65px" />
                            <h6 className="my-3">VISION</h6>
                            <p>OptimusFox envisions a digital world where the
                                latest technological solutions are executed in businesses.
                                We are committed about to enabling enterprises inculcate
                                blockchain technology in their business processes.</p>
                        </div>
                    </div>
                    <div class=" card about-us-cards-padding  about-cards-w-h mb-4" >
                        <div className='d-flex justify-content-center align-items-center text-center' style={{ flexDirection: "column" }}>
                            <img src={valueIcon} alt="img" width="65px" />
                            <h6 className="my-3">VALUES</h6>
                            <p>Our innovative solutions are reflected in our work and that is the reason we have a
                                long-term relationship with our clients. We are committed to providing blockchain
                                technology solutions in accordance with the needs of our clients. </p>
                        </div>
                    </div>
                    <div class=" card about-us-cards-padding  about-cards-w-h mb-4" >
                        <div className='d-flex justify-content-center align-items-center text-center' style={{ flexDirection: "column" }}>
                            <img src={missionIcon} alt="img" width="65px" />
                            <h6 className="my-3">MISSION</h6>
                            <p>We aim to provide high-quality services that deliver premium
                                value to our customers. We help our clients achieve their
                                business goals by utilizing innovative technologies.</p>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}

export default About