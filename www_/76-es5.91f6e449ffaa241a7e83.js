!function(){function e(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function t(e,t,o,r,i,n,s){try{var a=e[n](s),p=a.value}catch(c){return void o(c)}a.done?t(p):Promise.resolve(p).then(r,i)}function o(e){return function(){var o=this,r=arguments;return new Promise((function(i,n){var s=e.apply(o,r);function a(e){t(s,i,n,a,p,"next",e)}function p(e){t(s,i,n,a,p,"throw",e)}a(void 0)}))}}function r(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{Gdks:function(t,i,n){"use strict";n.r(i),n.d(i,"ion_popover",(function(){return m}));var s=n("c1op"),a=(n("AfW+"),n("aiEM"),n("+4pY")),p=(n("kBU6"),n("pori")),c=n("Dl6n"),l=n("m9yc"),d=n("K6rM"),u=function(e,t){var o="top",r="left",i=e.querySelector(".popover-content"),n=i.getBoundingClientRect(),s=n.width,p=n.height,c=e.ownerDocument.defaultView.innerWidth,l=e.ownerDocument.defaultView.innerHeight,d=t&&t.target&&t.target.getBoundingClientRect(),u=null!=d&&"top"in d?d.top:l/2-p/2,v=null!=d&&"left"in d?d.left:c/2,f=d&&d.width||0,b=d&&d.height||0,m=e.querySelector(".popover-arrow"),w=m.getBoundingClientRect(),g=w.width,x=w.height;null==d&&(m.style.display="none");var y={top:u+b,left:v+f/2-g/2},k={top:u+b+(x-1),left:v+f/2-s/2},j=!1,O=!1;k.left<h+25?(j=!0,k.left=h):s+h+k.left+25>c&&(O=!0,k.left=c-s-h,r="right"),u+b+p>l&&u-p>0?(y.top=u-(x+1),k.top=u-p-(x-1),e.className=e.className+" popover-bottom",o="bottom"):u+b+p>l&&(i.style.bottom=h+"%"),m.style.top=y.top+"px",m.style.left=y.left+"px",i.style.top=k.top+"px",i.style.left=k.left+"px",j&&(i.style.left="calc(".concat(k.left,"px + var(--ion-safe-area-left, 0px))")),O&&(i.style.left="calc(".concat(k.left,"px - var(--ion-safe-area-right, 0px))")),i.style.transformOrigin=o+" "+r;var D=Object(a.a)(),P=Object(a.a)(),E=Object(a.a)();return P.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.08),E.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),D.addElement(e).easing("ease").duration(100).addAnimation([P,E])},h=5,v=function(e){var t=Object(a.a)(),o=Object(a.a)(),r=Object(a.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.08,0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,r])},f=function(e,t){var o=e.ownerDocument,r="rtl"===o.dir,i="top",n=r?"right":"left",s=e.querySelector(".popover-content"),p=s.getBoundingClientRect(),c=p.width,l=p.height,d=o.defaultView.innerWidth,u=o.defaultView.innerHeight,h=t&&t.target&&t.target.getBoundingClientRect(),v=null!=h&&"bottom"in h?h.bottom:u/2-l/2,f=h&&h.height||0,b={top:v,left:null!=h&&"left"in h?r?h.left-c+h.width:h.left:d/2-c/2};b.left<12?(b.left=12,n="left"):c+12+b.left>d&&(b.left=d-c-12,n="right"),v+f+l>u&&v-l>0?(b.top=v-l-f,e.className=e.className+" popover-bottom",i="bottom"):v+f+l>u&&(s.style.bottom="12px");var m=Object(a.a)(),w=Object(a.a)(),g=Object(a.a)(),x=Object(a.a)(),y=Object(a.a)();return w.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),g.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),x.addElement(s).beforeStyles({top:b.top+"px",left:b.left+"px","transform-origin":"".concat(i," ").concat(n)}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),m.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([w,g,x,y])},b=function(e){var t=Object(a.a)(),o=Object(a.a)(),r=Object(a.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,r])},m=function(){function t(e){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Object(s.l)(this,e),this.presented=!1,this.mode=Object(s.d)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),o.dismiss()},this.onBackdropTap=function(){o.dismiss(void 0,p.a)},this.onLifecycle=function(e){var t=o.usersElement,r=w[e.type];if(t&&r){var i=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(i)}},Object(p.e)(this.el),this.didPresent=Object(s.e)(this,"ionPopoverDidPresent",7),this.willPresent=Object(s.e)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(s.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(s.e)(this,"ionPopoverDidDismiss",7)}var i,n,a,h,m;return i=t,n=[{key:"present",value:(m=o(regeneratorRuntime.mark((function e(){var t,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.presented){e.next=2;break}return e.abrupt("return");case 2:if(t=this.el.querySelector(".popover-content")){e.next=5;break}throw new Error("container is undefined");case 5:return o=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),e.next=8,Object(l.a)(this.delegate,t,this.component,["popover-viewport",this.el["s-sc"]],o);case 8:return this.usersElement=e.sent,e.next=11,Object(d.a)(this.usersElement);case 11:return e.abrupt("return",Object(p.f)(this,"popoverEnter",u,f,this.event));case 12:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)})},{key:"dismiss",value:(h=o(regeneratorRuntime.mark((function e(t,o){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.g)(this,t,o,"popoverLeave",v,b,this.event);case 2:if(r=e.sent,e.t0=r,!e.t0){e.next=7;break}return e.next=7,Object(l.b)(this.delegate,this.usersElement);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e,this)}))),function(e,t){return h.apply(this,arguments)})},{key:"onDidDismiss",value:function(){return Object(p.h)(this.el,"ionPopoverDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(p.h)(this.el,"ionPopoverWillDismiss")}},{key:"render",value:function(){var t,o=Object(s.d)(this),r=this.onLifecycle;return Object(s.i)(s.a,{"aria-modal":"true","no-router":!0,style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(c.b)(this.cssClass)),(t={},e(t,o,!0),e(t,"popover-translucent",this.translucent),t)),onIonPopoverDidPresent:r,onIonPopoverWillPresent:r,onIonPopoverWillDismiss:r,onIonPopoverDidDismiss:r,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(s.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(s.i)("div",{class:"popover-wrapper"},Object(s.i)("div",{class:"popover-arrow"}),Object(s.i)("div",{class:"popover-content"})))}},{key:"el",get:function(){return Object(s.f)(this)}}],a=[{key:"style",get:function(){return'.sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}'}}],n&&r(i.prototype,n),a&&r(i,a),t}(),w={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}])}();