module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-strapi",
            options: {
                apiURL: "http://localhost:1337",
                singleTypes: ["home-page", "mission"],
                contentTypes: [{ name: "blog", endpoint: "blog" }, "project"],
                queryLimit: 1000,
            },
        },
        "gatsby-plugin-sass",
    ],
};
