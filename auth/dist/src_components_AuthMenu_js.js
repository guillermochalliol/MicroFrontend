"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkauth"] = self["webpackChunkauth"] || []).push([["src_components_AuthMenu_js"],{

/***/ "./src/components/AuthMenu.js":
/*!************************************!*\
  !*** ./src/components/AuthMenu.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/MenuItem */ \"./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Menu */ \"./node_modules/@mui/material/Menu/Menu.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Tooltip */ \"./node_modules/@mui/material/Tooltip/Tooltip.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _context_GlobalAuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalAuthContext */ \"./src/context/GlobalAuthContext.js\");\n/* harmony import */ var _navigation_routes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigation/routes.js */ \"./src/navigation/routes.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction AuthMenu() {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null),\n      _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorElUser = _React$useState2[0],\n      setAnchorElUser = _React$useState2[1];\n\n  var authProv = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_context_GlobalAuthContext__WEBPACK_IMPORTED_MODULE_3__.GlobalAuthContext);\n\n  var handleCloseUserMenu = function handleCloseUserMenu() {\n    setAnchorElUser(null);\n  };\n\n  var handleOpenUserMenu = function handleOpenUserMenu(event) {\n    setAnchorElUser(event.currentTarget);\n  };\n\n  console.log(authProv.user);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    sx: {\n      flexGrow: 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: \"Open settings\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onClick: handleOpenUserMenu,\n    sx: {\n      p: 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    alt: \"Remy Sharp\",\n    src: \"\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    sx: {\n      mt: '45px'\n    },\n    id: \"menu-appbar\",\n    anchorEl: anchorElUser,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'right'\n    },\n    keepMounted: true,\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'right'\n    },\n    open: Boolean(anchorElUser),\n    onClose: handleCloseUserMenu\n  }, Object.values(_navigation_routes_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).filter(function (route) {\n    return route.auth == true;\n  }).map(function (route) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      key: \"1\",\n      onClick: handleCloseUserMenu\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n      key: route.id,\n      onClick: handleCloseUserMenu,\n      className: \"link white\",\n      to: \"/\".concat(route.url)\n    }, route.label));\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthMenu);\n\n//# sourceURL=webpack://auth/./src/components/AuthMenu.js?");

/***/ }),

/***/ "./src/context/GlobalAuthContext.js":
/*!******************************************!*\
  !*** ./src/context/GlobalAuthContext.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalAuthContext\": function() { return /* binding */ GlobalAuthContext; },\n/* harmony export */   \"default\": function() { return /* binding */ GlobalAuthContextProvider; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/firebase */ \"./src/data/firebase.js\");\n\n\n\nvar GlobalAuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction GlobalAuthContextProvider(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      user = _useState2[0],\n      setUser = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    _data_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.onAuthStateChanged(setUser);\n  }, []);\n  var authProv = {\n    auth: _data_firebase__WEBPACK_IMPORTED_MODULE_2__.auth,\n    db: _data_firebase__WEBPACK_IMPORTED_MODULE_2__.db,\n    signInWithGoogle: _data_firebase__WEBPACK_IMPORTED_MODULE_2__.signInWithGoogle,\n    signIn: _data_firebase__WEBPACK_IMPORTED_MODULE_2__.signIn,\n    signUp: _data_firebase__WEBPACK_IMPORTED_MODULE_2__.signUp,\n    passwordReset: _data_firebase__WEBPACK_IMPORTED_MODULE_2__.passwordReset,\n    logOut: _data_firebase__WEBPACK_IMPORTED_MODULE_2__.logOut,\n    user: user\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(GlobalAuthContext.Provider, {\n    value: authProv\n  }, props.children);\n}\n\n//# sourceURL=webpack://auth/./src/context/GlobalAuthContext.js?");

/***/ }),

