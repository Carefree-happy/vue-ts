import { defineComponent, Ref, ref } from "vue"
import { createUseStyles } from "vue-jss"
import MonacoEditor from "./components/MonacoEditor"

function toJson(data: any) {
    return JSON.stringify(data, null, 2)
}

const schema = {
    type: "string",
}

const useStyles = createUseStyles({
    editor: {
        minHeight: 400,
    },
})

export default defineComponent({
    setup() {
        const schemaRef: Ref<any> = ref(schema)

        const handleCodeChange = (code: string) => {
            let data: any
            try {
                data = JSON.stringify(code)
            } catch (err) {
                console.log(err)
            }
        }

        const classesRef = useStyles()
        return () => {
            const classes = classesRef.value

            const code = toJson(schema)
            return (
                <div>
                    <MonacoEditor code={code} onChange={handleCodeChange} title="Schema" class={classes.editor} />
                </div>
            )
        }
    },
})
