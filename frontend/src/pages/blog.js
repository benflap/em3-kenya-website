import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
    const blogPosts = data.allStrapiBlog.edges;
    return (
        <Layout>
            {blogPosts.map(({ node: { published_at, Title, id } }) => {
                return (
                    <article key={id}>
                        <h2>{Title}</h2>
                        <p>{published_at}</p>
                    </article>
                );
            })}
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
                    Title
                    id
                }
            }
        }
    }
`;
