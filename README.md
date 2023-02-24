2.4 如何提取 props 定义

传递不同的值类型
```js
export default {
  props: {
    greetingMessage: String
  }
}
```

```html
<span>{{ greetingMessage }}</span>

<!-- 组件 静态 vs. 动态 Prop -->
<!-- 字符串 -->
<MyComponent greeting-message="hello" />
<!-- 根据一个变量的值动态传入 -->
<BlogPost :title="post.title" />
<!-- 根据一个更复杂表达式的值动态传入 -->
<BlogPost :title="post.title + ' by ' + post.author.name" />

<!-- Number 静态｜动态值 -->
<BlogPost :likes="42" />
<BlogPost :likes="post.likes" />

<!-- Boolean 静态值与动态值 -->
<!-- 仅写上 prop 但不传值，会隐式转换为 `true` -->
<BlogPost is-published />
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<BlogPost :is-published="false" />
<!-- 根据一个变量的值动态传入 -->
<BlogPost :is-published="post.isPublished" />

<!-- Array 静态值与动态值 -->
<!-- 虽然这个数组是个常量，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<BlogPost :comment-ids="[234, 266, 273]" />
<!-- 根据一个变量的值动态传入 -->
<BlogPost :comment-ids="post.commentIds" />

<!-- Object 静态值与动态值 -->
<!-- 虽然这个对象字面量是个常量，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<BlogPost :author="{ name: 'Veronica',  company: 'Veridian Dynamics'}"/>
<!-- 根据一个变量的值动态传入 -->
<BlogPost :author="post.author" />
```