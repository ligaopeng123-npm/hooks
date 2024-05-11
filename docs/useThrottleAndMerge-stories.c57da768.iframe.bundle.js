"use strict";(self.webpackChunk_gaopeng123_hooks=self.webpackChunk_gaopeng123_hooks||[]).push([[560],{"./stories/useThrottleAndMerge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>useThrottleAndMerge_stories,demo:()=>demo});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),hooks_use_throttle_and_merge_esm=__webpack_require__("./packages/useThrottleAndMerge/dist/hooks.use-throttle-and-merge.esm.js"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const TestUseThrottleAndMerge=props=>{const[event,setEvent]=(0,react.useState)([]),onClick=(0,hooks_use_throttle_and_merge_esm.R)((res=>{console.log("useThrottleAndMerge",res),setEvent((c=>[...res,...c]))}),200);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["useThrottleAndMerge ",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("button",{id:"TestUseThrottleAndMerge-test0",onClick,children:"点击查看打印"}),(0,jsx_runtime.jsxs)("div",{children:["click当前事件长度：",event.length]}),(0,jsx_runtime.jsx)("br",{})]})},components_TestUseThrottleAndMerge=TestUseThrottleAndMerge;try{TestUseThrottleAndMerge.displayName="TestUseThrottleAndMerge",TestUseThrottleAndMerge.__docgenInfo={description:"",displayName:"TestUseThrottleAndMerge",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example/components/TestUseThrottleAndMerge.tsx#TestUseThrottleAndMerge"]={docgenInfo:TestUseThrottleAndMerge.__docgenInfo,name:"TestUseThrottleAndMerge",path:"example/components/TestUseThrottleAndMerge.tsx#TestUseThrottleAndMerge"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/.pnpm/@storybook+blocks@7.4.2_74b3ggvk3akyhuq4eydyx3fqim/node_modules/@storybook/blocks/dist/index.mjs"),READMEraw=__webpack_require__("./packages/useThrottleAndMerge/README.md?raw");const useThrottleAndMerge_stories={title:"Example/useThrottleAndMerge",component:hooks_use_throttle_and_merge_esm.R,parameters:{layout:"centered",docs:{page:()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(dist.UG,{children:READMEraw})})}},tags:["autodocs"],argTypes:{}},demo={args:{},render:()=>(0,jsx_runtime.jsx)(components_TestUseThrottleAndMerge,{})};demo.parameters={...demo.parameters,docs:{...demo.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: () => {\n    return <TestUseThrottleAndMerge />;\n  }\n}",...demo.parameters?.docs?.source}}};const __namedExportsOrder=["demo"]},"./packages/useThrottleAndMerge/dist/hooks.use-throttle-and-merge.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useThrottleAndMerge,n:()=>useThrottleAndMergeFns});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),_gaopeng123_utils_function__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@gaopeng123+utils.function@1.1.14/node_modules/@gaopeng123/utils.function/dist/utils.function.esm.js"),useThrottleAndMerge=function useThrottleAndMerge(fn,wait,options,dep){void 0===wait&&(wait=200),void 0===options&&(options={}),void 0===dep&&(dep=[]);var current=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({fn,timer:0}).current,isFns=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("function"!=typeof fn)[0];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){current.data=isFns?{}:[],current.timmer=null,current.fn=function(){if(clearTimeout(current.timmer),current.timmer=setTimeout((function(){current.timer||(current.timer=0)}),wait),isFns?Object.keys(current.data).length:current.data.length)if(isFns)for(var cFn in fn){var _current$data$cFn;null!=(_current$data$cFn=current.data[cFn])&&_current$data$cFn.length&&fn[cFn](current.data[cFn])}else fn(current.data);current.data=isFns?{}:[]}}),[fn]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function f(){var throttle=(0,_gaopeng123_utils_function__WEBPACK_IMPORTED_MODULE_1__.iQ)(current.fn,wait,(0,_gaopeng123_utils_function__WEBPACK_IMPORTED_MODULE_1__.iR)(Object.assign({leading:!0,type:2},options,{notThrottle:function notThrottle(result){if(isFns){var key=result.__key;current.data[key]||(current.data[key]=[]),current.data[key].push(result.data)}else current.data.push(result);options.notThrottle&&options.notThrottle(result)},clearTimeout:function clearTimeout(now){current.timer=now}})),current.timer);current.timer=throttle.apply(void 0,arguments)}),dep)},useThrottleAndMergeFns=function useThrottleAndMergeFns(fns,wait){void 0===wait&&(wait=200);var onClick=useThrottleAndMerge(fns,wait),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),currentFns=_useState[0],setFns=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((function(){var c={},_loop=function _loop(fKey){c[fKey]=function(data){onClick({__key:fKey,data})}};for(var fKey in fns)_loop(fKey);setFns(c)}),[]),currentFns}},"./packages/useThrottleAndMerge/README.md?raw":module=>{module.exports="# `Throttle And Merge`\n\n> TODO: 节流并且数据合并 第一次和最后一次都会触发，返回值为数组，将每一次节流数据合并到数组中去\n>\n> [在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-usethrottleandmerge--demo)\n\n## useThrottleAndMerge\n\n`TODO: 单次事件源合并`\n\n## Usage\n\n```tsx\nimport React, { useState } from 'react';\nimport { useThrottleAndMerge } from \"../../packages/useThrottleAndMerge\";\n\ntype TestUseThrottleAndMergeProps = {};\nconst TestUseThrottleAndMerge: React.FC<TestUseThrottleAndMergeProps> = (props) => {\n    const [event, setEvent] = useState([]);\n    const onClick = useThrottleAndMerge((res)=> {\n        console.log(res);\n        setEvent(res);\n    }, 1000);\n    return (\n        <React.Fragment>\n            <button onClick={onClick}>点击查看打印</button>\n            <div>click事件长度：{event.length}</div>\n        </React.Fragment>\n    )\n}\n\nexport default TestUseThrottleAndMerge;\n```\n\n## useThrottleAndMergeFns\n\n`合并多个事件源`\n\n```tsx\nimport React, { useEffect, useRef, useState } from 'react';\nimport { useThrottleAndMergeFns } from \"../../packages/useThrottleAndMerge/src\";\n\ntype TestUseThrottleAndMergeFnsProps = {};\nconst TestUseThrottleAndMergeFns: React.FC<TestUseThrottleAndMergeFnsProps> = (props) => {\n    const ref = useRef({a: 0, b: 0});\n    const [events, setEvents] = useState<any>(ref.current);\n\t\t// 事件源基于key来区分；\n  \t// 例如：a函数接受事件a，b函数接受事件b\n    const {a: onClick1, b: onClick2} = useThrottleAndMergeFns({a: (res: any)=> {\n            ref.current.a = ref.current.a + res.length;\n            setEvents(Object.assign({}, ref.current));\n            console.log(22)\n        }, b: (res: any)=> {\n            ref.current.b = ref.current.b + res.length;\n            setEvents(Object.assign({}, ref.current));\n        }}, 1000);\n\n    useEffect(()=> {\n        const bth: any = document.querySelector('#TestUseThrottleAndMerge-test1')\n        const bth2: any = document.querySelector('#TestUseThrottleAndMerge-test2')\n        const loop = ()=> {\n            setTimeout(()=> {\n                // @ts-ignore\n                bth.click();\n                setTimeout(()=> {\n                    // @ts-ignore\n                    bth2.click();\n                }, Math.random() * 10)\n                loop();\n            }, Math.random() * 100)\n        }\n        // loop();\n    }, []);\n\n    return (\n        <>\n            useThrottleAndMergeFns <br/>\n            <button id={'TestUseThrottleAndMerge-test1'} onClick={onClick1}>点击查看打印a</button><br/>\n            <button id={'TestUseThrottleAndMerge-test2'} onClick={onClick2}>点击查看打印b</button>\n            <br/>\n            <div>clicka总次数：{events.a}</div>\n            <div>clickb总次数：{events.b}</div>\n        </>\n    )\n}\n\nexport default TestUseThrottleAndMergeFns;\n```\n\n"}}]);