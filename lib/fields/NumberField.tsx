import { FiledPropsDefine } from "lib/types"
import { defineComponent, h } from "vue"

export default defineComponent({
    name: "NumberField",
    props: FiledPropsDefine,
    setup() {
        return () => h("div", "this is NumberField")
    },
})
