import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import PostPreview from "../components/PostPreview";

const BlogPage = ({ data }) => {
    const blogPosts = data.allStrapiBlog.edges;
    return (
        <Layout>
            <GridContainer>
                {blogPosts.length > 0 &&
                    blogPosts.map(
                        ({
                            node: {
                                published_at,
                                title,
                                id,
                                slug,
                                title_image,
                            },
                        }) => {
                            return (
                                <PostPreview
                                    key={id}
                                    publishedAt={published_at}
                                    title={title}
                                    slug={slug}
                                    image={title_image.localFile}
                                    imageAlt={title_image.caption}
                                />
                            );
                        }
                    )}
                {blogPosts.length === 0 && <h2>Nothing Here Yet</h2>}
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

export default BlogPage;

export const query = graphql`
    {
        allStrapiBlog {
            edges {
                node {
                    published_at
                    title
                    id
                    slug
                    title_image {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    aspectRatio: 1.78
                                    formats: [WEBP, JPG]
                                )
                            }
                        }
                        caption
                    }
                }
            }
        }
    }
`;
