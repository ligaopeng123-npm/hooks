"use strict";(self.webpackChunk_gaopeng123_hooks=self.webpackChunk_gaopeng123_hooks||[]).push([[198],{"./stories/usePoller.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>usePoller_stories,demo:()=>demo});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),dist=__webpack_require__("./packages/usePoller/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const TestUsePoller=props=>{const[time,startPoller,stopPoller]=(0,dist.usePoller)({delay:1200}),[asyncTime,startAsyncPoller,stopAsyncPoller]=(0,dist.usePoller)({delay:1200,immediate:!1,asyncCallBack:async params=>{if(console.log("params",params),!(params.time>1e4))return new Promise(((resolve,reject)=>{setTimeout((()=>{resolve(`我是参数: ${Date.now()}`)}),2e3)}));stopAsyncPoller()}});return(0,react.useEffect)((()=>{setTimeout((()=>{startAsyncPoller()}),2e3),setTimeout((()=>{stopPoller(),setTimeout((()=>{startPoller()}),2e3)}),10009)}),[]),(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("h3",{children:"usePoller"}),time,(0,jsx_runtime.jsx)("h3",{children:"异步usePoller"}),asyncTime]})};TestUsePoller.displayName="TestUsePoller";const components_TestUsePoller=TestUsePoller;try{TestUsePoller.displayName="TestUsePoller",TestUsePoller.__docgenInfo={description:"",displayName:"TestUsePoller",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example/components/TestUsePoller.tsx#TestUsePoller"]={docgenInfo:TestUsePoller.__docgenInfo,name:"TestUsePoller",path:"example/components/TestUsePoller.tsx#TestUsePoller"})}catch(__react_docgen_typescript_loader_error){}var blocks_dist=__webpack_require__("./node_modules/.pnpm/@storybook+blocks@7.4.2_74b3ggvk3akyhuq4eydyx3fqim/node_modules/@storybook/blocks/dist/index.mjs");const usePoller_stories={title:"Example/usePoller",component:dist.usePoller,parameters:{layout:"centered",docs:{page:()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(blocks_dist.UG,{children:"# usePoller\n\n`(props: PollerProps): [number, () => void, () => void]`\n\n`轮询器,包括同步轮询，异步轮询`\n\n## 参数\n\n```typescript\ntype PollerMark = {\n    states: string | number;\n    props?: any; // 上次callBack、asyncCallBack返回的结果\n    time: number; // 执行时间\n    startStamp: number; // 轮询开始时间\n    currentStamp: number; // 当前时刻\n    endStamp: number; // 轮询结束时间\n}\n\ntype PollerProps = {\n    delay?: number; // 执行时间\n    immediate?: boolean; // 是否立即执行 还是由startPoller开启 默认立即执行\n    callBack?: (args: PollerMark) => void; // 执行回调\n    asyncCallBack?: (args: PollerMark) => Promise<any>; // 异步回调器\n}\n```\n\n> [!WARNING]\n> **此处需要注意，调用轮询器stopPoller后需要return，才能停止**\n\n```typescript\n// 同步轮询\nconst [time, startPoller, stopPoller] = usePoller({\n    delay: 5000, callBack: (params: PollerMark) => {\n        if (params.time > 10000) {\n            stopPoller();\n            return;// TODO 此处需要return; 否则无法停止\n        }\n    }\n});\n\n```\n\n```typescript\n// 异步轮询\nconst [asyncTime, startAsyncPoller, stopAsyncPoller] = usePoller({\n    delay: 5000,\n    asyncCallBack: async (params) => {\n        // 满足条件时 停止计时器 return即可\n        if (params.time > 10000) {\n            stopAsyncPoller();\n            return; // TODO 此处需要return; 否则无法停止\n        }\n        return new Promise((resolve, reject) => {\n            setTimeout(() => {\n                resolve(`我是参数: ${Date.now()}`)\n            }, 2000)\n        });\n    }\n});\n```\n\n## Usage\n\n```tsx\nimport React, {useEffect} from 'react';\nimport {usePoller} from \"@gaopeng123/hooks.use-poller\";\n\ntype TestUsePollerProps = {};\nconst TestUsePoller: React.FC<TestUsePollerProps> = (props) => {\n\tconst [time, startPoller, stopPoller] = usePoller({delay: 1200});\n\tconst [asyncTime, startAsyncPoller, stopAsyncPoller] = usePoller({\n\t\tdelay: 1200,\n\t\timmediate: false,\n\t\tasyncCallBack: async (params) => {\n\t\t\tconsole.log('params', params);\n\t\t\tif (params.time > 10000) {\n\t\t\t\tstopAsyncPoller();\n\t\t\t\treturn;\n\t\t\t}\n\t\t\treturn new Promise((resolve, reject) => {\n\t\t\t\tsetTimeout(() => {\n\t\t\t\t\tresolve(`我是参数: ${Date.now()}`)\n\t\t\t\t}, 2000)\n\t\t\t});\n\t\t}\n\t});\n\n\tuseEffect(() => {\n\t\tsetTimeout(() => {\n\t\t\tstartAsyncPoller();\n\t\t}, 2000);\n\n\t\tsetTimeout(() => {\n\t\t\tstopPoller();\n\t\t\tsetTimeout(() => {\n\t\t\t\tstartPoller();\n\t\t\t}, 2000)\n\t\t}, 10009);\n\t}, []);\n\treturn (\n\t\t<React.Fragment>\n\t\t\t<h3>usePoller</h3>\n\t\t\t{\n\t\t\t\ttime\n\t\t\t}\n\t\t\t<h3>异步usePoller</h3>\n\t\t\t{\n\t\t\t\tasyncTime\n\t\t\t}\n\t\t</React.Fragment>\n\t)\n};\n\nexport default TestUsePoller;\n\n```\n\n"})})}},tags:["autodocs"],argTypes:{}},demo={args:{},render:()=>(0,jsx_runtime.jsx)(components_TestUsePoller,{})};demo.parameters={...demo.parameters,docs:{...demo.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: () => {\n    return <TestUsePoller />;\n  }\n}",...demo.parameters?.docs?.source}}};const __namedExportsOrder=["demo"]}}]);