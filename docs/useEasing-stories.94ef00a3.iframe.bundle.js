"use strict";(self.webpackChunk_gaopeng123_hooks=self.webpackChunk_gaopeng123_hooks||[]).push([[957],{"./stories/useEasing.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>useEasing_stories,demo:()=>demo});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),hooks_use_poller_esm=__webpack_require__("./packages/usePoller/dist/hooks.use-poller.esm.js"),utils_types_esm=__webpack_require__("./node_modules/.pnpm/@gaopeng123+utils.types@1.1.16-alpha.0/node_modules/@gaopeng123/utils.types/dist/utils.types.esm.js"),easingFuncs={linear:function linear(k){return k},quadraticIn:function quadraticIn(k){return k*k},quadraticOut:function quadraticOut(k){return k*(2-k)},quadraticInOut:function quadraticInOut(k){return(k*=2)<1?.5*k*k:-.5*(--k*(k-2)-1)},cubicIn:function cubicIn(k){return k*k*k},cubicOut:function cubicOut(k){return--k*k*k+1},cubicInOut:function cubicInOut(k){return(k*=2)<1?.5*k*k*k:.5*((k-=2)*k*k+2)},quarticIn:function quarticIn(k){return k*k*k*k},quarticOut:function quarticOut(k){return 1- --k*k*k*k},quarticInOut:function quarticInOut(k){return(k*=2)<1?.5*k*k*k*k:-.5*((k-=2)*k*k*k-2)},quinticIn:function quinticIn(k){return k*k*k*k*k},quinticOut:function quinticOut(k){return--k*k*k*k*k+1},quinticInOut:function quinticInOut(k){return(k*=2)<1?.5*k*k*k*k*k:.5*((k-=2)*k*k*k*k+2)},sinusoidalIn:function sinusoidalIn(k){return 1-Math.cos(k*Math.PI/2)},sinusoidalOut:function sinusoidalOut(k){return Math.sin(k*Math.PI/2)},sinusoidalInOut:function sinusoidalInOut(k){return.5*(1-Math.cos(Math.PI*k))},exponentialIn:function exponentialIn(k){return 0===k?0:Math.pow(1024,k-1)},exponentialOut:function exponentialOut(k){return 1===k?1:1-Math.pow(2,-10*k)},exponentialInOut:function exponentialInOut(k){return 0===k?0:1===k?1:(k*=2)<1?.5*Math.pow(1024,k-1):.5*(2-Math.pow(2,-10*(k-1)))},circularIn:function circularIn(k){return 1-Math.sqrt(1-k*k)},circularOut:function circularOut(k){return Math.sqrt(1- --k*k)},circularInOut:function circularInOut(k){return(k*=2)<1?-.5*(Math.sqrt(1-k*k)-1):.5*(Math.sqrt(1-(k-=2)*k)+1)},elasticIn:function elasticIn(k){var s,a=.1;return 0===k?0:1===k?1:(!a||a<1?(a=1,s=.1):s=.4*Math.asin(1/a)/(2*Math.PI),-a*Math.pow(2,10*(k-=1))*Math.sin((k-s)*(2*Math.PI)/.4))},elasticOut:function elasticOut(k){var s,a=.1;return 0===k?0:1===k?1:(!a||a<1?(a=1,s=.1):s=.4*Math.asin(1/a)/(2*Math.PI),a*Math.pow(2,-10*k)*Math.sin((k-s)*(2*Math.PI)/.4)+1)},elasticInOut:function elasticInOut(k){var s,a=.1,p=.4;return 0===k?0:1===k?1:(!a||a<1?(a=1,s=.1):s=p*Math.asin(1/a)/(2*Math.PI),(k*=2)<1?a*Math.pow(2,10*(k-=1))*Math.sin((k-s)*(2*Math.PI)/p)*-.5:a*Math.pow(2,-10*(k-=1))*Math.sin((k-s)*(2*Math.PI)/p)*.5+1)},backIn:function backIn(k){var s=1.70158;return k*k*((s+1)*k-s)},backOut:function backOut(k){var s=1.70158;return--k*k*((s+1)*k+s)+1},backInOut:function backInOut(k){var s=2.5949095;return(k*=2)<1?k*k*((s+1)*k-s)*.5:.5*((k-=2)*k*((s+1)*k+s)+2)},bounceIn:function bounceIn(k){return 1-easingFuncs.bounceOut(1-k)},bounceOut:function bounceOut(k){return k<1/2.75?7.5625*k*k:k<2/2.75?7.5625*(k-=1.5/2.75)*k+.75:k<2.5/2.75?7.5625*(k-=2.25/2.75)*k+.9375:7.5625*(k-=2.625/2.75)*k+.984375},bounceInOut:function bounceInOut(k){return k<.5?.5*easingFuncs.bounceIn(2*k):.5*easingFuncs.bounceOut(2*k-1)+.5}},useEasing=function useEasing(props){var _Object$assign=Object.assign({immediate:!0,duration:1e3,intervals:100,easingType:"cubicOut"},props),intervals=_Object$assign.intervals,duration=_Object$assign.duration,easingType=_Object$assign.easingType,immediate=_Object$assign.immediate,_useState=(0,react.useState)({current:0,timers:0}),easing=_useState[0],setEasing=_useState[1],_usePoller=(0,hooks_use_poller_esm.O)({delay:intervals,immediate}),time=_usePoller[0],startPoller=_usePoller[1],stopPoller=_usePoller[2];return(0,react.useEffect)((function(){(!1!==immediate||easing.timers)&&setEasing(Object.assign({},easing,{timers:easing.timers+1}))}),[time]),(0,react.useEffect)((function(){if(easing.current>=1)stopPoller();else if(easing.timers&&(0,utils_types_esm.mf)(easingFuncs[easingType])){var current=easingFuncs[easingType](easing.timers*(intervals/duration));setEasing(Object.assign({},easing,{current:current>1?1:current}))}}),[easing.timers]),[easing.current,function(){startPoller(),setEasing(Object.assign({current:0},easing,{timers:1}))},function(){stopPoller()}]},jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const TestUseEasing=props=>{const[useCurrentData,startEasing,stopEasing]=useEasing({duration:6e4,immediate:!1,easingType:"cubicOut",intervals:1e3});return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("h3",{children:"useEasing 缓动函数"}),useCurrentData]})};TestUseEasing.displayName="TestUseEasing";const components_TestUseEasing=TestUseEasing;try{TestUseEasing.displayName="TestUseEasing",TestUseEasing.__docgenInfo={description:"",displayName:"TestUseEasing",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example/components/TestUseEasing.tsx#TestUseEasing"]={docgenInfo:TestUseEasing.__docgenInfo,name:"TestUseEasing",path:"example/components/TestUseEasing.tsx#TestUseEasing"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/.pnpm/@storybook+blocks@7.4.2_74b3ggvk3akyhuq4eydyx3fqim/node_modules/@storybook/blocks/dist/index.mjs");const useEasing_stories={title:"Example/useEasing",component:useEasing,parameters:{layout:"centered",docs:{page:()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(dist.UG,{children:"# useEasing\n\n>缓动函数\n>\n>[在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-useeasing--demo) \n>\n>[参考](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)\n\n## 参数\n\n```typescript\nuseEasing:(props: UseEasingProps) : number;\n\ntype EasingType = 'linear' | 'quadraticIn' | 'quadraticOut' | 'quadraticInOut'\n    | 'cubicIn' | 'cubicOut' | 'cubicInOut' | 'quarticIn' | 'quarticOut' | 'quarticInOut'\n    | 'quinticIn' | 'quinticOut' | 'quinticInOut' | 'sinusoidalIn' | 'sinusoidalOut'\n    | 'sinusoidalInOut' | 'exponentialIn' | 'exponentialOut' | 'exponentialInOut'\n    | 'circularIn' | 'circularOut' | 'circularInOut' | 'elasticIn' | 'elasticOut'\n    | 'elasticInOut' | 'backIn' | 'backOut' | 'backInOut' | 'bounceIn' | 'bounceOut'\n    | 'bounceInOut';\n\ntype UseEasingProps = {\n    immediate?: boolean; // 是否立即执行 还是由startPoller开启 默认立即执行\n    duration?: number; // 持续时间 毫秒 默认为1000ms\n    intervals?: number; // 执行间隔  默认为100ms\n    easingType: EasingType; // 执行动画类型\n}\n\nconst [easing, start, stop] = useEasing({duration: 60000, intervals: 1000, easingType: 'cubicOut'}); // 0 - 1之间的数\n```\n\n## Usage\n\n```tsx\nimport React from 'react';\nimport {useEasing} from \"@gaopeng123/hooks.use-easing\";\n\ntype TestUseEasingProps = {};\nconst TestUseEasing: React.FC<TestUseEasingProps> = (props) => {\n\tconst [useCurrentData, startEasing, stopEasing] = useEasing({\n\t\tduration: 60000,\n\t\timmediate: false,\n\t\teasingType: \"cubicOut\",\n\t\tintervals: 1000\n\t});\n\treturn (\n\t\t<React.Fragment>\n\t\t\t<h3>useEasing 缓动函数</h3>\n\t\t\t{\n\t\t\t\tuseCurrentData\n\t\t\t}\n\t\t</React.Fragment>\n\t)\n};\n\nexport default TestUseEasing;\n```\n\n"})})}},tags:["autodocs"],argTypes:{}},demo={args:{},render:()=>(0,jsx_runtime.jsx)(components_TestUseEasing,{})};demo.parameters={...demo.parameters,docs:{...demo.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: () => {\n    return <TestUseEasing />;\n  }\n}",...demo.parameters?.docs?.source}}};const __namedExportsOrder=["demo"]}}]);