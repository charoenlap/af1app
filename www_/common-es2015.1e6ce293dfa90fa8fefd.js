(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{BSjz:function(t,n,e){"use strict";var i=e("fXoL");n.SignaturePad=function(){function t(t){this.elementRef=t,this.options=this.options||{},this.onBeginEvent=new i.EventEmitter,this.onEndEvent=new i.EventEmitter}return t.prototype.ngAfterContentInit=function(){var t=e("cCNl").default,n=this.elementRef.nativeElement.querySelector("canvas");this.options.canvasHeight&&(n.height=this.options.canvasHeight),this.options.canvasWidth&&(n.width=this.options.canvasWidth),this.signaturePad=new t(n,this.options),this.signaturePad.onBegin=this.onBegin.bind(this),this.signaturePad.onEnd=this.onEnd.bind(this)},t.prototype.ngOnDestroy=function(){var t=this.elementRef.nativeElement.querySelector("canvas");t.width=0,t.height=0},t.prototype.resizeCanvas=function(){var t=Math.max(window.devicePixelRatio||1,1),n=this.signaturePad._canvas;n.width=n.offsetWidth*t,n.height=n.offsetHeight*t,n.getContext("2d").scale(t,t),this.signaturePad.clear()},t.prototype.toData=function(){return this.signaturePad?this.signaturePad.toData():[]},t.prototype.fromData=function(t){this.signaturePad.fromData(t)},t.prototype.toDataURL=function(t,n){return this.signaturePad.toDataURL(t,n)},t.prototype.fromDataURL=function(t,n){void 0===n&&(n={}),!n.hasOwnProperty("height")&&this.options.canvasHeight&&(n.height=this.options.canvasHeight),!n.hasOwnProperty("width")&&this.options.canvasWidth&&(n.width=this.options.canvasWidth),this.signaturePad.fromDataURL(t,n)},t.prototype.clear=function(){this.signaturePad.clear()},t.prototype.isEmpty=function(){return this.signaturePad.isEmpty()},t.prototype.off=function(){this.signaturePad.off()},t.prototype.on=function(){this.signaturePad.on()},t.prototype.set=function(t,n){switch(t){case"canvasHeight":this.signaturePad._canvas.height=n;break;case"canvasWidth":this.signaturePad._canvas.width=n;break;default:this.signaturePad[t]=n}},t.prototype.onBegin=function(){this.onBeginEvent.emit(!0)},t.prototype.onEnd=function(){this.onEndEvent.emit(!0)},t.prototype.queryPad=function(){return this.signaturePad},t.decorators=[{type:i.Component,args:[{template:"<canvas></canvas>",selector:"signature-pad"}]}],t.ctorParameters=[{type:i.ElementRef}],t.propDecorators={options:[{type:i.Input}],onBeginEvent:[{type:i.Output}],onEndEvent:[{type:i.Output}]},t}()},Dl6n:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return s}));const i=(t,n)=>null!==n.closest(t),o=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,r=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>n[t]=!0),n},a=/^[a-z][a-z0-9+\-.]*:/,s=async(t,n,e)=>{if(null!=t&&"#"!==t[0]&&!a.test(t)){const i=document.querySelector("ion-router");if(i)return null!=n&&n.preventDefault(),i.push(t,e)}return!1}},K6rM:function(t,n,e){"use strict";e.d(n,"a",(function(){return w})),e.d(n,"b",(function(){return M})),e.d(n,"c",(function(){return v})),e.d(n,"d",(function(){return E})),e.d(n,"e",(function(){return r}));var i=e("c1op"),o=e("kBU6");const r=t=>new Promise((n,e)=>{Object(i.m)(()=>{a(t),s(t).then(e=>{e.animation&&e.animation.destroy(),c(t),n(e)},n=>{c(t),e(n)})})}),a=t=>{const n=t.enteringEl,e=t.leavingEl;b(n,e,t.direction),t.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),E(n,!1),e&&E(e,!1)},s=async t=>{const n=await u(t);return n?d(n,t):l(t)},c=t=>{const n=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},u=async t=>{if(t.leavingEl&&t.animated&&0!==t.duration)return t.animationBuilder?t.animationBuilder:"ios"===t.mode?(await e.e(112).then(e.bind(null,"5+Pq"))).iosTransitionAnimation:(await e.e(113).then(e.bind(null,"RRi8"))).mdTransitionAnimation},d=async(t,n)=>{let i;await h(n,!0);try{const o=await e.e(5).then(e.bind(null,"gHMO"));i=await o.create(t,n.baseEl,n)}catch(r){i=t(n.baseEl,n)}g(n.enteringEl,n.leavingEl);const o=await f(i,n);return n.progressCallback&&n.progressCallback(void 0),o&&m(n.enteringEl,n.leavingEl),{hasCompleted:o,animation:i}},l=async t=>{const n=t.enteringEl,e=t.leavingEl;return await h(t,!1),g(n,e),m(n,e),{hasCompleted:!0}},h=async(t,n)=>{const e=(void 0!==t.deepWait?t.deepWait:n)?[w(t.enteringEl),w(t.leavingEl)]:[y(t.enteringEl),y(t.leavingEl)];await Promise.all(e),await p(t.viewIsReady,t.enteringEl)},p=async(t,n)=>{t&&await t(n)},f=(t,n)=>{const e=n.progressCallback,i=new Promise(n=>{t.onFinish(e=>{"number"==typeof e?n(1===e):void 0!==t.hasCompleted&&n(t.hasCompleted)})});return e?(t.progressStart(!0),e(t)):t.play(),i},g=(t,n)=>{v(n,o.c),v(t,o.a)},m=(t,n)=>{v(t,o.b),v(n,o.d)},v=(t,n)=>{if(t){const e=new CustomEvent(n,{bubbles:!1,cancelable:!1});t.dispatchEvent(e)}},y=t=>t&&t.componentOnReady?t.componentOnReady():Promise.resolve(),w=async t=>{const n=t;if(n){if(null!=n.componentOnReady&&null!=await n.componentOnReady())return;await Promise.all(Array.from(n.children).map(w))}},E=(t,n)=>{n?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},b=(t,n,e)=>{void 0!==t&&(t.style.zIndex="back"===e?"99":"101"),void 0!==n&&(n.style.zIndex="100")},M=t=>t.classList.contains("ion-page")?t:t.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||t},YtD4:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));const i=t=>{try{if("string"!=typeof t||""===t)return t;const n=document.createDocumentFragment(),e=document.createElement("div");n.appendChild(e),e.innerHTML=t,s.forEach(t=>{const e=n.querySelectorAll(t);for(let i=e.length-1;i>=0;i--){const t=e[i];t.parentNode?t.parentNode.removeChild(t):n.removeChild(t);const a=r(t);for(let n=0;n<a.length;n++)o(a[n])}});const i=r(n);for(let t=0;t<i.length;t++)o(i[t]);const a=document.createElement("div");a.appendChild(n);const c=a.querySelector("div");return null!==c?c.innerHTML:a.innerHTML}catch(n){return console.error(n),""}},o=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let e=t.attributes.length-1;e>=0;e--){const n=t.attributes.item(e),i=n.name;if(!a.includes(i.toLowerCase())){t.removeAttribute(i);continue}const o=n.value;null!=o&&o.toLowerCase().includes("javascript:")&&t.removeAttribute(i)}const n=r(t);for(let e=0;e<n.length;e++)o(n[e])},r=t=>null!=t.children?t.children:t.childNodes,a=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},m9yc:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o}));const i=async(t,n,e,i,o)=>{if(t)return t.attachViewToDom(n,e,o,i);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e;return i&&i.forEach(t=>r.classList.add(t)),o&&Object.assign(r,o),n.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},o=(t,n)=>{if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},"nN+u":function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}));const i=(t,n,e)=>{const i=new MutationObserver(t=>{e(o(t,n))});return i.observe(t,{childList:!0,subtree:!0}),i},o=(t,n)=>{let e;return t.forEach(t=>{for(let i=0;i<t.addedNodes.length;i++)e=r(t.addedNodes[i],n)||e}),e},r=(t,n)=>{if(1===t.nodeType)return(t.tagName===n.toUpperCase()?[t]:Array.from(t.querySelectorAll(n))).find(t=>!0===t.checked)}},opz7:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return i}));const i=()=>{const t=window.TapticEngine;t&&t.selection()},o=()=>{const t=window.TapticEngine;t&&t.gestureSelectionStart()},r=()=>{const t=window.TapticEngine;t&&t.gestureSelectionChanged()},a=()=>{const t=window.TapticEngine;t&&t.gestureSelectionEnd()}},qaSm:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o}));class i{constructor(t,n){this.x=t,this.y=n}}const o=(t,n,e,i,o)=>{const s=a(t.y,n.y,e.y,i.y,o);return r(t.x,n.x,e.x,i.x,s[0])},r=(t,n,e,i,o)=>o*(3*n*Math.pow(o-1,2)+o*(-3*e*o+3*e+i*o))-t*Math.pow(o-1,3),a=(t,n,e,i,o)=>s((i-=o)-3*(e-=o)+3*(n-=o)-(t-=o),3*e-6*n+3*t,3*n-3*t,t).filter(t=>t>=0&&t<=1),s=(t,n,e,i)=>{if(0===t)return((t,n,e)=>{const i=n*n-4*t*e;return i<0?[]:[(-n+Math.sqrt(i))/(2*t),(-n-Math.sqrt(i))/(2*t)]})(n,e,i);const o=(3*(e/=t)-(n/=t)*n)/3,r=(2*n*n*n-9*n*e+27*(i/=t))/27;if(0===o)return[Math.pow(-r,1/3)];if(0===r)return[Math.sqrt(-o),-Math.sqrt(-o)];const a=Math.pow(r/2,2)+Math.pow(o/3,3);if(0===a)return[Math.pow(r/2,.5)-n/3];if(a>0)return[Math.pow(-r/2+Math.sqrt(a),1/3)-Math.pow(r/2+Math.sqrt(a),1/3)-n/3];const s=Math.sqrt(Math.pow(-o/3,3)),c=Math.acos(-r/(2*Math.sqrt(Math.pow(-o/3,3)))),u=2*Math.pow(s,1/3);return[u*Math.cos(c/3)-n/3,u*Math.cos((c+2*Math.PI)/3)-n/3,u*Math.cos((c+4*Math.PI)/3)-n/3]}}}]);