var Ajv = require("ajv")
var addFormats = require("ajv-formats")

const schema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            format: "email",
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
        words: {
            type: "string",
            format: "test",
        },
    },
    required: ["name", "age"],
}

const data = {
    name: "1252051394@qq.com",
    age: 12,
    pets: ["cat", "dog"],
    isWorker: true,
    words: "hahah",
}

var ajv = new Ajv()
// 添加 format
addFormats(ajv)

ajv.addFormat("test", (data) => {
    console.log(data, "------------")
    return data === "haha"
})

var validate = ajv.compile(schema)
var valid = validate(data)
if (!valid) console.log(validate.errors)
