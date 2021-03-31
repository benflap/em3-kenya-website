import React from "react";
import { Link } from "gatsby";

import Hamburger from "../Hamburger";
import BrandIcon from "../BrandIcon";
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
        <header className={styles.header}>
            <Hamburger />
            <BrandIcon />
            <div className={styles.navContainer}>
                <nav role="navigation" className={`${styles.navbar}`}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/mission">Mission</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </nav>
            </div>
            {/* </div> */}
        </header>
    );
};

export default Navbar;
