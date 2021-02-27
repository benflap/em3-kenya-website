module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-strapi",
            options: {
                apiURL: "http://localhost:1337",
                singleTypes: ["home-page", "mission"],
                queryLimit: 1000,
            },
        },
    ],
};
