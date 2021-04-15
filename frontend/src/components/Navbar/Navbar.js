import React from "react";
import { Link } from "gatsby";

import * as styles from "./styles.module.css";

const NavLink = (props) => {
    return (
        <Link
            {...props}
            className={styles.navLink}
            activeClassName={styles.activeNavLink}
        >
            {props.children}
        </Link>
    );
};

const Navbar = () => {
    return (
        <div className={styles.navContainer}>
            <nav role="navigation" className={`${styles.navbar}`}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mission">Mission</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;
