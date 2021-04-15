import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostPreview = (props) => {
    const { publishedAt, title, slug, image, imageAlt } = props;
    const gatsbyImage = getImage(image);
    return (
        <article>
            <GatsbyImage image={gatsbyImage} alt={imageAlt} />
            <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{publishedAt}</p>
            </Link>
        </article>
    );
};

export default PostPreview;
