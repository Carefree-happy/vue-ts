<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <span>{{ age }}</span>
        <span>{{ config.name }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

interface Config {
    name: string
}

const PropsType = {
    msg: String,
    age: {
        type: Number,
        required: true,
    },
    config: Object as PropType<Config>,
} as const

export default defineComponent({
    name: "HelloWorld",
    props: PropsType,
    mounted() {
        this.age
    },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
