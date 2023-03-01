import { SchemaFormContextKey } from "../context"
import { defineComponent, h, inject } from "vue"

import { FiledPropsDefine } from "../types"
// import SchemaItems from "lib/SchemaItems"

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
        const context: any = inject(SchemaFormContextKey)
        return () => {
            const { SchemaItems } = context
        }
    },
})
