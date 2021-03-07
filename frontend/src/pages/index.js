import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Home = ({ data }) => {
    const { text: __html, Title, Subtitle } = data.strapiHomePage;

    return (
        <Layout>
            <h1>{Title}</h1>
            <h3 className="subtitle">{Subtitle}</h3>
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
