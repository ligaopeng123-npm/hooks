"use strict";(self.webpackChunk_gaopeng123_hooks=self.webpackChunk_gaopeng123_hooks||[]).push([[726],{"./stories/useScale.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>useScale_stories,demo:()=>demo});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),dist=__webpack_require__("./packages/useScale/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const TestUseScale=props=>{const scale=(0,dist.useScale)({width:1920,height:1080});return(0,react.useEffect)((()=>()=>{}),[scale]),(0,jsx_runtime.jsxs)("div",{style:{backgroundColor:"#97fa04",width:"100%",height:"100%"},children:[(0,jsx_runtime.jsx)("h3",{children:"useScale"}),"scale: ",JSON.stringify(scale,null,2)]})};TestUseScale.displayName="TestUseScale";const components_TestUseScale=TestUseScale;try{TestUseScale.displayName="TestUseScale",TestUseScale.__docgenInfo={description:"",displayName:"TestUseScale",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example/components/TestUseScale.tsx#TestUseScale"]={docgenInfo:TestUseScale.__docgenInfo,name:"TestUseScale",path:"example/components/TestUseScale.tsx#TestUseScale"})}catch(__react_docgen_typescript_loader_error){}var blocks_dist=__webpack_require__("./node_modules/.pnpm/@storybook+blocks@7.4.2_74b3ggvk3akyhuq4eydyx3fqim/node_modules/@storybook/blocks/dist/index.mjs");const useScale_stories={title:"Example/useScale",component:dist.useScale,parameters:{layout:"centered",docs:{page:()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(blocks_dist.UG,{children:"# useScale\n\n`(props?: ScaleProps):{x: number,y:number}`\n\n>监听窗口变化，动态缩放当前dom，并保持居中\n>\n>[在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-usescale--demo)\n\n## 参数\n\n```typescript\ntype ScaleProps = {\n    scaleDom?: any; // 缩放的dom 如果不传 默认为body下得第一个div元素\n    width?: number; // 理想宽\n    height?: number; // 要求的理想宽高 小于或者大于该数据后进行缩放\n};\nconst scale = useScale({width: 1920, height: 1080});\n```\n\n## Usage\n\n```tsx\nimport React, {useEffect} from 'react';\nimport {useScale} from \"@gaopeng123/hooks.use-scale\";\n\ntype TestUseScaleProps = {};\nconst TestUseScale: React.FC<TestUseScaleProps> = (props) => {\n    const scale = useScale({width: 1920, height: 1080});\n    useEffect(() => {\n        return () => {\n\n        }\n    }, [scale]);\n    return (\n        <div style={{backgroundColor: '#97fa04', width: '100%', height: '100%'}}>\n            <h3>useScale</h3>\n            scale: {\n            JSON.stringify(scale, null, 2)\n        }\n        </div>\n    )\n};\n\nexport default TestUseScale;\n```\n\n"})})}},tags:["autodocs"],argTypes:{}},demo={args:{},render:()=>(0,jsx_runtime.jsx)(components_TestUseScale,{})};demo.parameters={...demo.parameters,docs:{...demo.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: () => {\n    return <TestUseScale />;\n  }\n}",...demo.parameters?.docs?.source}}};const __namedExportsOrder=["demo"]},"./packages/useResize/dist/hooks.use-resize.cjs.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var e=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),n=__webpack_require__("./node_modules/.pnpm/@gaopeng123+utils.function@0.4.14/node_modules/@gaopeng123/utils.function/dist/utils.function.esm.js");exports.useResize=function(i){var t=e.useState(n.windowSize()),r=t[0],u=t[1];return e.useEffect((function(){var e=n.debounce((function(){u(n.windowSize())}),(null==i?void 0:i.wait)||200,{leading:!1});return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),r}},"./packages/useResize/dist/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./packages/useResize/dist/hooks.use-resize.cjs.production.min.js")},"./packages/useScale/dist/hooks.use-scale.cjs.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var e=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),t=__webpack_require__("./packages/useResize/dist/index.js"),i=__webpack_require__("./node_modules/.pnpm/@gaopeng123+utils.types@0.4.14/node_modules/@gaopeng123/utils.types/dist/utils.types.esm.js");exports.useScale=function(r){var s=e.useState({x:1,y:1}),n=s[0],o=s[1],u=Object.assign({width:1920,height:1080},r),a=u.scaleDom,l=u.width,c=u.height,h=t.useResize(),d=h.availWidth,f=h.availHeight;return e.useEffect((function(){o({x:d/l,y:f/c})}),[a,d,f,l,c]),e.useEffect((function(){var e;a&&(e=(null==a?void 0:a.current)||a),e=i.isElement(e)?e:document.querySelector("div");var t=document.documentElement,r=t.clientWidth,s=t.clientHeight,n=r/l;r/s>l/c&&(n=s/c);var o=e.style;o.transformOrigin="left top",o.transform="scale("+n+") translate(-50%, -50%)",o.width=l+"px",o.height=c+"px",o.position="absolute",o.top="50%",o.left="50%"}),[n]),n}},"./packages/useScale/dist/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./packages/useScale/dist/hooks.use-scale.cjs.production.min.js")}}]);