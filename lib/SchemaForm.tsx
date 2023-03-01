import { Schema } from "lib/types"
import { defineComponent, PropType } from "vue"
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
        return () => {
            const { schema, value } = props
            return <SchemaItems schema={schema} value={value} onChange={handleChange} />
        }
    },
})
