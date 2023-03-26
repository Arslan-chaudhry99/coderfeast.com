import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./style.css";
const Nav = () => {
  return (
    <>
      <div class="navbar navbar-expand-lg bg-light shadow border">
        <div class="container-fluid container ">
          <a class="navbar-brand" href="#">
            <NavLink to="/">
              <img src={logo} alt="img" style={{ width: "170px" }} />
            </NavLink>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse " id="navbarScroll">
            <form class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ">
              <li class="nav-item">
                <NavLink to="/">
                  <a class="nav-link active" aria-current="page">
                    Home
                  </a>
                </NavLink>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Service
                </a>
                <div class="dropdown-menu services_page_width">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-4 col-sm-12 ">
                        <ul className="text-center mt-3">
                          <strong className="mb-0">WEB DEVELOPMENT</strong>
                          <div className="mt-3">
                            <NavLink to="/rube-service">
                              <a class="nav-link " aria-current="page">
                                <li className="mt-1">Ruby on Rails</li>
                              </a>
                            </NavLink>
                            <NavLink to="/node-js">
                              <a class="nav-link " aria-current="page">
                                <li className="mt-1">Node.Js</li>
                              </a>
                            </NavLink>
                            <NavLink to="/react-js-development">
                              <a class="nav-link " aria-current="page">
                                <li className="mt-1">React.Js</li>
                              </a>
                            </NavLink>
                            {/* <NavLink to="/admin-coder-feast">
                                                            <li className='mt-1'>
                                                                admin
                                                            </li>
                                                        </NavLink> */}
                            <NavLink to="/dotnet-service">
                              <a class="nav-link " aria-current="page">
                                <li className="mt-1">.Net / Core</li>
                              </a>
                            </NavLink>

                            <NavLink to="/laravel-serv">
                              <a class="nav-link " aria-current="page">
                                <li className="mt-1">Laravel</li>
                              </a>
                            </NavLink>
                            <NavLink to="/django-dev">
                              <a class="nav-link " aria-current="page">
                                <li className="mt-1">Python</li>
                              </a>
                            </NavLink>
                          </div>
                        </ul>
                      </div>
                      <div class="col-md-4 col-sm-12 ">
                        <ul className="text-center mt-3">
                          <strong className="mb-0">App Development</strong>
                          <div className="mt-3">
                            <NavLink to="/IOS-service">
                              <a class="nav-link " aria-current="page">
                                <li className="mt-1">IOS</li>
                              </a>
                            </NavLink>
                            <NavLink to="/andriod-service">
                              <a class="nav-link " aria-current="page">
                                <li className="mt-1">Android</li>
                              </a>
                            </NavLink>
                            <NavLink to="/native-service">
                              <a class="nav-link " aria-current="page">
                                <li className="mt-1">React Native</li>
                              </a>
                            </NavLink>
                            <NavLink to="/flutter-service">
                              <a class="nav-link " aria-current="page">
                                <li className="mt-1">Flutter</li>
                              </a>
                            </NavLink>
                            <NavLink to="/Kotlin-service">
                              <a class="nav-link " aria-current="page">
                                <li className="mt-1">Kotlin</li>
                              </a>
                            </NavLink>
                            <NavLink to="/Swift-service">
                              <a class="nav-link " aria-current="page">
                                <li className="mt-1">Swift</li>
                              </a>
                            </NavLink>
                          </div>
                        </ul>
                      </div>
                      <div class="col-md-4 col-sm-12 ">
                        <ul className="text-center mt-3">
                          <strong className="mb-0">STAFF AUGMENTATION</strong>
                          <div className="mt-3">
                            <li class="nav-item">
                              <NavLink to="/staff-augmentation">
                                <a class="nav-link " aria-current="page">
                                  Staff Augmentation
                                </a>
                              </NavLink>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <NavLink to="/blog">
                      <a class="dropdown-item">Blog</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">
                      {" "}
                      <a class="dropdown-item">Contact</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Careers">
                      {" "}
                      <a class="dropdown-item">Careers</a>{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">
                      {" "}
                      <a class="dropdown-item">About</a>
                    </NavLink>
                  </li>
                </ul>
              </li>
            </form>
            <button className="btn header_btn_color" >
            <NavLink to="/contact" style={{color:"white"}}>
            Get a Quote
            </NavLink>
              
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
