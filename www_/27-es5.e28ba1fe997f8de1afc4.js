!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{TdYi:function(n,r,o){"use strict";o.r(r),o.d(r,"SendDetailPageModule",(function(){return x}));var i=o("ofXK"),a=o("3Pt+"),l=o("tyNb"),c=o("c7TG"),s=o("mrSG"),d=o("HSMY"),u=o("Wwn5"),m=o("fXoL"),p=o("e8h1");function f(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"ion-row"),m["\u0275\u0275elementStart"](1,"ion-col",6),m["\u0275\u0275elementStart"](2,"ion-button",7),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](n);var e=m["\u0275\u0275nextContext"]();return e.notAccept(e.detail.id)})),m["\u0275\u0275text"](3,"\u0e44\u0e21\u0e48\u0e23\u0e31\u0e1a"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"ion-col",8),m["\u0275\u0275elementStart"](5,"ion-button",9),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().accept()})),m["\u0275\u0275text"](6,"\u0e23\u0e31\u0e1a"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}}function g(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ion-item"),m["\u0275\u0275elementStart"](1,"ion-row"),m["\u0275\u0275elementStart"](2,"ion-col",3),m["\u0275\u0275elementStart"](3,"ion-label"),m["\u0275\u0275text"](4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate"](n)}}function h(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"ion-row"),m["\u0275\u0275elementStart"](1,"ion-col",10),m["\u0275\u0275elementStart"](2,"ion-button",7),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().sendCancle()})),m["\u0275\u0275text"](3,"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"ion-col",10),m["\u0275\u0275elementStart"](5,"ion-button",9),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](n);var e=m["\u0275\u0275nextContext"]();return e.sendConfirm(e.detail.id_jobs)})),m["\u0275\u0275text"](6,"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}}function v(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"ion-row"),m["\u0275\u0275elementStart"](1,"ion-col",3),m["\u0275\u0275elementStart"](2,"ion-button",11),m["\u0275\u0275text"](3,"\u0e04\u0e25\u0e34\u0e01\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]())}var b,S,w=[{path:"",component:(b=function(){function n(t,r,o,i,a,l){e(this,n),this.api=t,this.loadingController=r,this.route=o,this.router=i,this.callNumber=a,this.storage=l,this.detail={}}var r,o,i;return r=n,(o=[{key:"ngOnInit",value:function(){this.getSendDetail()}},{key:"ionViewWillEnter",value:function(){var e=this;this.storage.get("keyOfData").then((function(t){""!=t&&(e.connote_new=JSON.parse(t))}))}},{key:"getSendDetail",value:function(){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadingController.create({});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,this.api.getSendDetail(this.route.snapshot.paramMap.get("id")).subscribe((function(e){n.detail=e.data,n.connotes=e.connotes,console.log(n.connotes),t.dismiss()}),(function(e){console.log(e),t.dismiss()}));case 7:this.storage.get("keyOfDataSend").then((function(e){""!=e&&(n.connote_new=JSON.parse(e))}));case 8:case"end":return e.stop()}}),e,this)})))}},{key:"callNow",value:function(e){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.callNumber.callNumber(e,!0).then((function(e){return console.log("Launched dialer!",e)})).catch((function(e){return console.log("Error launching dialer",e)}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"notAccept",value:function(e){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadingController.create({});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,this.api.updateSend(this.route.snapshot.paramMap.get("id"),"pending").subscribe((function(e){n.getSendDetail(),t.dismiss()}),(function(e){console.log(e),t.dismiss()}));case 7:case"end":return e.stop()}}),e,this)})))}},{key:"accept",value:function(){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadingController.create({});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,this.api.updateSend(this.route.snapshot.paramMap.get("id"),"inprogress").subscribe((function(e){console.log(">>>"),console.log(e),n.getSendDetail(),t.dismiss()}),(function(e){console.log(e),t.dismiss()}));case 7:case"end":return e.stop()}}),e,this)})))}},{key:"sendCancle",value:function(){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.router.navigate(["members/send-detail/"+this.route.snapshot.paramMap.get("id")]);case 1:case"end":return e.stop()}}),e,this)})))}},{key:"sendConfirm",value:function(e){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.router.navigate(["members/send-confirm/"+e]);case 1:case"end":return t.stop()}}),t,this)})))}}])&&t(r.prototype,o),i&&t(r,i),n}(),b.\u0275fac=function(e){return new(e||b)(m["\u0275\u0275directiveInject"](d.a),m["\u0275\u0275directiveInject"](c.E),m["\u0275\u0275directiveInject"](l.a),m["\u0275\u0275directiveInject"](l.f),m["\u0275\u0275directiveInject"](u.a),m["\u0275\u0275directiveInject"](p.b))},b.\u0275cmp=m["\u0275\u0275defineComponent"]({type:b,selectors:[["app-send-detail"]],decls:28,vars:9,consts:[[1,"header"],["slot","start"],["color","warning","expand","full","routerLink","/members/dashboard/send"],["size","12"],[4,"ngIf"],[4,"ngFor","ngForOf"],["size","5"],["color","danger","expand","full",3,"click"],["size","7"],["color","primary","expand","full",3,"click"],["size","6"],["color","danger","expand","full","routerLink","/members/dashboard/send"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"ion-header"),m["\u0275\u0275elementStart"](1,"ion-toolbar",0),m["\u0275\u0275elementStart"](2,"ion-buttons",1),m["\u0275\u0275elementStart"](3,"ion-button",2),m["\u0275\u0275text"](4,"< \u0e01\u0e25\u0e31\u0e1a"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"ion-title"),m["\u0275\u0275text"](6,"\u0e2a\u0e48\u0e07\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"ion-content"),m["\u0275\u0275elementStart"](8,"ion-card"),m["\u0275\u0275elementStart"](9,"ion-card-content"),m["\u0275\u0275elementStart"](10,"ion-grid"),m["\u0275\u0275elementStart"](11,"ion-row"),m["\u0275\u0275elementStart"](12,"ion-col",3),m["\u0275\u0275elementStart"](13,"ion-label"),m["\u0275\u0275text"](14),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](15,"ion-col",3),m["\u0275\u0275elementStart"](16,"ion-label"),m["\u0275\u0275text"](17),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](18,"ion-col",3),m["\u0275\u0275elementStart"](19,"ion-label"),m["\u0275\u0275text"](20),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](21,f,7,0,"ion-row",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](22,"ion-card"),m["\u0275\u0275elementStart"](23,"ion-card-content"),m["\u0275\u0275elementStart"](24,"ion-grid"),m["\u0275\u0275template"](25,g,5,1,"ion-item",5),m["\u0275\u0275template"](26,h,7,0,"ion-row",4),m["\u0275\u0275template"](27,v,4,0,"ion-row",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](14),m["\u0275\u0275textInterpolate"](t.detail.person),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate"](t.detail.address),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate3"]("",t.detail.district," ",t.detail.province," ",t.detail.postcode,""),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","new"==t.detail.status),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("ngForOf",t.connote_new),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","inprogress"==t.detail.status),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","pending"==t.detail.status))},directives:[c.n,c.B,c.g,c.f,c.I,l.g,c.A,c.k,c.h,c.i,c.m,c.w,c.j,c.r,i.j,i.i,c.q],styles:[".header[_ngcontent-%COMP%]{padding:20px 0;--background:#3f51b5}.header[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{color:#fff}"]}),b)}],x=((S=function t(){e(this,t)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:S}),S.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||S)},imports:[[i.b,a.b,c.C,l.h.forChild(w)]]}),S)}}])}();