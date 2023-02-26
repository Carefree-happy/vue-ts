var Ajv = require("ajv")
var addFormats = require("ajv-formats")
var locatize = require("ajv-i18n")

const schema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            // test: true,
            // format: "email",
            minLength: 12,
            errorMessage: "aas",
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
            // format: "test",
        },
    },
    required: ["name", "age"],
}

const data = {
    name: "haha",
    age: 12,
    pets: ["cat", "dog"],
    isWorker: true,
    words: "hahah",
}

var ajv = new Ajv({ allErrors: true })
// 添加 format
addFormats(ajv)

// ajv.addFormat("test", (data) => {
//     console.log(data, "------------")
//     return data === "haha"
// })

require("ajv-errors")(ajv)

ajv.addKeyword("test", {
    // 课程的方式，不能通过 these parameters are deprecated, see docs for addKeyword
    // 返回一个 schema
    macro() {
        return {
            minLength: 12,
        }
    },
    // 课程的方式，不能通过 these parameters are deprecated, see docs for addKeyword
    // // 数据校验时调用，sch 对应关键字的值，parentSchema 对应 test 所在属性的定义
    // compile(sch, parentSchema) {
    //     console.log(sch, parentSchema)
    //     return () => true
    // },
    // 元 schema 对应的类型，与boolean矛盾
    // metaSchema: {
    //     type: "boolean",
    // },
    // validate: function fun(schema, data) {
    //     // 数据校验时调用，schema 对应关键字的值， data 对应实际的值，return 进行错误信息自定义
    //     // 添加自定义关键字, 自定义返回的错误信息，键对值不对
    //     fun.errors = [
    //         {
    //             instancePath: "/name",
    //             schemaPath: "#/properties/name/test",
    //             keyword: "test",
    //             params: { keyword: "test" },
    //             message: '应当通过 "test 关键词"',
    //         },
    //     ]
    //     return false
    // },
})

var validate = ajv.compile(schema)
var valid = validate(data)
if (!valid) {
    // locatize.zh(validate.errors)
    console.log(validate.errors)
}
