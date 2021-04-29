import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import * as styles from "./styles.module.css";

const ProjectPage = ({ data }) => {
    const { project_name, description, title_image } = data.strapiProject;
    const imageData = title_image.localFile.childImageSharp.gatsbyImageData;

    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>{project_name}</h1>
                <GatsbyImage
                    image={imageData}
                    alt={title_image.alternativeText}
                    className={styles.titleImage}
                />
                <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </Layout>
    );
};

export default ProjectPage;

export const query = graphql`
    query($id: String!) {
        strapiProject(id: { eq: $id }) {
            project_name
            description
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
`;
