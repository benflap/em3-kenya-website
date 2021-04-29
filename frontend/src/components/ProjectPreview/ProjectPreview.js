import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "./styles.module.css";

const PostPreview = (props) => {
    const { title, slug, image, imageAlt } = props;
    const gatsbyImage = getImage(image);

    return (
        <article className={styles.postPreview}>
            <Link to={`/project/${slug}`} className={styles.link}>
                <GatsbyImage
                    image={gatsbyImage}
                    alt={imageAlt}
                    className={styles.image}
                />
                <div className={styles.lowerCard}>
                    <h2 className={styles.title}>{title}</h2>
                </div>
            </Link>
        </article>
    );
};

export default PostPreview;
