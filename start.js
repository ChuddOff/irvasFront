/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./js/modal.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./js/tabs.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer */ \"./js/timer.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.modals)();\r\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__.tabs)();\r\n    (0,_timer__WEBPACK_IMPORTED_MODULE_2__.timer)();\r\n})\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modals: () => (/* binding */ modals)\n/* harmony export */ });\nconst modals = () => {\r\n    \r\n    function buildModal(headerbutton, modal, close) {\r\n        const headerbuttonmodel = document.querySelector(modal),\r\n            headerbuttonexit = document.querySelector(close);\r\n\r\n        function overCreate(event) {\r\n            if (headerbutton.parentElement.parentElement.parentElement.parentElement.classList.contains('.popup_calc_end')) {\r\n                createFet(event, `${modal} div div div form input[name=\"user_name\"]`, `${modal} div div div form input[name=\"user_phone\"]`, `${modal} div div div form p`)\r\n            } else {\r\n                createFetExtensive(event, `${modal} div div div form input[name=\"user_name\"]`, `${modal} div div div form input[name=\"user_phone\"]`, `${modal} div div div form p`)\r\n            }\r\n        }\r\n        \r\n        headerbutton.addEventListener('click', (e) => {\r\n            if (e.target) {\r\n                e.preventDefault();\r\n            }\r\n\r\n            const buttonSubmit = document.querySelector(`${modal} div div div form button`);\r\n            if (buttonSubmit) {\r\n                buttonSubmit.addEventListener('click', (event) => {\r\n                    overCreate(event);\r\n                })\r\n            }\r\n                \r\n            // document.body.style.overflow = 'hidden';\r\n            headerbuttonmodel.style.display = \"block\";\r\n\r\n\r\n            if (localStorage.getItem('type')) {\r\n                Array.from(document.querySelector('.big_img').children)[localStorage.getItem('type')].style.display = 'block';\r\n            }\r\n            if (localStorage.getItem('width')) {\r\n                document.querySelector('#width').value = localStorage.getItem('width');\r\n            }\r\n            if (localStorage.getItem('height')) {\r\n                document.querySelector('#height').value = localStorage.getItem('height');\r\n            }\r\n            if (localStorage.getItem('temp')) {\r\n                document.querySelectorAll('.checkbox')[localStorage.getItem('temp')].checked = true;\r\n            }\r\n            if (headerbutton.classList.contains('popup_calc_btn')) {\r\n                localStorage.setItem('glass', headerbutton.parentElement.parentElement.parentElement.classList.item(1));\r\n            }\r\n            })\r\n\r\n        headerbuttonexit.addEventListener('click', (e) => {\r\n            if (e.target) {\r\n                e.preventDefault();\r\n            }\r\n            document.body.style.overflow = '';\r\n            headerbuttonmodel.style.display = \"none\";\r\n\r\n            const buttonSubmit = document.querySelector(`${modal} div div div form button`);\r\n            if (buttonSubmit) {\r\n                buttonSubmit.removeEventListener('click', (event) => {\r\n                    overCreate(event);\r\n                }) \r\n            }\r\n        })\r\n        headerbuttonmodel.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            if (e.target === headerbuttonmodel) {\r\n                document.body.style.overflow = '';\r\n                headerbuttonmodel.style.display = \"none\";\r\n\r\n                const buttonSubmit = document.querySelector(`${modal} div div div form button`);\r\n                if (buttonSubmit) {\r\n                    buttonSubmit.removeEventListener('click', (event) => {\r\n                        overCreate(event);\r\n                    })\r\n                }\r\n            }\r\n        })\r\n    }\r\n\r\n    function modalTime(modal, t) {\r\n        function overCreate(event) {\r\n            createFet(event, `${modal} div div div form input[name=\"user_name\"]`, `${modal} div div div form input[name=\"user_phone\"]`, `${modal} div div div form p`)\r\n        }\r\n        const headerbuttonmodel = document.querySelector(modal);\r\n        setTimeout(() => {\r\n            // document.body.style.overflow = 'hidden';\r\n            headerbuttonmodel.style.display = \"block\";\r\n            document.querySelector(`${modal} div div div form button`).addEventListener('click', (event) => {\r\n                overCreate(event);\r\n            })\r\n        }, t)\r\n    }\r\n\r\n    async function createFet(event, namesel, telsel, noticesel) {\r\n        event.preventDefault();\r\n\r\n        const name = document.querySelector(namesel),\r\n            phone = document.querySelector(telsel),\r\n            notice = document.querySelector(noticesel);\r\n\r\n        const litePhone = +phone.value.replace(/[\\s+-]/g, '')\r\n        // if (isNaN(litePhone)) {\r\n        //     notice.textContent = 'Введёт невалидный номер телефона!'\r\n        //     return\r\n        // }\r\n        if (name.value && phone.value.length == 22) {\r\n            try {\r\n                const fet = await fetch('https://irvas-back-4g64.vercel.app/api/zamer/go', {\r\n                    method: 'POST',\r\n                    headers: {\r\n                        'Content-Type': 'application/json'\r\n                    },\r\n                    body: JSON.stringify({\r\n                        name: name.value,\r\n                        tel: phone.value.replace(/\\D/g, '')\r\n                    })\r\n                })\r\n                if (fet.ok) {\r\n                    console.log('Успех!');\r\n                    notice.textContent = 'Успешно! Ждите звонка.'\r\n                } else {\r\n                    notice.textContent = 'Осечка! Попробуйте ещё раз.'\r\n                    console.log(\"Всё не занесено 321\")\r\n                }\r\n            }\r\n            catch (e) {\r\n                notice.textContent = 'Осечка! Попробуйте ещё раз.'\r\n                console.log('Ошибка при отправке данных', e);\r\n            }\r\n            name.value = \"\";\r\n            phone.value = \"\";\r\n        }\r\n    }\r\n\r\n    async function createFetExtensive(event, namesel, telsel, noticesel) {\r\n        event.preventDefault();\r\n\r\n        const name = document.querySelector(namesel),\r\n            phone = document.querySelector(telsel),\r\n            notice = document.querySelector(noticesel);\r\n\r\n        if (name.value && phone.value.length == 22) {\r\n            try {\r\n                const fet = await fetch('https://irvas-back-4g64.vercel.app/api/zamer/goExtensive', {\r\n                    method: 'POST',\r\n                    headers: {\r\n                        'Content-Type': 'application/json'\r\n                    },\r\n                    body: JSON.stringify({\r\n                        name: name.value,\r\n                        tel: phone.value.replace(/\\D/g, ''),\r\n                        type: localStorage.getItem('type'),\r\n                        width: localStorage.getItem('width'),\r\n                        height: localStorage.getItem('height'),\r\n                        glass: localStorage.getItem('glass'),\r\n                        glass2: localStorage.getItem('glass2')\r\n                    })\r\n                })\r\n                if (fet.ok) {\r\n                    console.log('Успех!');\r\n                    notice.textContent = 'Успешно! Ждите звонка.'\r\n                } else {\r\n                    notice.textContent = 'Осечка! Попробуйте ещё раз.'\r\n                    console.log(\"Всё не занесено 321\")\r\n                }\r\n            }\r\n            catch (e) {\r\n                notice.textContent = 'Осечка! Попробуйте ещё раз.'\r\n                console.log('Ошибка при отправке данных', e);\r\n            }\r\n            name.value = \"\";\r\n            phone.value = \"\";\r\n            localStorage.clear();\r\n        }\r\n        }\r\n        \r\n    buildModal(document.querySelector('.header_btn_wrap'), '.popup_engineer', '.popup_engineer .popup_close');\r\n    buildModal(document.querySelector('.contact_us_wrap .phone_link'), '.popup', '.popup .popup_close');\r\n    buildModal(document.querySelector('.popup_calc_button'), '.popup_calc_profile', '.popup_calc_profile_close');\r\n    buildModal(document.querySelector('.popup_calc_profile_button'), '.popup_calc_end', '.popup_calc_end_close');\r\n    modalTime('.popup', 60000)\r\n\r\n    // const glaz = document.querySelector('.glazing .container').children\r\n    // for (let elNum=2; elNum < glaz.length; elNum++) {\r\n    //     buildModal(`.${glaz[elNum].classList[0]} div:nth-child(1) > div.glazing_price > button`, '.popup_calc', '.popup_calc div div button.popup_calc_close');\r\n    //     if (elNum != 4) {\r\n    //         buildModal(`.${glaz[elNum].classList[0]} div:nth-child(2) div.glazing_price button`, '.popup_calc', '.popup_calc div div button.popup_calc_close');\r\n    //     }\r\n    // }\r\n    document.querySelectorAll('.popup_calc_btn').forEach(el => {\r\n        buildModal(el, '.popup_calc', '.popup_calc div div button.popup_calc_close');\r\n    })\r\n\r\n    document.querySelector('main div div div form button').addEventListener('click', (event) => {\r\n        createFet(event, 'main div div div form input[name=\"user_name\"]', 'main div div div form input[name=\"user_phone\"]', `main div div div form p`)\r\n    })\r\n\r\n    for (let el of document.querySelector('.decoration_content .row').children) {\r\n        document.querySelector(`.${el.classList} div form button`).addEventListener('click', (event) => {\r\n            createFet(event, `.${el.classList} div form input[name=\"user_name\"]`, `.${el.classList} div form input[name=\"user_phone\"]`, `main div div div form p`)\r\n        })\r\n    }\r\n\r\n    document.querySelector('.sale div div div form button').addEventListener('click', (event) => {\r\n        createFet(event, '.sale div div div form input[name=\"user_name\"]', '.sale div div div form input[name=\"user_phone\"]', `main div div div form p`)\r\n    })\r\n\r\n    document.querySelector('.popup_calc_end div div div form button').addEventListener('click', (event) => {\r\n        createFet(event, '.popup_calc_end div div div form input[name=\"user_name\"]', '.popup_calc_end div div div form input[name=\"user_phone\"]', `main div div div form p`)\r\n    })\r\n\r\n    document.querySelectorAll('input[name=\"user_phone\"]').forEach(el => {\r\n        el.addEventListener('input', (e) => {\r\n            const cusor = e.target.selectionStart;\r\n\r\n            const x = e.target.value.replace(/\\D/g, '').match(/(\\d{0,1})(\\d{0,3})(\\d{0,3})(\\d{0,2})(\\d{0,2})/);\r\n            // e.target.value = x[2] ? '+'+x[1]+' ('+x[2]+') '+x[3]+' - '+x[4]+' - '+x[5] : '+'+x[1];\r\n            \r\n            if (x[4] && x[5].length!=0) {\r\n                e.target.value = '+'+x[1]+' ('+x[2]+') '+x[3]+' - '+x[4]+' - '+x[5]\r\n            }\r\n            else if (x[3] && x[4].length!=0) {\r\n                e.target.value = '+'+x[1]+' ('+x[2]+') '+x[3]+' - '+x[4]\r\n            }\r\n            else if (x[2] && x[3].length!=0) {\r\n                e.target.value = '+'+x[1]+' ('+x[2]+') '+x[3]\r\n            }\r\n            else if (x[1] && x[2].length!=0) {\r\n                e.target.value = '+'+x[1]+' ('+x[2]\r\n            } else {\r\n                e.target.value = '+'+x[1]\r\n            }\r\n\r\n            // e.target.setSelectionRange(cusor, cusor);\r\n        })\r\n        el.addEventListener('click', (e) => {\r\n            if (e.target.value == '') {\r\n                e.target.value = '+7'\r\n            }\r\n        })\r\n    })\r\n\r\n\r\n\r\n    const formCover = document.querySelectorAll('.balcon_icons_img'),\r\n          formBig = document.querySelector('.big_img').children;\r\n\r\n    formCover.forEach(el => {\r\n        el.addEventListener('click', (e)=> {\r\n            Array.from(formBig).forEach(formEl => {\r\n                formEl.style.display = 'none';\r\n            })\r\n            const index = Array.from(formCover).indexOf(el);\r\n            Array.from(formBig)[index].style.display = 'block';\r\n            localStorage.setItem('type', index);\r\n        })\r\n    })\r\n    const width = document.querySelector('#width'),\r\n          height = document.querySelector('#height'),\r\n          submitButton = document.querySelector('.popup_calc_button'),\r\n          popupProfile = document.querySelector('.popup_calc_profile'),\r\n          popupCalc = document.querySelector('.popup_calc');\r\n\r\n    function isNumber(n) {\r\n        return n == n.replace(/\\D/g, '');\r\n    }\r\n    submitButton.addEventListener('click', (e) => {\r\n        if (isNumber(width.value) && isNumber(height.value) && width.value && height.value && localStorage.getItem('type')) {\r\n            popupCalc.style.display = 'none';\r\n            localStorage.setItem('width', width.value);\r\n            localStorage.setItem('height', height.value);\r\n        } else {\r\n            popupProfile.style.display = 'none';\r\n        }\r\n    })\r\n\r\n    const submitButton2 = document.querySelector('.popup_calc_profile_button'),\r\n          popupEnd = document.querySelector('.popup_calc_end'),\r\n          formControl = document.querySelector('#view_type');\r\n    submitButton2.addEventListener('click', (e) => {\r\n        if (localStorage.getItem('temp')) {\r\n            popupProfile.style.display = 'none';\r\n            localStorage.setItem('glass2', formControl.value);\r\n        } else {\r\n            popupEnd.style.display = 'none'\r\n        }\r\n    })\r\n\r\n    const check = document.querySelectorAll('.checkbox-custom'),\r\n          checkRight = document.querySelectorAll('.checkbox');\r\n    check.forEach(el => {\r\n        el.addEventListener('click', (e) => {\r\n            const index = Array.from(check).indexOf(el);\r\n            localStorage.setItem('temp', index);\r\n            checkRight.forEach(el2 => {el2.checked = false});\r\n            checkRight[index].checked = true;\r\n        })\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modal.js?");

