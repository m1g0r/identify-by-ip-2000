const geoip = require("geoip-lite");

const Validation = require("./validation");
const ipSchema = require("./validation/schema/ip");

class LocationsRouter {
    constructor() {
        this.validation = new Validation();
    }

    // Get location by IP
    get(req, res) {
        const { ip } = req.query;

        if (this.validation.validateMiddleware(req.query, ipSchema.get, res)) {
            res.send(geoip.lookup(ip));
        }
    }
}

module.exports = LocationsRouter;
