!function(){function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function s(t){e(i,o,a,s,c,"next",t)}function c(t){e(i,o,a,s,c,"throw",t)}s(void 0)}))}}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{XGfm:function(e,o,a){"use strict";a.r(o),a.d(o,"ion_toast",(function(){return f}));var i=a("c1op"),s=(a("AfW+"),a("aiEM"),a("+4pY")),c=a("pori"),l=a("Dl6n"),d=a("YtD4"),u=function(t,e){var r=Object(s.a)(),n=Object(s.a)(),o=t.host||t,a=t.querySelector(".toast-wrapper");switch(n.addElement(a),e){case"top":n.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":var i=Math.floor(o.clientHeight/2-a.clientHeight/2);a.style.top=i+"px",n.fromTo("opacity",.01,1);break;default:n.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return r.addElement(o).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(n)},p=function(t,e){var r=Object(s.a)(),n=Object(s.a)(),o=t.host||t,a=t.querySelector(".toast-wrapper");switch(n.addElement(a),e){case"top":n.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return r.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)},b=function(t,e){var r=Object(s.a)(),n=Object(s.a)(),o=t.host||t,a=t.querySelector(".toast-wrapper");switch(n.addElement(a),e){case"top":a.style.top="calc(8px + var(--ion-safe-area-top, 0px))",n.fromTo("opacity",.01,1);break;case"middle":var i=Math.floor(o.clientHeight/2-a.clientHeight/2);a.style.top=i+"px",n.fromTo("opacity",.01,1);break;default:a.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",n.fromTo("opacity",.01,1)}return r.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(n)},h=function(t){var e=Object(s.a)(),r=Object(s.a)(),n=t.host||t,o=t.querySelector(".toast-wrapper");return r.addElement(o).fromTo("opacity",.99,0),e.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(r)},f=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Object(i.l)(this,t),this.presented=!1,this.mode=Object(i.d)(this),this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0,Object(c.e)(this.el),this.didPresent=Object(i.e)(this,"ionToastDidPresent",7),this.willPresent=Object(i.e)(this,"ionToastWillPresent",7),this.willDismiss=Object(i.e)(this,"ionToastWillDismiss",7),this.didDismiss=Object(i.e)(this,"ionToastDidDismiss",7)}var o,a,s,f,g,v;return o=e,a=[{key:"present",value:(v=r(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.f)(this,"toastEnter",u,b,this.position);case 2:this.duration>0&&(this.durationTimeout=setTimeout((function(){return e.dismiss(void 0,"timeout")}),this.duration));case 3:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)})},{key:"dismiss",value:function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(c.g)(this,t,e,"toastLeave",p,h,this.position)}},{key:"onDidDismiss",value:function(){return Object(c.h)(this.el,"ionToastDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(c.h)(this.el,"ionToastWillDismiss")}},{key:"getButtons",value:function(){var t=this,e=this.buttons?this.buttons.map((function(t){return"string"==typeof t?{text:t}:t})):[];return this.showCloseButton&&e.push({text:this.closeButtonText||"Close",handler:function(){return t.dismiss(void 0,"cancel")}}),e}},{key:"buttonClick",value:(g=r(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.role,!Object(c.j)(r)){t.next=5;break}t.t0=this.dismiss(void 0,r),t.next=13;break;case 5:return t.next=7,this.callButtonHandler(e);case 7:if(!t.sent){t.next=11;break}t.t1=this.dismiss(void 0,e.role),t.next=12;break;case 11:t.t1=Promise.resolve();case 12:t.t0=t.t1;case 13:return t.abrupt("return",t.t0);case 14:case"end":return t.stop()}}),t,this)}))),function(t){return g.apply(this,arguments)})},{key:"callButtonHandler",value:(f=r(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!e.handler){t.next=13;break}return t.prev=1,t.t0=!1,t.next=5,Object(c.p)(e.handler);case 5:if(t.t1=t.sent,t.t0!==t.t1){t.next=8;break}return t.abrupt("return",!1);case 8:t.next=13;break;case 10:t.prev=10,t.t2=t.catch(1),console.error(t.t2);case 13:return t.abrupt("return",!0);case 14:case"end":return t.stop()}}),t,null,[[1,10]])}))),function(t){return f.apply(this,arguments)})},{key:"renderButtons",value:function(e,r){var n=this;if(0!==e.length){var o=Object(i.d)(this),a=t({"toast-button-group":!0},"toast-button-group-"+r,!0);return Object(i.i)("div",{class:a},e.map((function(t){return Object(i.i)("button",{type:"button",class:m(t),tabIndex:0,onClick:function(){return n.buttonClick(t)}},Object(i.i)("div",{class:"toast-button-inner"},t.icon&&Object(i.i)("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===o&&Object(i.i)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))})))}}},{key:"render",value:function(){var e=this.getButtons(),r=e.filter((function(t){return"start"===t.side})),n=e.filter((function(t){return"start"!==t.side})),o=Object(i.d)(this),a=t({"toast-wrapper":!0},"toast-"+this.position,!0);return Object(i.i)(i.a,{style:{zIndex:""+(6e4+this.overlayIndex)},class:Object.assign(Object.assign(Object.assign(t({},o,!0),Object(l.a)(this.color)),Object(l.b)(this.cssClass)),{"toast-translucent":this.translucent})},Object(i.i)("div",{class:a},Object(i.i)("div",{class:"toast-container"},this.renderButtons(r,"start"),Object(i.i)("div",{class:"toast-content"},void 0!==this.header&&Object(i.i)("div",{class:"toast-header"},this.header),void 0!==this.message&&Object(i.i)("div",{class:"toast-message",innerHTML:Object(d.a)(this.message)})),this.renderButtons(n,"end"))))}},{key:"el",get:function(){return Object(i.f)(this)}}],s=[{key:"style",get:function(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50,#f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-850,#262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-middle{opacity:.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.activated{opacity:.4}@media (any-hover:hover){.toast-button:hover{opacity:.6}}"}}],a&&n(o.prototype,a),s&&n(o,s),e}(),m=function(e){var r;return Object.assign((t(r={"toast-button":!0,"toast-button-icon-only":void 0!==e.icon&&void 0===e.text},"toast-button-"+e.role,void 0!==e.role),t(r,"ion-focusable",!0),t(r,"ion-activatable",!0),r),Object(l.b)(e.cssClass))}}}])}();