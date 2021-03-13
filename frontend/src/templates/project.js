import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ProjectPage = ({ data }) => {
    const { date, project_name: projectName, description } = data.strapiProject;
    return (
        <Layout>
            <div>
                <h1>{projectName}</h1>
                <p>{date}</p>
                <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </Layout>
    );
};

export default ProjectPage;

export const query = graphql`
    query($id: String!) {
        strapiProject(id: { eq: $id }) {
            date
            project_name
            description
        }
    }
`;
