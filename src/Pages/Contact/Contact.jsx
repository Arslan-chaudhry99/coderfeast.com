import React from 'react'
import "./style.css"
const Contact = () => {
    return (
        <>
            <section className='container mb-5 ' >
                <h2 className='m-0'>Get in touch with us</h2>
                <p className='mb-5 mt-3'>Let’s work together to bring your ideas to life and launch your next successful project. Request a quote.
                </p>
                <div className='col-12 col-md-9'>

                    <input type="text" className='col-12  col-md-5 py-3 px-4  contactus_placeholder_color contact_input_margin' placeholder='Name*' style={{ color: "black" }} />
                    <input type="text" className='col-12 col-md-5 py-3 px-4  contactus_placeholder_color contact_input_margin' placeholder='Email*' />
                    <input type="text" className='col-12 col-md-5 py-3 px-4  contactus_placeholder_color contact_input_margin' placeholder='Phone*' />
                    <input type="text" className='col-12 col-md-5 py-3 px-4  contactus_placeholder_color contact_input_margin' placeholder='Subject*' />
                    <textarea className="col-12 col-md-10 mb-4 px-4  py-3" placeholder='Message....'></textarea>
                </div>
                <button className="btn btn-sm btn-warning">Submit</button>
            </section>
            <section className="container " style={{ marginBottom: "110px", marginTop: "110px" }}>
                <div className='contactus_social_primary_section'>
                    <h2 className='text-white mb-3'>Unlock The Full Potential
                        of <strong className='green_color'>Social Media.</strong> </h2>
                    <p className='text-white mb-0'>Follow us to get the latest updates on all things Blockchain!</p>
                    <div className='d-flex mt-sm-5'>
                        <div className='contact_social_link text-black'><i class="bi bi-facebook "></i></div>
                        <div className='contact_social_link text-black'><i class="bi bi-linkedin "></i></div>
                        <div className='contact_social_link text-black'><i class="bi bi-twitter "></i></div>
                        <div className='contact_social_link text-black'><i class="bi bi-instagram "></i></div>
                        {/* <div className='contact_social_link text-black'><i class="bi bi-pinterest "></i></div> */}
                        {/* <div className='contact_social_link text-black'><i class="bi bi-discord "></i></div> */}
                        {/* <div className='contact_social_link text-black'><i class="bi bi-telegram "></i></div> */}
                        {/* <div className='contact_social_link text-black'><i class="bi bi-youtube "></i></div> */}
                    </div>
                </div>
            </section>
            <section className='container' style={{ marginBottom: "95px" }}>
                <div class="row">
                    <div class="col-sm-4 mb-3 ">
                        <div class="card contactsus_cards_shadows">
                            <div class="contactus_info_cards">
                                <div className=' d-flex justify-content-center align-items-center'><i class="bi bi-geo-alt-fill contact_us_icons_size"></i></div>
                                <div><h6><strong className='text-dark  d-flex justify-content-center align-items-center'>USA</strong></h6></div>
                                <p className='text-center'>1740 Innovation Dr. Suite # 210 Carbondale, IL. 62903.
                                    USA. </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-3">
                        <div class="card">
                            <div class="contactus_info_cards contactsus_cards_shadows">
                                <div className=' d-flex justify-content-center align-items-center'><i class="bi bi-geo-alt-fill contact_us_icons_size"></i></div>
                                <div><h6><strong className='text-dark  d-flex justify-content-center align-items-center'>USA</strong></h6></div>
                                <p className='text-center'>69 Summers Dr
Thorold, L2V5B1
Ontario </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-3">
                        <div class="card">
                            <div class="contactus_info_cards contactsus_cards_shadows">
                                <div className=' d-flex justify-content-center align-items-center'><i class="bi bi-person-rolodex contact_us_icons_size"></i></div>
                                <div><h6><strong className='text-dark  d-flex justify-content-center align-items-center'>Contact </strong></h6></div>
                                <p className='text-center mb-0'>info@optimusfox.com</p>
                                <p className='text-center'>+1 618-681-6441</p>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;