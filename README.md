2.3 如何 ts 在 vue3 中定义组件

defineComponent 函数

如何定义 Props 的类型

查看 vue 源码
```ts
export type DefineComponent<
  PropsOrPropOptions = {},
  RawBindings = {},
  D = {},
  C extends ComputedOptions = ComputedOptions,
  M extends MethodOptions = MethodOptions,
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = {},
  EE extends string = string,
  PP = PublicProps,
  Props = Readonly< PropsOrPropOptions extends ComponentPropsOptions
      ? ExtractPropTypes<PropsOrPropOptions>
      : PropsOrPropOptions
  > & ({} extends E ? {} : EmitsToProps<E>),
  Defaults = ExtractDefaultPropTypes<PropsOrPropOptions>
> = ComponentPublicInstanceConstructor<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E, PP & Props, Defaults, true > & Props > &
  ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, Defaults> & PP;

type MyComponent = DefineComponent<{ a: string }, { name: string }, {}, { count: () => number}>
```