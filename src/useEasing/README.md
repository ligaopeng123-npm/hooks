# useEasing(props: UseEasingProps) : number;

`缓动函数`[参考](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)

```typescript
type EasingType = 'linear' | 'quadraticIn' | 'quadraticOut' | 'quadraticInOut'
    | 'cubicIn' | 'cubicOut' | 'cubicInOut' | 'quarticIn' | 'quarticOut' | 'quarticInOut'
    | 'quinticIn' | 'quinticOut' | 'quinticInOut' | 'sinusoidalIn' | 'sinusoidalOut'
    | 'sinusoidalInOut' | 'exponentialIn' | 'exponentialOut' | 'exponentialInOut'
    | 'circularIn' | 'circularOut' | 'circularInOut' | 'elasticIn' | 'elasticOut'
    | 'elasticInOut' | 'backIn' | 'backOut' | 'backInOut' | 'bounceIn' | 'bounceOut'
    | 'bounceInOut';

type UseEasingProps = {
    immediate?: boolean; // 是否立即执行 还是由startPoller开启 默认立即执行
    duration?: number; // 持续时间 毫秒 默认为1000ms
    intervals?: number; // 执行间隔  默认为100ms
    easingType: EasingType; // 执行动画类型
}

const [easing, start, stop] = useEasing({duration: 60000, intervals: 1000, easingType: 'cubicOut'}); // 0 - 1之间的数
```