/***/ }),

/***/ "./js/tabs.js":
/*!********************!*\
  !*** ./js/tabs.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tabs: () => (/* binding */ tabs)\n/* harmony export */ });\nconst tabs = () => {\r\n    function opencortab(tabsel, cortab, plus) {\r\n        const tabselector = document.querySelector(tabsel);\r\n        for(let el of tabselector.children) {\r\n            el.style.display = 'none';\r\n        }\r\n        if (plus) {\r\n            for (let i = 0; i < plus; i++) {\r\n                Array.from(tabselector.children)[i].style.display = 'block';\r\n            }\r\n        }\r\n        Array.from(tabselector.children)[cortab + plus].style.display = 'block';\r\n    }\r\n    function opentab(headers, tabs, plus = 0) {\r\n        const header = document.querySelectorAll(headers);\r\n        header.forEach(el => {\r\n            el.addEventListener('click', (e) => {\r\n                header.forEach(el2 => {\r\n                    el2.firstElementChild.classList.remove('after_click')\r\n                })\r\n                el.firstElementChild.classList.add('after_click')\r\n                opencortab(tabs, Array.from(header).indexOf(el), plus);\r\n            })\r\n        })\r\n\r\n    }\r\n    opentab('.decoration_item', '.decoration_content .row')\r\n    opentab('.glazing_block', '.glazing .container', 2)\r\n}\n\n//# sourceURL=webpack:///./js/tabs.js?");

