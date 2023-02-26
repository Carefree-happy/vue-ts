var Ajv = require("ajv")

const schema = {
    type: "object",
    properties: {
        name: {
            type: "string",
        },
        age: {
            type: "number",
        },
        pets: {
            type: "array",
            items: {
                type: "string",
            },
        },
        isWorker: {
            type: "boolean",
        },
    },
    required: ["name", "age"],
}

const data = {
    name: "Jocky11111@qq.com",
    age: 12,
    pets: ["cat", "dog"],
    isWorker: true,
}

var ajv = new Ajv()
var validate = ajv.compile(schema)
var valid = validate(data)
if (!valid) console.log(validate.errors)
