import React from 'react'

const admin = () => {
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
                                    <a class="nav-link active" aria-current="page" >Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" >Jobs</a>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="mx-4">New Contact</h2>
                    <div className='mx-4 contact_noticefaction bg-danger'>
                        1
                    </div>
                </div>
                <div className="admin_contactus_new_notice_container card shadow p-4">
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start mb-3 shadow">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Subheading</div>
                                Hello There! How are you?.....
                                <strong data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Read More!</strong>
                                <div className="collapse" id="collapseExample">
                                    <p className='mb-0'><strong>Name: </strong>Arslan chaudhry</p>
                                    <p className='mb-0'><strong>Phone: </strong>+92 3415403790</p>
                                    <p className='mb-0'><strong>Email:</strong> arslanchaudhry90@gmail.com</p>
                                    <p className='mb-0'><strong>Message: </strong>
                                        <br />
                                        We have a team of enthusiastic professionals with years of experience in design, product development, marketing, technology and community building to set your business up for success.
                                    </p>

                                </div>
                            </div>
                            <span class="badge bg-primary rounded-pill">1</span>

                        </li>

                    </ol>

                </div>
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <h2 className="mx-4">Old Contact</h2>

                </div>
                <div className="admin_contactus_new_notice_container card shadow p-4">
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start mb-3 shadow">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Subheading</div>
                                Hello There! How are you?.....
                                <strong data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">Read More!</strong>
                                <div className="collapse" id="collapseExample1">
                                    <p className='mb-0'><strong>Name: </strong>Arslan chaudhry</p>
                                    <p className='mb-0'><strong>Phone: </strong>+92 3415403790</p>
                                    <p className='mb-0'><strong>Email:</strong> arslanchaudhry90@gmail.com</p>
                                    <p className='mb-0'><strong>Message: </strong>
                                        <br />
                                        We have a team of enthusiastic professionals with years of experience in design, product development, marketing, technology and community building to set your business up for success.
                                    </p>

                                </div>
                            </div>

                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start mb-3 shadow">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Subheading</div>
                                Hello There! How are you?.....
                                <strong data-bs-toggle="collapse" data-bs-target={`#collapseExample2`} aria-expanded="false" aria-controls="collapseExample">Read More!</strong>
                                <div className="collapse" id={`collapseExample2`}>
                                    <p className='mb-0'><strong>Name: </strong>Arslan chaudhry</p>
                                    <p className='mb-0'><strong>Phone: </strong>+92 3415403790</p>
                                    <p className='mb-0'><strong>Email:</strong> arslanchaudhry90@gmail.com</p>
                                    <p className='mb-0'><strong>Message: </strong>
                                        <br />
                                        We have a team of enthusiastic professionals with years of experience in design, product development, marketing, technology and community building to set your business up for success.
                                    </p>

                                </div>
                            </div>

                        </li>

                    </ol>

                    
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </>

    )
}

export default admin