/***/ }),

/***/ "./js/timer.js":
/*!*********************!*\
  !*** ./js/timer.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timer: () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = () => {\r\n    function timerActive(timeEnd, daysSel, hoursSel, minutesSel, secondsSel) {\r\n        const timeLast = timeEnd - new Date();\r\n        const days = Math.floor(timeLast / (1000 * 60 * 60 * 24)),\r\n            hours = Math.floor(timeLast % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),\r\n            minutes = Math.floor(timeLast % (1000 * 60 * 60) / (1000 * 60 )),\r\n            seconds = Math.floor(timeLast % (1000 * 60) / 1000);\r\n\r\n        \r\n            document.querySelector(daysSel).innerHTML = (days).toString().padStart(2, \"0\");\r\n            document.querySelector(hoursSel).innerHTML = (hours).toString().padStart(2, \"0\");;\r\n            document.querySelector(minutesSel).innerHTML = (minutes).toString().padStart(2, \"0\");;\r\n            document.querySelector(secondsSel).innerHTML = (seconds).toString().padStart(2, \"0\");;\r\n\r\n        if (timeLast <= 0) {\r\n            clearInterval(interval);\r\n        }\r\n    }\r\n\r\n    const timeNow = new Date(2024, 6, 1, 0, 0, 0)\r\n    const interval = setInterval(() => timerActive(timeNow, '#days', '#hours', '#minutes', '#seconds'), 500)\r\n}\n\n//# sourceURL=webpack:///./js/timer.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;