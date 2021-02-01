module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-ghost`,
            options: {
                apiUrl: `http://localhost:2368`,
                contentApiKey: `9d19120b14588691268e275b41`,
                version: `v3`,
            },
        },
    ],
};
