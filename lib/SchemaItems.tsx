// 根据不同的类型来把对应渲染这个 schema 的工作交给对应的那个组件来做
import { computed, defineComponent, h, PropType } from "vue"
import ArrayField from "./fields/ArrayField"
import NumberField from "./fields/NumberField"
import ObjectField from "./fields/ObjectField"
import StringField from "./fields/StringField"
import { FiledPropsDefine, SchemaTypes } from "./types"

import { retrieveSchema } from "./utils"

export default defineComponent({
    name: "SchemaItems",
    props: FiledPropsDefine,
    setup(props, { slots, emit, attrs }) {
        const retrivedSchemaRef = computed(() => {
            const { schema, rootSchema, value } = props
            return retrieveSchema(schema, rootSchema, value)
        })
        return () => {
            const { schema } = props
            const retrieveSchema = retrivedSchemaRef.value
            // TODO: 如果 type 需要指定，我们需要猜测 type
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const type = schema.type
            let Component: any
            switch (type) {
                case SchemaTypes.STRING:
                    Component = StringField
                    break
                case SchemaTypes.NUMBER:
                    Component = NumberField
                    break
                case SchemaTypes.OBJECT:
                    Component = ObjectField
                    break
                case SchemaTypes.ARRAY:
                    Component = ArrayField
                    break
                default:
                    console.warn(`${type} is not supported`)
                    break
            }
            return <Component {...props} schema={retrieveSchema} />
        }
    },
})
