(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1518:function(e,t,n){"use strict";n(9),n(13),n(14),n(22),n(18),n(10),n(16),n(20),n(15),n(7),n(17),n(21),n(11),n(12);var r=n(0),o=n.n(r),a=n(48),i=n(430);n(1615);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(e){var t=e.header,n=e.children,u=e.className,s=e.role,c=e.style,p=l(Object(r.useState)(!0),2),b=p[0],m=p[1],d=Object(i.a)().t;return o.a.createElement("div",{className:u,role:s,style:c},o.a.createElement("div",{className:"collapsible-page-group-header"},t(),o.a.createElement(a.a,{title:d(b?"redactionPanel.collapse":"redactionPanel.expand"),img:b?"icon-chevron-up":"icon-chevron-down",className:"expand-arrow",onClick:function(){return m(!b)}})),b&&n)};t.a=s},1615:function(e,t,n){var r=n(31),o=n(1616);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:function(e){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(e);let t;t=document.getElementsByTagName("apryse-webviewer"),t.length||(t=function e(t,n=document){const r=[];return n.querySelectorAll(t).forEach(e=>r.push(e)),n.querySelectorAll("*").forEach(n=>{n.shadowRoot&&r.push(...e(t,n.shadowRoot))}),r}("apryse-webviewer"));const n=[];for(let r=0;r<t.length;r++){const o=t[r];if(0===r)o.shadowRoot.appendChild(e),e.onload=function(){n.length>0&&n.forEach(t=>{t.innerHTML=e.innerHTML})};else{const t=e.cloneNode(!0);o.shadowRoot.appendChild(t),n.push(t)}}},singleton:!1};r(o,a);e.exports=o.locals||{}},1616:function(e,t,n){(t=n(32)(!1)).push([e.i,".collapsible-page-group-header{display:flex;justify-content:space-between;align-items:baseline}",""]),e.exports=t},1707:function(e,t,n){var r=n(31),o=n(1708);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:function(e){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(e);let t;t=document.getElementsByTagName("apryse-webviewer"),t.length||(t=function e(t,n=document){const r=[];return n.querySelectorAll(t).forEach(e=>r.push(e)),n.querySelectorAll("*").forEach(n=>{n.shadowRoot&&r.push(...e(t,n.shadowRoot))}),r}("apryse-webviewer"));const n=[];for(let r=0;r<t.length;r++){const o=t[r];if(0===r)o.shadowRoot.appendChild(e),e.onload=function(){n.length>0&&n.forEach(t=>{t.innerHTML=e.innerHTML})};else{const t=e.cloneNode(!0);o.shadowRoot.appendChild(t),n.push(t)}}},singleton:!1};r(o,a);e.exports=o.locals||{}},1708:function(e,t,n){(t=n(32)(!1)).push([e.i,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.RubberStampPanel{height:100%;display:flex;flex-direction:column}.RubberStampPanel .rubber-stamp-panel-header{font-size:16px;font-weight:700}.RubberStampPanel .CreateRubberStampButton{width:100%;padding:8px;color:#2b73ab;border:1px solid #2b73ab;border-radius:4px;margin:16px 0}.RubberStampPanel .CreateRubberStampButton:hover{color:var(--primary-button-hover);border-color:var(--primary-button-hover)}.RubberStampPanel .rubber-stamps-container{overflow:auto;padding:0 4px}.RubberStampPanel .rubber-stamps-container .rubber-stamps-list-header{font-size:14px;font-weight:700;margin:16px 0}.RubberStampPanel .rubber-stamps-container .rubber-stamps-list{display:flex;flex-direction:column;grid-gap:4px;gap:4px;padding-bottom:16px}.RubberStampPanel .rubber-stamps-container .rubber-stamps-list .rubber-stamp{border:none;background-color:transparent;height:48px;padding:0 8px;border:1px solid var(--border);border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer;background-color:var(--gray-0);flex-grow:1}:host(:not([data-tabbing=true])) .RubberStampPanel .rubber-stamps-container .rubber-stamps-list .rubber-stamp,html:not([data-tabbing=true]) .RubberStampPanel .rubber-stamps-container .rubber-stamps-list .rubber-stamp{outline:none}.RubberStampPanel .rubber-stamps-container .rubber-stamps-list .rubber-stamp img{max-width:100%;max-height:100%}.RubberStampPanel .rubber-stamps-container .rubber-stamps-list .rubber-stamp:hover{background:var(--tools-overlay-button-hover)}.RubberStampPanel .rubber-stamps-container .rubber-stamps-list .rubber-stamp.active{background:var(--tools-overlay-button-active)}.RubberStampPanel .rubber-stamps-container .collapsible-page-group-header{align-items:center}.RubberStampPanel .custom-rubber-stamp-row{display:flex;align-items:center;grid-gap:8px;gap:8px}.RubberStampPanel .custom-rubber-stamp-row .icon-button{padding:0;border:none;background-color:transparent;display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:4px;cursor:pointer}:host(:not([data-tabbing=true])) .RubberStampPanel .custom-rubber-stamp-row .icon-button,html:not([data-tabbing=true]) .RubberStampPanel .custom-rubber-stamp-row .icon-button{outline:none}.RubberStampPanel .custom-rubber-stamp-row .icon-button:hover{background:var(--tools-overlay-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RubberStampPanel{width:100%}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RubberStampPanel .rubber-stamp-panel-header{margin:0 16px 16px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RubberStampPanel [data-element=createRubberStampButton]{padding:0 16px}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RubberStampPanel [data-element=createRubberStampButton] .CreateRubberStampButton{margin-top:0}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RubberStampPanel.small-size .collapsible-page-group-header,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RubberStampPanel.small-size .CreateRubberStampButton,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RubberStampPanel.small-size .Divider,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RubberStampPanel.small-size .rubber-stamps-list-header{display:none}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RubberStampPanel .rubber-stamps-container{position:relative;padding:0 14px 16px;overflow-y:scroll}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RubberStampPanel .rubber-stamps-container.small-size{overflow:hidden}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RubberStampPanel .rubber-stamps-container .rubber-stamps-list .icon-button:hover,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RubberStampPanel .rubber-stamps-container .rubber-stamps-list .rubber-stamp:hover{background-color:var(--gray-0)}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RubberStampPanel .rubber-stamps-container .rubber-stamps-list .icon-button.active,.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RubberStampPanel .rubber-stamps-container .rubber-stamps-list .rubber-stamp.active{background:var(--tools-overlay-button-active)}.App:not(.is-in-desktop-only-mode):not(.is-web-component) .RubberStampPanel .rubber-stamps-container .Divider{margin:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .RubberStampPanel{width:100%}.App.is-web-component:not(.is-in-desktop-only-mode) .RubberStampPanel .rubber-stamp-panel-header{margin:0 16px 16px}.App.is-web-component:not(.is-in-desktop-only-mode) .RubberStampPanel [data-element=createRubberStampButton]{padding:0 16px}.App.is-web-component:not(.is-in-desktop-only-mode) .RubberStampPanel [data-element=createRubberStampButton] .CreateRubberStampButton{margin-top:0}.App.is-web-component:not(.is-in-desktop-only-mode) .RubberStampPanel.small-size .collapsible-page-group-header,.App.is-web-component:not(.is-in-desktop-only-mode) .RubberStampPanel.small-size .CreateRubberStampButton,.App.is-web-component:not(.is-in-desktop-only-mode) .RubberStampPanel.small-size .Divider,.App.is-web-component:not(.is-in-desktop-only-mode) .RubberStampPanel.small-size .rubber-stamps-list-header{display:none}.App.is-web-component:not(.is-in-desktop-only-mode) .RubberStampPanel .rubber-stamps-container{position:relative;padding:0 14px 16px;overflow-y:scroll}.App.is-web-component:not(.is-in-desktop-only-mode) .RubberStampPanel .rubber-stamps-container.small-size{overflow:hidden}.App.is-web-component:not(.is-in-desktop-only-mode) .RubberStampPanel .rubber-stamps-container .rubber-stamps-list .icon-button:hover,.App.is-web-component:not(.is-in-desktop-only-mode) .RubberStampPanel .rubber-stamps-container .rubber-stamps-list .rubber-stamp:hover{background-color:var(--gray-0)}.App.is-web-component:not(.is-in-desktop-only-mode) .RubberStampPanel .rubber-stamps-container .rubber-stamps-list .icon-button.active,.App.is-web-component:not(.is-in-desktop-only-mode) .RubberStampPanel .rubber-stamps-container .rubber-stamps-list .rubber-stamp.active{background:var(--tools-overlay-button-active)}.App.is-web-component:not(.is-in-desktop-only-mode) .RubberStampPanel .rubber-stamps-container .Divider{margin:0}}",""]),t.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},e.exports=t},1736:function(e,t,n){"use strict";n.r(t);n(9),n(13),n(68),n(14),n(28),n(69),n(25),n(22),n(18),n(10),n(66),n(16),n(29),n(20),n(15),n(70),n(71),n(27),n(40),n(23),n(44),n(45),n(7),n(64),n(17),n(21),n(11),n(26),n(12);var r=n(0),o=n.n(r),a=n(430),i=n(6),l=n(3),u=n(2),s=n(1),c=n(19),p=n.n(c),b=n(5),m=n(51),d=n(61),f=n(50),h=n(72),y=n(48);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=function(){var e=Object(i.d)(),t=v(Object(a.a)(),1)[0];return o.a.createElement(h.a,{dataElement:b.a.CREATE_RUBBER_STAMP_BUTTON},o.a.createElement(y.a,{className:"CreateRubberStampButton",label:t("component.createStampButton"),onClick:function(){e(u.a.openElement(b.a.CUSTOM_STAMP_MODAL))}}))},w=n(448),x=(n(1707),n(39),n(43),n(1518)),A=n(55),R=n(1617);function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k=o.a.memo((function(e){var t=e.imgSrc,n=e.annotation,r=e.index,i=e.onClick,l=e.isActive,u=E(Object(a.a)(),1)[0];return o.a.createElement("button",{tabIndex:0,key:r,className:p()("rubber-stamp",{active:l}),"aria-label":"".concat(u("annotation.stamp")," ").concat(r+1),onClick:function(){return i(n,r)}},o.a.createElement("img",{src:t,alt:""}))}));k.displayName="RubberStamp";var j=function(e){var t=e.standardStamps,n=e.selectedStampIndex,u=e.setSelectedRubberStamp,s=E(Object(a.a)(),1)[0],c=Object(A.b)(),p=E(Object(i.e)((function(e){return[l.a.getMobilePanelSize(e),l.a.getLastSelectedStampIndex(e)]})),2),b=p[0],d=p[1],f=t.map((function(e,t){var r=e.imgSrc,a=e.annotation,i=n===t,l=t===(d||0)&&Object(R.isNull)(n);return!c||c&&b!==m.a.SMALL_SIZE||c&&b===m.a.SMALL_SIZE&&(i||l)?o.a.createElement(k,{key:t,index:t,imgSrc:r,annotation:a,onClick:u,isActive:i}):null})),h=Object(r.useCallback)((function(){return o.a.createElement("div",{className:"rubber-stamps-list-header"},s("rubberStampPanel.standard"))}),[s]);return o.a.createElement(x.a,{header:h},o.a.createElement("div",{className:"rubber-stamps-list"},f))};j.displayName="StandardRubberStamps";var O=o.a.memo(j),I=n(38),L=n(4),C=n.n(L);function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}(e,t)||_(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=o.a.memo((function(e){var t=e.imgSrc,n=e.annotation,r=e.index,i=e.onClick,l=e.deleteHandler,u=e.standardStampsOffset,s=e.isActive,c=T(Object(a.a)(),1)[0];return o.a.createElement("div",{className:"custom-rubber-stamp-row",tabIndex:"0"},o.a.createElement("button",{key:r,className:p()("rubber-stamp",{active:s}),"aria-label":"".concat(c("annotation.stamp")," ").concat(r+1),onClick:function(){return i(n,r+u)}},o.a.createElement("img",{src:t,alt:""})),o.a.createElement("button",{className:"icon-button","data-element":"defaultSignatureDeleteButton",onClick:function(){l(r)}},o.a.createElement(I.a,{glyph:"icon-delete-line"})))}));M.displayName="CustomRubberStamp";var B=function(e){var t=e.customStamps,n=e.selectedStampIndex,a=e.setSelectedRubberStamp,c=e.standardStampsOffset,p=s.a.getToolsFromAllDocumentViewers("AnnotationCreateRubberStamp"),b=Object(A.b)(),d=Object(i.d)(),f=T(Object(i.e)((function(e){return[l.a.getMobilePanelSize(e),l.a.getLastSelectedStampIndex(e)]})),2),h=f[0],y=f[1],v=Object(r.useCallback)((function(e){var t,n,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}(p);try{for(r.s();!(t=r.n()).done;){var o=t.value,a=o.getCustomStamps();o.deleteCustomStamps([a[e]]);var i=(n=e,0===o.getCustomStamps().length?null:0===n?c:n-1>=0?n-1+c:n+c);d(u.a.setSelectedStampIndex(null)),d(u.a.setLastSelectedStampIndex(i))}}catch(e){r.e(e)}finally{r.f()}}),[]),g=b&&h!==m.a.SMALL_SIZE,S=b&&h===m.a.SMALL_SIZE,w=t.map((function(e,r){var i=e.imgSrc,l=e.annotation,u=r+c,s=n===u,p=S&&(Object(R.isNull)(n)&&t.length&&u===y||s);return!b||g||p||S&&s?o.a.createElement(M,{key:r,index:r,imgSrc:i,annotation:l,onClick:a,standardStampsOffset:c,deleteHandler:v,isActive:s}):null}));return 0===t.length?null:o.a.createElement("div",{className:"rubber-stamps-list"},w)};B.displayName="CustomRubberStamps",B.propTypes={customStamps:C.a.array,selectedStampIndex:C.a.number,setSelectedRubberStamp:C.a.func,standardStampsOffset:C.a.number};var z=o.a.memo(B),D=n(95);function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t,n){var r;return r=function(e,t){if("object"!=H(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==H(r)?r:r+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */U=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,i=Object.create(a.prototype),l=new O(r||[]);return o(i,"_invoke",{value:E(e,n,l)}),i}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=c;var b="suspendedStart",m="executing",d="completed",f={};function h(){}function y(){}function v(){}var g={};s(g,i,(function(){return this}));var S=Object.getPrototypeOf,w=S&&S(S(I([])));w&&w!==n&&r.call(w,i)&&(g=w);var x=v.prototype=h.prototype=Object.create(g);function A(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function R(e,t){function n(o,a,i,l){var u=p(e[o],e,a);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"==H(c)&&r.call(c,"__await")?t.resolve(c.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(c).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(u.arg)}var a;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return a=a?a.then(o,o):o()}})}function E(t,n,r){var o=b;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:e,done:!0}}for(r.method=a,r.arg=i;;){var l=r.delegate;if(l){var u=P(l,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===b)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var s=p(t,n,r);if("normal"===s.type){if(o=r.done?d:"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=d,r.method="throw",r.arg=s.arg)}}}function P(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,P(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=p(o,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,f;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,f):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function I(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}throw new TypeError(H(t)+" is not iterable")}return y.prototype=v,o(x,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:y,configurable:!0}),y.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,u,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},A(R.prototype),s(R.prototype,l,(function(){return this})),t.AsyncIterator=R,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new R(c(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},A(x),s(x,u,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=I,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return l.type="throw",l.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),f}},t}function F(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Z(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function V(e,t,n,r,o,a,i){try{var l=e[a](i),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(r,o)}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}(e,t)||Z(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var q=function(){var e=W(Object(a.a)(),1)[0],t=Object(i.d)(),n=s.a.getToolsFromAllDocumentViewers("AnnotationCreateRubberStamp"),c=Object(A.b)(),y=W(Object(i.e)((function(e){return[l.a.getStandardStamps(e),l.a.getCustomStamps(e),l.a.getSelectedStampIndex(e),l.a.getMobilePanelSize(e)]}),i.c),4),v=y[0],g=y[1],x=y[2],R=y[3],E=Object(i.f)(),P=Object(r.useCallback)(function(){var r,o=(r=U().mark((function r(o,a){var i,l,p,b;return U().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:s.a.setToolMode("AnnotationCreateRubberStamp"),i=F(n),r.prev=2,i.s();case 4:if((l=i.n()).done){r.next=12;break}return p=l.value,b=e("rubberStamp.".concat(o.Icon)),r.next=9,p.setRubberStamp(o,b);case 9:p.showPreview();case 10:r.next=4;break;case 12:r.next=17;break;case 14:r.prev=14,r.t0=r.catch(2),i.e(r.t0);case 17:return r.prev=17,i.f(),r.finish(17);case 20:t(u.a.setSelectedStampIndex(a)),c&&R!==m.a.SMALL_SIZE&&t(u.a.setMobilePanelSize(m.a.SMALL_SIZE));case 22:case"end":return r.stop()}}),r,null,[[2,14,17,20]])})),function(){var e=this,t=arguments;return new Promise((function(n,o){var a=r.apply(e,t);function i(e){V(a,n,o,i,l,"next",e)}function l(e){V(a,n,o,i,l,"throw",e)}i(void 0)}))});return function(e,t){return o.apply(this,arguments)}}(),[]);return Object(r.useEffect)((function(){t(u.a.setSelectedStampIndex(null))}),[]),Object(r.useEffect)((function(){var e=function(e){var t=s.a.getToolMode(),n=null==t?void 0:t.name,r=e.detail,o=r.element,a=r.isVisible;o!==m.e.RUBBER_STAMP||a||"AnnotationCreateRubberStamp"!==n&&n!==d.a||Object(D.a)(E,d.a)};return window.addEventListener(f.a.VISIBILITY_CHANGED,e),function(){window.removeEventListener(f.a.VISIBILITY_CHANGED,e)}}),[]),o.a.createElement(h.a,{dataElement:b.a.RUBBER_STAMP_PANEL,className:p()(G({Panel:!0,RubberStampPanel:!0},R,c))},o.a.createElement("div",{className:"rubber-stamp-panel-header"},e("rubberStampPanel.header")),o.a.createElement(S,null),o.a.createElement("div",{className:p()(G({"rubber-stamps-container":!0},R,c))},o.a.createElement(z,{selectedStampIndex:x,standardStampsOffset:v.length,setSelectedRubberStamp:P,customStamps:g}),o.a.createElement(w.a,null),o.a.createElement(O,{setSelectedRubberStamp:P,standardStamps:v,selectedStampIndex:x})))};t.default=q}}]);
//# sourceMappingURL=45.chunk.js.map