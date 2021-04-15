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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `EM3 Kenya`,
                short_name: `EM3 Kenya`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#D3AC12`,
                display: `browser`,
                icon: `src/images/icon.png`,
            },
        },
    ],
};
