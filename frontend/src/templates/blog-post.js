import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPost = ({ data }) => {
    const post = data.strapiBlog;
    return (
        <Layout>
            <div>
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.text }} />
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
        }
    }
`;
