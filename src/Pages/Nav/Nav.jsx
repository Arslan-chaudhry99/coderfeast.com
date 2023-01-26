import React from 'react'
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
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Company</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Portfolio
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
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