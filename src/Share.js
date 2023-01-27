import { Outlet } from "react-router";

import Nav from "./Pages/Nav/Nav";
import Footer from "./Pages/Footer/Footer";
const Share = () => {
    return<>
        <Nav />
        <Outlet />
        <Footer />

    </>

}

export default Share