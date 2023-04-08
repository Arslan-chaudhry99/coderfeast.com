import React from "react";
import "./style.css";
import { useFormik } from "formik";
import { contactSchm } from "../schemas/ContactSchm";
import swal from "sweetalert";
import axios from "axios";
import { useEffect } from "react";
const initialValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};
const Contact = () => {

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactSchm,
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
  console.log(errors);
  return (
    <>
      <section className="container mb-5 mt-5">
        <h2 className="m-0">Get in touch with us</h2>
        <p className="mb-5 mt-3">
          Let’s work together to bring your ideas to life and launch your next
          successful project. Request a quote.
        </p>
        <div class="">
          <form onSubmit={handleSubmit}>
            <div className="d-inline  position-relative">
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="aboutus_input_filed aboutus_input_filed_input bg-white text-dark rounded global_input_border"
                placeholder="First Name*"
                style={
                  errors.name && touched.name
                    ? { backgroundColor: "red" }
                    : null
                }
              />
              <small
                className="position-absolute text-danger"
                style={{ top: "0", left: "0", marginTop: "-40px" }}
              >
                {errors.name && touched.name ? errors.name : null}
              </small>
            </div>
            <input
              type="text"
              class="aboutus_input_filed aboutus_input_filed_input bg-white text-dark rounded global_input_border"
              placeholder="Last Name(opt)"
              style={{ color: "white" }}
            />
            <div className="d-inline  position-relative">
              <input
                type="text"
                name="phone"
                id="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className="aboutus_input_filed aboutus_input_filed_input bg-white text-dark rounded global_input_border"
                placeholder="Phone*"
              />
              <small
                className="position-absolute text-danger"
                style={{ top: "0", left: "0", marginTop: "-40px" }}
              >
                {errors.phone && touched.phone ? errors.phone : null}
              </small>
            </div>
            <div className="d-inline  position-relative">
              <input
                type="text"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="aboutus_input_filed aboutus_input_filed_input bg-white text-dark rounded global_input_border"
                placeholder="Email*"
              />
              <small
                className="position-absolute text-danger"
                style={{ top: "0", left: "0", marginTop: "-40px" }}
              >
                {errors.email && touched.email ? errors.email : null}
              </small>
            </div>
            <div className="d-flex flex-column">
              <small className="text-danger">
                {errors.message && touched.message ? errors.message : null}
              </small>
              <textarea
                name="message"
                id="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="aboutus_input_filed aboutus_input_filed_textarea bg-white text-dark rounded global_input_border"
                placeholder="Message...."
              ></textarea>
            </div>
            <br />
            <button className="get_in_touch_btn px-2 py-1 shadow" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
      <section
        className="container "
        style={{ marginBottom: "110px", marginTop: "110px" }}
      >
        <div className="contactus_social_primary_section">
          <h2 className="text-white mb-3">
            Unlock The Full Potential of{" "}
            <strong className="green_color">Social Media.</strong>{" "}
          </h2>
          <p className="text-white mb-0">
            Follow us to get the latest updates on all things Blockchain!
          </p>
          <div className="d-flex mt-sm-5 contactus_social_primary_section_icons_align">
            <div className="contact_social_link text-black">
              <i class="bi bi-facebook "></i>
            </div>
            <div className="contact_social_link text-black">
              <i class="bi bi-linkedin "></i>
            </div>
            <div className="contact_social_link text-black">
              <i class="bi bi-twitter "></i>
            </div>
            <div className="contact_social_link text-black">
              <i class="bi bi-instagram "></i>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ marginBottom: "95px" }}>
        <div class="row">
          <div class="col-sm-4 mb-3 ">
            <div class="card contactsus_cards_shadows">
              <div class="contactus_info_cards">
                <div className=" d-flex justify-content-center align-items-center">
                  <i class="bi bi-geo-alt-fill contact_us_icons_size"></i>
                </div>
                <div>
                  <h6>
                    <strong className="text-dark  d-flex justify-content-center align-items-center">
                      USA
                    </strong>
                  </h6>
                </div>
                <p className="text-center">
                  1740 Innovation Dr. Suite # 210 Carbondale, IL. 62903. USA.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-3">
            <div class="card">
              <div class="contactus_info_cards contactsus_cards_shadows">
                <div className=" d-flex justify-content-center align-items-center">
                  <i class="bi bi-geo-alt-fill contact_us_icons_size"></i>
                </div>
                <div>
                  <h6>
                    <strong className="text-dark  d-flex justify-content-center align-items-center">
                      USA
                    </strong>
                  </h6>
                </div>
                <p className="text-center">
                  69 Summers Dr Thorold, L2V5B1 Ontario{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-3">
            <div class="card">
              <div class="contactus_info_cards contactsus_cards_shadows">
                <div className=" d-flex justify-content-center align-items-center">
                  <i class="bi bi-person-rolodex contact_us_icons_size"></i>
                </div>
                <div>
                  <h6>
                    <strong className="text-dark  d-flex justify-content-center align-items-center">
                      Contact{" "}
                    </strong>
                  </h6>
                </div>
                <p className="text-center mb-0">info@coderfeast.com</p>
                <p className="text-center">+1 8722824555</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
