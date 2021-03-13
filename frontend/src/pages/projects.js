import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const ProjectsPage = ({ data }) => {
    const projects = data.allStrapiProject.edges;
    return (
        <Layout>
            {projects.map(({ node: { project_name, id, slug } }) => {
                return (
                    <Link to={`/project/${slug}`}>
                        <div key={id}>
                            <h2>{project_name}</h2>
                        </div>
                    </Link>
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
                    project_name
                    id
                    slug
                }
            }
        }
    }
`;
