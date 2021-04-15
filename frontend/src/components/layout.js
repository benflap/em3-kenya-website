import React from "react";
import Header from "./Header";

const Layout = (obj) => {
    console.log(obj);
    return (
        <>
            <Header />
            <main>{obj.children}</main>
        </>
    );
};

export default Layout;
