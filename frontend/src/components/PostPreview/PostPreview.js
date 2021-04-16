import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import dateformat from "dateformat";

import * as styles from "./styles.module.css";

const PostPreview = (props) => {
    const { publishedAt, title, slug, image, imageAlt } = props;
    const gatsbyImage = getImage(image);

    const publishedDateFormated = dateformat(publishedAt, "mmmm d, yyyy");
    return (
        <article className={styles.postPreview}>
            <Link to={`/blog/${slug}`} className={styles.link}>
                <GatsbyImage
                    image={gatsbyImage}
                    alt={imageAlt}
                    className={styles.image}
                />
                <div className={styles.lowerCard}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.date}>{publishedDateFormated}</p>
                </div>
            </Link>
        </article>
    );
};

export default PostPreview;
