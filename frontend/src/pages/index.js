import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Home = ({ data }) => {
    const { text: __html } = data.strapiHomePage;

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html }} />
        </Layout>
    );
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
