require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const { STRAPI_API_URL = "http://localhost:1337" } = process.env;

module.exports = {
    pathPrefix: `/kenya`,
    plugins: [
        {
            resolve: "gatsby-source-strapi",
            options: {
                apiURL: STRAPI_API_URL,
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
                start_url: `/kenya`,
                background_color: `#fff`,
                theme_color: `#D3AC12`,
                display: `browser`,
                icon: `src/images/icon.png`,
            },
        },
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ],
};
