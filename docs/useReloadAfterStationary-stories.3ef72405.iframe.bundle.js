"use strict";(self.webpackChunk_gaopeng123_hooks=self.webpackChunk_gaopeng123_hooks||[]).push([[123],{"./stories/useReloadAfterStationary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>useReloadAfterStationary_stories,demo:()=>demo});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),utils_function_esm=__webpack_require__("./node_modules/.pnpm/@gaopeng123+utils.function@1.1.16-alpha.3/node_modules/@gaopeng123/utils.function/dist/utils.function.esm.js"),useReloadAfterStationary=function useReloadAfterStationary(config){(0,react.useEffect)((function(){(0,utils_function_esm.IN)((function(){window.location.reload()}),config)}),[])},jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const TestUseReloadAfterStationary=props=>(useReloadAfterStationary({wait:5e3,interval:1e3}),(0,jsx_runtime.jsx)(react.Fragment,{children:(new Date).toString()}));TestUseReloadAfterStationary.displayName="TestUseReloadAfterStationary";const components_TestUseReloadAfterStationary=TestUseReloadAfterStationary;try{TestUseReloadAfterStationary.displayName="TestUseReloadAfterStationary",TestUseReloadAfterStationary.__docgenInfo={description:"",displayName:"TestUseReloadAfterStationary",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example/components/TestUseReloadAfterStationary.tsx#TestUseReloadAfterStationary"]={docgenInfo:TestUseReloadAfterStationary.__docgenInfo,name:"TestUseReloadAfterStationary",path:"example/components/TestUseReloadAfterStationary.tsx#TestUseReloadAfterStationary"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/.pnpm/@storybook+blocks@7.4.2_74b3ggvk3akyhuq4eydyx3fqim/node_modules/@storybook/blocks/dist/index.mjs");const useReloadAfterStationary_stories={title:"Example/useReloadAfterStationary",component:useReloadAfterStationary,parameters:{layout:"centered",docs:{page:()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(dist.UG,{children:"# `useReloadAfterStationary`\n\n> TODO: 长时间未操作 reload当前页面\n>\n> [在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-usereloadafterstationary--demo)\n\n## Usage\n\n```tsx\nimport React from 'react';\nimport { useReloadAfterStationary } from \"../../packages/useReloadAfterStationary\";\n\ntype TestUseReloadAfterStationaryProps = {};\nconst TestUseReloadAfterStationary: React.FC<TestUseReloadAfterStationaryProps> = (props) => {\n    useReloadAfterStationary({wait: 5000, interval: 1000});\n    return (\n        <React.Fragment>\n            {new  Date().toString()}\n        </React.Fragment>\n    )\n}\n\nexport default TestUseReloadAfterStationary;\n```\n"})})}},tags:["autodocs"],argTypes:{}},demo={args:{},render:()=>(0,jsx_runtime.jsx)(components_TestUseReloadAfterStationary,{})};demo.parameters={...demo.parameters,docs:{...demo.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: () => {\n    return <TestUseReloadAfterStationary />;\n  }\n}",...demo.parameters?.docs?.source}}};const __namedExportsOrder=["demo"]}}]);