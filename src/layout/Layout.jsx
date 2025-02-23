import React from 'react';
import Navbar from "./Navbar"
import Home from "./Home"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;