

# hooks

## 介绍

> [!NOTE]
> **@gaopeng123/hooks 是一个react hooks库，收集一些常用的hooks。**
> 

## 下载

```shell
npm i @gaopeng123/hooks
or yarn add @gaopeng123/hooks
```

## usePoller: (props: PollerProps): [number, () => void, () => void]

`轮询器,包括同步轮询，异步轮询`

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
```

> [!WARNING]
> **此处需要注意，调用轮询器stopPoller后需要return，才能停止**

```typescript
// 同步轮询
const [time, startPoller, stopPoller] = usePoller({delay: 5000, callBack: (params:PollerMark)=> {
    if (params.time > 10000) {
        stopPoller();
        return;// TODO 此处需要return; 否则无法停止
    }
}});

```

```typescript
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

## useClock (): ClockDate

`时钟器`

```typescript
type ClockDate = {
	ymd: string, // 年月日
	hms: string, // 时分秒
	week: string; // 周几
}

const {ymd, hms, week} = useClock();
```

## useEasing(props: UseEasingProps) : number;

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

const [easing,start, stop] = useEasing({duration: 60000, intervals: 1000, easingType: 'cubicOut'}); // 0 - 1之间的数
```

## useMergeValue 

#### https://www.npmjs.com/package/use-merge-value

`解决npm因peerDependencies导致安装失败问题`

## useResize(props:ResizeProps):WindowSize

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

## useScale(props?: ScaleProps):{x: number,y:number}

`监听窗口变化，动态缩放当前dom`

```typescript
type ScaleProps = {
	scaleDom?: any; // 缩放的dom 如果不传 默认为body
	width?: number; // 理想宽
	height?: number; // 要求的理想宽高 小于或者大于该数据后进行缩放
};
const scale = useScale({width: 1920, height: 1080});
```

