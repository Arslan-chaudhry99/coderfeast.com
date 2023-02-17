import React from 'react'
import { useFormik } from 'formik'
import { applySchema } from '../schemas/Job'
import swal from 'sweetalert';
import axios from 'axios'
const initialValues = {
    name: "",
    phone: "",
    email: "",
    file: ""

}
const ApplyToJob = () => {

    const { values, errors, handleBlur, handleChange, handleSubmit, touched, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: applySchema,
        onSubmit: async (values, action) => {

            try {
                console.log(values);
                const res = await axios.post("/contact", values);
                await swal({
                    title: "Thank You!",
                    text: res.data.message,
                    icon: "success",
                    button: {
                        text: "ok",
                    }
                })

                action.resetForm()
            } catch (error) {
                await swal({
                    title: `Error ${error.response.status}`,
                    text: error.message,
                    icon: "error",
                    button: {
                        text: "ok",
                    }
                })
            }

        }
    })

    console.log(values);
    return (
        <>
            <div class="banner_background_img">
                <div class="container ">
                    <div class="row">
                        <div class="banner_img_content_react_section col-12 col-md-6 ">
                            <div class="w-100 ">
                                <h1 class="staf_augmentation_slider_section_h1">
                                    ReactJs Jobs
                                </h1>
                            </div>
                            <p>
                                The React. js framework is an open-source JavaScript framework and library developed by Facebook.
                                It's used for building interactive user interfaces and web applications quickly and efficiently with
                                significantly less code than you would with vanilla JavaScript.</p>

                        </div>
                        <div class="banner_img   col-12 col-md-6 "><img src="/static/media/staff-augmentation.ca4567be005f08f757c9.png" alt="img" /></div>
                    </div>
                </div>
            </div>
            <div className="container ">
                <div className='row global_margin_top global_margin_buttom '>
                    <div className='col-12 col-md-6   p-4 job_description'>
                        <h2 className="fw-bold">
                            Job Brief
                        </h2>
                        <p>We are looking for a graphic designer who’s experienced in using Canva.
                            The responsibilities will include creating and managing graphic design requirements for our clients using Canva,
                            refining projects & drafts, and generating creative ideas.
                        </p>
                        <p>To be successful as a graphic designer,
                            you should have extensive knowledge of Canva graphic
                            designing techniques. We are a Digital Agency and all graphic requirements are
                            for digital media spaces. The designer will be working closely with our social team and will produce graphic content for social media.</p>
                        <h2 className='fw-bold'>Responsibilities</h2>

                        <ul>
                            <li>Liaising with the social team to determine client needs and conceptualizing visuals based on client requirements.</li>
                            <li>Plan and illustrate concepts by designing rough layouts regarding arrangement, size, type size, style, and related aesthetics. </li>
                            <li>Prepare rough layouts for review and obtain approval from managers to ensure that the design meets organization standards and client expectations. </li>
                            <li>Work independently as well as cooperatively with the social, development, and design teams to meet deadlines and ensure the timely submission of designs based on workload. </li>
                        </ul>
                        <h2 className='fw-bold'>Requirements</h2>
                        <ul>
                            <li>Liaising with the social team to determine client needs and conceptualizing visuals based on client requirements.</li>
                            <li>Plan and illustrate concepts by designing rough layouts regarding arrangement, size, type size, style, and related aesthetics. </li>
                            <li>Prepare rough layouts for review and obtain approval from managers to ensure that the design meets organization standards and client expectations. </li>
                            <li>Work independently as well as cooperatively with the social, development, and design teams to meet deadlines and ensure the timely submission of designs based on workload. </li>
                        </ul>
                    </div>

                    <div className='col-12 col-md-6   mt-5'>
                        <div className=' p-4 border shadow rounded'>

                            <form onSubmit={handleSubmit}>
                                <label htmlFor="" className='mb-2'>Name <span className='text-danger'>*</span></label>
                                <input type="text" className='w-100 login_input_height px-2 py-3 ' placeholder='name*' name='name' id='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                <small className='text-danger'>{errors.name && touched.name ? errors.name : null}</small>
                                <br />
                                <label htmlFor="" className='mb-2 mt-2'>Email <span className='text-danger'>*</span></label>
                                <input type="text" className='w-100 login_input_height px-2 py-3 ' placeholder='email*' name='email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                <small className='text-danger'>{errors.email && touched.email ? errors.email : null}</small>
                                <br />
                                <label htmlFor="" className='mb-2 mt-2'>Phone <span className='text-danger'>*</span></label>
                                <input type="text" className='w-100 login_input_height px-2 py-3 ' placeholder='phone*' name='phone' id='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                                <small className='text-danger'>{errors.phone && touched.phone ? errors.phone : null}</small>

                                <input type="file" className='mt-3' placeholder='phone*' name='resume' id='resume' value={values.resume} onChange={(event) =>
                                    setFieldValue("file", event.currentTarget.files[0])} onBlur={handleBlur} />
                                <small className='text-danger'>{errors.resume && touched.resume ? errors.resume : null}</small>
                                <br />




                            </form>

                            <button className='btn header_btn_color mt-4 shadow'>Submite</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApplyToJob
