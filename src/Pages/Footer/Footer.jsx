import React from "react";
import logo from "./logo.svg";
import "./style.css";
const Footer = () => {
  return (
    <>
      <div className="footer-img mb-0 text-white footer_heights">
        <div class="container ">
          <footer class="py-5 pb-0">
            <div class="row ">
              <div class="col-md-5  mb-3 footer_items_alignment ">
                <img
                  src={logo}
                  alt="logo"
                  className="footer_logo_size mb-3 text-center"
                />
                <p>
                  At Coderfeast, you can digitally transform your business with
                  our top-notch solutions. We offer blockchain development
                  solutions to reinvent.
                </p>
              </div>
              <div class="col-6 col-md-2 mb-3 col-12 footer_items_alignment">
                <h5>
                  <strong>OUR SERVICES</strong>
                </h5>
                <ul class="nav flex-column mx-1">
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">Web Development</a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">Staff Augmentation</a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">Digital Marketing</a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">Web Development</a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">UI / UX Design</a>
                  </li>
                </ul>
              </div>

              <div class="col-6 col-md-2 mb-3 col-12 footer_items_alignment">
                <h5>
                  <strong>QUICK LINKS</strong>
                </h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a class="p-0 text-white">Home</a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">Features</a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">Pricing</a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">FAQs</a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">About</a>
                  </li>
                </ul>
              </div>

              <div class="col-6 col-md-2 mb-3 col-12 footer_items_alignment">
                <h5>
                  <strong>QUICK LINKS</strong>
                </h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a class="p-0 text-white">Home</a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">Features</a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">Pricing</a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">FAQs</a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">About</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top footer_items_alignment">
              <p>© 2022 Company, Inc. All rights reserved.</p>
              <ul class="list-unstyled d-flex">
                <li class="ms-3">
                  <a class="link-dark">
                    <i class="bi bi-instagram text-white"></i>
                  </a>
                </li>
                <li class="ms-3">
                  <a class="link-dark">
                    <i class="bi bi-linkedin text-white"></i>
                  </a>
                </li>
                <li class="ms-3">
                  <a class="link-dark">
                    <i class="bi bi-facebook text-white"></i>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
