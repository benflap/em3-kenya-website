import React from "react";
import { graphql } from "gatsby";

const Home = ({ data }) => (
    <div>
        <h1>Hello world</h1>
        {data.allStrapiRestaurant.edges.map(({ node }) => (
            <h2 key={node.strapiId}>{node.name}</h2>
        ))}
    </div>
);

export default Home;

export const query = graphql`
    query MyQuery {
        allStrapiRestaurant {
            edges {
                node {
                    name
                    stars
                    strapiId
                    slug
                    category {
                        id
                        name
                    }
                }
            }
        }
    }
`;
