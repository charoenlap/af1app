!function(){function e(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"059i":function(i,n,o){"use strict";o.r(n),o.d(n,"ion_checkbox",(function(){return s}));var r=o("c1op"),c=(o("AfW+"),o("aiEM")),a=o("Dl6n"),s=function(){function i(e){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),Object(r.l)(this,e),this.inputId="ion-cb-"+h++,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=function(){t.setFocus(),t.checked=!t.checked,t.indeterminate=!1},this.onFocus=function(){t.ionFocus.emit()},this.onBlur=function(){t.ionBlur.emit()},this.ionChange=Object(r.e)(this,"ionChange",7),this.ionFocus=Object(r.e)(this,"ionFocus",7),this.ionBlur=Object(r.e)(this,"ionBlur",7),this.ionStyle=Object(r.e)(this,"ionStyle",7)}var n,o,s;return n=i,s=[{key:"watchers",get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}},{key:"style",get:function(){return":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.23);--background:var(--ion-item-background,var(--ion-background-color,#fff));--size:26px;width:var(--size);height:var(--size)}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:16px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:16px;margin-inline-end:16px}}"}}],(o=[{key:"componentWillLoad",value:function(){this.emitStyle()}},{key:"checkedChanged",value:function(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()}},{key:"disabledChanged",value:function(){this.emitStyle()}},{key:"emitStyle",value:function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})}},{key:"setFocus",value:function(){this.buttonEl&&this.buttonEl.focus()}},{key:"render",value:function(){var t,i=this,n=this.inputId,o=this.indeterminate,s=this.disabled,h=this.checked,b=this.value,l=this.color,d=this.el,u=n+"-lbl",k=Object(r.d)(this),m=Object(c.f)(d);m&&(m.id=u),Object(c.a)(!0,d,this.name,h?b:"",s);var g=o?Object(r.i)("path",{d:"M6 12L18 12"}):Object(r.i)("path",{d:"M5.9,12.5l3.8,3.8l8.8-8.8"});return"md"===k&&(g=o?Object(r.i)("path",{d:"M2 12H22"}):Object(r.i)("path",{d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),Object(r.i)(r.a,{onClick:this.onClick,role:"checkbox","aria-disabled":s?"true":null,"aria-checked":""+h,"aria-labelledby":u,class:Object.assign(Object.assign({},Object(a.a)(l)),(t={},e(t,k,!0),e(t,"in-item",Object(a.c)("ion-item",d)),e(t,"checkbox-checked",h),e(t,"checkbox-disabled",s),e(t,"checkbox-indeterminate",o),e(t,"interactive",!0),t))},Object(r.i)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},g),Object(r.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:function(e){return i.buttonEl=e}}))}},{key:"el",get:function(){return Object(r.f)(this)}}])&&t(n.prototype,o),s&&t(n,s),i}(),h=0}}])}();