!function(){function t(t,o){var a;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=function(t,o){if(!t)return;if("string"==typeof t)return e(t,o);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(t,o)}(t))||o&&t&&"number"==typeof t.length){a&&(t=a);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,i=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return l=t.done,t},e:function(t){i=!0,c=t},f:function(){try{l||null==a.return||a.return()}finally{if(i)throw c}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,a=new Array(e);o<e;o++)a[o]=t[o];return a}(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{"5+Pq":function(e,o,a){"use strict";a.r(o),a.d(o,"iosTransitionAnimation",(function(){return u})),a.d(o,"shadow",(function(){return i})),a("c1op"),a("AfW+"),a("aiEM");var n=a("+4pY"),r=(a("kBU6"),a("K6rM")),c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top";return"calc(".concat(t,"px + var(--ion-safe-area-").concat(e,"))")},l=function(t){return document.querySelector(t+".ion-cloned-element")},i=function(t){return t.shadowRoot||t},s=function(t){return t.querySelector("ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]")},f=function(e,o){var a,n=t(e.querySelectorAll("ion-buttons"));try{for(n.s();!(a=n.n()).done;){var r=a.value,c=r.closest("ion-header"),l=c&&!c.classList.contains("header-collapse-condense-inactive"),i=r.querySelector("ion-back-button"),s=r.classList.contains("buttons-collapse");if(null!==i&&(s&&l&&o||!s))return i}}catch(f){n.e(f)}finally{n.f()}return null},d=function(t,e,o,a){var r=a.getBoundingClientRect(),i=e?"calc(100% - ".concat(r.right+4,"px)"):r.left-4+"px",s=e?"7px":"-7px",f=e?"-4px":"4px",d=e?"-4px":"4px",m=e?"right":"left",u=e?"left":"right",y=[{offset:0,opacity:0,transform:"translate(".concat(s,", ").concat(c(8),") scale(2.1)")},{offset:1,opacity:1,transform:"translate(".concat(f,", ").concat(c(-40),") scale(1)")}],p=[{offset:0,opacity:1,transform:"translate(".concat(f,", ").concat(c(-40),") scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate(".concat(s,", ").concat(c(8),") scale(2.1)")}],b=o?p:y,S=[{offset:0,opacity:0,transform:"translate3d(".concat(d,", ").concat(c(-35),", 0) scale(0.6)")},{offset:1,opacity:1,transform:"translate3d(".concat(d,", ").concat(c(-40),", 0) scale(1)")}],v=[{offset:0,opacity:1,transform:"translate(".concat(d,", ").concat(c(-40),") scale(1)")},{offset:.2,opacity:0,transform:"translate(".concat(d,", ").concat(c(-35),") scale(0.6)")},{offset:1,opacity:0,transform:"translate(".concat(d,", ").concat(c(-35),") scale(0.6)")}],h=o?v:S,g=Object(n.a)(),T=Object(n.a)(),A=l("ion-back-button"),E=A.querySelector(".button-text"),q=A.querySelector("ion-icon");A.text=a.text,A.mode=a.mode,A.icon=a.icon,A.color=a.color,A.disabled=a.disabled,A.style.setProperty("display","block"),A.style.setProperty("position","fixed"),T.addElement(q),g.addElement(E),g.beforeStyles({"transform-origin":m+" center"}).beforeAddWrite((function(){a.style.setProperty("display","none"),A.style.setProperty(m,i)})).afterAddWrite((function(){a.style.setProperty("display",""),A.style.setProperty("display","none"),A.style.removeProperty(m)})).keyframes(b),T.beforeStyles({"transform-origin":u+" center"}).keyframes(h),t.addAnimation([g,T])},m=function(t,e,o,a){var r,i,s,f=a.getBoundingClientRect(),d=e?"calc(100% - ".concat(f.right,"px)"):f.left+"px",m=e?"-18px":"18px",u=e?"right":"left",y=[{offset:0,opacity:0,transform:"translate(".concat(m,", ").concat(c(0),") scale(0.49)")},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate(0, ".concat(c(49),") scale(1)")}],p=[{offset:0,opacity:.99,transform:"translate(0, ".concat(c(49),") scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate(".concat(m,", ").concat(c(0),") scale(0.5)")}],b=o?y:p,S=l("ion-title"),v=Object(n.a)();S.innerText=a.innerText,S.size=a.size,S.color=a.color,v.addElement(S),v.beforeStyles((r={"transform-origin":u+" center",height:"46px",display:"",position:"relative"},i=u,s=d,i in r?Object.defineProperty(r,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[i]=s,r)).beforeAddWrite((function(){a.style.setProperty("display","none")})).afterAddWrite((function(){a.style.setProperty("display",""),S.style.setProperty("display","none")})).keyframes(b),t.addAnimation(v)},u=function(t,e){try{var o="opacity",a="transform",c="0%",l="rtl"===t.ownerDocument.dir,u=l?"-99.5%":"99.5%",y=l?"33%":"-33%",p=e.enteringEl,b=e.leavingEl,S="back"===e.direction,v=p.querySelector(":scope > ion-content"),h=p.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),g=p.querySelectorAll(":scope > ion-header > ion-toolbar"),T=Object(n.a)(),A=Object(n.a)();if(T.addElement(p).duration(e.duration||540).easing(e.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),b&&t){var E=Object(n.a)();E.addElement(t),T.addAnimation(E)}if(v||0!==g.length||0!==h.length?(A.addElement(v),A.addElement(h)):A.addElement(p.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),T.addAnimation(A),S?A.beforeClearStyles([o]).fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(c,")")).fromTo(o,.8,1):A.beforeClearStyles([o]).fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(c,")")),v){var q=i(v).querySelector(".transition-effect");if(q){var j=q.querySelector(".transition-cover"),X=q.querySelector(".transition-shadow"),O=Object(n.a)(),x=Object(n.a)(),w=Object(n.a)();O.addElement(q).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),x.addElement(j).beforeClearStyles([o]).fromTo(o,0,.1),w.addElement(X).beforeClearStyles([o]).fromTo(o,.03,.7),O.addAnimation([x,w]),A.addAnimation([O])}}var C=p.querySelector("ion-header.header-collapse-condense"),k=function(t,e,o,a,n){var r=f(a,o),c=s(n),l=s(a),i=f(n,o),u=null!==r&&null!==c&&!o,y=null!==l&&null!==i&&o;return u?(m(t,e,o,c),d(t,e,o,r)):y&&(m(t,e,o,l),d(t,e,o,i)),{forward:u,backward:y}}(T,l,S,p,b),P=k.forward,L=k.backward;if(g.forEach((function(t){var e=Object(n.a)();e.addElement(t),T.addAnimation(e);var a=Object(n.a)();a.addElement(t.querySelector("ion-title"));var r,s=Object(n.a)(),f=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),d=t.closest("ion-header"),m=d&&d.classList.contains("header-collapse-condense-inactive");r=f.filter(S?function(t){var e=t.classList.contains("buttons-collapse");return e&&!m||!e}:function(t){return!t.classList.contains("buttons-collapse")}),s.addElement(r);var p=Object(n.a)();p.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var b=Object(n.a)();b.addElement(i(t).querySelector(".toolbar-background"));var v=Object(n.a)(),h=t.querySelector("ion-back-button");if(h&&v.addElement(h),e.addAnimation([a,s,p,b,v]),s.fromTo(o,.01,1),p.fromTo(o,.01,1),S)m||a.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(c,")")).fromTo(o,.01,1),p.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(c,")")),v.fromTo(o,.01,1);else if(C||a.fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(c,")")).fromTo(o,.01,1),p.fromTo("transform","translateX(".concat(u,")"),"translateX(".concat(c,")")),b.beforeClearStyles([o]).fromTo(o,.01,1),P||v.fromTo(o,.01,1),h&&!P){var g=Object(n.a)();g.addElement(i(h).querySelector(".button-text")).fromTo("transform",l?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(g)}})),b){var W=Object(n.a)(),z=b.querySelector(":scope > ion-content");if(W.addElement(z),W.addElement(b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),T.addAnimation(W),S){W.beforeClearStyles([o]).fromTo("transform","translateX(".concat(c,")"),l?"translateX(-100%)":"translateX(100%)");var R=Object(r.b)(b);T.afterAddWrite((function(){"normal"===T.getDirection()&&R.style.setProperty("display","none")}))}else W.fromTo("transform","translateX(".concat(c,")"),"translateX(".concat(y,")")).fromTo(o,1,.8);if(z){var B=i(z).querySelector(".transition-effect");if(B){var I=B.querySelector(".transition-cover"),M=B.querySelector(".transition-shadow"),D=Object(n.a)(),J=Object(n.a)(),U=Object(n.a)();D.addElement(B).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),J.addElement(I).beforeClearStyles([o]).fromTo(o,.1,0),U.addElement(M).beforeClearStyles([o]).fromTo(o,.7,.03),D.addAnimation([J,U]),W.addAnimation([D])}}b.querySelectorAll(":scope > ion-header > ion-toolbar").forEach((function(t){var e=Object(n.a)();e.addElement(t);var r=Object(n.a)();r.addElement(t.querySelector("ion-title"));var s=Object(n.a)(),f=t.querySelectorAll("ion-buttons,[menuToggle]"),d=t.closest("ion-header"),m=d&&d.classList.contains("header-collapse-condense-inactive"),u=Array.from(f).filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!m||!e}));s.addElement(u);var p=Object(n.a)(),b=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");b.length>0&&p.addElement(b);var v=Object(n.a)();v.addElement(i(t).querySelector(".toolbar-background"));var h=Object(n.a)(),g=t.querySelector("ion-back-button");if(g&&h.addElement(g),e.addAnimation([r,s,p,h,v]),T.addAnimation(e),h.fromTo(o,.99,0),s.fromTo(o,.99,0),p.fromTo(o,.99,0),S){if(m||r.fromTo("transform","translateX(".concat(c,")"),l?"translateX(-100%)":"translateX(100%)").fromTo(o,.99,0),p.fromTo("transform","translateX(".concat(c,")"),l?"translateX(-100%)":"translateX(100%)"),v.beforeClearStyles([o]).fromTo(o,1,.01),g&&!L){var A=Object(n.a)();A.addElement(i(g).querySelector(".button-text")).fromTo("transform","translateX(".concat(c,")"),"translateX(".concat((l?-124:124)+"px",")")),e.addAnimation(A)}}else m||r.fromTo("transform","translateX(".concat(c,")"),"translateX(".concat(y,")")).fromTo(o,.99,0).afterClearStyles([a,o]),p.fromTo("transform","translateX(".concat(c,")"),"translateX(".concat(y,")")).afterClearStyles([a,o]),h.afterClearStyles([o]),r.afterClearStyles([o]),s.afterClearStyles([o])}))}return T}catch(K){throw K}}}}])}();