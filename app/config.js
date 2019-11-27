const env = process.env.NODE_ENV || "local";

const config = {
    env,
    host: "127.0.0.1",
    version: "1.0.0",
    name: "duke-vychyslyator-po-ip-2000",
    port: process.env.PORT || 8080,
};

module.exports = config;
