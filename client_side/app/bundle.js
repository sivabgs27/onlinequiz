/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zone/lib/zone\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var platform_browser_dynamic_1 = __webpack_require__(18);
	var app_component_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./app.component\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var core_1 = __webpack_require__(21);
	var forms_1 = __webpack_require__(23);
	var http_1 = __webpack_require__(24);
	var app_routes_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./app.routes\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var angular2_jwt_1 = __webpack_require__(25);
	var auth_guard_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./common/auth.guard\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var sharedservice_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./sharedservice\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rxjs/Rx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	core_1.enableProdMode();
	platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [forms_1.disableDeprecatedForms(), forms_1.provideForms(), http_1.HTTP_PROVIDERS, app_routes_1.appRouterProviders, angular2_jwt_1.AUTH_PROVIDERS,
	    auth_guard_1.AuthGuard, sharedservice_1.sharedService]);
	//# sourceMappingURL=main.js.map

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./shim\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/core.dict\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/core.get-iterator-method\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/core.get-iterator\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/core.is-iterable\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/core.delay\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/core.function.part\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/core.object.is-object\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/core.object.classof\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/core.object.define\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/core.object.make\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/core.number.iterator\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/core.regexp.escape\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/core.string.escape-html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/core.string.unescape-html\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	module.exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/_core\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*! *****************************************************************************
	Copyright (C) Microsoft. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	var Reflect;
	(function (Reflect) {
	    "use strict";
	    // Load global or shim versions of Map, Set, and WeakMap
	    var functionPrototype = Object.getPrototypeOf(Function);
	    var _Map = typeof Map === "function" ? Map : CreateMapPolyfill();
	    var _Set = typeof Set === "function" ? Set : CreateSetPolyfill();
	    var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
	    // [[Metadata]] internal slot
	    var __Metadata__ = new _WeakMap();
	    /**
	      * Applies a set of decorators to a property of a target object.
	      * @param decorators An array of decorators.
	      * @param target The target object.
	      * @param targetKey (Optional) The property key to decorate.
	      * @param targetDescriptor (Optional) The property descriptor for the target key
	      * @remarks Decorators are applied in reverse order.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     C = Reflect.decorate(decoratorsArray, C);
	      *
	      *     // property (on constructor)
	      *     Reflect.decorate(decoratorsArray, C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.decorate(decoratorsArray, C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Object.defineProperty(C, "staticMethod",
	      *         Reflect.decorate(decoratorsArray, C, "staticMethod",
	      *             Object.getOwnPropertyDescriptor(C, "staticMethod")));
	      *
	      *     // method (on prototype)
	      *     Object.defineProperty(C.prototype, "method",
	      *         Reflect.decorate(decoratorsArray, C.prototype, "method",
	      *             Object.getOwnPropertyDescriptor(C.prototype, "method")));
	      *
	      */
	    function decorate(decorators, target, targetKey, targetDescriptor) {
	        if (!IsUndefined(targetDescriptor)) {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(target)) {
	                throw new TypeError();
	            }
	            else if (IsUndefined(targetKey)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(targetDescriptor)) {
	                throw new TypeError();
	            }
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
	        }
	        else if (!IsUndefined(targetKey)) {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(target)) {
	                throw new TypeError();
	            }
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
	        }
	        else {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsConstructor(target)) {
	                throw new TypeError();
	            }
	            return DecorateConstructor(decorators, target);
	        }
	    }
	    Reflect.decorate = decorate;
	    /**
	      * A default metadata decorator factory that can be used on a class, class member, or parameter.
	      * @param metadataKey The key for the metadata entry.
	      * @param metadataValue The value for the metadata entry.
	      * @returns A decorator function.
	      * @remarks
	      * If `metadataKey` is already defined for the target and target key, the
	      * metadataValue for that key will be overwritten.
	      * @example
	      *
	      *     // constructor
	      *     @Reflect.metadata(key, value)
	      *     class C {
	      *     }
	      *
	      *     // property (on constructor, TypeScript only)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         static staticProperty;
	      *     }
	      *
	      *     // property (on prototype, TypeScript only)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         property;
	      *     }
	      *
	      *     // method (on constructor)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         static staticMethod() { }
	      *     }
	      *
	      *     // method (on prototype)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         method() { }
	      *     }
	      *
	      */
	    function metadata(metadataKey, metadataValue) {
	        function decorator(target, targetKey) {
	            if (!IsUndefined(targetKey)) {
	                if (!IsObject(target)) {
	                    throw new TypeError();
	                }
	                targetKey = ToPropertyKey(targetKey);
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	            }
	            else {
	                if (!IsConstructor(target)) {
	                    throw new TypeError();
	                }
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, /*targetKey*/ undefined);
	            }
	        }
	        return decorator;
	    }
	    Reflect.metadata = metadata;
	    /**
	      * Define a unique metadata entry on the target.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param metadataValue A value that contains attached metadata.
	      * @param target The target object on which to define metadata.
	      * @param targetKey (Optional) The property key for the target.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     Reflect.defineMetadata("custom:annotation", options, C);
	      *
	      *     // property (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "method");
	      *
	      *     // decorator factory as metadata-producing annotation.
	      *     function MyAnnotation(options): Decorator {
	      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
	      *     }
	      *
	      */
	    function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	    }
	    Reflect.defineMetadata = defineMetadata;
	    /**
	      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function hasMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryHasMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasMetadata = hasMetadata;
	    /**
	      * Gets a value indicating whether the target object has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function hasOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasOwnMetadata = hasOwnMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function getMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryGetMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getMetadata = getMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function getOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getOwnMetadata = getOwnMetadata;
	    /**
	      * Gets the metadata keys defined on the target object or its prototype chain.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadataKeys(C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadataKeys(C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadataKeys(C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadataKeys(C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadataKeys(C.prototype, "method");
	      *
	      */
	    function getMetadataKeys(target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryMetadataKeys(target, targetKey);
	    }
	    Reflect.getMetadataKeys = getMetadataKeys;
	    /**
	      * Gets the unique metadata keys defined on the target object.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadataKeys(C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(C.prototype, "method");
	      *
	      */
	    function getOwnMetadataKeys(target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryOwnMetadataKeys(target, targetKey);
	    }
	    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
	    /**
	      * Deletes the metadata entry from the target object with the provided key.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.deleteMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function deleteMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#deletemetadata-metadatakey-p-
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
	        if (IsUndefined(metadataMap)) {
	            return false;
	        }
	        if (!metadataMap.delete(metadataKey)) {
	            return false;
	        }
	        if (metadataMap.size > 0) {
	            return true;
	        }
	        var targetMetadata = __Metadata__.get(target);
	        targetMetadata.delete(targetKey);
	        if (targetMetadata.size > 0) {
	            return true;
	        }
	        __Metadata__.delete(target);
	        return true;
	    }
	    Reflect.deleteMetadata = deleteMetadata;
	    function DecorateConstructor(decorators, target) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target);
	            if (!IsUndefined(decorated)) {
	                if (!IsConstructor(decorated)) {
	                    throw new TypeError();
	                }
	                target = decorated;
	            }
	        }
	        return target;
	    }
	    function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target, propertyKey, descriptor);
	            if (!IsUndefined(decorated)) {
	                if (!IsObject(decorated)) {
	                    throw new TypeError();
	                }
	                descriptor = decorated;
	            }
	        }
	        return descriptor;
	    }
	    function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            decorator(target, propertyKey);
	        }
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#getorcreatemetadatamap--o-p-create-
	    function GetOrCreateMetadataMap(target, targetKey, create) {
	        var targetMetadata = __Metadata__.get(target);
	        if (!targetMetadata) {
	            if (!create) {
	                return undefined;
	            }
	            targetMetadata = new _Map();
	            __Metadata__.set(target, targetMetadata);
	        }
	        var keyMetadata = targetMetadata.get(targetKey);
	        if (!keyMetadata) {
	            if (!create) {
	                return undefined;
	            }
	            keyMetadata = new _Map();
	            targetMetadata.set(targetKey, keyMetadata);
	        }
	        return keyMetadata;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
	    function OrdinaryHasMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn) {
	            return true;
	        }
	        var parent = GetPrototypeOf(O);
	        if (parent !== null) {
	            return OrdinaryHasMetadata(MetadataKey, parent, P);
	        }
	        return false;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
	    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        if (metadataMap === undefined) {
	            return false;
	        }
	        return Boolean(metadataMap.has(MetadataKey));
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetmetadata--metadatakey-o-p-
	    function OrdinaryGetMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn) {
	            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
	        }
	        var parent = GetPrototypeOf(O);
	        if (parent !== null) {
	            return OrdinaryGetMetadata(MetadataKey, parent, P);
	        }
	        return undefined;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
	    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
	        if (metadataMap === undefined) {
	            return undefined;
	        }
	        return metadataMap.get(MetadataKey);
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
	    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ true);
	        metadataMap.set(MetadataKey, MetadataValue);
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarymetadatakeys--o-p-
	    function OrdinaryMetadataKeys(O, P) {
	        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
	        var parent = GetPrototypeOf(O);
	        if (parent === null) {
	            return ownKeys;
	        }
	        var parentKeys = OrdinaryMetadataKeys(parent, P);
	        if (parentKeys.length <= 0) {
	            return ownKeys;
	        }
	        if (ownKeys.length <= 0) {
	            return parentKeys;
	        }
	        var set = new _Set();
	        var keys = [];
	        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
	            var key = ownKeys_1[_i];
	            var hasKey = set.has(key);
	            if (!hasKey) {
	                set.add(key);
	                keys.push(key);
	            }
	        }
	        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
	            var key = parentKeys_1[_a];
	            var hasKey = set.has(key);
	            if (!hasKey) {
	                set.add(key);
	                keys.push(key);
	            }
	        }
	        return keys;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryownmetadatakeys--o-p-
	    function OrdinaryOwnMetadataKeys(target, targetKey) {
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
	        var keys = [];
	        if (metadataMap) {
	            metadataMap.forEach(function (_, key) { return keys.push(key); });
	        }
	        return keys;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
	    function IsUndefined(x) {
	        return x === undefined;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	    function IsArray(x) {
	        return Array.isArray(x);
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
	    function IsObject(x) {
	        return typeof x === "object" ? x !== null : typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	    function IsConstructor(x) {
	        return typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
	    function IsSymbol(x) {
	        return typeof x === "symbol";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	    function ToPropertyKey(value) {
	        if (IsSymbol(value)) {
	            return value;
	        }
	        return String(value);
	    }
	    function GetPrototypeOf(O) {
	        var proto = Object.getPrototypeOf(O);
	        if (typeof O !== "function" || O === functionPrototype) {
	            return proto;
	        }
	        // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
	        // Try to determine the superclass constructor. Compatible implementations
	        // must either set __proto__ on a subclass constructor to the superclass constructor,
	        // or ensure each class has a valid `constructor` property on its prototype that
	        // points back to the constructor.
	        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
	        // This is the case when in ES6 or when using __proto__ in a compatible browser.
	        if (proto !== functionPrototype) {
	            return proto;
	        }
	        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
	        var prototype = O.prototype;
	        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
	        if (prototypeProto == null || prototypeProto === Object.prototype) {
	            return proto;
	        }
	        // if the constructor was not a function, then we cannot determine the heritage.
	        var constructor = prototypeProto.constructor;
	        if (typeof constructor !== "function") {
	            return proto;
	        }
	        // if we have some kind of self-reference, then we cannot determine the heritage.
	        if (constructor === O) {
	            return proto;
	        }
	        // we have a pretty good guess at the heritage.
	        return constructor;
	    }
	    // naive Map shim
	    function CreateMapPolyfill() {
	        var cacheSentinel = {};
	        function Map() {
	            this._keys = [];
	            this._values = [];
	            this._cache = cacheSentinel;
	        }
	        Map.prototype = {
	            get size() {
	                return this._keys.length;
	            },
	            has: function (key) {
	                if (key === this._cache) {
	                    return true;
	                }
	                if (this._find(key) >= 0) {
	                    this._cache = key;
	                    return true;
	                }
	                return false;
	            },
	            get: function (key) {
	                var index = this._find(key);
	                if (index >= 0) {
	                    this._cache = key;
	                    return this._values[index];
	                }
	                return undefined;
	            },
	            set: function (key, value) {
	                this.delete(key);
	                this._keys.push(key);
	                this._values.push(value);
	                this._cache = key;
	                return this;
	            },
	            delete: function (key) {
	                var index = this._find(key);
	                if (index >= 0) {
	                    this._keys.splice(index, 1);
	                    this._values.splice(index, 1);
	                    this._cache = cacheSentinel;
	                    return true;
	                }
	                return false;
	            },
	            clear: function () {
	                this._keys.length = 0;
	                this._values.length = 0;
	                this._cache = cacheSentinel;
	            },
	            forEach: function (callback, thisArg) {
	                var size = this.size;
	                for (var i = 0; i < size; ++i) {
	                    var key = this._keys[i];
	                    var value = this._values[i];
	                    this._cache = key;
	                    callback.call(this, value, key, this);
	                }
	            },
	            _find: function (key) {
	                var keys = this._keys;
	                var size = keys.length;
	                for (var i = 0; i < size; ++i) {
	                    if (keys[i] === key) {
	                        return i;
	                    }
	                }
	                return -1;
	            }
	        };
	        return Map;
	    }
	    // naive Set shim
	    function CreateSetPolyfill() {
	        var cacheSentinel = {};
	        function Set() {
	            this._map = new _Map();
	        }
	        Set.prototype = {
	            get size() {
	                return this._map.length;
	            },
	            has: function (value) {
	                return this._map.has(value);
	            },
	            add: function (value) {
	                this._map.set(value, value);
	                return this;
	            },
	            delete: function (value) {
	                return this._map.delete(value);
	            },
	            clear: function () {
	                this._map.clear();
	            },
	            forEach: function (callback, thisArg) {
	                this._map.forEach(callback, thisArg);
	            }
	        };
	        return Set;
	    }
	    // naive WeakMap shim
	    function CreateWeakMapPolyfill() {
	        var UUID_SIZE = 16;
	        var isNode = typeof global !== "undefined" && Object.prototype.toString.call(global.process) === '[object process]';
	        var nodeCrypto = isNode && function () { try {
	            return (void 0, __webpack_require__(3))("crypto");
	        }
	        catch (e) { } }();
	        var hasOwn = Object.prototype.hasOwnProperty;
	        var keys = {};
	        var rootKey = CreateUniqueKey();
	        function WeakMap() {
	            this._key = CreateUniqueKey();
	        }
	        WeakMap.prototype = {
	            has: function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                if (table) {
	                    return this._key in table;
	                }
	                return false;
	            },
	            get: function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                if (table) {
	                    return table[this._key];
	                }
	                return undefined;
	            },
	            set: function (target, value) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
	                table[this._key] = value;
	                return this;
	            },
	            delete: function (target) {
	                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
	                if (table && this._key in table) {
	                    return delete table[this._key];
	                }
	                return false;
	            },
	            clear: function () {
	                // NOTE: not a real clear, just makes the previous data unreachable
	                this._key = CreateUniqueKey();
	            }
	        };
	        function FillRandomBytes(buffer, size) {
	            for (var i = 0; i < size; ++i) {
	                buffer[i] = Math.random() * 255 | 0;
	            }
	        }
	        function GenRandomBytes(size) {
	            if (nodeCrypto) {
	                var data = nodeCrypto.randomBytes(size);
	                return data;
	            }
	            else if (typeof Uint8Array === "function") {
	                var data = new Uint8Array(size);
	                if (typeof crypto !== "undefined") {
	                    crypto.getRandomValues(data);
	                }
	                else if (typeof msCrypto !== "undefined") {
	                    msCrypto.getRandomValues(data);
	                }
	                else {
	                    FillRandomBytes(data, size);
	                }
	                return data;
	            }
	            else {
	                var data = new Array(size);
	                FillRandomBytes(data, size);
	                return data;
	            }
	        }
	        function CreateUUID() {
	            var data = GenRandomBytes(UUID_SIZE);
	            // mark as random - RFC 4122 § 4.4
	            data[6] = data[6] & 0x4f | 0x40;
	            data[8] = data[8] & 0xbf | 0x80;
	            var result = "";
	            for (var offset = 0; offset < UUID_SIZE; ++offset) {
	                var byte = data[offset];
	                if (offset === 4 || offset === 6 || offset === 8) {
	                    result += "-";
	                }
	                if (byte < 16) {
	                    result += "0";
	                }
	                result += byte.toString(16).toLowerCase();
	            }
	            return result;
	        }
	        function CreateUniqueKey() {
	            var key;
	            do {
	                key = "@@WeakMap@@" + CreateUUID();
	            } while (hasOwn.call(keys, key));
	            keys[key] = true;
	            return key;
	        }
	        function GetOrCreateWeakMapTable(target, create) {
	            if (!hasOwn.call(target, rootKey)) {
	                if (!create) {
	                    return undefined;
	                }
	                Object.defineProperty(target, rootKey, { value: Object.create(null) });
	            }
	            return target[rootKey];
	        }
	        return WeakMap;
	    }
	    // hook global Reflect
	    (function (__global) {
	        if (typeof __global.Reflect !== "undefined") {
	            if (__global.Reflect !== Reflect) {
	                for (var p in Reflect) {
	                    __global.Reflect[p] = Reflect[p];
	                }
	            }
	        }
	        else {
	            __global.Reflect = Reflect;
	        }
	    })(typeof window !== "undefined" ? window :
	        typeof WorkerGlobalScope !== "undefined" ? self :
	            typeof global !== "undefined" ? global :
	                Function("return this;")());
	})(Reflect || (Reflect = {}));
	//# sourceMappingURL=Reflect.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./CopyrightNotice.txt": 4,
		"./Reflect.": 2,
		"./Reflect.js": 2
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 3;


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved. 
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0  
	 
	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
	MERCHANTABLITY OR NON-INFRINGEMENT. 
	 
	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */



