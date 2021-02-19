import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Home = ({
    data: {
        ghostPage: { html: __html },
    },
}) => (
    <Layout pages={[{ path: "/", name: "Home" }]}>
        <div dangerouslySetInnerHTML={{ __html }} />
    </Layout>
);

export default Home;

export const query = graphql`
    query {
        ghostPage(title: { eq: "Home" }) {
            html
        }
    }
`;
