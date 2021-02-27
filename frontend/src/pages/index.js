import React from "react";
import { graphql } from "gatsby";

const Home = ({ data }) => {
    const { text: __html } = data.strapiHomePage;

    return <div dangerouslySetInnerHTML={{ __html }} />;
};

export default Home;

export const query = graphql`
    query HomePage {
        strapiHomePage {
            Title
            Subtitle
            text
        }
    }
`;