/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var common_1 = __webpack_require__(19);
	var compiler_1 = __webpack_require__(20);
	var core_1 = __webpack_require__(21);
	var platform_browser_1 = __webpack_require__(22);
	var core_private_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./core_private\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var async_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/facade/async\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var lang_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/facade/lang\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var xhr_cache_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/xhr/xhr_cache\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var xhr_impl_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/xhr/xhr_impl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	/**
	 * @experimental
	 */
	exports.BROWSER_APP_COMPILER_PROVIDERS = [
	    compiler_1.COMPILER_PROVIDERS, {
	        provide: compiler_1.CompilerConfig,
	        useFactory: function (platformDirectives, platformPipes) {
	            return new compiler_1.CompilerConfig({ platformDirectives: platformDirectives, platformPipes: platformPipes });
	        },
	        deps: [core_1.PLATFORM_DIRECTIVES, core_1.PLATFORM_PIPES]
	    },
	    { provide: compiler_1.XHR, useClass: xhr_impl_1.XHRImpl },
	    { provide: core_1.PLATFORM_DIRECTIVES, useValue: common_1.COMMON_DIRECTIVES, multi: true },
	    { provide: core_1.PLATFORM_PIPES, useValue: common_1.COMMON_PIPES, multi: true }
	];
	/**
	 * @experimental
	 */
	exports.CACHED_TEMPLATE_PROVIDER = [{ provide: compiler_1.XHR, useClass: xhr_cache_1.CachedXHR }];
	/**
	 * Bootstrapping for Angular applications.
	 *
	 * You instantiate an Angular application by explicitly specifying a component to use
	 * as the root component for your application via the `bootstrap()` method.
	 *
	 * ## Simple Example
	 *
	 * Assuming this `index.html`:
	 *
	 * ```html
	 * <html>
	 *   <!-- load Angular script tags here. -->
	 *   <body>
	 *     <my-app>loading...</my-app>
	 *   </body>
	 * </html>
	 * ```
	 *
	 * An application is bootstrapped inside an existing browser DOM, typically `index.html`.
	 * Unlike Angular 1, Angular 2 does not compile/process providers in `index.html`. This is
	 * mainly for security reasons, as well as architectural changes in Angular 2. This means
	 * that `index.html` can safely be processed using server-side technologies such as
	 * providers. Bindings can thus use double-curly `{{ syntax }}` without collision from
	 * Angular 2 component double-curly `{{ syntax }}`.
	 *
	 * We can use this script code:
	 *
	 * {@example core/ts/bootstrap/bootstrap.ts region='bootstrap'}
	 *
	 * When the app developer invokes `bootstrap()` with the root component `MyApp` as its
	 * argument, Angular performs the following tasks:
	 *
	 *  1. It uses the component's `selector` property to locate the DOM element which needs
	 *     to be upgraded into the angular component.
	 *  2. It creates a new child injector (from the platform injector). Optionally, you can
	 *     also override the injector configuration for an app by invoking `bootstrap` with the
	 *     `componentInjectableBindings` argument.
	 *  3. It creates a new `Zone` and connects it to the angular application's change detection
	 *     domain instance.
	 *  4. It creates an emulated or shadow DOM on the selected component's host element and loads the
	 *     template into it.
	 *  5. It instantiates the specified component.
	 *  6. Finally, Angular performs change detection to apply the initial data providers for the
	 *     application.
	 *
	 *
	 * ## Bootstrapping Multiple Applications
	 *
	 * When working within a browser window, there are many singleton resources: cookies, title,
	 * location, and others. Angular services that represent these resources must likewise be
	 * shared across all Angular applications that occupy the same browser window. For this
	 * reason, Angular creates exactly one global platform object which stores all shared
	 * services, and each angular application injector has the platform injector as its parent.
	 *
	 * Each application has its own private injector as well. When there are multiple
	 * applications on a page, Angular treats each application injector's services as private
	 * to that application.
	 *
	 * ## API
	 *
	 * - `appComponentType`: The root component which should act as the application. This is
	 *   a reference to a `Type` which is annotated with `@Component(...)`.
	 * - `customProviders`: An additional set of providers that can be added to the
	 *   app injector to override default injection behavior.
	 *
	 * Returns a `Promise` of {@link ComponentRef}.
	 *
	 * @experimental This api cannot be used with the offline compiler and thus is still subject to
	 * change.
	 */
	function bootstrap(appComponentType, customProviders) {
	    core_private_1.reflector.reflectionCapabilities = new core_private_1.ReflectionCapabilities();
	    var providers = [
	        platform_browser_1.BROWSER_APP_PROVIDERS, exports.BROWSER_APP_COMPILER_PROVIDERS,
	        lang_1.isPresent(customProviders) ? customProviders : []
	    ];
	    var appInjector = core_1.ReflectiveInjector.resolveAndCreate(providers, platform_browser_1.browserPlatform().injector);
	    return core_1.coreLoadAndBootstrap(appComponentType, appInjector);
	}
	exports.bootstrap = bootstrap;
	/**
	 * @experimental
	 */
	function bootstrapWorkerUi(workerScriptUri, customProviders) {
	    var app = core_1.ReflectiveInjector.resolveAndCreate([
	        platform_browser_1.WORKER_UI_APPLICATION_PROVIDERS, exports.BROWSER_APP_COMPILER_PROVIDERS,
	        { provide: platform_browser_1.WORKER_SCRIPT, useValue: workerScriptUri },
	        lang_1.isPresent(customProviders) ? customProviders : []
	    ], platform_browser_1.workerUiPlatform().injector);
	    // Return a promise so that we keep the same semantics as Dart,
	    // and we might want to wait for the app side to come up
	    // in the future...
	    return async_1.PromiseWrapper.resolve(app.get(core_1.ApplicationRef));
	}
	exports.bootstrapWorkerUi = bootstrapWorkerUi;
	/**
	 * @experimental
	 */
	var WORKER_APP_COMPILER_PROVIDERS = [
	    compiler_1.COMPILER_PROVIDERS, {
	        provide: compiler_1.CompilerConfig,
	        useFactory: function (platformDirectives, platformPipes) {
	            return new compiler_1.CompilerConfig({ platformDirectives: platformDirectives, platformPipes: platformPipes });
	        },
	        deps: [core_1.PLATFORM_DIRECTIVES, core_1.PLATFORM_PIPES]
	    },
	    { provide: compiler_1.XHR, useClass: xhr_impl_1.XHRImpl },
	    { provide: core_1.PLATFORM_DIRECTIVES, useValue: common_1.COMMON_DIRECTIVES, multi: true },
	    { provide: core_1.PLATFORM_PIPES, useValue: common_1.COMMON_PIPES, multi: true }
	];
	/**
	 * @experimental
	 */
	function bootstrapWorkerApp(appComponentType, customProviders) {
	    var appInjector = core_1.ReflectiveInjector.resolveAndCreate([
	        platform_browser_1.WORKER_APP_APPLICATION_PROVIDERS, WORKER_APP_COMPILER_PROVIDERS,
	        lang_1.isPresent(customProviders) ? customProviders : []
	    ], platform_browser_1.workerAppPlatform().injector);
	    return core_1.coreLoadAndBootstrap(appComponentType, appInjector);
	}
	exports.bootstrapWorkerApp = bootstrapWorkerApp;
	//# sourceMappingURL=index.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/pipes\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/directives\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/forms-deprecated\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/common_directives\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/location\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	var localization_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/localization\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.NgLocalization = localization_1.NgLocalization;
	//# sourceMappingURL=index.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./compiler\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	//# sourceMappingURL=index.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * @module
	 * @description
	 * Entry point from which you should import all public core APIs.
	 */
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/metadata\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/util\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/di\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	var application_ref_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/application_ref\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.createPlatform = application_ref_1.createPlatform;
	exports.assertPlatform = application_ref_1.assertPlatform;
	exports.disposePlatform = application_ref_1.disposePlatform;
	exports.getPlatform = application_ref_1.getPlatform;
	exports.coreBootstrap = application_ref_1.coreBootstrap;
	exports.coreLoadAndBootstrap = application_ref_1.coreLoadAndBootstrap;
	exports.createNgZone = application_ref_1.createNgZone;
	exports.PlatformRef = application_ref_1.PlatformRef;
	exports.ApplicationRef = application_ref_1.ApplicationRef;
	exports.enableProdMode = application_ref_1.enableProdMode;
	exports.lockRunMode = application_ref_1.lockRunMode;
	exports.isDevMode = application_ref_1.isDevMode;
	var application_tokens_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/application_tokens\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.APP_ID = application_tokens_1.APP_ID;
	exports.APP_INITIALIZER = application_tokens_1.APP_INITIALIZER;
	exports.PACKAGE_ROOT_URL = application_tokens_1.PACKAGE_ROOT_URL;
	exports.PLATFORM_INITIALIZER = application_tokens_1.PLATFORM_INITIALIZER;
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/zone\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/render\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/linker\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	var debug_node_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/debug/debug_node\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.DebugElement = debug_node_1.DebugElement;
	exports.DebugNode = debug_node_1.DebugNode;
	exports.asNativeElements = debug_node_1.asNativeElements;
	exports.getDebugNode = debug_node_1.getDebugNode;
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/testability/testability\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/change_detection\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/platform_directives_and_pipes\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/platform_common_providers\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/application_common_providers\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	var profile_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/profile/profile\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.wtfCreateScope = profile_1.wtfCreateScope;
	exports.wtfLeave = profile_1.wtfLeave;
	exports.wtfStartTimeRange = profile_1.wtfStartTimeRange;
	exports.wtfEndTimeRange = profile_1.wtfEndTimeRange;
	var lang_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/facade/lang\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.Type = lang_1.Type;
	var async_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/facade/async\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.EventEmitter = async_1.EventEmitter;
	var exceptions_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/facade/exceptions\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.ExceptionHandler = exceptions_1.ExceptionHandler;
	exports.WrappedException = exceptions_1.WrappedException;
	exports.BaseException = exceptions_1.BaseException;
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./private_export\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/animation/metadata\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	var animation_player_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/animation/animation_player\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.AnimationPlayer = animation_player_1.AnimationPlayer;
	//# sourceMappingURL=index.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var browser_platform_location_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/browser/location/browser_platform_location\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.BrowserPlatformLocation = browser_platform_location_1.BrowserPlatformLocation;
	var title_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/browser/title\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.Title = title_1.Title;
	var tools_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/browser/tools/tools\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.disableDebugTools = tools_1.disableDebugTools;
	exports.enableDebugTools = tools_1.enableDebugTools;
	var by_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/dom/debug/by\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.By = by_1.By;
	var dom_tokens_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/dom/dom_tokens\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.DOCUMENT = dom_tokens_1.DOCUMENT;
	var event_manager_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/dom/events/event_manager\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.EVENT_MANAGER_PLUGINS = event_manager_1.EVENT_MANAGER_PLUGINS;
	exports.EventManager = event_manager_1.EventManager;
	var hammer_gestures_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/dom/events/hammer_gestures\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.HAMMER_GESTURE_CONFIG = hammer_gestures_1.HAMMER_GESTURE_CONFIG;
	exports.HammerGestureConfig = hammer_gestures_1.HammerGestureConfig;
	var dom_sanitization_service_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/security/dom_sanitization_service\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.DomSanitizationService = dom_sanitization_service_1.DomSanitizationService;
	exports.SecurityContext = dom_sanitization_service_1.SecurityContext;
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/browser\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	// Web Workers
	var client_message_broker_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/web_workers/shared/client_message_broker\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.ClientMessageBroker = client_message_broker_1.ClientMessageBroker;
	exports.ClientMessageBrokerFactory = client_message_broker_1.ClientMessageBrokerFactory;
	exports.FnArg = client_message_broker_1.FnArg;
	exports.UiArguments = client_message_broker_1.UiArguments;
	var service_message_broker_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/web_workers/shared/service_message_broker\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.ReceivedMessage = service_message_broker_1.ReceivedMessage;
	exports.ServiceMessageBroker = service_message_broker_1.ServiceMessageBroker;
	exports.ServiceMessageBrokerFactory = service_message_broker_1.ServiceMessageBrokerFactory;
	var serializer_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/web_workers/shared/serializer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.PRIMITIVE = serializer_1.PRIMITIVE;
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/web_workers/shared/message_bus\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	var location_providers_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/web_workers/worker/location_providers\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.WORKER_APP_LOCATION_PROVIDERS = location_providers_1.WORKER_APP_LOCATION_PROVIDERS;
	var location_providers_2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/web_workers/ui/location_providers\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	exports.WORKER_UI_LOCATION_PROVIDERS = location_providers_2.WORKER_UI_LOCATION_PROVIDERS;
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/worker_render\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/worker_app\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./private_export\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	//# sourceMappingURL=index.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./src/forms\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	//# sourceMappingURL=index.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./http\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	//# sourceMappingURL=index.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(21);
	var http_1 = __webpack_require__(24);
	var Observable_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rxjs/Observable\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	/**
	 * Sets up the authentication configuration.
	 */
	var AuthConfig = (function () {
	    function AuthConfig(config) {
	        var _this = this;
	        if (config === void 0) { config = {}; }
	        this.headerName = config.headerName || 'Authorization';
	        if (config.headerPrefix) {
	            this.headerPrefix = config.headerPrefix + ' ';
	        }
	        else if (config.noTokenScheme) {
	            this.headerPrefix = '';
	        }
	        else {
	            this.headerPrefix = 'Bearer ';
	        }
	        this.tokenName = config.tokenName || 'id_token';
	        this.noJwtError = config.noJwtError || false;
	        this.tokenGetter = config.tokenGetter || (function () { return localStorage.getItem(_this.tokenName); });
	        this.globalHeaders = config.globalHeaders || [];
	        this.noTokenScheme = config.noTokenScheme || false;
	    }
	    AuthConfig.prototype.getConfig = function () {
	        return {
	            headerName: this.headerName,
	            headerPrefix: this.headerPrefix,
	            tokenName: this.tokenName,
	            tokenGetter: this.tokenGetter,
	            noJwtError: this.noJwtError,
	            noTokenScheme: this.noTokenScheme,
	            globalHeaders: this.globalHeaders
	        };
	    };
	    return AuthConfig;
	}());
	exports.AuthConfig = AuthConfig;
	/**
	 * Allows for explicit authenticated HTTP requests.
	 */
	var AuthHttp = (function () {
	    function AuthHttp(options, http) {
	        var _this = this;
	        this.http = http;
	        this._config = options.getConfig();
	        this.tokenStream = new Observable_1.Observable(function (obs) {
	            obs.next(_this._config.tokenGetter());
	        });
	    }
	    AuthHttp.prototype.setGlobalHeaders = function (headers, request) {
	        headers.forEach(function (header) {
	            var key = Object.keys(header)[0];
	            var headerValue = header[key];
	            request.headers.set(key, headerValue);
	        });
	    };
	    AuthHttp.prototype.request = function (url, options) {
	        var request;
	        var globalHeaders = this._config.globalHeaders;
	        if (!tokenNotExpired(null, this._config.tokenGetter())) {
	            if (!this._config.noJwtError) {
	                return new Observable_1.Observable(function (obs) {
	                    obs.error(new Error('No JWT present'));
	                });
	            }
	            else {
	                request = this.http.request(url, options);
	            }
	        }
	        else if (typeof url === 'string') {
	            var reqOpts = options || {};
	            if (!reqOpts.headers) {
	                reqOpts.headers = new http_1.Headers();
	            }
	            if (globalHeaders) {
	                this.setGlobalHeaders(globalHeaders, reqOpts);
	            }
	            reqOpts.headers.set(this._config.headerName, this._config.headerPrefix + this._config.tokenGetter());
	            request = this.http.request(url, reqOpts);
	        }
	        else {
	            var req = url;
	            if (!req.headers) {
	                req.headers = new http_1.Headers();
	            }
	            if (globalHeaders) {
	                this.setGlobalHeaders(globalHeaders, req);
	            }
	            req.headers.set(this._config.headerName, this._config.headerPrefix + this._config.tokenGetter());
	            request = this.http.request(req);
	        }
	        return request;
	    };
	    AuthHttp.prototype.requestHelper = function (requestArgs, additionalOptions) {
	        var options = new http_1.RequestOptions(requestArgs);
	        if (additionalOptions) {
	            options = options.merge(additionalOptions);
	        }
	        return this.request(new http_1.Request(options));
	    };
	    AuthHttp.prototype.get = function (url, options) {
	        return this.requestHelper({ url: url, method: http_1.RequestMethod.Get }, options);
	    };
	    AuthHttp.prototype.post = function (url, body, options) {
	        return this.requestHelper({ url: url, body: body, method: http_1.RequestMethod.Post }, options);
	    };
	    AuthHttp.prototype.put = function (url, body, options) {
	        return this.requestHelper({ url: url, body: body, method: http_1.RequestMethod.Put }, options);
	    };
	    AuthHttp.prototype.delete = function (url, options) {
	        return this.requestHelper({ url: url, method: http_1.RequestMethod.Delete }, options);
	    };
	    AuthHttp.prototype.patch = function (url, body, options) {
	        return this.requestHelper({ url: url, body: body, method: http_1.RequestMethod.Patch }, options);
	    };
	    AuthHttp.prototype.head = function (url, options) {
	        return this.requestHelper({ url: url, method: http_1.RequestMethod.Head }, options);
	    };
	    AuthHttp = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [AuthConfig, http_1.Http])
	    ], AuthHttp);
	    return AuthHttp;
	}());
	exports.AuthHttp = AuthHttp;
	/**
	 * Helper class to decode and find JWT expiration.
	 */
	var JwtHelper = (function () {
	    function JwtHelper() {
	    }
	    JwtHelper.prototype.urlBase64Decode = function (str) {
	        var output = str.replace(/-/g, '+').replace(/_/g, '/');
	        switch (output.length % 4) {
	            case 0: {
	                break;
	            }
	            case 2: {
	                output += '==';
	                break;
	            }
	            case 3: {
	                output += '=';
	                break;
	            }
	            default: {
	                throw 'Illegal base64url string!';
	            }
	        }
	        return decodeURIComponent(escape(window.atob(output))); //polyfill https://github.com/davidchambers/Base64.js
	    };
	    JwtHelper.prototype.decodeToken = function (token) {
	        var parts = token.split('.');
	        if (parts.length !== 3) {
	            throw new Error('JWT must have 3 parts');
	        }
	        var decoded = this.urlBase64Decode(parts[1]);
	        if (!decoded) {
	            throw new Error('Cannot decode the token');
	        }
	        return JSON.parse(decoded);
	    };
	    JwtHelper.prototype.getTokenExpirationDate = function (token) {
	        var decoded;
	        decoded = this.decodeToken(token);
	        if (typeof decoded.exp === "undefined") {
	            return null;
	        }
	        var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
	        date.setUTCSeconds(decoded.exp);
	        return date;
	    };
	    JwtHelper.prototype.isTokenExpired = function (token, offsetSeconds) {
	        var date = this.getTokenExpirationDate(token);
	        offsetSeconds = offsetSeconds || 0;
	        if (date === null) {
	            return false;
	        }
	        // Token expired?
	        return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
	    };
	    return JwtHelper;
	}());
	exports.JwtHelper = JwtHelper;
	/**
	 * Checks for presence of token and that token hasn't expired.
	 * For use with the @CanActivate router decorator and NgIf
	 */
	function tokenNotExpired(tokenName, jwt) {
	    if (tokenName === void 0) { tokenName = 'id_token'; }
	    var token = jwt || localStorage.getItem(tokenName);
	    var jwtHelper = new JwtHelper();
	    return token && !jwtHelper.isTokenExpired(token, null);
	}
	exports.tokenNotExpired = tokenNotExpired;
	exports.AUTH_PROVIDERS = [
	    core_1.provide(AuthHttp, {
	        useFactory: function (http) {
	            return new AuthHttp(new AuthConfig(), http);
	        },
	        deps: [http_1.Http]
	    })
	];
	//# sourceMappingURL=angular2-jwt.js.map

/***/ }
/******/ ]);