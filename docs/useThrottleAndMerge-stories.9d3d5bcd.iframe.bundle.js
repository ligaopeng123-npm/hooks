"use strict";(self.webpackChunk_gaopeng123_hooks=self.webpackChunk_gaopeng123_hooks||[]).push([[560],{"./stories/useThrottleAndMerge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>useThrottleAndMerge_stories,demo:()=>demo});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),dist=__webpack_require__("./packages/useThrottleAndMerge/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const TestUseThrottleAndMerge=props=>{const[event,setEvent]=(0,react.useState)([]),onClick=(0,dist.useThrottleAndMerge)((res=>{setEvent((c=>[...res,...c]))}),200);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["useThrottleAndMerge ",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("button",{id:"TestUseThrottleAndMerge-test0",onClick,children:"点击查看打印"}),(0,jsx_runtime.jsxs)("div",{children:["click当前事件长度：",event.length]}),(0,jsx_runtime.jsx)("br",{})]})},components_TestUseThrottleAndMerge=TestUseThrottleAndMerge;try{TestUseThrottleAndMerge.displayName="TestUseThrottleAndMerge",TestUseThrottleAndMerge.__docgenInfo={description:"",displayName:"TestUseThrottleAndMerge",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example/components/TestUseThrottleAndMerge.tsx#TestUseThrottleAndMerge"]={docgenInfo:TestUseThrottleAndMerge.__docgenInfo,name:"TestUseThrottleAndMerge",path:"example/components/TestUseThrottleAndMerge.tsx#TestUseThrottleAndMerge"})}catch(__react_docgen_typescript_loader_error){}var blocks_dist=__webpack_require__("./node_modules/.pnpm/@storybook+blocks@7.4.2_74b3ggvk3akyhuq4eydyx3fqim/node_modules/@storybook/blocks/dist/index.mjs");const useThrottleAndMerge_stories={title:"Example/useThrottleAndMerge",component:dist.useThrottleAndMerge,parameters:{layout:"centered",docs:{page:()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(blocks_dist.UG,{children:"# `Throttle And Merge`\n\n> TODO: 节流并且数据合并 第一次和最后一次都会触发，返回值为数组，将每一次节流数据合并到数组中去\n>\n> [在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-usethrottleandmerge--demo)\n\n## useThrottleAndMerge\n\n`TODO: 单次事件源合并`\n\n## Usage\n\n```tsx\nimport React, { useState } from 'react';\nimport { useThrottleAndMerge } from \"../../packages/useThrottleAndMerge\";\n\ntype TestUseThrottleAndMergeProps = {};\nconst TestUseThrottleAndMerge: React.FC<TestUseThrottleAndMergeProps> = (props) => {\n    const [event, setEvent] = useState([]);\n    const onClick = useThrottleAndMerge((res)=> {\n        console.log(res);\n        setEvent(res);\n    }, 1000);\n    return (\n        <React.Fragment>\n            <button onClick={onClick}>点击查看打印</button>\n            <div>click事件长度：{event.length}</div>\n        </React.Fragment>\n    )\n}\n\nexport default TestUseThrottleAndMerge;\n```\n\n## useThrottleAndMergeFns\n\n`合并多个事件源`\n\n```tsx\nimport React, { useEffect, useRef, useState } from 'react';\nimport { useThrottleAndMergeFns } from \"../../packages/useThrottleAndMerge/src\";\n\ntype TestUseThrottleAndMergeFnsProps = {};\nconst TestUseThrottleAndMergeFns: React.FC<TestUseThrottleAndMergeFnsProps> = (props) => {\n    const ref = useRef({a: 0, b: 0});\n    const [events, setEvents] = useState<any>(ref.current);\n\t\t// 事件源基于key来区分；\n  \t// 例如：a函数接受事件a，b函数接受事件b\n    const {a: onClick1, b: onClick2} = useThrottleAndMergeFns({a: (res: any)=> {\n            ref.current.a = ref.current.a + res.length;\n            setEvents(Object.assign({}, ref.current));\n            console.log(22)\n        }, b: (res: any)=> {\n            ref.current.b = ref.current.b + res.length;\n            setEvents(Object.assign({}, ref.current));\n        }}, 1000);\n\n    useEffect(()=> {\n        const bth: any = document.querySelector('#TestUseThrottleAndMerge-test1')\n        const bth2: any = document.querySelector('#TestUseThrottleAndMerge-test2')\n        const loop = ()=> {\n            setTimeout(()=> {\n                // @ts-ignore\n                bth.click();\n                setTimeout(()=> {\n                    // @ts-ignore\n                    bth2.click();\n                }, Math.random() * 10)\n                loop();\n            }, Math.random() * 100)\n        }\n        // loop();\n    }, []);\n\n    return (\n        <>\n            useThrottleAndMergeFns <br/>\n            <button id={'TestUseThrottleAndMerge-test1'} onClick={onClick1}>点击查看打印a</button><br/>\n            <button id={'TestUseThrottleAndMerge-test2'} onClick={onClick2}>点击查看打印b</button>\n            <br/>\n            <div>clicka总次数：{events.a}</div>\n            <div>clickb总次数：{events.b}</div>\n        </>\n    )\n}\n\nexport default TestUseThrottleAndMergeFns;\n```\n\n"})})}},tags:["autodocs"],argTypes:{}},demo={args:{},render:()=>(0,jsx_runtime.jsx)(components_TestUseThrottleAndMerge,{})};demo.parameters={...demo.parameters,docs:{...demo.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: () => {\n    return <TestUseThrottleAndMerge />;\n  }\n}",...demo.parameters?.docs?.source}}};const __namedExportsOrder=["demo"]},"./packages/useThrottleAndMerge/dist/hooks.use-throttle-and-merge.cjs.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var t=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),e=__webpack_require__("./node_modules/.pnpm/@gaopeng123+utils.function@1.0.5/node_modules/@gaopeng123/utils.function/dist/utils.function.esm.js"),n=function(n,r,i,o){void 0===r&&(r=200),void 0===i&&(i={}),void 0===o&&(o=[]);var u=t.useRef({fn:n,timer:0}).current;return t.useEffect((function(){u.data=[],u.timmer=null,u.fn=function(){if(clearTimeout(u.timmer),u.timmer=setTimeout((function(){u.timer||(u.timer=0)}),r),u.data.length)if("function"==typeof n)n([].concat(u.data));else{var t=function(t){var e=u.data.filter((function(e){return e[t]})).map((function(e){return e[t]}));null!=e&&e.length&&n[t](e)};for(var e in n)t(e)}u.data=[]}}),[n]),t.useCallback((function(){var t=e.createThrottle(u.fn,r,e.throttleOptions(Object.assign({leading:!0,type:2},i,{notThrottle:function(t){u.data.push(t),i.notThrottle&&i.notThrottle(t)},clearTimeout:function(t){u.timer=t}})),u.timer);u.timer=t.apply(void 0,arguments)}),o)};exports.useThrottleAndMerge=n},"./packages/useThrottleAndMerge/dist/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./packages/useThrottleAndMerge/dist/hooks.use-throttle-and-merge.cjs.production.min.js")}}]);