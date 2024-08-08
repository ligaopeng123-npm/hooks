"use strict";(self.webpackChunk_gaopeng123_hooks=self.webpackChunk_gaopeng123_hooks||[]).push([[502],{"./node_modules/.pnpm/@gaopeng123+utils.date@1.1.16-alpha.0/node_modules/@gaopeng123/utils.date/dist/utils.date.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Pd:()=>getWeekCN,i$:()=>formatTimestamp});var _gaopeng123_utils_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@gaopeng123+utils.types@1.1.16-alpha.0/node_modules/@gaopeng123/utils.types/dist/utils.types.esm.js");function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _construct(Parent,args,Class){return _construct=_isNativeReflectConstruct()?Reflect.construct.bind():function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var instance=new(Function.bind.apply(Parent,a));return Class&&_setPrototypeOf(instance,Class.prototype),instance},_construct.apply(null,arguments)}var getYear=function getYear(date){return date.getFullYear()+""},getMonth=function getMonth(date){var month=date.getMonth()+1;return setTimeFillZero(month)},getWeek=function getWeek(date){return date.getDay()||7},getWeekCN=function getWeekCN(date){return"星期"+["","一","二","三","四","五","六","日"][getWeek(date)]},setTimeFillZero=function setTimeFillZero(num){return(num+"").length<2?"0"+num:num+""},getDate=function getDate(timestamp){var _timestamp=timestamp;return(0,_gaopeng123_utils_types__WEBPACK_IMPORTED_MODULE_0__.HD)(timestamp)&&((0,_gaopeng123_utils_types__WEBPACK_IMPORTED_MODULE_0__.VP)(timestamp)?_timestamp=new Date(timestamp):isNaN(Number(timestamp))&&(_timestamp=_construct(Date,null==timestamp?void 0:timestamp.split(/[^0-9]/).map((function(item,index){return 1===index?""+(Number(item)-1):item}))))),new Date((0,_gaopeng123_utils_types__WEBPACK_IMPORTED_MODULE_0__.J_)(_timestamp)&&(0,_gaopeng123_utils_types__WEBPACK_IMPORTED_MODULE_0__.qb)(_timestamp)?_timestamp:(""+timestamp).includes("-")||(""+timestamp).includes("/")?timestamp:Number(timestamp))},formatTimestamp=function formatTimestamp(timestamp,type){void 0===type&&(type="yyyy-MM-dd HH:mm:ss");var date=getDate(timestamp);return type.replace(/yyyy/i,getYear(date)).replace(/MM/,getMonth(date)).replace(/dd/,function getDay(date){var day=date.getDate();return setTimeFillZero(day)}(date)).replace(/HH/,function getHours(date){var hours=date.getHours();return setTimeFillZero(hours)}(date)).replace(/hh/,function get12Hours(date){var hours=date.getHours();return setTimeFillZero(hours>12?hours-12:hours)}(date)).replace(/mm/,function getMinutes(date){var minute=date.getMinutes();return setTimeFillZero(minute)}(date)).replace(/ss/,function getSeconds(date){var second=date.getSeconds();return setTimeFillZero(second)}(date)).replace(/WWW/,getWeekCN(date)).replace(/WW/,function getWeekCNDay(date){return""+["","一","二","三","四","五","六","日"][getWeek(date)]}(date)).replace(/ww/,getWeek(date)+"")}},"./stories/useClock.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>useClock_stories,demo:()=>demo});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),utils_date_esm=__webpack_require__("./node_modules/.pnpm/@gaopeng123+utils.date@1.1.16-alpha.0/node_modules/@gaopeng123/utils.date/dist/utils.date.esm.js"),hooks_use_poller_esm=__webpack_require__("./packages/usePoller/dist/hooks.use-poller.esm.js"),getClockDate=function getClockDate(time){return{ymd:(0,utils_date_esm.i$)(time,"yyyy-MM-dd"),hms:(0,utils_date_esm.i$)(time,"HH:mm:ss"),week:(0,utils_date_esm.Pd)(new Date(time))}},useClock=function useClock(){var time=(0,hooks_use_poller_esm.O)({delay:1e3})[0],_useState=(0,react.useState)(getClockDate(time)),clock=_useState[0],setClock=_useState[1];return(0,react.useEffect)((function(){setClock(getClockDate(time))}),[time]),clock},jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const TestUseClock=props=>{const clock=useClock();return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("h3",{children:"useClock"}),`${clock.ymd} ${clock.hms} ${clock.week}`]})};TestUseClock.displayName="TestUseClock";const components_TestUseClock=TestUseClock;try{TestUseClock.displayName="TestUseClock",TestUseClock.__docgenInfo={description:"",displayName:"TestUseClock",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example/components/TestUseClock.tsx#TestUseClock"]={docgenInfo:TestUseClock.__docgenInfo,name:"TestUseClock",path:"example/components/TestUseClock.tsx#TestUseClock"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/.pnpm/@storybook+blocks@7.4.2_74b3ggvk3akyhuq4eydyx3fqim/node_modules/@storybook/blocks/dist/index.mjs");const useClock_stories={title:"Example/useClock",component:useClock,parameters:{layout:"centered",docs:{page:()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(dist.UG,{children:"# useClock \n\n>时钟器 [在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-useclock--demo)\n\n## 参数\n\n```typescript\ntype ClockDate = {\n    ymd: string, // 年月日\n    hms: string, // 时分秒\n    week: string; // 周几\n}\n\nconst {ymd, hms, week} = useClock();\n```\n\n## Usage\n\n```tsx\nimport React from 'react';\nimport {useClock, ClockDate } form \"@gaopeng123/hooks.use-clock\"; // @gaopeng123/hooks\n\ntype TestUseClockProps = {};\nconst TestUseClock: React.FC<TestUseClockProps> = (props) => {\n    const clock: ClockDate = useClock();\n    return (\n        <React.Fragment>\n            <h3>useClock</h3>\n            {\n                `${clock.ymd} ${clock.hms} ${clock.week}`\n            }\n        </React.Fragment>\n    )\n};\n\nexport default TestUseClock;\n```\n\n"})})}},tags:["autodocs"],argTypes:{}},demo={args:{},render:()=>(0,jsx_runtime.jsx)(components_TestUseClock,{})};demo.parameters={...demo.parameters,docs:{...demo.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: () => {\n    return <TestUseClock />;\n  }\n}",...demo.parameters?.docs?.source}}};const __namedExportsOrder=["demo"]}}]);