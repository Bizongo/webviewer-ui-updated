(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1727:function(o,n,t){var i=t(31),e=t(1805);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[o.i,e,""]]);var a={insert:function(o){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(o);let n;n=document.getElementsByTagName("apryse-webviewer"),n.length||(n=function o(n,t=document){const i=[];return t.querySelectorAll(n).forEach(o=>i.push(o)),t.querySelectorAll("*").forEach(t=>{t.shadowRoot&&i.push(...o(n,t.shadowRoot))}),i}("apryse-webviewer"));const t=[];for(let i=0;i<n.length;i++){const e=n[i];if(0===i)e.shadowRoot.appendChild(o),o.onload=function(){t.length>0&&t.forEach(n=>{n.innerHTML=o.innerHTML})};else{const n=o.cloneNode(!0);e.shadowRoot.appendChild(n),t.push(n)}}},singleton:!1};i(e,a);o.exports=e.locals||{}},1805:function(o,n,t){(n=t(32)(!1)).push([o.i,".open.LinkModal{visibility:visible}.closed.LinkModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.LinkModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.LinkModal .modal-container .wrapper .modal-content{padding:10px}.LinkModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.LinkModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.LinkModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.LinkModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.LinkModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.LinkModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.LinkModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.LinkModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.LinkModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.LinkModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LinkModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .LinkModal .footer .modal-button{padding:23px 8px}}.LinkModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LinkModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .LinkModal .swipe-indicator{display:none}}.LinkModal .container{overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .LinkModal .container,.LinkModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .LinkModal .container,.LinkModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LinkModal .container,.LinkModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .LinkModal .container,.LinkModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.LinkModal .container .tab-list{width:100%;height:28px;display:flex;border-radius:4px;color:var(--text-color)}.LinkModal .container .tab-list .tab-options-button{border-bottom:2px solid #fff!important;padding:0 20px!important;text-align:center;vertical-align:middle;line-height:24px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;display:flex;border-radius:0;cursor:pointer}.LinkModal .container .tab-list .tab-options-button:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.LinkModal .container .tab-list .tab-options-button:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.LinkModal .container .tab-list .tab-options-button:hover{color:#7d69ff;border-bottom:2px solid #7d69ff!important}.LinkModal .container .tab-list .tab-options-button:hover .tabs_icon{color:#7d69ff}.LinkModal .container .tab-list .tab-options-button.selected{color:#7d69ff;border-bottom:2px solid #7d69ff!important;cursor:default}.LinkModal .container .tab-list .tab-options-button.selected .tabs_icon{color:#7d69ff}.LinkModal .container .tab-list .tab-options-button .tabs_icon{height:10px;width:20px;margin-top:2px;margin-right:6px}.LinkModal .container .tab-list .tab-options-divider{width:1px;background:var(--divider)}.LinkModal .container .tab-panel{width:100%;display:flex;flex-direction:column;align-items:center}.LinkModal{font-size:.9em}.LinkModal .container{display:flex;flex-direction:column;align-items:center;min-width:400px;border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);padding:8px;background:var(--component-background)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .LinkModal .container{padding:24px 24px 16px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .LinkModal .container{padding:24px 24px 16px}}.LinkModal .container .StylePopup{border-radius:0;box-shadow:none}.LinkModal .container .divider-horizontal{width:100%;height:1px;margin-bottom:8px;background:var(--divider)}.LinkModal .container .tab-list{margin:8px 0}.LinkModal .container .linkInput{display:flex;flex-direction:row;justify-content:space-between}.LinkModal .container input{margin-top:8px;width:100%;height:30px;padding:4px 8px 6px;border:1px solid var(--border);border-radius:4px;color:var(--text-color)}.LinkModal .container input:focus{outline:none;border:1px solid var(--focus-border)}.LinkModal .container input::-moz-placeholder{color:var(--placeholder-text)}.LinkModal .container input::placeholder{color:var(--placeholder-text)}.LinkModal .container input::-webkit-inner-spin-button,.LinkModal .container input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.LinkModal .container input[type=number]{-moz-appearance:textfield}.LinkModal .container form{width:100%}.LinkModal .container .Button{display:flex;justify-content:center;align-items:center;color:var(--primary-button-text);font-weight:600;padding:6px 18px;margin-top:8px;margin-left:5px;width:auto;width:-moz-fit-content;width:fit-content;background:var(--primary-button);border-radius:4px;height:30px;cursor:pointer}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.LinkModal .container .Button{padding-left:11px}}.LinkModal .container .Button:hover{background:var(--primary-button-hover)}.LinkModal .container .Button.disabled{background:var(--gray-6);border-color:var(--gray-6);cursor:not-allowed;pointer-events:none}",""]),n.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},o.exports=n}}]);
//# sourceMappingURL=20.chunk.js.map