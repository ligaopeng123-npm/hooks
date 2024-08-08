"use strict";(self.webpackChunk_gaopeng123_hooks=self.webpackChunk_gaopeng123_hooks||[]).push([[766],{"./stories/useDebounce.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>useDebounce_stories,demo:()=>demo});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),utils_function_esm=__webpack_require__("./node_modules/.pnpm/@gaopeng123+utils.function@1.1.16-alpha.3/node_modules/@gaopeng123/utils.function/dist/utils.function.esm.js"),useDebounce=function useDebounce(fn,wait,options,dep){void 0===wait&&(wait=200),void 0===options&&(options={}),void 0===dep&&(dep=[]);var current=(0,react.useRef)({fn,timer:null}).current;return(0,react.useEffect)((function(){current.fn=fn}),[fn]),(0,react.useCallback)((function f(){var debounce=(0,utils_function_esm.cB)(current.fn,wait,options,current.timer);current.timer=debounce.apply(void 0,arguments)}),dep)},jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const TestUseDebounce=props=>{const[v,setV]=(0,react.useState)(""),onChange=useDebounce((v=>{setV(v.target.value)}));return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("input",{onChange}),(0,jsx_runtime.jsx)("br",{}),"输入值: ",v]})};TestUseDebounce.displayName="TestUseDebounce";const components_TestUseDebounce=TestUseDebounce;try{TestUseDebounce.displayName="TestUseDebounce",TestUseDebounce.__docgenInfo={description:"",displayName:"TestUseDebounce",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example/components/TestUseDebounce.tsx#TestUseDebounce"]={docgenInfo:TestUseDebounce.__docgenInfo,name:"TestUseDebounce",path:"example/components/TestUseDebounce.tsx#TestUseDebounce"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/.pnpm/@storybook+blocks@7.4.2_74b3ggvk3akyhuq4eydyx3fqim/node_modules/@storybook/blocks/dist/index.mjs");const useDebounce_stories={title:"Example/useDebounce",component:useDebounce,parameters:{layout:"centered",docs:{page:()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(dist.UG,{children:"# `useDebounce`\n\n> TODO: 去抖hooks  [在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-usedebounce--demo)\n\n`(fn: Fn, wait = 200, options: DebounceOptions = {}, dep: Dep = []) => Fn`\n\n```tsx\nexport type DebounceOptions = {\n    leading: boolean; // 第一时间是否立即执行 后续在去抖\n    notDebounce?: (...arg: any) => any; // 在去抖过程中 有一些非去抖处理 可以添加此参数\n}\n```\n\n## Usage\n\n```tsx\nimport React, {useState} from 'react';\nimport {useDebounce} from \"@gaopeng123/hooks.use-debounce\";\n\ntype TestUseDebounceProps = {};\nconst TestUseDebounce: React.FC<TestUseDebounceProps> = (props) => {\n    const [v, setV] = useState('');\n    // \n    const onChange = useDebounce((v: any) => {\n        setV(v.target.value);\n    })\n    return (\n        <React.Fragment>\n            <input onChange={onChange}/>\n            <br></br>输入值: {v}\n        </React.Fragment>\n    )\n};\n\nexport default TestUseDebounce;\n```\n"})})}},tags:["autodocs"],argTypes:{}},demo={args:{},render:()=>(0,jsx_runtime.jsx)(components_TestUseDebounce,{})};demo.parameters={...demo.parameters,docs:{...demo.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: () => {\n    return <TestUseDebounce />;\n  }\n}",...demo.parameters?.docs?.source}}};const __namedExportsOrder=["demo"]}}]);