import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import icon from "../../images/brand-icon.png";

const Logo = styled.span`
    display: inline-block;
    height: 64px;
    width: 64px;
    background-image: url(${icon});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 768px) {
        height: 48px;
        width: 48px;
    }
`;

const BrandIcon = () => {
    return (
        <Link to="/" style={{ lineHeight: 0 }}>
            <Logo />
        </Link>
    );
};

export default BrandIcon;
