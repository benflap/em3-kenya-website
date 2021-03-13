import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
    const blogPosts = data.allStrapiBlog.edges;
    return (
        <Layout>
            {blogPosts.map(({ node: { published_at, title, id, slug } }) => {
                return (
                    <Link to={`/blog/${slug}`}>
                        <article key={id}>
                            <h2>{title}</h2>
                            <p>{published_at}</p>
                        </article>
                    </Link>
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
                    title
                    id
                    slug
                }
            }
        }
    }
`;
