const logger = require("../../logger");

module.exports = (req, res, next) => {
    logger.info("request received", { body: req.body, headers: req.headers });
    next();
};
