import { Schema } from "lib/types"
import { defineComponent, PropType, provide, reactive } from "vue"
import { SchemaFormContextKey } from "./context"
import SchemaItems from "./SchemaItems"

export default defineComponent({
    props: {
        schema: {
            type: Object as PropType<Schema>,
            required: true,
        },
        value: {
            required: true,
        },
        onChange: {
            type: Function as PropType<(v: any) => void>,
            required: true,
        },
    },
    name: "SchemaForm",
    setup(props, { slots, emit, attrs }) {
        const handleChange = (v: any) => {
            props.onChange(v)
        }

        const context = reactive({
            SchemaItems,
        })

        provide(SchemaFormContextKey, context)
        return () => {
            const { schema, value } = props
            return <SchemaItems schema={schema} rootSchema={schema} value={value} onChange={handleChange} />
        }
    },
})
