const express = require("express");

const router = express.Router();
const middleware = require("./middleware");
const LocationsRoutes = require("./locations");
const logger = require("../../logger");

const locationsRoutes = new LocationsRoutes();

router.get("/locations", locationsRoutes.get.bind(locationsRoutes));

module.exports = (app) => {
    app.use("/v1", middleware);
    app.use("/v1", router);
    app.use((err, req, res, next) => {
        logger.error("routes/v1", err);
        res.sendStatus(500);
        next();
    });
};
