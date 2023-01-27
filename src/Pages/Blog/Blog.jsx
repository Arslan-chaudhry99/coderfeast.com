import React from 'react'
import "./style.css"
import img from "./dell-4Ea0P4IsZ_4-unsplash.jpg"
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
const Blog = () => {
    return (
        <>
            <div class="container mt-5" style={{ minHeight: "90vh" }}>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col">
                        <div class="card shadow-sm">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                            <div class="card-body">
                                <small>20 October 2020</small>
                                <h4><strong>What is Redux</strong></h4>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-warning">Read More</button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>





    )
}

export default Blog