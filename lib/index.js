module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=require("react")},function(e,t,r){e.exports=r(3)()},function(e,t){e.exports=require("mytabworks-utils")},function(e,t,r){"use strict";var n=r(4);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,u){if(u!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t),r.d(t,"FormStateProvider",(function(){return P})),r.d(t,"useForm",(function(){return O})),r.d(t,"useFormState",(function(){return m}));var n=r(0),o=r.n(n),a=r(1),u=r.n(a),i=r(2);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"formdata",{}),l(this,"target",void 0),l(this,"formstatuses",{}),this.formstatuses=r,this.target=t,this.formdata=new FormData(t)}var t,r,n;return t=e,(r=[{key:"locateFailed",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:40,r=document.documentElement,n=r.scrollTop,o=Object.keys(this.formstatuses).reduce((function(t,n){if(!e.formstatuses[n].isInvalid)return t;var o=e.target.querySelector('[name="'.concat(n,'"], [data-alias="').concat(n,'"]'));return Math.min(r.scrollTop+o.getBoundingClientRect().top,t)}),n);return o===n?n:r.scrollTop=o-t}},{key:"isReady",value:function(){for(var e in this.formstatuses)if(this.formstatuses[e].isInvalid)return!1;return!0}},{key:"forEach",value:function(e){for(var t=this.formdata.entries(),r=t.next();!r.done;){var n=c(r.value,2),o=n[0],a=n[1];e&&e.call({name:o,value:a},a,o),r=t.next()}}},{key:"json",value:function(){var e={};return this.forEach((function(t,r){var n=r.endsWith("[]");(r=r.replace("[]",""))in e?Array.isArray(e[r])?e[r].push(t):e[r]=[e[r],t]:e[r]=n?[t]:t})),e}},{key:"paramArray",value:function(){var e=[];return this.forEach((function(){e.push(this)})),e}},{key:"param",value:function(){return this.paramArray().reduce((function(e,t){return e+"&".concat(t.name,"=").concat(t.value)}),"").substr(1)}},{key:"formData",value:function(){return this.formdata}}])&&f(t.prototype,r),n&&f(t,n),e}();function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=Object(n.createContext)(null),m=function(){return Object(n.useContext)(b)},h=function(e,t,r){var n=t.name,o=t.value,a=t.form,u=t.files,c=t.selectedOptions;["checkbox","radio"].includes(t.type)&&(o=Array.from(a.querySelectorAll('[name="'.concat(n,'"]'))).filter((function(e){return e.checked}))),r&&(n=r),u&&(o=u),c&&t.multiple&&(o=Array.from(c));var f=v({},e[n]);if(!f)return e;var l=f.label,s=f.rules;return s&&Object.assign(f,i.Validator.validate(o,s,l||t.name)),v({},e,d({},n,f))},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),r=p(t,2),o=r[0],a=r[1],u=function(e){return e?o[e]:o},i=function(e,t){var r=e.target;a((function(e){return h(e,r,t)}))},c=function(e){var t=e.name,r=e.label,o=e.rules;Object(n.useEffect)((function(){if(o)return a((function(e){return v({},e,d({},t,{label:r,rules:o,isInvalid:!1,message:null}))})),function(){a((function(e){return delete e[t],v({},e)}))}}),[t,r,o])},f=function(e){return function(t){t.preventDefault();var r=v({},o),n=Object.keys(o).reduce((function(e,r){var n=t.target.querySelector('[data-alias="'.concat(r,'"], [name="').concat(r,'"]'));return n?h(e,n,r):e}),r);a(n);var u=new s(t.target,n);"function"==typeof e&&e(u)}};return{formState:u,formUpdate:i,formSubmit:f,formRegistry:c}},g={value:u.a.object.isRequired,children:u.a.element.isRequired},j=function(e){var t=e.value,r=e.children;return o.a.createElement(b.Provider,{value:t},r)};j.propTypes=g,j.defaultProps={};var P=j}]);