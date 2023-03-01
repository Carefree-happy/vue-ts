import { defineComponent, h } from "vue"
import { shallowMount } from "@vue/test-utils"

const HelloWorld = defineComponent({
    name: "HelloWorld",
    props: {
        msg: String,
    },
    setup(props) {
        return () => {
            return h("div", props.msg)
        }
    },
})

beforeEach(() => {
    console.log("before each")
})

afterEach(() => {
    console.log("after each")
})

beforeAll(() => {
    console.log("before all")
})

afterAll(() => {
    console.log("after all")
})

describe("HelloWorld.vue", () => {
    beforeEach(() => {
        console.log("before each2")
    })

    afterEach(() => {
        console.log("after each2")
    })

    beforeAll(() => {
        console.log("before all2")
    })

    afterAll(() => {
        console.log("after all2")
    })
    it("renders props.msg when passed", async () => {
        const msg = "new message"
        console.log("render")
        const wrapper = shallowMount(HelloWorld, {
            props: { msg },
        })
        // 前面传入 done
        // setTimeout(() => {
        //     expect(wrapper.text()).toMatch(msg)
        //     done()
        // }, 100)
        // 或者 promise
        // return new Promise<void>((resolve) => {
        //     // "123" 不通过
        //     expect(wrapper.text()).toMatch(msg)
        //     resolve()
        // })
        // 或者 async/await
        await wrapper.setProps({
            msg: "123",
        })
        expect(wrapper.text()).toMatch("123")
    })
})

describe("another", () => {
    it("should work", () => {
        expect(1 + 1).toBe(2)
        console.log("another")
    })
})
