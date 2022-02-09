# useScale(props?: ScaleProps):{x: number,y:number}

`监听窗口变化，动态缩放当前dom`

```typescript
type ScaleProps = {
    scaleDom?: any; // 缩放的dom 如果不传 默认为body
    width?: number; // 理想宽
    height?: number; // 要求的理想宽高 小于或者大于该数据后进行缩放
};
const scale = useScale({width: 1920, height: 1080});
```
