const remark = require("remark");
const html = require("remark-html");

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.owner === "gatsby-source-strapi" && node.Text)
        remark()
            .use(html)
            .process(node.Text, function (err, file) {
                if (err) {
                    console.error(err);
                } else {
                    createNodeField({
                        node,
                        name: "html",
                        value: file.contents,
                    });
                }
            });
};
