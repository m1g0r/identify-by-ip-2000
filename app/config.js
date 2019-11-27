const env = process.env.NODE_ENV || "local";

const config = {
    env,
    host: "127.0.0.1",
    version: "0.0.1",
    name: "identify-by-ip-2000",
    port: process.env.PORT || 8080,
};

module.exports = config;
