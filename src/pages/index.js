import React from "react";
import { graphql } from "gatsby";

const Home = ({ data }) => {
    const { html: __html } = data.strapiHomePage.fields;

    return <div dangerouslySetInnerHTML={{ __html }} />;
};

export default Home;

export const query = graphql`
    query MyQuery {
        strapiHomePage {
            fields {
                html
            }
        }
    }
`;
