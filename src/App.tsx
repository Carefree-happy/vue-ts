import HelloWorld from "@/components/HelloWorld"
import { defineComponent, reactive, ref } from "vue"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require("./assets/logo.png")

interface Config {
    name: string
}

function renderHelloWorld(msg: string, config: Config, age: number) {
    return <HelloWorld age={age} />
}

export default defineComponent({
    setup() {
        const state = reactive({ name: "jocky" })

        const numberRef = ref(1)

        // setInterval(() => {
        //     state.name += "1"
        //     numberRef.value += 1
        // }, 3000)

        // 1 setup 里面初始化执行一次，闭包的特性
        // numberRef.value 为 1 ， 永远
        // const number = numberRef.value
        return () => {
            // 2 变量会促使return不同的值
            const number = numberRef.value
            console.log(state.name)
            // return h("div", { id: "app" }, [
            //     h("img", {
            //         alt: "Vue logo",
            //         src: img,
            //     }),
            //     h(HelloWorld, {
            //         msg: "Welcome to Your Vue.js + TS",
            //         config: { name: "sunjing" },
            //         age: 12,
            //     }),
            //     h("p", state.name + number),
            // ])
            //
            // 替换新的 JSX 写法
            return (
                <div id="app">
                    <img src={img} alt="Vue logo" />
                    <input type="text" v-model={state.name} />
                    <p>{state.name + number}</p>
                    {renderHelloWorld(
                        "Welcome to Your Vue.js + TS",
                        { name: "sunjing" },
                        12,
                    )}
                </div>
            )
        }
    },
})
