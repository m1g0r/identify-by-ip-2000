const { Validator } = require("jsonschema");

class Validation {
    constructor() {
        this.validator = new Validator();
    }

    validateMiddleware(data, schema, res) {
        const mergedData = this.merge(schema.default, data);
        const validateInfo = this.validate(mergedData, schema.schema);
        

        if (validateInfo.valid) {
            return mergedData;
        } else {
            res.status(400).json("Error. IP Address Invalid");
            return false;
        }
      
    }

    validate(data, schema) {
        return this.validator.validate(data, schema);
    }

    merge(defaultValues, data) {
        return {...defaultValues, ...data};
    }
    
}

module.exports = Validation;
