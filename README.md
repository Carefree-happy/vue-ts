2.4 setup 的运用和其意义
```ts
export declare const createVNode: typeof _createVNode;

declare function _createVNode(
  type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT, 
  props?: (Data & VNodeProps) | null, 
  children?: unknown, 
  patchFlag?: number,
  dynamicProps?: string[] | null, 
  isBlockNode?: boolean): VNode;
```
后三个参数与代码优化有关

setup(props, { slots, attrs, emit }) {
  return {}
}