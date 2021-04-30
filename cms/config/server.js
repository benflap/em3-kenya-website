const dev = process.env.NODE_ENV === "development";

module.exports = ({ env }) => ({
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    url: dev ? "" : "https://em3international.org/kenya/api",
    admin: {
        url: dev ? "admin" : "https://em3international.org/kenya/admin",
        auth: {
            secret: env("ADMIN_JWT_SECRET", "15e62ab23100b0f21ea9dc04b60dca96"),
        },
    },
});
