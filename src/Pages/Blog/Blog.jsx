import React from "react";
import "./style.css";
import img from "./dell-4Ea0P4IsZ_4-unsplash.jpg";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
const Blog = () => {
 
  const blogDeatils = [{ name: "", title: "", image: "", review: "" }];
  return (
    <>
      <div class="container mt-5" style={{ minHeight: "90vh" }}>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <div>
                <img
                  src="https://res.cloudinary.com/dsbjgtmzz/image/upload/v1678534176/1598521366941redux_wzb4b0.jpg"
                  alt=""
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                />
                <div class="card-body">
                  <small>20 October 2020</small>
                  <h4>
                    <strong>What is Redux</strong>
                  </h4>
                  <p class="card-text">
                    Redux helps you write applications that behave consistently,
                    run in different environments and are easy to test.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        class="get_in_touch_btn btn-sm px-2 py-1 btn-outline-warning"
                        onClick={() => {
                          return alert("We are currently working on it.");
                        }}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
