/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Dog.ts":
/*!********************!*\
  !*** ./src/Dog.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dog)
/* harmony export */ });
class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    bark() {
        console.log('Woh!');
    }
}


/***/ }),

/***/ "./src/ShelterDog.ts":
/*!***************************!*\
  !*** ./src/ShelterDog.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShelterDog)
/* harmony export */ });
/* harmony import */ var _Dog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dog */ "./src/Dog.ts");

class ShelterDog extends _Dog__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(name, breed, age, shelter) {
        super(name, breed, age);
        this.shelter = shelter;
    }
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "multiply": () => (/* binding */ multiply)
/* harmony export */ });
function add(x, y) {
    return x + y;
}
function divide(x, y) {
    return x / y;
}
function multiply(x, y) {
    return x * y;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dog */ "./src/Dog.ts");
/* harmony import */ var _ShelterDog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShelterDog */ "./src/ShelterDog.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");



console.log('相加', (0,_utils__WEBPACK_IMPORTED_MODULE_2__.add)(1, 2));
const myDog = new _Dog__WEBPACK_IMPORTED_MODULE_0__["default"]('Cutie', 'Husky', 10);
const mySchelterDog = new _ShelterDog__WEBPACK_IMPORTED_MODULE_1__["default"]('Albert', 'Border', 7, 'City Schelter');
myDog.bark();
mySchelterDog.bark();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWUsTUFBTSxHQUFHO0lBQ3RCLFlBQW1CLElBQVksRUFBUyxLQUFhLEVBQVMsR0FBVztRQUF0RCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFFBQUcsR0FBSCxHQUFHLENBQVE7SUFBRyxDQUFDO0lBQzdFLElBQUk7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMc0I7QUFFUixNQUFNLFVBQVcsU0FBUSw0Q0FBRztJQUN6QyxZQUNFLElBQVksRUFDWixLQUFhLEVBQ2IsR0FBVyxFQUNKLE9BQWU7UUFFdEIsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDO1FBRmhCLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFHeEIsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hNLFNBQVMsR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFDZCxDQUFDO0FBRU0sU0FBUyxNQUFNLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUNkLENBQUM7QUFFTSxTQUFTLFFBQVEsQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQ2QsQ0FBQzs7Ozs7OztVQ1ZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ051QjtBQUNlO0FBRVM7QUFFL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsMkNBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFNUIsTUFBTSxLQUFLLEdBQUcsSUFBSSw0Q0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDO0FBRTNDLE1BQU0sYUFBYSxHQUFHLElBQUksbURBQVcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxlQUFlLENBQUM7QUFFN0UsS0FBSyxDQUFDLElBQUksRUFBRTtBQUVaLGFBQWEsQ0FBQyxJQUFJLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrYW5kdHlwZXNjcmlwdC8uL3NyYy9Eb2cudHMiLCJ3ZWJwYWNrOi8vd2VicGFja2FuZHR5cGVzY3JpcHQvLi9zcmMvU2hlbHRlckRvZy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrYW5kdHlwZXNjcmlwdC8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrYW5kdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrYW5kdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFja2FuZHR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrYW5kdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2thbmR0eXBlc2NyaXB0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERvZyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBicmVlZDogc3RyaW5nLCBwdWJsaWMgYWdlOiBudW1iZXIpIHt9XG4gIGJhcmsoKSB7XG4gICAgY29uc29sZS5sb2coJ1dvaCEnKVxuICB9XG59XG4iLCJpbXBvcnQgRG9nIGZyb20gJy4vRG9nJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGVsdGVyRG9nIGV4dGVuZHMgRG9nIHtcbiAgY29uc3RydWN0b3IoXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGJyZWVkOiBzdHJpbmcsXG4gICAgYWdlOiBudW1iZXIsXG4gICAgcHVibGljIHNoZWx0ZXI6IHN0cmluZyxcbiAgKSB7XG4gICAgc3VwZXIobmFtZSwgYnJlZWQsIGFnZSlcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICByZXR1cm4geCArIHlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICByZXR1cm4geCAvIHlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gIHJldHVybiB4ICogeVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRG9nIGZyb20gJy4vRG9nJ1xuaW1wb3J0IFNjaGVsdGVyRG9nIGZyb20gJy4vU2hlbHRlckRvZydcblxuaW1wb3J0IHsgYWRkLCBkaXZpZGUsIG11bHRpcGx5IH0gZnJvbSAnLi91dGlscydcblxuY29uc29sZS5sb2coJ+ebuOWKoCcsIGFkZCgxLCAyKSlcblxuY29uc3QgbXlEb2cgPSBuZXcgRG9nKCdDdXRpZScsICdIdXNreScsIDEwKVxuXG5jb25zdCBteVNjaGVsdGVyRG9nID0gbmV3IFNjaGVsdGVyRG9nKCdBbGJlcnQnLCAnQm9yZGVyJywgNywgJ0NpdHkgU2NoZWx0ZXInKVxuXG5teURvZy5iYXJrKClcblxubXlTY2hlbHRlckRvZy5iYXJrKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==