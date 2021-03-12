import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const MissionPage = ({ data }) => {
    const { text: __html } = data.strapiMission;
    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html }} />
        </Layout>
    );
};

export default MissionPage;

export const query = graphql`
    query MyQuery {
        strapiMission {
            text
        }
    }
`;
