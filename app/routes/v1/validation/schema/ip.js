module.exports = {
    get: {
        default: {},
        schema: {
            type: "object",
            properties: {
                ip: {
                    type: "string",
                    oneOf: [
                        { format: "ipv4" },
                        { format: "ipv6" },
                    ],
                },
            },
            required: ["ip"],
        },
    },
};
