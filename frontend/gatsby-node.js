const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const result = await graphql(
        `
            {
                allStrapiBlog {
                    edges {
                        node {
                            id
                            slug
                        }
                    }
                }
                allStrapiProject {
                    edges {
                        node {
                            id
                            slug
                        }
                    }
                }
            }
        `
    );

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
    result.data.allStrapiBlog.edges.forEach(({ node: { id, slug } }) => {
        createPage({
            path: `/blog/${slug}`,
            component: blogPostTemplate,
            context: {
                id,
            },
        });
    });

    const projectPageTemplate = path.resolve(`src/templates/project.js`);
    result.data.allStrapiProject.edges.forEach(({ node: { id, slug } }) => {
        createPage({
            path: `/project/${slug}`,
            component: projectPageTemplate,
            context: {
                id,
            },
        });
    });
};
