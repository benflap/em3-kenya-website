import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Home = ({ data }) => {
    const { text: __html, title, subtitle } = data.strapiHomePage;

    return (
        <Layout>
            <h1>{title}</h1>
            <h3 className="subtitle">{subtitle}</h3>
            <div dangerouslySetInnerHTML={{ __html }} />
        </Layout>
    );
};

export default Home;

export const query = graphql`
    query HomePage {
        strapiHomePage {
            title
            subtitle
            text
        }
    }
`;
