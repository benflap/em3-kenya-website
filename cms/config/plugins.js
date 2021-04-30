module.exports = ({ env }) => ({
    email: {
        provider: "sendgrid",
        providerOptions: {
            apiKey: env("SENDGRID_API_KEY"),
        },
        settings: {
            defaultFrom: "admin@em3international.org",
        },
    },
});
