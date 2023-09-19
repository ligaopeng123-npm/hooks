"use strict";(self.webpackChunk_gaopeng123_hooks=self.webpackChunk_gaopeng123_hooks||[]).push([[960],{"./stories/useThrottle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>useThrottle_stories,demo:()=>demo});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),dist=__webpack_require__("./packages/useThrottle/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const TestUseThrottle=props=>{const[v,setV]=(0,react.useState)(""),onChange=(0,dist.useThrottle)((v=>{setV(v.target.value)}),500);return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("input",{onChange}),(0,jsx_runtime.jsx)("br",{}),"输入值: ",v]})};TestUseThrottle.displayName="TestUseThrottle";const components_TestUseThrottle=TestUseThrottle;try{TestUseThrottle.displayName="TestUseThrottle",TestUseThrottle.__docgenInfo={description:"",displayName:"TestUseThrottle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example/components/TestUseThrottle.tsx#TestUseThrottle"]={docgenInfo:TestUseThrottle.__docgenInfo,name:"TestUseThrottle",path:"example/components/TestUseThrottle.tsx#TestUseThrottle"})}catch(__react_docgen_typescript_loader_error){}var blocks_dist=__webpack_require__("./node_modules/.pnpm/@storybook+blocks@7.4.2_74b3ggvk3akyhuq4eydyx3fqim/node_modules/@storybook/blocks/dist/index.mjs");const useThrottle_stories={title:"Example/useThrottle",component:dist.useThrottle,parameters:{layout:"centered",docs:{page:()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(blocks_dist.UG,{children:"# `useThrottle`\n\n> TODO: 节流hooks\n\n`(fn: Fn, wait: number = 200, options: ThrottleOptions = {}, dep: any[] = []): Fn`\n\n```tsx\nexport type ThrottleOptions = {\n    type?: 1 | 2; // 1 时间戳记录 2 setTimeout版本\n    leading?: boolean; // 第一时间是否立即调用 后续在节流\n}\n```\n\n## Usage\n\n```\nimport React, {useState, useEffect} from 'react';\nimport {useThrottle} from \"@gaopeng123/hooks.use-throttle\";\n\ntype TestUseThrottleProps = {};\nconst TestUseThrottle: React.FC<TestUseThrottleProps> = (props) => {\n    const [v, setV] = useState('');\n    const onChange = useThrottle((v: any) => {\n        setV(v.target.value);\n    }, 500);\n    return (\n        <React.Fragment>\n            <input onChange={onChange}/>\n            <br></br>输入值: {v}\n        </React.Fragment>\n    )\n};\n\nexport default TestUseThrottle;\n\n```\n"})})}},tags:["autodocs"],argTypes:{}},demo={args:{},render:()=>(0,jsx_runtime.jsx)(components_TestUseThrottle,{})};demo.parameters={...demo.parameters,docs:{...demo.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: () => {\n    return <TestUseThrottle />;\n  }\n}",...demo.parameters?.docs?.source}}};const __namedExportsOrder=["demo"]},"./packages/useThrottle/dist/hooks.use-throttle.cjs.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var e=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),t=__webpack_require__("./node_modules/.pnpm/@gaopeng123+utils.function@1.0.5/node_modules/@gaopeng123/utils.function/dist/utils.function.esm.js");exports.useThrottle=function(r,i,o,n){void 0===i&&(i=200),void 0===o&&(o={}),void 0===n&&(n=[]);var u=e.useRef({fn:r,timer:0}).current;return e.useEffect((function(){u.fn=r}),[r]),e.useCallback((function(){var e=t.createThrottle(u.fn,i,t.throttleOptions(o),u.timer);u.timer=e.apply(void 0,arguments)}),n)}},"./packages/useThrottle/dist/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./packages/useThrottle/dist/hooks.use-throttle.cjs.production.min.js")}}]);