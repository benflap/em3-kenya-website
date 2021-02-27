module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-strapi",
            options: {
                apiURL: "http://localhost:1337",
                contentTypes: [
                    {
                        name: "mission",
                        endpoint: "mission",
                    },
                    {
                        name: `home-page`,
                        endpoint: `home-page`,
                    },
                ],
                queryLimit: 1000,
            },
        },
    ],
};
