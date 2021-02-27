import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Layout = ({ children, pages }) => {
    console.log(pages);
    return (
        <main>
            <header>
                <nav role="navigation">
                    {pages.map((page, i) => (
                        <Link to={page.path} key={i}>
                            {page.name}
                        </Link>
                    ))}
                </nav>
            </header>
            {children}
        </main>
    );
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
