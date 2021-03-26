import React from "react";
import Navbar from "./Navbar";

const Layout = (obj) => {
    console.log(obj);
    return (
        <>
            <Navbar />
            <main>{obj.children}</main>
        </>
    );
};

export default Layout;
