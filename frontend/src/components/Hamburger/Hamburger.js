import React, { useState, useEffect } from "react";

import styles from "./styles.module.css";

const Hamburger = () => {
    const [isMenuOpen, setMenuState] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("no-scroll");
            document.querySelector("header").classList.add("mobileMenuIsOpen");
        } else {
            document.body.classList.remove("no-scroll");
            document
                .querySelector("header")
                .classList.remove("mobileMenuIsOpen");
        }
    });

    return (
        <button
            onClick={() => {
                setMenuState((isMenuOpen) => !isMenuOpen);
            }}
            className={`${styles.hamburger} ${styles.hideHamburger} ${
                isMenuOpen ? styles.isActive : ""
            }`}
        >
            <span className={styles.hamburgerBox}>
                <span className={styles.hamburgerInner} />
            </span>
        </button>
    );
};

export default Hamburger;
