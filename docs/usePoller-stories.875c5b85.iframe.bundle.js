/*! For license information please see usePoller-stories.875c5b85.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_gaopeng123_hooks=self.webpackChunk_gaopeng123_hooks||[]).push([[198],{"./node_modules/.pnpm/@gaopeng123+utils.types@1.1.14/node_modules/@gaopeng123/utils.types/dist/utils.types.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HD:()=>isString,J_:()=>isDate,Kn:()=>isObject,Qr:()=>isEmptyObject,VP:()=>isUTC,kJ:()=>isArray,kK:()=>isElement,mf:()=>isFunction,o8:()=>isUndefined,qb:()=>isValidDate,w1:()=>isIE});var toString=Object.prototype.toString,isObject=function isObject(val){return"[object Object]"===toString.call(null)?null!=val&&"[object Object]"===toString.call(val)&&void 0===val.ownerDocument:"[object Object]"===toString.call(val)},isArray=function isArray(val){return"isArray"in Array?Array.isArray(val):"[object Array]"===toString.call(val)},isString=function isString(val){return"string"==typeof val},isUndefined=function isUndefined(val){return void 0===val},isFunction=function isFunction(val){return"undefined"!=typeof document&&"function"==typeof document.getElementsByTagName("body")?!!val&&"[object Function]"===toString.call(val):!!val&&"function"==typeof val},isElement=function isElement(val){return!!val&&1===(null==val?void 0:val.nodeType)},isEmptyObject=function isEmptyObject(val){return"{}"===JSON.stringify(val)},isDate=function isDate(val){return"[object Date]"===toString.call(val)},isValidDate=function isValidDate(date){return date instanceof Date&&!isNaN(date.getTime())},isUTC=function isUTC(val){return!!isString(val)&&/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.\d{3}\+00:00$/.test(val)},check=function check(regex){return regex.test(navigator.userAgent.toLowerCase())},isOpera=function isOpera(){return check(/opera/)},isIE=function isIE(){return!isOpera()&&(check(/msie/)||check(/edge/))||!!window.ActiveXObject||"ActiveXObject"in window}},"./stories/usePoller.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>usePoller_stories,demo:()=>demo});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),hooks_use_poller_esm=__webpack_require__("./packages/usePoller/dist/hooks.use-poller.esm.js"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const TestUsePoller=props=>{const[time,startPoller,stopPoller]=(0,hooks_use_poller_esm.O)({delay:1200}),[asyncTime,startAsyncPoller,stopAsyncPoller]=(0,hooks_use_poller_esm.O)({delay:1200,immediate:!1,asyncCallBack:async params=>{if(console.log("params",params),!(params.time>1e4))return new Promise(((resolve,reject)=>{setTimeout((()=>{resolve(`我是参数: ${Date.now()}`)}),2e3)}));stopAsyncPoller()}});return(0,react.useEffect)((()=>{setTimeout((()=>{startAsyncPoller()}),2e3),setTimeout((()=>{stopPoller(),setTimeout((()=>{startPoller()}),2e3)}),10009)}),[]),(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("h3",{children:"usePoller"}),time,(0,jsx_runtime.jsx)("h3",{children:"异步usePoller"}),asyncTime]})};TestUsePoller.displayName="TestUsePoller";const components_TestUsePoller=TestUsePoller;try{TestUsePoller.displayName="TestUsePoller",TestUsePoller.__docgenInfo={description:"",displayName:"TestUsePoller",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example/components/TestUsePoller.tsx#TestUsePoller"]={docgenInfo:TestUsePoller.__docgenInfo,name:"TestUsePoller",path:"example/components/TestUsePoller.tsx#TestUsePoller"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/.pnpm/@storybook+blocks@7.4.2_74b3ggvk3akyhuq4eydyx3fqim/node_modules/@storybook/blocks/dist/index.mjs");const usePoller_stories={title:"Example/usePoller",component:hooks_use_poller_esm.O,parameters:{layout:"centered",docs:{page:()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(dist.UG,{children:"# usePoller\n\n`(props: PollerProps): [number, () => void, () => void]`\n\n>轮询器,包括同步轮询，异步轮询\n>\n>[在线demo](https://ligaopeng123-npm.github.io/hooks/?path=/story/example-usepoller--demo)\n\n## 参数\n\n```typescript\ntype PollerMark = {\n    states: string | number;\n    props?: any; // 上次callBack、asyncCallBack返回的结果\n    time: number; // 执行时间\n    startStamp: number; // 轮询开始时间\n    currentStamp: number; // 当前时刻\n    endStamp: number; // 轮询结束时间\n}\n\ntype PollerProps = {\n    delay?: number; // 执行时间\n    immediate?: boolean; // 是否立即执行 还是由startPoller开启 默认立即执行\n    callBack?: (args: PollerMark) => void; // 执行回调\n    asyncCallBack?: (args: PollerMark) => Promise<any>; // 异步回调器\n}\n```\n\n> [!WARNING]\n> **此处需要注意，调用轮询器stopPoller后需要return，才能停止**\n\n```typescript\n// 同步轮询\nconst [time, startPoller, stopPoller] = usePoller({\n    delay: 5000, callBack: (params: PollerMark) => {\n        if (params.time > 10000) {\n            stopPoller();\n            return;// TODO 此处需要return; 否则无法停止\n        }\n    }\n});\n\n```\n\n```typescript\n// 异步轮询\nconst [asyncTime, startAsyncPoller, stopAsyncPoller] = usePoller({\n    delay: 5000,\n    asyncCallBack: async (params) => {\n        // 满足条件时 停止计时器 return即可\n        if (params.time > 10000) {\n            stopAsyncPoller();\n            return; // TODO 此处需要return; 否则无法停止\n        }\n        return new Promise((resolve, reject) => {\n            setTimeout(() => {\n                resolve(`我是参数: ${Date.now()}`)\n            }, 2000)\n        });\n    }\n});\n```\n\n## Usage\n\n```tsx\nimport React, {useEffect} from 'react';\nimport {usePoller} from \"@gaopeng123/hooks.use-poller\";\n\ntype TestUsePollerProps = {};\nconst TestUsePoller: React.FC<TestUsePollerProps> = (props) => {\n\tconst [time, startPoller, stopPoller] = usePoller({delay: 1200});\n\tconst [asyncTime, startAsyncPoller, stopAsyncPoller] = usePoller({\n\t\tdelay: 1200,\n\t\timmediate: false,\n\t\tasyncCallBack: async (params) => {\n\t\t\tconsole.log('params', params);\n\t\t\tif (params.time > 10000) {\n\t\t\t\tstopAsyncPoller();\n\t\t\t\treturn;\n\t\t\t}\n\t\t\treturn new Promise((resolve, reject) => {\n\t\t\t\tsetTimeout(() => {\n\t\t\t\t\tresolve(`我是参数: ${Date.now()}`)\n\t\t\t\t}, 2000)\n\t\t\t});\n\t\t}\n\t});\n\n\tuseEffect(() => {\n\t\tsetTimeout(() => {\n\t\t\tstartAsyncPoller();\n\t\t}, 2000);\n\n\t\tsetTimeout(() => {\n\t\t\tstopPoller();\n\t\t\tsetTimeout(() => {\n\t\t\t\tstartPoller();\n\t\t\t}, 2000)\n\t\t}, 10009);\n\t}, []);\n\treturn (\n\t\t<React.Fragment>\n\t\t\t<h3>usePoller</h3>\n\t\t\t{\n\t\t\t\ttime\n\t\t\t}\n\t\t\t<h3>异步usePoller</h3>\n\t\t\t{\n\t\t\t\tasyncTime\n\t\t\t}\n\t\t</React.Fragment>\n\t)\n};\n\nexport default TestUsePoller;\n\n```\n\n"})})}},tags:["autodocs"],argTypes:{}},demo={args:{},render:()=>(0,jsx_runtime.jsx)(components_TestUsePoller,{})};demo.parameters={...demo.parameters,docs:{...demo.parameters?.docs,source:{originalSource:"{\n  args: {},\n  render: () => {\n    return <TestUsePoller />;\n  }\n}",...demo.parameters?.docs?.source}}};const __namedExportsOrder=["demo"]},"./packages/usePoller/dist/hooks.use-poller.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>usePoller});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),_gaopeng123_utils_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@gaopeng123+utils.types@1.1.14/node_modules/@gaopeng123/utils.types/dist/utils.types.esm.js");function _regeneratorRuntime(){_regeneratorRuntime=function(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var usePoller=function usePoller(props){var delay=props.delay,callBack=props.callBack,asyncCallBack=props.asyncCallBack,immediate=props.immediate,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Date.now()),dateStamp=_useState[0],setDateStamp=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({states:!1===immediate?"stop":0,time:0,startStamp:dateStamp,currentStamp:dateStamp,endStamp:dateStamp}),pollMark=_useState2[0],setPollMark=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if("stop"===pollMark.states)return function(){};var timeout,res,getTimeout=function getTimeout(timeoutCallBack){return setTimeout((function(){var currentStamp=Date.now();setDateStamp(currentStamp),timeoutCallBack(currentStamp)}),delay||5e3)};if(asyncCallBack)return(_anyNameFunction=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){var res;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,asyncCallBack(pollMark);case 2:res=_context.sent,(0,_gaopeng123_utils_types__WEBPACK_IMPORTED_MODULE_1__.o8)(res)||(timeout=getTimeout((function(currentStamp){setPollMark(Object.assign({},pollMark,{states:timeout,props:res,currentStamp,time:currentStamp-pollMark.startStamp}))})));case 4:case"end":return _context.stop()}}),_callee)}))),function anyNameFunction(){return _anyNameFunction.apply(this,arguments)})(),function(){clearTimeout(timeout)};callBack&&(0,_gaopeng123_utils_types__WEBPACK_IMPORTED_MODULE_1__.mf)(callBack)&&(res=callBack(pollMark));var _anyNameFunction,_timeout=getTimeout((function(currentStamp){setPollMark(Object.assign({},pollMark,{states:_timeout,currentStamp,time:currentStamp-pollMark.startStamp,props:res}))}));return function(){clearTimeout(_timeout)}}),[pollMark.states]),[dateStamp,function(){var startStamp=Date.now();setPollMark(Object.assign({},pollMark,{states:"start",startStamp,endStamp:startStamp,time:0}))},function(){var endStamp=Date.now();setPollMark(Object.assign({},pollMark,{states:"stop",endStamp,time:endStamp-pollMark.startStamp}))}]}},"./node_modules/.pnpm/react@17.0.2/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);