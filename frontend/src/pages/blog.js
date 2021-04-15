import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import PostPreview from "../components/PostPreview";

const BlogPage = ({ data }) => {
    const blogPosts = data.allStrapiBlog.edges;
    return (
        <Layout>
            {blogPosts.map(
                ({ node: { published_at, title, id, slug, title_image } }) => {
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
        </Layout>
    );
};

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
