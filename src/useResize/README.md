# useResize(props:ResizeProps):WindowSize

`监听窗口变化，返回窗口尺寸`

```typescript
type ResizeProps = {
    wait?: number; // 等待时间
}
type WindowSize = {
    availWidth: number;
    availHeight: number;
    width: number;
    height: number;
    screenWidth: number;
    screenHeight: number;
};
```
