import React from "react";
import logo from "./logo.svg";
import "./style.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

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
                  <strong>QUICK LINKS</strong>
                </h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a class="p-0 text-white">
                      <NavLink to="/" style={{color:"white"}}>Home</NavLink>
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">
                      <NavLink to="/contact" style={{color:"white"}}>Contact</NavLink>
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">
                      <NavLink to="/contact" style={{color:"white"}}>Careers</NavLink>
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">
                      <NavLink to="/contact" style={{color:"white"}}>About</NavLink>
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">
                    <NavLink to="/blog" style={{color:"white"}}>Blog</NavLink>
                      
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md-2 mb-3 col-12 footer_items_alignment">
                <h5>
                  <strong>WEB SERVICES</strong>
                </h5>
                <ul class="nav flex-column mx-1">
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">
                    <NavLink to="/rube-service" style={{color:"white"}}>Ruby on Rails</NavLink>
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">
                    <NavLink to="/react-js-development" style={{color:"white"}}>React.JS</NavLink>
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">
                    <NavLink to="/dotnet-service" style={{color:"white"}}>.Net / Core</NavLink>
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">
                    <NavLink to="/django-dev" style={{color:"white"}}>Python</NavLink>
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">
                    <NavLink to="/node-js" style={{color:"white"}}>Node.JS</NavLink>
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">
                    <NavLink to="/laravel-serv" style={{color:"white"}}>Laravel</NavLink>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-6 col-md-2 mb-3 col-12 footer_items_alignment">
                <h5>
                  <strong>Mobile App SERVICES</strong>
                </h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a class="p-0 text-white">
                    <NavLink to="/IOS-service" style={{color:"white"}}>IOS</NavLink>
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">
                    <NavLink to="/andriod-service" style={{color:"white"}}>Android</NavLink>

                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">
                    <NavLink to="/native-service" style={{color:"white"}}>  React Native</NavLink>
                    
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">
                    <NavLink to="/flutter-service" style={{color:"white"}}>  Flutter</NavLink>
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">
                    <NavLink to="/Kotlin-service" style={{color:"white"}}>  Kotlin </NavLink>
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a class=" p-0 text-white">
                    <NavLink to="/Swift-service" style={{color:"white"}}>  Swift  </NavLink>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top footer_items_alignment">
              <p>© {year} Coderfeast. All Rights Reserved.</p>
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
