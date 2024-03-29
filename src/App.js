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
import NodeJS from "./Pages/Web/NodeJS/NodeJS"
import Laravelcomp from "./Pages/Web/Laravel/Laravelcomp"
import Djangocom from "./Pages/Web/Python/Djangocom"
import Rubecom from "./Pages/Web/Rube/Rubecom";
import Signup from "./Pages/Admin/Signup";
import Dotnet from "./Pages/Web/DotNet/Dotnet";
import IosComp from "./Pages/Web/IOS/IosComp";
import AndriodComp from "./Pages/Web/Andriod/AndriodComp";
import NativeComp from "./Pages/Web/Native/NativeComp";
import Flutter from "./Pages/Web/Flutter/Flutter";
import Kotlin from "./Pages/Web/Kotlin/KotlinComp";
import Swift from "./Pages/Web/Swift/Swift";
import { HashRouter } from "react-router-dom";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Scrollup";
function App() {

  return <>

    <HashRouter>
      <ScrollToTop />
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
          <Route path="/node-js" element={<NodeJS />} />
          <Route path="/laravel-serv" element={<Laravelcomp />} />
          <Route path="/django-dev" element={<Djangocom />} />
          <Route path="/rube-service" element={<Rubecom />} />
          <Route path="/dotnet-service" element={<Dotnet />} />
          <Route path="/IOS-service" element={<IosComp />} />
          <Route path="/andriod-service" element={<AndriodComp />} />
          <Route path="/native-service" element={<NativeComp />} />
          <Route path="/flutter-service" element={<Flutter />} />
          <Route path="/Kotlin-service" element={<Kotlin />} />
          <Route path="/Swift-service" element={<Swift />} />
        </Route >
        <Route path="/admin-coder-feast" element={<Admin />} />
        <Route path="/admin-coder-feast/job-request" element={<JobRec />} />
        <Route path="/login-admin" element={<Login />} />
        <Route path="/addNew-user" element={<Signup />} />
      </Routes>
    </HashRouter>


  </>
}

export default App;
