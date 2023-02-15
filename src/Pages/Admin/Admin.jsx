import React from 'react'
import { useEffect, useState } from 'react'
import Header from './Header'
import "./style.css"
import axios from 'axios'
const Admin = () => {
    const [contactData, setcontactData] = useState([]);
    const [state, setstate] = useState({

    });
    const getContactData = async () => {
        const data = await axios.get("/getcontact");
        if (data.data) {
            setcontactData(data.data)
        }


    }
    useEffect(() => {
        getContactData()
    }, [])

    const updateNotification = async (e) => {

        const data = await axios.post("/updateNotification", { _id: e });
    }

    //set up the contact query
    const setContactQuery = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })


    }
    // setContactQUERY
    const setContactQUERY = async (e) => {
        e.preventDefault()
        const data = await axios.post("/contactQuery", state)
    }
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="mx-4">Notification</h2>
                    {/* <div className='mx-4 contact_noticefaction bg-danger'>
                        1
                    </div> */}
                </div>
                <div className="admin_contactus_new_notice_container card shadow p-4">
                    <ol class="list-group list-group-numbered">
                        {
                            contactData.length !== 0 ?
                                contactData.map((value, index) => {

                                    return (
                                        <>

                                            <li class="list-group-item d-flex justify-content-between align-items-start mb-3 shadow">
                                                <div class="ms-2 me-auto">
                                                    <div class="fw-bold">{value.name}</div>
                                                    Hello There! How are you?.....
                                                    <strong data-bs-toggle="collapse" data-bs-target={"#collapseExample" + index} aria-expanded="false" aria-controls="collapseExample" onClick={() => { updateNotification(value._id) }}>Read More!</strong>
                                                    <div className="collapse" id={"collapseExample" + index}>
                                                        <p className='mb-0'><strong>Name: </strong>{value.name}</p>
                                                        <p className='mb-0'><strong>Phone: </strong>{value.phone}</p>
                                                        <p className='mb-0'><strong>Email:</strong> {value.email}</p>
                                                        <p className='mb-0'><strong>Message: </strong>
                                                            <br />
                                                            {value.message}
                                                        </p>
                                                    </div>
                                                </div>
                                                {
                                                    value.readingStatus === true ? <span class=" bg-primary rounded-pill noticeIcon shadow"></span> : null
                                                }


                                            </li>
                                        </>
                                    )
                                }) : <div className="">
                                    <strong>Not available</strong>
                                </div>
                        }


                    </ol>

                </div>
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <h2 className="mx-4">Old Contact</h2>

                </div>
                <div className="admin_contactus_new_notice_container card shadow p-4">
                    <div className="mb-4 ">
                        <form>
                            <input type="text" className='mb-3 col-12 col-md-3 mx-2 px-3' placeholder='Please Enter the name' name='name' onChange={setContactQuery} />
                            <input type="text" className='mb-3 col-12 col-md-3 mx-2 px-3' placeholder='Enter phone number' name='phone' onChange={setContactQuery} />
                            <input type="text" className='mb-3 col-12 col-md-3 mx-2 px-3' placeholder='Enter  email' name='email' onChange={setContactQuery} />
                            <button className=' btn btn-sm btn-success ' onClick={setContactQUERY} >Search</button>
                        </form>
                    </div>
                    <div className="mb-4  search-admin_contacts">
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



                        </ol>
                    </div>
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

export default Admin