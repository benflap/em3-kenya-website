import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ProjectsPage = ({ data }) => {
    const projects = data.allStrapiProject.edges;
    return (
        <Layout>
            {projects.map(({ node: { project_name, id } }) => {
                return (
                    <div key={id}>
                        <h2>{project_name}</h2>
                    </div>
                );
            })}
        </Layout>
    );
};

export default ProjectsPage;

export const query = graphql`
    {
        allStrapiProject {
            edges {
                node {
                    date
                    project_name
                    id
                }
            }
        }
    }
`;
