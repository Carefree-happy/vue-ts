import { SchemaFormContextKey } from "../context"
import { defineComponent, inject, DefineComponent } from "vue"

import { FiledPropsDefine } from "../types"
import { isObject } from "../utils"

type SchemaItemDefine = DefineComponent<typeof FiledPropsDefine>

const schema = {
    type: "object",
    properties: {
        name: {
            type: "string",
        },
        age: {
            type: "number",
        },
    },
}

export default defineComponent({
    name: "ObjectField",
    props: FiledPropsDefine,
    setup(props, { slots, emit, attrs }) {
        // 有可能出现直接使用 ObjectField 而不去使用 SchemaForm，就有可能存在 undefined 的情况
        const context: any = inject(SchemaFormContextKey)
        if (!context) {
            throw new Error("SchemaForm should be used")
        }
        const handleObjectFieldChange = (key: string, v: any) => {
            const value: any = isObject(props.value) ? props.value : {}
            // 如果我们最终的 field 是 undefined，实际上应该从该 value 里面删除这个值
            if (v === undefined) {
                delete value[key]
            } else {
                value[key] = v
            }
            props.onChange(value)
        }
        return () => {
            const { schema, rootSchema, value } = props as any

            const { SchemaItems } = context
            const properties = schema.properties || {}

            const currentValue: any = isObject(value) ? value : {}

            return Object.keys(properties).map((k: string, index: number) => (
                <SchemaItems schema={properties[k]} rootSchema={rootSchema} value={currentValue[k]} key={index} onChange={(v: any) => handleObjectFieldChange(k, v)} />
            ))
        }
    },
})
