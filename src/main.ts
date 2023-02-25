import HelloWorld from "@/components/HelloWorld.vue"
import { createApp, defineComponent, h, reactive, ref } from "vue"
// import App from "./App.vue"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require("./assets/logo.png")

const App = defineComponent({
    setup() {
        const state = reactive({ name: "jocky" })

        const numberRef = ref(1)

        setInterval(() => {
            state.name += "1"
            numberRef.value += 1
        }, 3000)

        // 1 setup 里面初始化执行一次，闭包的特性
        // numberRef.value 为 1 ， 永远
        // const number = numberRef.value
        return () => {
            // 2 变量会促使return不同的值
            const number = numberRef.value
            return h("div", { id: "app" }, [
                h("img", {
                    alt: "Vue logo",
                    src: img,
                }),
                h(HelloWorld, {
                    msg: "Welcome to Your Vue.js + TS",
                    config: { name: "sunjing" },
                    age: 12,
                }),
                h("p", state.name + number),
            ])
        }
    },
})

createApp(App).mount("#app")
