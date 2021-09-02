#### usePoller: (props: PollerProps): [number, () => void, () => void]

`轮询器`

```typescript
type PollerMark = {
	states: string | number;
	props?: any; // 上次callBack、asyncCallBack返回的结果
	time: number; // 执行时间
	startStamp: number; // 轮询开始时间
	currentStamp: number; // 当前时刻
	endStamp: number; // 轮询结束时间
}

type PollerProps = {
	delay?: number; // 执行时间
    immediate?: boolean; // 是否立即执行 还是由startPoller开启 默认立即执行
	callBack?: (args: PollerMark) => void; // 执行回调
    asyncCallBack?: (args: PollerMark) => Promise<any>; // 异步回调器
}
// 同步轮询
const [time, startPoller, stopPoller] = usePoller({delay: 5000, callBack: (params:PollerMark)=> {
    if (params.time > 10000) {
				stopPoller();
				return;
    }
}});
// 异步轮询
const [asyncTime, startAsyncPoller, stopAsyncPoller] = usePoller({
		delay: 5000,
		asyncCallBack: async (params) => {
            // 满足条件时 停止计时器 return即可
			if (params.time > 10000) {
				stopAsyncPoller();
				return; // TODO 此处需要return; 否则无法停止
			}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(`我是参数: ${Date.now()}`)
				}, 2000)
			});
		}
	});
```

#### useClock (): ClockDate

`时钟器`

```typescript
type ClockDate = {
	ymd: string, // 年月日
	hms: string, // 时分秒
	week: string; // 周几
}

const {ymd, hms, week} = useClock();
```

#### useEasing(props: UseEasingProps) : number;

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

const [easing,start, stop] = useEasing({duration: 60000, intervals: 1000, easingType： 'cubicOut'}); // 0 - 1之间的数
```


