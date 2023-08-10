/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./example/components/test.worker.ts ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-restricted-globals */
self.onmessage = function (props) {
    // @ts-ignore
    self.postMessage("worker: ".concat(props.data));
};



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZV9jb21wb25lbnRzX3Rlc3Rfd29ya2VyX3RzLmluZGV4LmpzIiwibWFwcGluZ3MiOiJTQUFBO1NBQ0E7Ozs7O1VDREE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdEOzs7Ozs7Ozs7QUNOQSwwQ0FBMEM7QUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFDLEtBQUs7SUFDbkIsYUFBYTtJQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQVcsS0FBSyxDQUFDLElBQUksQ0FBRSxDQUFDO0FBQzdDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZ2FvcGVuZzEyMy9ob29rcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZ2FvcGVuZzEyMy9ob29rcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BnYW9wZW5nMTIzL2hvb2tzLy4vZXhhbXBsZS9jb21wb25lbnRzL3Rlc3Qud29ya2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cbnNlbGYub25tZXNzYWdlID0gKHByb3BzKSA9PiB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHNlbGYucG9zdE1lc3NhZ2UoYHdvcmtlcjogJHtwcm9wcy5kYXRhfWApXG59XG5cbmV4cG9ydCB7fVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9