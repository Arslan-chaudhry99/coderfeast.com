import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "./logo.png"
import "./style.css"
const Nav = () => {
    return (
        <>
            <div class="navbar navbar-expand-lg bg-light shadow " >
                <div class="container-fluid container ">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="img" style={{ width: "170px" }} />
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse " id="navbarScroll" >
                        <form class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ">
                            <li class="nav-item">
                                <NavLink to="/">
                                    <a class="nav-link active" aria-current="page">Home</a>
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Company</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <NavLink to="/blog"><a class="dropdown-item" >Blog</a></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact"> <a class="dropdown-item" >Contact</a></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Careers"> <a class="dropdown-item" >Careers</a> </NavLink>

                                    </li>
                                    <li>
                                    <NavLink to="/about"> <a class="dropdown-item" >About</a></NavLink> 
                                    </li>


                                </ul>
                            </li>

                        </form>
                        <button className='btn btn-warning'>Get a Quote</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Nav