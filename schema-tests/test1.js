var Ajv = require("ajv")
var addFormats = require("ajv-formats")

const schema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            test: true,
            // format: "email",
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
    name: "1252051394@qq.com",
    age: 12,
    pets: ["cat", "dog"],
    isWorker: true,
    words: "hahah",
}

var ajv = new Ajv()
// 添加 format
addFormats(ajv)

// ajv.addFormat("test", (data) => {
//     console.log(data, "------------")
//     return data === "haha"
// })

ajv.addKeyword("test", {
    // 课程的方式，不能通过 these parameters are deprecated, see docs for addKeyword
    // 返回一个 schema
    // macro() {
    //     return {
    //         minLength: 10,
    //     }
    // },
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
    // validate(schema, data) {
    //     // 数据校验时调用，schema 对应关键字的值， data 对应实际的值，return 进行错误信息自定义
    //     console.log(schema, data)
    //     return true
    // },
})

var validate = ajv.compile(schema)
var valid = validate(data)
if (!valid) console.log(validate.errors)
