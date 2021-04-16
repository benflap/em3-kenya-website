import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import dateformat from "dateformat";

import Layout from "../../components/layout";
import * as styles from "./styles.module.css";

const BlogPost = ({ data }) => {
    const { title, text, title_image, published_at } = data.strapiBlog;
    const imageData = title_image.localFile.childImageSharp.gatsbyImageData;

    const publishDateFormated = dateformat(published_at, "mmmm d, yyyy");

    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <h5 className={styles.date}>{publishDateFormated}</h5>
                <GatsbyImage
                    image={imageData}
                    alt={title_image.alternativeText}
                    className={styles.titleImage}
                />
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </Layout>
    );
};

export default BlogPost;

export const query = graphql`
    query($id: String!) {
        strapiBlog(id: { eq: $id }) {
            text
            title
            published_at
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
