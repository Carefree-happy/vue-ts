2.4 关于 vue 的 h 函数的详细讲解
```ts
// Actual implementation
export function h(type: any, propsOrChildren?: any, children?: any): VNode {
  const l = arguments.length
  if (l === 2) {
    if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
      // single vnode without props
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren])
      }
      // props without children
      return createVNode(type, propsOrChildren)
    } else {
      // omit props
      return createVNode(type, null, propsOrChildren)
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2)
    } else if (l === 3 && isVNode(children)) {
      children = [children]
    }
    return createVNode(type, propsOrChildren, children)
  }
}
```
自己理解：
h 函数是用来创建 VNode 的方法
理解： 如果传参长度为2，直接createVNode，或者createVNode 为 null；
如果长度为3，只取前三位；或者长度超过3，直接不取。

视频解释：h 的 type 是 any, 因为 type 的类型可以是 string ｜ function ｜ object
propsOrChildren props 可以不传值，
判断参数的长度是两个，则有可能是props或者children，至少有一个
接下来判断是不是存在 props，并判断是不是 VNode

判断参数的长度是三个，则有可能是props，children都在

判断参数的长度三个以上，则可能