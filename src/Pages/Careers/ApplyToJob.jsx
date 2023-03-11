import React from "react";
import { useFormik } from "formik";
import { applySchema } from "../schemas/Job";
import swal from "sweetalert";
import axios from "axios";
const initialValues = {
  name: "",
  phone: "",
  email: "",
  file: "",
};
const ApplyToJob = () => {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    setFieldValue,
  } = useFormik({
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
          },
        });

        action.resetForm();
      } catch (error) {
        await swal({
          title: `Error ${error.response.status}`,
          text: error.message,
          icon: "error",
          button: {
            text: "ok",
          },
        });
      }
    },
  });

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
                The React. js framework is an open-source JavaScript framework
                and library developed by Facebook. It's used for building
                interactive user interfaces and web applications quickly and
                efficiently with significantly less code than you would with
                vanilla JavaScript.
              </p>
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
      <div className="container ">
        <div className="row global_margin_top global_margin_buttom ">
          <div className="col-12 col-md-6   p-4 job_description">
            <h2 className="fw-bold">Job Brief</h2>
            <p>
              We are seeking a skilled React Developer to join our team and help
              us build amazing web applications using the latest web
              technologies. As a React Developer, you will be responsible for
              creating user-friendly interfaces, ensuring cross-browser
              compatibility, and optimizing web applications for maximum speed
              and scalability.
            </p>
            <h2 className="fw-bold">Responsibilities</h2>

            <ul>
              <li>
                Build high-quality, responsive, and interactive web applications
                using ReactJS
              </li>
              <li>
                Collaborate with team members to develop and implement new
                features
              </li>
              <li>Write clean, maintainable, and efficient code</li>
              <li>
                Troubleshoot and debug applications to ensure optimal
                performance
              </li>
              <li>Ensure the technical feasibility of UI/UX designs</li>
              <li>
                Optimize web applications for maximum speed and scalability
              </li>
              <li>
                Stay up-to-date with emerging web technologies and industry
                trends
              </li>
            </ul>
            <h2 className="fw-bold">Requirements</h2>
            <ul>
              <li>Strong proficiency in ReactJS and its core principles</li>
              <li>
                Experience with popular ReactJS workflows such as Redux, Flux,
                or MobX
              </li>
              <li>Experience with HTML, CSS, and JavaScript</li>
              <li>
                Knowledge of web development tools such as Babel, Webpack, and
                NPM
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6   mt-5">
            <div className=" p-4 border shadow rounded">
              <form onSubmit={handleSubmit}>
                <label htmlFor="" className="mb-2">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="w-100 login_input_height px-2 py-3 "
                  placeholder="name*"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <small className="text-danger">
                  {errors.name && touched.name ? errors.name : null}
                </small>
                <br />
                <label htmlFor="" className="mb-2 mt-2">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="w-100 login_input_height px-2 py-3 "
                  placeholder="email*"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <small className="text-danger">
                  {errors.email && touched.email ? errors.email : null}
                </small>
                <br />
                <label htmlFor="" className="mb-2 mt-2">
                  Phone <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="w-100 login_input_height px-2 py-3 "
                  placeholder="phone*"
                  name="phone"
                  id="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <small className="text-danger">
                  {errors.phone && touched.phone ? errors.phone : null}
                </small>

                <input
                  type="file"
                  className="mt-3"
                  placeholder="phone*"
                  name="resume"
                  id="resume"
                  value={values.resume}
                  onChange={(event) =>
                    setFieldValue("file", event.currentTarget.files[0])
                  }
                  onBlur={handleBlur}
                />
                <small className="text-danger">
                  {errors.resume && touched.resume ? errors.resume : null}
                </small>
                <br />
              </form>

              <button className="btn header_btn_color mt-4 shadow">
                Submite
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyToJob;
