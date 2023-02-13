import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Careers from "./Pages/Careers/Careers";
import About from "./Pages/About/About";
import Home from "./Pages/Main/Home";
import Share from "./Share.js";
import Staff from "./Pages/Web/staff augmentation/Staff";
import ApplyToJob from "./Pages/Careers/ApplyToJob";
import ReactPage from "./Pages/Web/Reactjs/ReactPage";
import Admin from "./Pages/Admin/Admin";
import JobRec from "./Pages/Admin/JobRec";
import Login from "./Pages/Admin/Login";
import "./Global.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return <>
    {/* <Nav /> */}
    {/* <About /> */}
    {/* <Careers /> */}

    {/* <Contact /> */}
    {/* <Footer /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Share />} >
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/react-js-development" element={<ReactPage />} />
          <Route path="/staff-augmentation" element={<Staff />} />
          <Route path="/apply-now" element={<ApplyToJob />} />

        </Route >
        <Route path="/admin-coder-feast" element={<Admin />} />
        <Route path="/admin-coder-feast/job-request" element={<JobRec />} />
        <Route path="/login-admin" element={<Login />} />
      </Routes>
    </BrowserRouter>


  </>
}

export default App;
