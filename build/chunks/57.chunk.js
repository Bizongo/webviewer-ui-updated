(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1825:function(o,e,t){var n=t(31),r=t(1826);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[o.i,r,""]]);var i={insert:function(o){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(o);let e;e=document.getElementsByTagName("apryse-webviewer"),e.length||(e=function o(e,t=document){const n=[];return t.querySelectorAll(e).forEach(o=>n.push(o)),t.querySelectorAll("*").forEach(t=>{t.shadowRoot&&n.push(...o(e,t.shadowRoot))}),n}("apryse-webviewer"));const t=[];for(let n=0;n<e.length;n++){const r=e[n];if(0===n)r.shadowRoot.appendChild(o),o.onload=function(){t.length>0&&t.forEach(e=>{e.innerHTML=o.innerHTML})};else{const e=o.cloneNode(!0);r.shadowRoot.appendChild(e),t.push(e)}}},singleton:!1};n(r,i);o.exports=r.locals||{}},1826:function(o,e,t){(e=t(32)(!1)).push([o.i,".open.ErrorModal{visibility:visible}.closed.ErrorModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ErrorModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.ErrorModal .modal-container .wrapper .modal-content{padding:10px}.ErrorModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.ErrorModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.ErrorModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.ErrorModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.ErrorModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.ErrorModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.ErrorModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.ErrorModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.ErrorModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.ErrorModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ErrorModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ErrorModal .footer .modal-button{padding:23px 8px}}.ErrorModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ErrorModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .ErrorModal .swipe-indicator{display:none}}.ErrorModal .modal-container{width:300px;word-break:break-word;white-space:pre-wrap}",""]),e.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},o.exports=e},1982:function(o,e,t){"use strict";t.r(e);t(9),t(13),t(14),t(22),t(52),t(18),t(10),t(16),t(20),t(15),t(7),t(17),t(21),t(59),t(11),t(215),t(12);var n=t(0),r=t.n(n),i=t(19),a=t.n(i),d=t(6),l=t(430),p=t(2),s=t(3),c=t(48),m=t(178),u=t(362),b=t(24),f=t(5);t(1825);function h(o,e){return function(o){if(Array.isArray(o))return o}(o)||function(o,e){var t=null==o?null:"undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(null!=t){var n,r,i,a,d=[],l=!0,p=!1;try{if(i=(t=t.call(o)).next,0===e){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=i.call(t)).done)&&(d.push(n.value),d.length!==e);l=!0);}catch(o){p=!0,r=o}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(p)throw r}}return d}}(o,e)||function(o,e){if(!o)return;if("string"==typeof o)return w(o,e);var t=Object.prototype.toString.call(o).slice(8,-1);"Object"===t&&o.constructor&&(t=o.constructor.name);if("Map"===t||"Set"===t)return Array.from(o);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(o,e)}(o,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(o,e){(null==e||e>o.length)&&(e=o.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=o[t];return n}var y=function(){var o=h(Object(d.e)((function(o){return[s.a.getErrorMessage(o),s.a.getErrorTitle(o),s.a.isElementDisabled(o,f.a.ERROR_MODAL),s.a.isElementOpen(o,f.a.ERROR_MODAL),s.a.getIsMultiTab(o)]}),d.c),5),e=o[0],t=o[1],i=o[2],w=o[3],y=o[4],x=Object(d.d)(),v=h(Object(l.a)(),1)[0],E=function(o){return null==o?void 0:o.includes("dev.apryse.com")};Object(n.useEffect)((function(){if(w)return x(p.a.closeElements([f.a.SIGNATURE_MODAL,f.a.PRINT_MODAL,f.a.LOADING_MODAL,f.a.PROGRESS_MODAL,f.a.PASSWORD_MODAL,f.a.FILTER_MODAL])),window.addEventListener("keydown",(function(o){return Object(m.b)(o,O)})),function(){return window.removeEventListener("keydown",m.b)}}),[x,w]);var g,M=e.startsWith("message."),A=0;y&&(A+=null===(g=Object(b.a)().getElementsByClassName("TabsHeader")[0])||void 0===g?void 0:g.getBoundingClientRect().bottom);var O=function(){x(p.a.closeElement(f.a.ERROR_MODAL)),E(e)&&window.open("https://dev.apryse.com","_blank")},k=v("action.ok");return E(e)&&(k="Get trial key"),i?null:r.a.createElement("div",{className:a()({Modal:!0,ErrorModal:!0,open:w,closed:!w}),style:y?{height:"calc(100% - ".concat(A,"px)")}:void 0,"data-element":f.a.ERROR_MODAL},r.a.createElement(u.a,{isOpen:w,title:t||"message.error",closeButtonDataElement:"errorModalCloseButton",onCloseClick:O},r.a.createElement("div",{className:"modal-content error-modal-content","aria-hidden":"true"},r.a.createElement("p",null,M?v(e):e)),r.a.createElement("div",{className:"modal-footer footer"},r.a.createElement(c.a,{className:"confirm modal-button",dataElement:"closeErrorModalButton",label:k,onClick:O}))))};e.default=y}}]);
//# sourceMappingURL=57.chunk.js.map