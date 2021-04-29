import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import ProjectPreview from "../components/ProjectPreview";

const ProjectsPage = ({ data }) => {
    const projects = data.allStrapiProject.edges;
    return (
        <Layout>
            <GridContainer>
                {projects.map(
                    ({ node: { project_name, id, slug, title_image } }) => {
                        return (
                            <ProjectPreview
                                key={id}
                                title={project_name}
                                slug={slug}
                                image={title_image.localFile}
                                imageAlt={title_image.alternativeText}
                            />
                        );
                    }
                )}
            </GridContainer>
        </Layout>
    );
};

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1rem;
    margin: 2rem;
    @media screen and (max-width: 756px) {
        margin: 1rem;
        grid-template-columns: 1fr;
    }
`;

export default ProjectsPage;

export const query = graphql`
    {
        allStrapiProject {
            edges {
                node {
                    project_name
                    id
                    slug
                    title_image {
                        alternativeText
                        localFile {
                            childImageSharp {
                                gatsbyImageData(aspectRatio: 1.78)
                            }
                        }
                    }
                }
            }
        }
    }
`;
