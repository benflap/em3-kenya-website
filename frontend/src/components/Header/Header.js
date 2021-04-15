import React from "react";
import styled from "styled-components";

import Hamburger from "../Hamburger";
import BrandIcon from "../BrandIcon";
import Navbar from "../Navbar";
import * as styles from "./styles.module.css";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <BrandIcon />
                <Hamburger />
            </Container>
            <Navbar />
        </header>
    );
};

export default Header;
