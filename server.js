const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");
const logger = require("./app/logger");
const config = require("./app/config");
const v1Routes = require("./app/routes/v1");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({}));

app.get("/", (req, res) => {
    res.json({ message: `${config.name}. Version: ${config.version}` });
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

v1Routes(app);
app.listen(config.port, () => {
    logger.info(`${config.name}: server was started on port - ${config.port}`);
});

process.on("uncaughtException", (err) => {
    logger.error("server", err);
    process.exit(1);
});
