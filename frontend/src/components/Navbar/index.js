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
        <header
            className={`${styles.header} ${isMenuOpen ? styles.isActive : ""}`}
        >
            <div className={styles.mobileBackground}>
                <button
                    onClick={() => {
                        isMenuOpen ? setMenuState(false) : setMenuState(true);
                    }}
                    className={`${styles.hamburger} ${styles.hideHamburger} `}
                >
                    <span className={styles.hamburgerBox}>
                        <span className={styles.hamburgerInner} />
                    </span>
                </button>
                <div className={styles.navContainer}>
                    <nav
                        role="navigation"
                        className={`${styles.navbar} ${
                            isMenuOpen ? "" : styles.hideNav
                        }`}
                    >
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/mission">Mission</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
