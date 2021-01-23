import React from "react";
import { graphql } from "gatsby";

const Home = ({ data }) => (
    <div>
        <h1>Hello world</h1>
        {data.allStrapiRestaurant.edges.map(({ node }) => (
            <div key={node.strapiId}>
                <img
                    src={`http://localhost:1337${node.cover.url}`}
                    alt=""
                    style={{ maxWidth: "50%" }}
                />

                <h2 style={{ marginTop: 0 }}>{node.name}</h2>
            </div>
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
                    cover {
                        url
                    }
                }
            }
        }
    }
`;
