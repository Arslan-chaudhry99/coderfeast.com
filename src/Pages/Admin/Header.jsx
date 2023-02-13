import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"

const Header = () => {
    return (
        <>
            <div className="container mb-5 mt-5">
                <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
                    <div class="container-fluid">
                        <a class="navbar-brand">Hello Fareed  👋</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                <li class="nav-item">
                                    <NavLink to="/admin-coder-feast/job-request">
                                        <span class="nav-link active" aria-current="page" >Jobs</span>
                                    </NavLink>
                                </li>




                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header