/***/ "./src/data/firebase.js":
/*!******************************!*\
  !*** ./src/data/firebase.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": function() { return /* binding */ auth; },\n/* harmony export */   \"db\": function() { return /* binding */ db; },\n/* harmony export */   \"logOut\": function() { return /* binding */ logOut; },\n/* harmony export */   \"passwordReset\": function() { return /* binding */ passwordReset; },\n/* harmony export */   \"signIn\": function() { return /* binding */ signIn; },\n/* harmony export */   \"signInWithGoogle\": function() { return /* binding */ signInWithGoogle; },\n/* harmony export */   \"signUp\": function() { return /* binding */ signUp; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n// Import the functions you need from the SDKs you need\n\n\n // Your web app's Firebase configuration\n\nvar firebaseConfig = {\n  apiKey: \"AIzaSyBQqYuOt_s8C1AyRIPF5ZaPQXMqX_MwEPU\",\n  authDomain: \"auth-api-9da58.firebaseapp.com\",\n  databaseURL: \"https://auth-api-9da58-default-rtdb.firebaseio.com\",\n  projectId: \"auth-api-9da58\",\n  storageBucket: \"auth-api-9da58.appspot.com\",\n  messagingSenderId: \"660490876617\",\n  appId: \"1:660490876617:web:07c6bc84757f7fbb9c7f18\"\n}; // Initialize Firebase\n\nvar app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(firebaseConfig);\nvar db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(app);\nvar auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(app);\nvar googleProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider(); // Auth Functions\n\nvar signUp = /*#__PURE__*/function () {\n  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(firstName, lastName, email, password) {\n    var userCredential, user, newUser;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(auth, email, password);\n\n          case 3:\n            userCredential = _context.sent;\n            user = userCredential.user;\n            newUser = {\n              uid: user.uid,\n              firstName: firstName,\n              lastName: lastName,\n              authProvider: \"local\",\n              email: email\n            };\n            _context.next = 8;\n            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"users\"), {\n              newUser: newUser\n            });\n\n          case 8:\n            return _context.abrupt(\"return\", newUser);\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0.message);\n\n          case 14:\n            ;\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 11]]);\n  }));\n\n  return function signUp(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar signInWithGoogle = /*#__PURE__*/function () {\n  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n    var res, user, q, docs;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(auth, googleProvider);\n\n          case 3:\n            res = _context2.sent;\n            user = res.user;\n            q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"users\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.where)(\"uid\", \"==\", user.uid));\n            _context2.next = 8;\n            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(q);\n\n          case 8:\n            docs = _context2.sent;\n\n            if (!(docs.docs.length === 0)) {\n              _context2.next = 12;\n              break;\n            }\n\n            _context2.next = 12;\n            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"users\"), {\n              uid: user.uid,\n              name: user.displayName,\n              authProvider: \"google\",\n              email: user.email\n            });\n\n          case 12:\n            _context2.next = 18;\n            break;\n\n          case 14:\n            _context2.prev = 14;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.error(_context2.t0);\n            alert(_context2.t0.message);\n\n          case 18:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 14]]);\n  }));\n\n  return function signInWithGoogle() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar signIn = /*#__PURE__*/function () {\n  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(email, password) {\n    var userCredential, user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(auth, email, password);\n\n          case 3:\n            userCredential = _context3.sent;\n            user = userCredential.user;\n            return _context3.abrupt(\"return\", true);\n\n          case 8:\n            _context3.prev = 8;\n            _context3.t0 = _context3[\"catch\"](0);\n            return _context3.abrupt(\"return\", {\n              error: _context3.t0.message\n            });\n\n          case 11:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 8]]);\n  }));\n\n  return function signIn(_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nvar passwordReset = /*#__PURE__*/function () {\n  var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(email) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.prev = 0;\n            _context4.next = 3;\n            return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.sendPasswordResetEmail)(auth, email);\n\n          case 3:\n            alert(\"Password reset link sent!\");\n            _context4.next = 10;\n            break;\n\n          case 6:\n            _context4.prev = 6;\n            _context4.t0 = _context4[\"catch\"](0);\n            console.error(_context4.t0);\n            alert(_context4.t0.message);\n\n          case 10:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[0, 6]]);\n  }));\n\n  return function passwordReset(_x7) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\nvar logOut = /*#__PURE__*/function () {\n  var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.prev = 0;\n            _context5.next = 3;\n            return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(auth);\n\n          case 3:\n            return _context5.abrupt(\"return\", true);\n\n          case 6:\n            _context5.prev = 6;\n            _context5.t0 = _context5[\"catch\"](0);\n            return _context5.abrupt(\"return\", false);\n\n          case 9:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5, null, [[0, 6]]);\n  }));\n\n  return function logOut() {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\n\n\n//# sourceURL=webpack://auth/./src/data/firebase.js?");

/***/ }),

/***/ "./src/navigation/routes.js":
/*!**********************************!*\
  !*** ./src/navigation/routes.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Login = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_emotion_cache_dist_emotion-cache_browser_esm_js\"), __webpack_require__.e(\"vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_firebase_app_dist_index_-07bff9\"), __webpack_require__.e(\"vendors-node_modules_emotion_memoize_dist_emotion-memoize_browser_esm_js-node_modules_mui_mat-93459e\"), __webpack_require__.e(\"vendors-node_modules_mui_icons-material_LockOutlined_js-node_modules_mui_material_Button_Butt-f47c3b\"), __webpack_require__.e(\"webpack_sharing_consume_default_emotion_react_emotion_react\"), __webpack_require__.e(\"webpack_sharing_consume_default_emotion_styled_emotion_styled-webpack_sharing_consume_default-fa8ade\"), __webpack_require__.e(\"src_components_Login_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Login */ \"./src/components/Login.js\"));\n});\nvar Register = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_emotion_cache_dist_emotion-cache_browser_esm_js\"), __webpack_require__.e(\"vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_firebase_app_dist_index_-07bff9\"), __webpack_require__.e(\"vendors-node_modules_emotion_memoize_dist_emotion-memoize_browser_esm_js-node_modules_mui_mat-93459e\"), __webpack_require__.e(\"vendors-node_modules_mui_icons-material_LockOutlined_js-node_modules_mui_material_Button_Butt-f47c3b\"), __webpack_require__.e(\"webpack_sharing_consume_default_emotion_react_emotion_react\"), __webpack_require__.e(\"webpack_sharing_consume_default_emotion_styled_emotion_styled-webpack_sharing_consume_default-fa8ade\"), __webpack_require__.e(\"src_components_Register_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Register */ \"./src/components/Register.js\"));\n});\nvar routes = {\n  Register: {\n    id: 1,\n    url: \"sign-up\",\n    label: \"Register\",\n    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Register, null)),\n    auth: true\n  },\n  Login: {\n    id: 2,\n    url: \"sign-in\",\n    label: \"Login\",\n    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Login, null)),\n    auth: true\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack://auth/./src/navigation/routes.js?");

/***/ })

}]);