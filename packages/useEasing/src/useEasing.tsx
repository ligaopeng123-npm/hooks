/**********************************************************************
 *
 * @模块名称: useEasing
 *
 * @模块用途: useEasing  缓动函数处理
 *
 * @date: 2021/8/31 11:58
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {useEffect, useState} from "react";
import {usePoller} from "@gaopeng123/hooks.use-poller";
import {isFunction} from "@gaopeng123/utils.types";

export type EasingType = 'linear' | 'quadraticIn' | 'quadraticOut' | 'quadraticInOut'
    | 'cubicIn' | 'cubicOut' | 'cubicInOut' | 'quarticIn' | 'quarticOut' | 'quarticInOut'
    | 'quinticIn' | 'quinticOut' | 'quinticInOut' | 'sinusoidalIn' | 'sinusoidalOut'
    | 'sinusoidalInOut' | 'exponentialIn' | 'exponentialOut' | 'exponentialInOut'
    | 'circularIn' | 'circularOut' | 'circularInOut' | 'elasticIn' | 'elasticOut'
    | 'elasticInOut' | 'backIn' | 'backOut' | 'backInOut' | 'bounceIn' | 'bounceOut'
    | 'bounceInOut';

// https://echarts.apache.org/examples/zh/editor.html?c=line-easing
export const easingFuncs = {
    linear: function (k: number): number {
        return k;
    },
    quadraticIn: function (k: number): number {
        return k * k;
    },
    quadraticOut: function (k: number): number {
        return k * (2 - k);
    },
    quadraticInOut: function (k: number): number {
        if ((k *= 2) < 1) {
            return 0.5 * k * k;
        }
        return -0.5 * (--k * (k - 2) - 1);
    },
    cubicIn: function (k: number): number {
        return k * k * k;
    },
    cubicOut: function (k: number): number {
        return --k * k * k + 1;
    },
    cubicInOut: function (k: number): number {
        if ((k *= 2) < 1) {
            return 0.5 * k * k * k;
        }
        return 0.5 * ((k -= 2) * k * k + 2);
    },
    quarticIn: function (k: number): number {
        return k * k * k * k;
    },
    quarticOut: function (k: number): number {
        return 1 - (--k * k * k * k);
    },
    quarticInOut: function (k: number): number {
        if ((k *= 2) < 1) {
            return 0.5 * k * k * k * k;
        }
        return -0.5 * ((k -= 2) * k * k * k - 2);
    },
    quinticIn: function (k: number): number {
        return k * k * k * k * k;
    },
    quinticOut: function (k: number): number {
        return --k * k * k * k * k + 1;
    },
    quinticInOut: function (k: number): number {
        if ((k *= 2) < 1) {
            return 0.5 * k * k * k * k * k;
        }
        return 0.5 * ((k -= 2) * k * k * k * k + 2);
    },
    sinusoidalIn: function (k: number): number {
        return 1 - Math.cos(k * Math.PI / 2);
    },
    sinusoidalOut: function (k: number): number {
        return Math.sin(k * Math.PI / 2);
    },
    sinusoidalInOut: function (k: number): number {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    },
    exponentialIn: function (k: number): number {
        return k === 0 ? 0 : Math.pow(1024, k - 1);
    },
    exponentialOut: function (k: number): number {
        return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    },
    exponentialInOut: function (k: number): number {
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if ((k *= 2) < 1) {
            return 0.5 * Math.pow(1024, k - 1);
        }
        return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
    },
    circularIn: function (k: number): number {
        return 1 - Math.sqrt(1 - k * k);
    },
    circularOut: function (k: number): number {
        return Math.sqrt(1 - (--k * k));
    },
    circularInOut: function (k: number): number {
        if ((k *= 2) < 1) {
            return -0.5 * (Math.sqrt(1 - k * k) - 1);
        }
        return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    },
    elasticIn: function (k: number): number {
        let s;
        let a = 0.1;
        let p = 0.4;
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if (!a || a < 1) {
            a = 1;
            s = p / 4;
        } else {
            s = p * Math.asin(1 / a) / (2 * Math.PI);
        }
        return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
    },
    elasticOut: function (k: number): number {
        let s;
        let a = 0.1;
        let p = 0.4;
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if (!a || a < 1) {
            a = 1;
            s = p / 4;
        } else {
            s = p * Math.asin(1 / a) / (2 * Math.PI);
        }
        return (a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);
    },
    elasticInOut: function (k: number): number {
        let s;
        let a = 0.1;
        let p = 0.4;
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if (!a || a < 1) {
            a = 1;
            s = p / 4;
        } else {
            s = p * Math.asin(1 / a) / (2 * Math.PI);
        }
        if ((k *= 2) < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
        }
        return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;

    },

    // 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
    backIn: function (k: number): number {
        let s = 1.70158;
        return k * k * ((s + 1) * k - s);
    },
    backOut: function (k: number): number {
        let s = 1.70158;
        return --k * k * ((s + 1) * k + s) + 1;
    },
    backInOut: function (k: number): number {
        let s = 1.70158 * 1.525;
        if ((k *= 2) < 1) {
            return 0.5 * (k * k * ((s + 1) * k - s));
        }
        return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    },

    // 创建弹跳效果
    bounceIn: function (k: number): number {
        return 1 - easingFuncs.bounceOut(1 - k);
    },
    bounceOut: function (k: number): number {
        if (k < (1 / 2.75)) {
            return 7.5625 * k * k;
        } else if (k < (2 / 2.75)) {
            return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
        } else if (k < (2.5 / 2.75)) {
            return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
        } else {
            return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
        }
    },
    bounceInOut: function (k: number): number {
        if (k < 0.5) {
            return easingFuncs.bounceIn(k * 2) * 0.5;
        }
        return easingFuncs.bounceOut(k * 2 - 1) * 0.5 + 0.5;
    }
};

export type UseEasingProps = {
    immediate?: boolean; // 是否立即执行 还是由startPoller开启 默认立即执行
    duration?: number; // 持续时间 毫秒
    intervals?: number; // 执行间隔
    easingType: EasingType; // 执行动画类型
}

export type Easing = {
    current: number; // 当前执行数据  0 - 1
    timers: number; // 执行次数
}
// duration 持续时间
export const useEasing = (props: UseEasingProps): [number, () => void, () => void] => {
    const {intervals, duration, easingType, immediate} = Object.assign({
        immediate: true,
        duration: 1000,
        intervals: 100,
        easingType: 'cubicOut'
    }, props);
    /**
     * 设置状态
     */
    const [easing, setEasing] = useState<Easing>({current: 0, timers: 0});
    /**
     * 使用轮询器
     */
    const [time, startPoller, stopPoller] = usePoller({delay: intervals, immediate});
    /**
     * 如果非立即执行 则不处理
     */
    useEffect(() => {
        if (immediate === false && !easing.timers) {
        } else {
            setEasing(Object.assign({}, easing, {timers: easing.timers + 1}));
        }
    }, [time]);

    useEffect(() => {
        if (easing.current >= 1) {
            stopPoller();
            return;
        }
        if (easing.timers && isFunction(easingFuncs[easingType])) {
            // 可执行次数
            const current = easingFuncs[easingType](easing.timers * (intervals / duration));
            setEasing(Object.assign(
                {},
                easing,
                {current: current > 1 ? 1 : current})
            )
        }
    }, [easing.timers]);

    return [easing.current,
        () => {
            startPoller();
            setEasing(Object.assign({current: 0}, easing, {timers: 1}));
        }, () => {
            stopPoller();
            // setEasing(Object.assign({}, easing, {timers: 0}));
        }];
};