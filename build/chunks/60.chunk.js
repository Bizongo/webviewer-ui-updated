(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1803:function(n,t,e){var o=e(31),i=e(1804);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:function(n){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(n);let t;t=document.getElementsByTagName("apryse-webviewer"),t.length||(t=function n(t,e=document){const o=[];return e.querySelectorAll(t).forEach(n=>o.push(n)),e.querySelectorAll("*").forEach(e=>{e.shadowRoot&&o.push(...n(t,e.shadowRoot))}),o}("apryse-webviewer"));const e=[];for(let o=0;o<t.length;o++){const i=t[o];if(0===o)i.shadowRoot.appendChild(n),n.onload=function(){e.length>0&&e.forEach(t=>{t.innerHTML=n.innerHTML})};else{const t=n.cloneNode(!0);i.shadowRoot.appendChild(t),e.push(t)}}},singleton:!1};o(i,a);n.exports=i.locals||{}},1804:function(n,t,e){(t=e(32)(!1)).push([n.i,".open.LinkAnnotationPopupContainer{visibility:visible}.closed.LinkAnnotationPopupContainer{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.LinkAnnotationPopupContainer{position:absolute;z-index:70;display:flex;justify-content:center;align-items:center}.LinkAnnotationPopupContainer:empty{padding:0}.LinkAnnotationPopupContainer .buttons{display:flex}.LinkAnnotationPopupContainer .Button{margin:4px;width:32px;height:32px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LinkAnnotationPopupContainer .Button{width:42px;height:42px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .LinkAnnotationPopupContainer .Button{width:42px;height:42px}}.LinkAnnotationPopupContainer .Button:hover{background:var(--popup-button-hover)}.LinkAnnotationPopupContainer .Button .Icon{width:18px;height:18px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LinkAnnotationPopupContainer .Button .Icon{width:24px;height:24px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .LinkAnnotationPopupContainer .Button .Icon{width:24px;height:24px}}.is-vertical.LinkAnnotationPopupContainer .Button.main-menu-button{width:100%;border-radius:0;justify-content:flex-start;padding-left:var(--padding-small);padding-right:var(--padding-small);margin:0 0 var(--padding-tiny) 0}.is-vertical.LinkAnnotationPopupContainer .Button.main-menu-button:first-child{margin-top:var(--padding-tiny)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .is-vertical.LinkAnnotationPopupContainer .Button.main-menu-button{width:100%;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .is-vertical.LinkAnnotationPopupContainer .Button.main-menu-button{width:100%;height:32px}}.is-vertical.LinkAnnotationPopupContainer .Button.main-menu-button .Icon{margin-right:10px}.is-vertical.LinkAnnotationPopupContainer .Button.main-menu-button span{white-space:nowrap}@keyframes bottom-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes up-bottom{0%{transform:translateY(0)}to{transform:translateY(100%)}}.LinkAnnotationPopupContainer{border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background)}.LinkAnnotationPopup.is-horizontal .contents{display:flex;justify-content:center;align-items:center;grid-gap:8px;gap:8px}.LinkAnnotationPopup.is-horizontal .contents .link-annot-input{margin:8px 0 8px 8px;color:#485056;font-style:normal;font-weight:400;line-height:normal;border:none;width:-moz-fit-content;width:fit-content;max-width:240px;cursor:pointer;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical;box-sizing:border-box;word-break:break-all}.LinkAnnotationPopup.is-horizontal .contents .divider{width:1px;height:20px;background:var(--divider);flex-shrink:0}.LinkAnnotationPopup.is-horizontal .contents .main-menu-button{margin:4px 8px 4px 0}",""]),t.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},n.exports=t},1971:function(n,t,e){"use strict";e.r(t);e(9),e(13),e(14),e(28),e(35),e(93),e(25),e(22),e(18),e(10),e(16),e(29),e(20),e(15),e(27),e(53),e(23),e(54),e(57),e(36),e(7),e(17),e(21),e(11),e(26),e(12);var o=e(2),i=e(19),a=e.n(i),r=e(1),p=e(5),l=e(72),u=e(275),s=e(55),c=e(113),d=e(4),m=e.n(d),h=e(0),f=e.n(h),b=(e(1803),{handleUnLink:m.a.func,isAnnotation:m.a.bool,isMobileDevice:m.a.bool,linkText:m.a.string,handleOnMouseEnter:m.a.func,handleOnMouseLeave:m.a.func,handleMouseMove:m.a.func}),y=function(n){var t=n.handleUnLink,e=n.isAnnotation,o=n.isMobileDevice,i=n.linkText,r=n.handleOnMouseEnter,l=n.handleOnMouseLeave,u=n.handleMouseMove;return o||!e?null:f.a.createElement("div",{"data-testid":"link-annotation-element",className:a()({Popup:!0,LinkAnnotationPopup:!0,"is-horizontal":!0}),onMouseEnter:r,onMouseLeave:l,onMouseMove:u},f.a.createElement("div",{className:"contents","data-element":p.a.LINK_URI},i&&f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:"link-annot-input"},i),f.a.createElement("div",{className:"divider"})),f.a.createElement(c.a,{className:"main-menu-button",dataElement:p.a.LINK_ANNOTATION_UNLINK_BUTTON,title:"action.unlink",img:"icon-tool-unlink",onClick:t})))};y.propTypes=b;var w=y,v=e(3),x=e(553),g=e(131),A=e(6),k=e(465);function O(n){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function P(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function L(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?P(Object(e),!0).forEach((function(t){E(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):P(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function E(n,t,e){var o;return o=function(n,t){if("object"!=O(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var o=e.call(n,t||"default");if("object"!=O(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(t,"string"),(t="symbol"==O(o)?o:o+"")in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function j(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var o,i,a,r,p=[],l=!0,u=!1;try{if(a=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;l=!1}else for(;!(l=(o=a.call(e)).done)&&(p.push(o.value),p.length!==t);l=!0);}catch(n){u=!0,i=n}finally{try{if(!l&&null!=e.return&&(r=e.return(),Object(r)!==r))return}finally{if(u)throw i}}return p}}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return N(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return N(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}var M=window.Core.Annotations,C={annotation:m.a.object,handleOnMouseEnter:m.a.func,handleOnMouseLeave:m.a.func},T=function(n){var t=n.annotation,e=n.handleOnMouseEnter,i=n.handleOnMouseLeave,c=j(Object(A.e)((function(n){return[v.a.isElementOpen(n,p.a.LINK_ANNOTATION_POPUP),v.a.getActiveDocumentViewerKey(n)]}),A.c),2),d=c[0],m=c[1],b=j(Object(h.useState)({left:0,top:0}),2),y=b[0],O=b[1],P=Object(A.d)(),E=Object(h.useRef)(null),N=function(){return P(o.a.closeElement(p.a.LINK_ANNOTATION_POPUP))};Object(g.a)(E,(function(){d&&N()})),Object(h.useEffect)((function(){var n=function(){N()},t=r.a.getScrollViewElement();return null==t||t.addEventListener("scroll",n),function(){null==t||t.removeEventListener("scroll",n)}}),[]),Object(h.useLayoutEffect)((function(){(t||d)&&C()}),[t,d,m]);var C=function(){t&&E.current&&O(Object(u.c)(t,E,m,5))},T=Object(x.a)(t)||"",I=a()({Popup:!0,LinkAnnotationPopupContainer:!0,open:d,closed:!d}),S=void 0!==t;return f.a.createElement(l.a,{dataElement:p.a.LINK_ANNOTATION_POPUP,className:I,style:L({},y),ref:E},f.a.createElement(w,{linkText:T,handleUnLink:function(){!function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=r.a.getAnnotationManager(t),o=e.getGroupAnnotations(n).find((function(n,t){return n instanceof M.TextHighlightAnnotation&&0===n.Opacity&&0===t})),i=Object(k.a)(n);i.forEach((function(n){e.ungroupAnnotations([n]),o&&e.deleteAnnotation(n,{source:"unlink"},!0)})),e.deleteAnnotation(n,{source:"unlink"},!0)}(t,m),N(),i()},isAnnotation:S,isMobileDevice:Object(s.b)(),handleOnMouseEnter:e,handleOnMouseLeave:i,handleMouseMove:function(n){n.preventDefault(),n.stopPropagation()}}))};T.propTypes=C;var I=T;t.default=I}}]);
//# sourceMappingURL=60.chunk.js.map