import React from "react";
import { graphql } from "gatsby";

const Home = ({
    data: {
        ghostPage: { html: __html },
    },
}) => <div dangerouslySetInnerHTML={{ __html }} />;

export default Home;

export const query = graphql`
    query {
        ghostPage(title: { eq: "Home" }) {
            html
        }
    }
`;
