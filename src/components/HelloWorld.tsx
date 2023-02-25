import { defineComponent } from "vue"

const PropsType = {
    msg: String,
    age: {
        type: Number,
        require: true,
    },
} as const

export default defineComponent({
    props: PropsType,
    setup(props) {
        return () => <div>{props.age}</div>
    },
})
