import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Careers from "./Pages/Careers/Careers";
import About from "./Pages/About/About";
import Home from "./Pages/Main/Home";
import Share from "./Share.js";
import ReactPage from "./Pages/Web/Reactjs/ReactPage";
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
        </Route >
      </Routes>
    </BrowserRouter>


  </>
}

export default App;
