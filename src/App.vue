<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome" :age="12" :config="{ name: name }" />
    <p>{{ name }}</p>
    <p>{{ name2 }}</p>
    <p>{{ ref }}</p>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from "vue"
import HelloWorld from "./components/HelloWorld.vue"

export default defineComponent({
    name: "App",
    components: {
        HelloWorld,
    },
    setup(props, { slots, attrs, emit }) {
        // ### reactive
        // let name = "MAX"
        // setInterval(() => {
        //     name += "1"
        // }, 1000)
        // console.log(name)
        // const state = reactive({ name: "jockey" })
        // setInterval(() => {
        //     state.name += "1"
        // }, 1000)
        // console.log(state.name)
        // 存在一个对象时
        // return state
        // 存在多个对象时
        // return {
        //     state,
        // }
        // 返回的属性不是响应式，直接取出固定的值
        // return {
        //     ...state,
        // }
        //
        // #### ref
        // 下面👇可以在template中通过name直接获取属性，编译器已经处理好了
        const nameRef = ref("jocky")
        const ref2 = ref(100)
        setInterval(() => {
            ref2.value += 1
        }, 1000)
        setInterval(() => {
            nameRef.value += "1"
        }, 5000)
        // computed 在每次刷新时执行
        const computedNameRef = computed(() => {
            return nameRef.value + "2"
        })
        // 其中引用的值的变化，都会引起该函数重新被执行，即副作用
        watchEffect(() => {
            console.log(nameRef.value)
        })
        return {
            name: nameRef,
            name2: computedNameRef,
            ref: ref2,
        }
    },
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
