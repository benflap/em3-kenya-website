module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-strapi",
            options: {
                apiURL: "http://localhost:1337",
                contentTypes: ["restaurant", "category"],
                queryLimit: 1000,
            },
        },
    ],
};
