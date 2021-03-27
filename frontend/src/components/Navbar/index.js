import React, { useState } from "react";
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
    const [isMenuOpen, setMenuState] = useState(false);
    return (
        <header className={styles.header}>
            <button
                onClick={() => {
                    isMenuOpen ? setMenuState(false) : setMenuState(true);
                }}
                className={`${styles.hamburger} ${
                    isMenuOpen ? styles.isActive : ""
                }`}
            >
                <span className={styles.hamburgerBox}>
                    <span className={styles.hamburgerInner} />
                </span>
            </button>
            <nav
                role="navigation"
                className={styles.navbar}
                style={isMenuOpen ? {} : { display: "none" }}
            >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mission">Mission</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
