// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import StickyNavbar from "../Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;