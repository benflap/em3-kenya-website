import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <nav role="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/mission">Mission</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
            </header>
            {children}
        </>
    );
};

export default Layout;
